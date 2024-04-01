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

    const __dialog = (function () {
      const chooseDefault = (function () {
        getNodes().paletteButtons[0].classList.add("chosen");
        getNodes().layoutButtons[0].classList.add("chosen");
      })();

      const choosePersonalization = (function () {
        const choose = function (nodes) {
          nodes.forEach((button) => {
            button.addEventListener("click", () => {
              const removePreviousChosen = (function () {
                nodes.forEach((preButton) => {
                  preButton.classList.remove("chosen");
                });
              })();
              button.classList.add("chosen");
            });
          });
        };
        choose(getNodes().paletteButtons);
        choose(getNodes().layoutButtons);
      })();
    })();

    const __sampleBar = (function () {})();
  })();
};

export { navigation };
