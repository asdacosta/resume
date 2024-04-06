import { getNodes } from "./getNodes";

const inputFields = function () {
  const stopProfileBlinkingAtHover = (function () {
    const uploadBox = getNodes().profileUploadBox;
    uploadBox.addEventListener("mouseover", () => {
      uploadBox.querySelector("i").classList.remove("fa-fade");
    });
    uploadBox.addEventListener("mouseout", () => {
      uploadBox.querySelector("i").classList.add("fa-fade");
    });
  })();

  const displayAddButton = (function () {
    let educationExpanded = false;
    let professionalExpanded = false;

    const __forField = function (node, variable, locker, addSection, addButton) {
      node.addEventListener("click", async () => {
        // Close if opened
        if (variable) {
          locker.style.transform = "rotate(45deg)";
          const hideAdd = (function () {
            addSection.style.height = "0";
            addButton.style.opacity = "0";
            addButton.style.display = "none";
          })();
          await new Promise((resolve) => {
            setTimeout(resolve, 800);
          });
          locker.style.gap = "0";
          variable = false;
          return;
        }
        // Open
        locker.style.gap = "0.5rem";
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
        locker.style.transform = "rotate(0)";
        variable = true;

        const showAdd = (async function () {
          addSection.style.height = "2.5rem";
          addButton.style.display = "flex";
          // Wait to allow transition immediately after the display: none to flex
          await new Promise((resolve) => {
            setTimeout(resolve, 100);
          });
          addButton.style.opacity = "1";
        })();
      });
    };

    __forField(
      getNodes().educationParagraph,
      educationExpanded,
      getNodes().educationLocker,
      getNodes().educationAddSection,
      getNodes().educationAdd,
    );
    __forField(
      getNodes().professionalParagraph,
      professionalExpanded,
      getNodes().professionalLocker,
      getNodes().professionalAddSection,
      getNodes().professionalAdd,
    );
  })();
};

export { inputFields };
