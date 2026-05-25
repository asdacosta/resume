import { spawn } from "node:child_process";
import { mkdir, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, devices } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mediaDir = path.join(root, "docs", "media");
const port = 5173;
const baseUrl = `http://127.0.0.1:${port}`;

function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        /* retry */
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error("Dev server did not start in time"));
      }
      setTimeout(tick, 500);
    };
    tick();
  });
}

async function main() {
  await mkdir(mediaDir, { recursive: true });

  const preview = spawn("npx", ["vite", "preview", "--host", "127.0.0.1", "--port", String(port)], {
    cwd: root,
    stdio: "pipe",
    shell: true,
  });

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch();

    const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktop.goto(baseUrl, { waitUntil: "networkidle" });
    await desktop.waitForTimeout(1500);
    await desktop.screenshot({ path: path.join(mediaDir, "desktop.png") });

    const mobile = await browser.newPage({ ...devices["iPhone 14"] });
    await mobile.goto(baseUrl, { waitUntil: "networkidle" });
    await mobile.waitForTimeout(1000);
    await mobile.screenshot({ path: path.join(mediaDir, "mobile.png") });

    const demo = await browser.newContext({
      recordVideo: { dir: mediaDir, size: { width: 1280, height: 720 } },
    });
    const page = await demo.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    await page.click('button[aria-label="Open personalization menu"]');
    await page.waitForTimeout(700);
    await page.click('button[aria-label="Ocean palette"]');
    await page.waitForTimeout(600);
    await page.locator(".section-card").nth(1).click();
    await page.waitForTimeout(700);
    await page.click('button:has-text("Education")');
    await page.waitForTimeout(500);
    await page.click('button[aria-label="Hide resume preview"]');
    await page.waitForTimeout(800);
    await page.click('button[aria-label="Show resume preview"]');
    await page.waitForTimeout(800);

    await page.close();
    await demo.close();

    const videoPath = (await import("node:fs/promises")).readdir(mediaDir).then((files) =>
      files.find((f) => f.endsWith(".webm")),
    );
    const webm = await videoPath;
    if (webm) {
      await rename(path.join(mediaDir, webm), path.join(mediaDir, "demo.webm"));
    }

    await desktop.close();
    await mobile.close();
    await browser.close();

    console.log(`Saved screenshots and demo to ${mediaDir}`);
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
