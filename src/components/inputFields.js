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

    const __forEducation = (function () {
      getNodes().educationParagraph.addEventListener("click", async () => {
        // Close if opened
        if (educationExpanded) {
          getNodes().educationLocker.style.transform = "rotate(45deg)";
          await new Promise((resolve) => {
            setTimeout(resolve, 800);
          });
          getNodes().educationLocker.style.gap = "0";
          educationExpanded = false;
          return;
        }
        // Open
        getNodes().educationLocker.style.gap = "0.5rem";
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
        getNodes().educationLocker.style.transform = "rotate(0)";
        educationExpanded = true;
      });
    })();

    const __forProfessional = (function () {
      getNodes().professionalParagraph.addEventListener("click", async () => {
        // Close if opened
        if (professionalExpanded) {
          getNodes().professionalLocker.style.transform = "rotate(45deg)";
          await new Promise((resolve) => {
            setTimeout(resolve, 800);
          });
          getNodes().professionalLocker.style.gap = "0";
          professionalExpanded = false;
          return;
        }
        // Open
        getNodes().professionalLocker.style.gap = "0.5rem";
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
        getNodes().professionalLocker.style.transform = "rotate(0)";
        professionalExpanded = true;
      });
    })();
  })();
};

export { inputFields };
