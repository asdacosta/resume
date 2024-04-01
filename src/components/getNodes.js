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
  };
};

export { getNodes };
