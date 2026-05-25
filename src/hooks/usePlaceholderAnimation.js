import { useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

const SLEEP = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeErase(node, samples, stopChar, stopAtEnd = true) {
  let index = 0;
  while (index < samples.length) {
    const name = samples[index];
    const base = node.getAttribute("data-base-placeholder") || node.placeholder;

    if (index > 0) {
      for (const char of name) {
        await SLEEP(80);
        const arr = node.placeholder.split("");
        if (stopAtEnd) {
          const i = arr.lastIndexOf(stopChar);
          if (i >= 0) arr.splice(i, 0, char);
        } else {
          arr.push(char);
        }
        node.placeholder = arr.join("");
      }
      await SLEEP(400);
    }

    if (index === samples.length - 1) break;

    for (const char of name) {
      await SLEEP(80);
      const arr = node.placeholder.split("");
      if (stopAtEnd) {
        const i = arr.lastIndexOf(stopChar);
        if (i > 0) arr.splice(i - 1, 1);
      } else if (arr.length) {
        arr.pop();
      }
      node.placeholder = arr.join("");
    }
    index += 1;
  }
}

export function usePlaceholderAnimation(enabled) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduced) return undefined;

    const controllers = [];
    let cancelled = false;

    const run = async () => {
      await SLEEP(2000);
      const email = document.querySelector("#mail");
      const phone = document.querySelector("#phone");
      const address = document.querySelector("#address");

      const loops = [
        email &&
          typeErase(email, ["example", "yahoo", "outlook"], "@").catch(() => {}),
        phone &&
          typeErase(phone, ["-●●●-●●●-●●●●", " ●●● ●●● ●●●●"], "●").catch(
            () => {},
          ),
        address &&
          typeErase(address, ["123 Main Street", "456 Elm Street"], "t").catch(
            () => {},
          ),
      ];

      while (!cancelled) {
        await Promise.all(loops.map((p) => p));
        await SLEEP(1200);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [enabled, reduced]);
}
