import { getNodes } from "./getNodes.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { clearSample, revealSample } from "./sample.js";

const navigation = function () {
  const download = (function () {
    getNodes().downloadBox.addEventListener("click", async () => {
      // Animate Icon
      const icon = getNodes().downloadBox.querySelector("i");
      icon.classList.add("rotate");
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      icon.classList.add("up");
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      // Download
      html2canvas(getNodes().resume).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const width = getNodes().resume.offsetWidth + 5;
        const height = getNodes().resume.offsetHeight;
        const resume = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: [width, height],
        });
        resume.addImage(imgData, "PNG", 0, 0, width, height);
        resume.save("resume.pdf");
      });

      // Set icon to default position
      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });
      icon.classList.remove("rotate");
      icon.classList.remove("up");
    });
  })();

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
        function changePalette(lightColor, deepColor) {
          getNodes().body.style.background = lightColor;
          getNodes().root.style.background = lightColor;
          getNodes().menu.style.background = lightColor;
          getNodes().dialog.style.background = deepColor;
          getNodes().layout.querySelector(".left-align").style.background =
            `linear-gradient(to left, white 50%, ${deepColor} 50%)`;
          getNodes().layout.querySelector(".right-align").style.background =
            `linear-gradient(to right, white 50%, ${deepColor} 50%)`;
          getNodes().educationAdd.style.border = `0.1rem solid ${deepColor}`;
          getNodes().professionalAdd.style.border = `0.1rem solid ${deepColor}`;
          getNodes().menu.style.border = `0.1rem solid ${deepColor}`;
          getNodes().sampleBar.style.border = `0.1rem solid ${deepColor}`;
          getNodes().sampleBar.style.background = lightColor;
          getNodes().downloadBox.style.background = lightColor;
          getNodes().educationAdd.style.background = lightColor;
          getNodes().professionalAdd.style.background = lightColor;
          getNodes().resumeHeader.style.background = lightColor;
          getNodes().resumeFirstProDescription.style.background = lightColor;
          getNodes().resumelastProDescription.style.background = lightColor;
          getNodes().allAdded.forEach((added) => {
            added.style.background = deepColor;
            added.querySelector("span:first-child").style.background = lightColor;
            added.querySelector("span:last-child").style.background = lightColor;
          });
          getNodes().inputs.forEach((input) => {
            input.style.background = lightColor;

            input.addEventListener("mouseover", () => {
              if (!input.matches(":focus")) {
                input.style.outline = `0.15rem solid ${deepColor}`;
              }
            });
            input.addEventListener("mouseout", () => {
              if (!input.matches(":focus")) {
                input.style.outline = "";
              }
            });
            input.addEventListener("focus", () => {
              input.style.outline = `0.15rem solid ${deepColor}`;
            });
            input.addEventListener("blur", () => {
              input.style.outline = "";
            });
          });
          getNodes().resumeH2.forEach((header) => {
            header.style.background = deepColor;
          });
        }

        const choose = function (nodes) {
          nodes.forEach((button) => {
            button.addEventListener("click", () => {
              const removePreviousChosen = (function () {
                nodes.forEach((preButton) => {
                  preButton.classList.remove("chosen");
                });
              })();
              button.classList.add("chosen");

              if (button.parentNode.classList.contains("layout")) {
                if (button.classList.contains("left-align")) {
                  getNodes().resumeCover.style.flexDirection = "row";
                } else if (button.classList.contains("right-align")) {
                  getNodes().resumeCover.style.flexDirection = "row-reverse";
                }
              }

              if (button.parentNode.classList.contains("palette")) {
                console.log(button.className);
                switch (button.className) {
                  case "grey chosen":
                    changePalette("rgb(231, 231, 231)", "rgb(155, 154, 154)");
                    break;
                  case "yellow chosen":
                    changePalette("rgb(243, 235, 192)", "rgb(155, 136, 33)");
                    break;
                  case "blue chosen":
                    changePalette("rgb(199, 225, 241)", "rgb(48, 112, 151)");
                    break;
                  case "gold chosen":
                    changePalette("rgb(243, 227, 185)", "rgb(182, 145, 51)");
                    break;
                  case "green chosen":
                    changePalette("rgb(191, 243, 211)", "rgb(53, 145, 88)");
                    break;
                  case "violet chosen":
                    changePalette("rgb(240, 195, 240)", "rgb(145, 53, 145)");
                    break;
                }
              }
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
              clearSample();
            }, 400);
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
              revealSample();
            }, 400);
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
          const alignBackgroundText = (function () {
            getNodes().backgroundText.classList.add("center");
          })();
          viewIcon.classList.remove("fa-eye");
          viewIcon.classList.add("fa-eye-low-vision");
          isInView = false;

          const hideResume = (async function () {
            resume.style.transform = "translateY(-200%)";
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
            editCover.style.gridColumn = "1 / -1";
          })();

          return;
        }

        if (!isInView) {
          const alignBackgroundText = (function () {
            getNodes().backgroundText.classList.remove("center");
          })();
          viewIcon.classList.remove("fa-eye-low-vision");
          viewIcon.classList.add("fa-eye");
          isInView = true;

          const returnEditCoverToDefault = (async function () {
            editCover.style.gridColumn = "1 / 2";
          })();
          await new Promise((resolve) => {
            setTimeout(resolve, 100);
          });
          const revealResume = (async function () {
            resume.style.display = "flex";
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
