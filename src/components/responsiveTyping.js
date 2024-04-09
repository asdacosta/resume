import { getNodes } from "./getNodes";

const responsiveTyping = function () {
  const __forPersonalInfo = (function () {
    function __forNames(input) {
      input.addEventListener("input", () => {
        let firstNames = getNodes().firstNamesInput.value;
        let lastName = getNodes().lastNameInput.value;
        let fullName = firstNames + " " + lastName;
        getNodes().resumeName.textContent = fullName;
      });
    }
    __forNames(getNodes().firstNamesInput);
    __forNames(getNodes().lastNameInput);

    const __forLocation = function (input) {
      input.addEventListener("input", () => {
        let country = getNodes().personalCountryInput.value;
        let city = getNodes().personalCityInput.value;
        let location = country + ", " + city;
        getNodes().resumePersonalLocation.textContent = location;
      });
    };
    __forLocation(getNodes().personalCountryInput);
    __forLocation(getNodes().personalCityInput);

    // const __forProfilePic = function () {

    // }

    const __forRest = function (inputTake, inputGive) {
      inputGive.addEventListener("input", () => {
        inputTake.textContent = inputGive.value;
      });
    };
    __forRest(getNodes().resumePersonalMail, getNodes().emailInput);
    __forRest(getNodes().resumePersonalPhone, getNodes().phoneInput);
    __forRest(getNodes().resumePersonalAddress, getNodes().addressInput);
  })();

  const __forEducation = (function () {
    const __forLocation = function (input) {
      input.addEventListener("input", () => {
        let country = getNodes().firstEduCountry.value;
        let city = getNodes().firstEduCity.value;
        let location = country + " ⚫ " + city;
        getNodes().resumeFirstEduLocation.textContent = location;
      });
    };
    __forLocation(getNodes().firstEduCountry);
    __forLocation(getNodes().firstEduCity);

    const __forDate = function (input) {
      input.addEventListener("input", () => {
        let startDate = new Date(getNodes().firstEduStartDate.value);
        let endDate = new Date(getNodes().firstEduEndDate.value);
        let startYear = startDate.getFullYear() || "";
        let endYear = endDate.getFullYear() || "";
        let year = startYear + " - " + endYear;
        getNodes().resumeFirstEduDate.textContent = year;
      });
    };
    __forDate(getNodes().firstEduStartDate);
    __forDate(getNodes().firstEduEndDate);

    const __forRest = function (inputTake, inputGive) {
      inputGive.addEventListener("input", () => {
        inputTake.textContent = inputGive.value;
      });
    };
    __forRest(getNodes().resumeFirstEduSchool, getNodes().firstEduSchool);
    __forRest(getNodes().resumeFirstEduDegree, getNodes().firstEduDegree);
    __forRest(getNodes().resumeFirstEduHonors, getNodes().firstEduHonors);
  })();
};

export { responsiveTyping };
