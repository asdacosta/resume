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

  const displayOneField = (function () {
    let educationFirstFieldFilled = false;
    let professionalFirstFieldFilled = false;

    const setAddAndFieldToDefault = function (nodeAdd, nodeField, isLastField = false) {
      nodeField.style.display = "none";
      if (!isLastField) {
        nodeAdd.style.pointerEvents = "auto";
        nodeAdd.style.color = "black";
      }
    };

    const addfilledField = function (
      nodeField,
      nodeAdd,
      nodeFieldAdded,
      isFirstField = false,
    ) {
      nodeField.querySelector(".add-field").addEventListener("click", () => {
        setAddAndFieldToDefault(nodeAdd, nodeField, educationFirstFieldFilled);
        nodeFieldAdded.style.display = "flex";
        if (isFirstField) {
          educationFirstFieldFilled = true;
        }
      });
    };

    const clearField = function (nodeField, nodeAdd) {
      nodeField.querySelector(".clear-field").addEventListener("click", () => {
        setAddAndFieldToDefault(nodeAdd, nodeField);
      });
    };

    const setAddAndFieldToInputMode = function (nodeField, nodeAdd) {
      nodeAdd.style.pointerEvents = "none";
      nodeAdd.style.color = "grey";
      nodeField.style.display = "grid";
    };

    const __forField = function () {
      getNodes().educationAdd.addEventListener("click", () => {
        // Second Field
        if (educationFirstFieldFilled) {
          setAddAndFieldToInputMode(
            getNodes().educationLastField,
            getNodes().educationAdd,
          );
          addfilledField(
            getNodes().educationLastField,
            getNodes().educationAdd,
            getNodes().educationLastFieldAdded,
          );
          clearField(getNodes().educationLastField, getNodes().educationAdd);
          return;
        }

        // First Field
        setAddAndFieldToInputMode(
          getNodes().educationFirstField,
          getNodes().educationAdd,
        );
        addfilledField(
          getNodes().educationFirstField,
          getNodes().educationAdd,
          getNodes().educationFirstFieldAdded,
          true,
        );
        clearField(getNodes().educationFirstField, getNodes().educationAdd);
      });
    };
    __forField();
  })();
};

export { inputFields };
