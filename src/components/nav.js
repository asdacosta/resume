import { getNodes } from "./getNodes";

const navigation = function () {
  const animateParts = (function () {
    const __menu = (function () {
      const menuEyes = getNodes().menu.querySelectorAll(".fa-circle");
      const caret = getNodes().menu.querySelector(".fa-caret-down");

      getNodes().menu.addEventListener("mouseover", () => {
        menuEyes.forEach((eye) => {
          eye.style.transform = "translateY(-0.2rem)";
        });
      });
      getNodes().menu.addEventListener("mouseout", () => {
        menuEyes.forEach((eye) => {
          eye.style.transform = "translateY(0)";
        });
      });
      getNodes().menu.addEventListener("click", () => {
        caret.style.transform = "translateY(0.5rem)";
      });
    })();
  })();
};

export { navigation };
