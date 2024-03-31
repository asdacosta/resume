import { getNodes } from "./getNodes";

const animateText = function () {
  getNodes().fieldStatus.forEach(async (status) => {
    let content = status.textContent;
    status.textContent = "";
    status.style.visibility = "visible";

    for (const char of content) {
      await new Promise((resolve) => {
        setTimeout(resolve, 150);
      });
      status.textContent += char;
    }
  });
};

export { animateText };
