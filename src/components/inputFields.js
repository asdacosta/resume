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
        let firstFieldFilled = null;
        const updateVariableForRespectiveField = (function () {
          if (nodeField.classList.contains("education-fields")) {
            firstFieldFilled = educationFirstFieldFilled;
          } else if (nodeField.classList.contains("professional-fields")) {
            firstFieldFilled = professionalFirstFieldFilled;
          }
        })();

        nodeFieldAdded.style.display = "flex";
        if (getComputedStyle(getNodes().educationLastFieldAdded).display === "flex") {
          // When first field is on edit, dont continue to set to default when second field is available
          nodeField.style.display = "none";
          return;
        }
        setAddAndFieldToDefault(nodeAdd, nodeField, firstFieldFilled);

        if (isFirstField) {
          firstFieldFilled = true;
          const updateRealFieldVariable = (function () {
            if (nodeField.classList.contains("education-fields")) {
              educationFirstFieldFilled = firstFieldFilled;
            } else if (nodeField.classList.contains("professional-fields")) {
              professionalFirstFieldFilled = firstFieldFilled;
            }
          })();
          const removeOrEditAdded = (function () {
            const editAdded = (function () {
              getNodes().eduFirstEditIcon.addEventListener("click", () => {
                getNodes().educationFirstFieldAdded.style.display = "none";
                getNodes().educationFirstField.style.display = "grid";
              });
            })();
            const removeAdded = (function () {
              getNodes().eduFirstRemoveIcon.addEventListener("click", () => {
                getNodes().educationFirstFieldAdded.style.display = "none";
                educationFirstFieldFilled = false;
                setAddAndFieldToDefault(
                  getNodes().educationAdd,
                  getNodes().educationFirstField,
                  educationFirstFieldFilled,
                );
              });
            })();
          })();
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

    const __forField = function (
      nodeFirstField,
      nodeFirstAdded,
      nodeLastField,
      nodeLastAdded,
      nodeAdd,
    ) {
      nodeAdd.addEventListener("click", () => {
        let firstFieldFilled = null;
        const updateVariableForRespectiveField = (function () {
          if (nodeFirstField.classList.contains("education-fields")) {
            firstFieldFilled = educationFirstFieldFilled;
          } else if (nodeFirstField.classList.contains("professional-fields")) {
            firstFieldFilled = professionalFirstFieldFilled;
          }
        })();

        // Second Field
        if (firstFieldFilled) {
          setAddAndFieldToInputMode(nodeLastField, nodeAdd);
          addfilledField(nodeLastField, nodeAdd, nodeLastAdded);
          clearField(nodeLastField, nodeAdd);
          return;
        }

        // First Field
        setAddAndFieldToInputMode(nodeFirstField, nodeAdd);
        addfilledField(nodeFirstField, nodeAdd, nodeFirstAdded, true);
        clearField(nodeFirstField, nodeAdd);
      });
    };

    __forField(
      getNodes().educationFirstField,
      getNodes().educationFirstFieldAdded,
      getNodes().educationLastField,
      getNodes().educationLastFieldAdded,
      getNodes().educationAdd,
    );

    __forField(
      getNodes().professionalFirstField,
      getNodes().professionalFirstFieldAdded,
      getNodes().professionalLastField,
      getNodes().professionalLastFieldAdded,
      getNodes().professionalAdd,
    );
  })();
};

export { inputFields };
