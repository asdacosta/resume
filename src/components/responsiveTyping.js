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
    const __forLocation = function (input, inputCountry, inputCity, resume) {
      input.addEventListener("input", () => {
        let country = inputCountry.value;
        let city = inputCity.value;
        resume.textContent = country + " ⚫ " + city;
      });
    };
    __forLocation(
      getNodes().firstEduCountry,
      getNodes().firstEduCountry,
      getNodes().firstEduCity,
      getNodes().resumeFirstEduLocation,
    );
    __forLocation(
      getNodes().firstEduCity,
      getNodes().firstEduCountry,
      getNodes().firstEduCity,
      getNodes().resumeFirstEduLocation,
    );

    __forLocation(
      getNodes().lastEduCountry,
      getNodes().lastEduCountry,
      getNodes().lastEduCity,
      getNodes().resumeLastEduLocation,
    );
    __forLocation(
      getNodes().lastEduCity,
      getNodes().lastEduCountry,
      getNodes().lastEduCity,
      getNodes().resumeLastEduLocation,
    );

    const __forDate = function (input, initialDate, finalDate, resumeDate) {
      input.addEventListener("input", () => {
        let startDate = new Date(initialDate.value);
        let endDate = new Date(finalDate.value);
        let startYear = startDate.getFullYear() || "";
        let endYear = endDate.getFullYear() || "";
        resumeDate.textContent = startYear + " - " + endYear;
      });
    };
    __forDate(
      getNodes().firstEduStartDate,
      getNodes().firstEduStartDate,
      getNodes().firstEduEndDate,
      getNodes().resumeFirstEduDate,
    );
    __forDate(
      getNodes().firstEduEndDate,
      getNodes().firstEduStartDate,
      getNodes().firstEduEndDate,
      getNodes().resumeFirstEduDate,
    );

    __forDate(
      getNodes().lastEduStartDate,
      getNodes().lastEduStartDate,
      getNodes().lastEduEndDate,
      getNodes().resumeLastEduDate,
    );
    __forDate(
      getNodes().lastEduEndDate,
      getNodes().lastEduStartDate,
      getNodes().lastEduEndDate,
      getNodes().resumeLastEduDate,
    );

    const __forRest = function (inputTake, inputGive) {
      inputGive.addEventListener("input", () => {
        inputTake.textContent = inputGive.value;
      });
    };
    __forRest(getNodes().resumeFirstEduSchool, getNodes().firstEduSchool);
    __forRest(getNodes().resumeFirstEduDegree, getNodes().firstEduDegree);
    __forRest(getNodes().resumeFirstEduHonors, getNodes().firstEduHonors);

    __forRest(getNodes().resumeLastEduSchool, getNodes().lastEduSchool);
    __forRest(getNodes().resumeLastEduDegree, getNodes().lastEduDegree);
    __forRest(getNodes().resumeLastEduHonors, getNodes().lastEduHonors);
  })();
};

export { responsiveTyping };
