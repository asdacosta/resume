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
      // If first field exists and second field is removed, set default.
      if (
        nodeField.classList.contains("education-fields") &&
        isLastField &&
        getComputedStyle(getNodes().educationFirstFieldAdded).display === "flex"
      ) {
        nodeAdd.style.pointerEvents = "auto";
        nodeAdd.style.color = "black";
      }
      if (
        nodeField.classList.contains("professional-fields") &&
        isLastField &&
        getComputedStyle(getNodes().professionalFirstFieldAdded).display === "flex"
      ) {
        nodeAdd.style.pointerEvents = "auto";
        nodeAdd.style.color = "black";
      }
    };

    const addFilledField = function (
      nodeField,
      nodeAdd,
      nodeFieldAdded,
      isFirstField = false,
    ) {
      nodeField.querySelector(".add-field").addEventListener("click", () => {
        let firstFieldFilled = null;
        const updateVariableAndExpandable = (function () {
          if (nodeField.classList.contains("education-fields")) {
            firstFieldFilled = educationFirstFieldFilled;
            getNodes().educationLocker.style.opacity = "1";
            getNodes().educationParagraph.style.pointerEvents = "auto";
          } else if (nodeField.classList.contains("professional-fields")) {
            firstFieldFilled = professionalFirstFieldFilled;
            getNodes().professionalLocker.style.opacity = "1";
            getNodes().professionalParagraph.style.pointerEvents = "auto";
          }
        })();

        nodeFieldAdded.style.display = "flex";
        if (
          nodeField.classList.contains("education-fields") &&
          getComputedStyle(getNodes().educationLastFieldAdded).display === "flex"
        ) {
          // When first field is on edit, don't continue to set to default when second field is available
          nodeField.style.display = "none";
          return;
        }
        if (
          nodeField.classList.contains("professional-fields") &&
          getComputedStyle(getNodes().professionalLastFieldAdded).display === "flex"
        ) {
          // When first field is on edit, don't continue to set to default when second field is available
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
          const removeOrEditAdded = function (
            nodeAdd,
            editIcon,
            removeIcon,
            nodeField2,
            nodeFieldAdded2,
          ) {
            const editAdded = (function () {
              editIcon.addEventListener("click", () => {
                nodeFieldAdded2.style.display = "none";
                nodeField2.style.display = "grid";
                // Make field not expandable while in input mode
                if (nodeField.classList.contains("education-fields")) {
                  getNodes().educationLocker.style.opacity = "0.4";
                  getNodes().educationParagraph.style.pointerEvents = "none";
                } else if (nodeField.classList.contains("professional-fields")) {
                  getNodes().professionalLocker.style.opacity = "0.4";
                  getNodes().professionalParagraph.style.pointerEvents = "none";
                }
              });
            })();
            const removeAdded = (function () {
              removeIcon.addEventListener("click", () => {
                nodeFieldAdded2.style.display = "none";

                let firstFieldFilled2 = null;
                if (nodeField2.classList.contains("first")) {
                  const updateRealFieldVariable = (function () {
                    if (nodeField.classList.contains("education-fields")) {
                      educationFirstFieldFilled = false;
                      firstFieldFilled2 = false;
                    } else if (nodeField.classList.contains("professional-fields")) {
                      professionalFirstFieldFilled = false;
                      firstFieldFilled2 = false;
                    }
                  })();
                }
                setAddAndFieldToDefault(nodeAdd, nodeField2, firstFieldFilled2);
              });
            })();
          };
          removeOrEditAdded(
            getNodes().educationAdd,
            getNodes().eduFirstEditIcon,
            getNodes().eduFirstRemoveIcon,
            getNodes().educationFirstField,
            getNodes().educationFirstFieldAdded,
          );
          removeOrEditAdded(
            getNodes().educationAdd,
            getNodes().eduLastEditIcon,
            getNodes().eduLastRemoveIcon,
            getNodes().educationLastField,
            getNodes().educationLastFieldAdded,
          );

          removeOrEditAdded(
            getNodes().professionalAdd,
            getNodes().profFirstEditIcon,
            getNodes().profFirstRemoveIcon,
            getNodes().professionalFirstField,
            getNodes().professionalFirstFieldAdded,
          );
          removeOrEditAdded(
            getNodes().professionalAdd,
            getNodes().profLastEditIcon,
            getNodes().profLastRemoveIcon,
            getNodes().professionalLastField,
            getNodes().professionalLastFieldAdded,
          );
        }
      });
    };

    const clearField = function (nodeField, nodeAdd) {
      nodeField.querySelector(".clear-field").addEventListener("click", () => {
        setAddAndFieldToDefault(nodeAdd, nodeField);

        // Make field expandable when out of input mode
        if (nodeField.classList.contains("education-fields")) {
          getNodes().educationLocker.style.opacity = "1";
          getNodes().educationParagraph.style.pointerEvents = "auto";
        } else if (nodeField.classList.contains("professional-fields")) {
          getNodes().professionalLocker.style.opacity = "1";
          getNodes().professionalParagraph.style.pointerEvents = "auto";
        }
      });
    };

    const setAddAndFieldToInputMode = function (nodeField, nodeAdd) {
      nodeAdd.style.pointerEvents = "none";
      nodeAdd.style.color = "grey";
      nodeField.style.display = "grid";

      // Make field not expandable while in input mode
      if (nodeField.classList.contains("education-fields")) {
        getNodes().educationLocker.style.opacity = "0.4";
        getNodes().educationParagraph.style.pointerEvents = "none";
      } else if (nodeField.classList.contains("professional-fields")) {
        getNodes().professionalLocker.style.opacity = "0.4";
        getNodes().professionalParagraph.style.pointerEvents = "none";
      }
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
          addFilledField(nodeLastField, nodeAdd, nodeLastAdded);
          clearField(nodeLastField, nodeAdd);
          return;
        }

        // First Field
        setAddAndFieldToInputMode(nodeFirstField, nodeAdd);
        addFilledField(nodeFirstField, nodeAdd, nodeFirstAdded, true);
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
