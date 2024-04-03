import { getNodes } from "./getNodes";

const navigation = function () {
  const animateParts = (function () {
    const __menu = (function () {
      const menuEyes = getNodes().menu.querySelectorAll(".fa-circle");
      const caret = getNodes().menu.querySelector(".fa-caret-down");
      const menu = getNodes().menu.querySelector("div");

      const triggerHoverEffect = (function () {
        menu.addEventListener("mouseover", () => {
          menuEyes.forEach((eye) => {
            eye.style.transform = "translateY(-0.2rem)";
          });
        });
        menu.addEventListener("mouseout", () => {
          menuEyes.forEach((eye) => {
            eye.style.transform = "translateY(0)";
          });
        });
      })();

      let isDisplayed = false;
      let outsideClickListenerAdded = false;
      const triggerDialogBox = (function () {
        // Exit with any outside click
        const triggerExitWithOutsideClick = function (event) {
          if (!getNodes().dialog.contains(event.target) && event.target !== menu) {
            isDisplayed = false;
            caret.style.transform = "translateY(0)";
            getNodes().dialog.style.transition =
              "height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.6s ease-in-out";
            getNodes().dialog.classList.remove("reveal");
            document.removeEventListener("click", triggerExitWithOutsideClick);
            outsideClickListenerAdded = false;
          }
        };

        menu.addEventListener("click", () => {
          // Display
          if (isDisplayed === false) {
            isDisplayed = true;
            caret.style.transform = "translateY(0.5rem)";
            getNodes().dialog.style.transition =
              "height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 2s ease-in-out";
            getNodes().dialog.classList.add("reveal");

            if (!outsideClickListenerAdded) {
              document.addEventListener("click", triggerExitWithOutsideClick);
              outsideClickListenerAdded = true;
            }
            return;
          }

          // Exit
          if (isDisplayed === true) {
            isDisplayed = false;
            caret.style.transform = "translateY(0)";
            getNodes().dialog.style.transition =
              "height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.55s ease-in-out";
            getNodes().dialog.classList.remove("reveal");
            return;
          }
        });
      })();
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

    const __sampleBar = (function () {
      let isWheelOnLeft = false;
      const wheel = getNodes().sampleBarIcon;
      const text = getNodes().sampleBarText;

      getNodes().sampleBar.addEventListener("click", async () => {
        // Clear
        if (!isWheelOnLeft) {
          wheel.classList.add("moveSampleIcon");
          text.classList.add("hideSampleText");
          isWheelOnLeft = true;

          // Wait for animation to finish
          await new Promise((resolve) => {
            setTimeout(() => {
              text.classList.remove("hideSampleText");
              text.textContent = "Sample";
            }, 500);
          });
          return;
        }

        // Display Sample
        if (isWheelOnLeft) {
          wheel.classList.remove("moveSampleIcon");
          text.classList.add("hideSampleText");
          isWheelOnLeft = false;

          // Wait for animation to finish
          await new Promise((resolve) => {
            setTimeout(() => {
              text.classList.remove("hideSampleText");
              text.textContent = "Clear";
            }, 500);
          });
        }
      });
    })();

    const __view = (function () {
      const viewIcon = getNodes().view.querySelector("i");
      const resume = getNodes().resumeCover;
      const editCover = getNodes().editCover;
      let isInView = true;

      viewIcon.addEventListener("click", async () => {
        if (isInView) {
          viewIcon.classList.remove("fa-eye");
          viewIcon.classList.add("fa-eye-low-vision");
          isInView = false;

          const hideResume = (async function () {
            resume.style.transform = "translateY(-110%)";
            await new Promise((resolve) => {
              setTimeout(() => {
                resume.style.display = "none";
              }, 300);
            });
          })();
          await new Promise((resolve) => {
            setTimeout(resolve, 300);
          });
          const centerEditCover = (async function () {
            editCover.style.transform = "translateX(30%)";
          })();

          return;
        }

        if (!isInView) {
          viewIcon.classList.remove("fa-eye-low-vision");
          viewIcon.classList.add("fa-eye");
          isInView = true;

          const returnEditCoverToDefault = (async function () {
            editCover.style.transform = "translateX(0)";
          })();
          await new Promise((resolve) => {
            setTimeout(resolve, 300);
          });
          const revealResume = (async function () {
            resume.style.display = "grid";
            await new Promise((resolve) => {
              setTimeout(() => {
                resume.style.transform = "translateY(0)";
              }, 100);
            });
          })();
          return;
        }
      });
    })();
  })();
};

export { navigation };
