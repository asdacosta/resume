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
  const dialog = document.querySelector(".dialog");
  const palette = document.querySelector(".palette");
  const paletteButtons = document.querySelectorAll(".palette > button");
  const layout = document.querySelector(".layout");
  const layoutButtons = document.querySelectorAll(".layout > button");

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
    dialog,
    palette,
    paletteButtons,
    layout,
    layoutButtons,
  };
};

export { getNodes };
