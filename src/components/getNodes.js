const getNodes = function () {
  const fieldStatus = document.querySelectorAll(".optional, .required");
  const emailInput = document.querySelector("#mail");
  const phoneInput = document.querySelector("#phone");
  const addressInput = document.querySelector("#address");
  const degreeInput = document.querySelector("#degree");
  const honorsInput = document.querySelector("#honors");
  const positionInput = document.querySelector("#position");
  const descriptionInput = document.querySelector("#description");
  const menu = document.querySelector(".menu");
  const sampleBar = document.querySelector(".sample-bar");
  const sampleBarIcon = document.querySelector(".sample-bar i");
  const sampleBarText = document.querySelector(".sample-bar span");
  const view = document.querySelector(".view");
  const dialog = document.querySelector(".dialog");
  const palette = document.querySelector(".palette");
  const paletteButtons = document.querySelectorAll(".palette > button");
  const layout = document.querySelector(".layout");
  const layoutButtons = document.querySelectorAll(".layout > button");
  const profileUploadBox = document.querySelector(".field-profile label");
  const resumeCover = document.querySelector(".resume-cover");
  const editCover = document.querySelector(".edit-cover");
  const educationParagraph = document.querySelector(".education p");
  const professionalParagraph = document.querySelector(".professional p");
  const educationLocker = document.querySelector(".education .open-field");
  const professionalLocker = document.querySelector(".professional .open-field");
  const educationAddSection = document.querySelector(".education .add");
  const educationAdd = document.querySelector(".education .add span");
  const professionalAddSection = document.querySelector(".professional .add");
  const professionalAdd = document.querySelector(".professional .add span");
  const educationFirstField = document.querySelector(".education-fields.first");
  const educationLastField = document.querySelector(".education-fields.second");
  const educationFirstFieldAdded = document.querySelector(".education .first.added");
  const educationLastFieldAdded = document.querySelector(".education .second.added");
  const professionalFirstField = document.querySelector(".professional-fields.first");
  const professionalLastField = document.querySelector(".professional-fields.second");
  const professionalFirstFieldAdded = document.querySelector(
    ".professional .first.added",
  );
  const professionalLastFieldAdded = document.querySelector(
    ".professional .second.added",
  );
  const eduFirstEditIcon = document.querySelector(".education .first .fa-pen-to-square");
  const eduFirstRemoveIcon = document.querySelector(".education .first .fa-trash");
  const eduLastEditIcon = document.querySelector(".education .second .fa-pen-to-square");
  const eduLastRemoveIcon = document.querySelector(".education .second .fa-trash");
  const profFirstEditIcon = document.querySelector(
    ".professional .first .fa-pen-to-square",
  );
  const profFirstRemoveIcon = document.querySelector(".professional .first .fa-trash");
  const profLastEditIcon = document.querySelector(
    ".professional .second .fa-pen-to-square",
  );
  const profLastRemoveIcon = document.querySelector(".professional .second .fa-trash");

  return {
    fieldStatus,
    emailInput,
    phoneInput,
    addressInput,
    degreeInput,
    honorsInput,
    positionInput,
    descriptionInput,
    menu,
    sampleBar,
    sampleBarIcon,
    sampleBarText,
    view,
    dialog,
    palette,
    paletteButtons,
    layout,
    layoutButtons,
    profileUploadBox,
    resumeCover,
    editCover,
    educationParagraph,
    professionalParagraph,
    educationLocker,
    professionalLocker,
    educationAddSection,
    educationAdd,
    professionalAddSection,
    professionalAdd,
    educationFirstField,
    educationLastField,
    educationFirstFieldAdded,
    educationLastFieldAdded,
    professionalFirstField,
    professionalLastField,
    professionalFirstFieldAdded,
    professionalLastFieldAdded,
    eduFirstEditIcon,
    eduFirstRemoveIcon,
    eduLastEditIcon,
    eduLastRemoveIcon,
    profFirstEditIcon,
    profFirstRemoveIcon,
    profLastEditIcon,
    profLastRemoveIcon,
  };
};

export { getNodes };
