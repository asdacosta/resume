import { getNodes } from "./getNodes";

const responsiveTyping = function () {
  const __forIndepInput = function (inputTake, inputGive) {
    inputGive.addEventListener("input", () => {
      inputTake.textContent = inputGive.value;
    });
  };

  const __forPersonalInfo = (function () {
    function __forNames(input) {
      input.addEventListener("input", () => {
        const firstNames = getNodes().firstNamesInput.value;
        const lastName = getNodes().lastNameInput.value;
        const fullName = firstNames + " " + lastName;
        getNodes().resumeName.textContent = fullName;
      });
    }
    __forNames(getNodes().firstNamesInput);
    __forNames(getNodes().lastNameInput);

    const __forLocation = function (input) {
      input.addEventListener("input", () => {
        const country = getNodes().personalCountryInput.value;
        const city = getNodes().personalCityInput.value;
        const location = country + ", " + city;
        getNodes().resumePersonalLocation.textContent = location;
      });
    };
    __forLocation(getNodes().personalCountryInput);
    __forLocation(getNodes().personalCityInput);

    const updateProfilePic = (function () {
      getNodes().personalImageInput.addEventListener("change", (event) => {
        const image = event.target.files[0];
        const imageUrl = URL.createObjectURL(image);
        getNodes().resumeProfile.style.background = `url('${imageUrl}')`;
        getNodes().resumeProfile.style.backgroundPosition = `center`;
        getNodes().resumeProfile.style.backgroundSize = `cover`;
      });
    })();

    __forIndepInput(getNodes().resumePersonalMail, getNodes().emailInput);
    __forIndepInput(getNodes().resumePersonalPhone, getNodes().phoneInput);
    __forIndepInput(getNodes().resumePersonalAddress, getNodes().addressInput);
  })();

  const __forLocation = function (input, inputCountry, inputCity, resume) {
    input.addEventListener("input", () => {
      const country = inputCountry.value;
      const city = inputCity.value;
      resume.textContent = country + " ⚫ " + city;
    });
  };

  const __forEducation = (function () {
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
        const startDate = new Date(initialDate.value);
        const endDate = new Date(finalDate.value);
        const startYear = startDate.getFullYear() || "";
        const endYear = endDate.getFullYear() || "";
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

    __forIndepInput(getNodes().resumeFirstEduSchool, getNodes().firstEduSchool);
    __forIndepInput(getNodes().resumeFirstEduDegree, getNodes().firstEduDegree);
    __forIndepInput(getNodes().resumeFirstEduHonors, getNodes().firstEduHonors);

    __forIndepInput(getNodes().resumeLastEduSchool, getNodes().lastEduSchool);
    __forIndepInput(getNodes().resumeLastEduDegree, getNodes().lastEduDegree);
    __forIndepInput(getNodes().resumeLastEduHonors, getNodes().lastEduHonors);
  })();

  const __forProfession = (function () {
    __forLocation(
      getNodes().firstProCountry,
      getNodes().firstProCountry,
      getNodes().firstProCity,
      getNodes().resumeFirstProLocation,
    );
    __forLocation(
      getNodes().firstProCity,
      getNodes().firstProCountry,
      getNodes().firstProCity,
      getNodes().resumeFirstProLocation,
    );

    __forLocation(
      getNodes().lastProCountry,
      getNodes().lastProCountry,
      getNodes().lastProCity,
      getNodes().resumelastProLocation,
    );
    __forLocation(
      getNodes().lastProCity,
      getNodes().lastProCountry,
      getNodes().lastProCity,
      getNodes().resumelastProLocation,
    );

    const __forDate = function (input, initialDate, finalDate, resumeDate) {
      input.addEventListener("input", () => {
        const startDate = new Date(initialDate.value);
        const endDate = new Date(finalDate.value);
        let startMonth = startDate.toLocaleString("default", { month: "short" });
        startMonth === "Invalid Date" ? (startMonth = "") : true;
        let endMonth = endDate.toLocaleString("default", { month: "short" });
        endMonth === "Invalid Date" ? (endMonth = "") : true;
        const startYear = startDate.getFullYear() || "";
        const endYear = endDate.getFullYear() || "";
        resumeDate.textContent =
          startMonth + ", " + startYear + " - " + endMonth + ", " + endYear;
      });
    };
    __forDate(
      getNodes().firstProStartDate,
      getNodes().firstProStartDate,
      getNodes().firstProEndDate,
      getNodes().resumeFirstProDate,
    );
    __forDate(
      getNodes().firstProEndDate,
      getNodes().firstProStartDate,
      getNodes().firstProEndDate,
      getNodes().resumeFirstProDate,
    );

    __forDate(
      getNodes().lastProStartDate,
      getNodes().lastProStartDate,
      getNodes().lastProEndDate,
      getNodes().resumelastProDate,
    );
    __forDate(
      getNodes().lastProEndDate,
      getNodes().lastProStartDate,
      getNodes().lastProEndDate,
      getNodes().resumelastProDate,
    );

    __forIndepInput(getNodes().resumeFirstProCompany, getNodes().firstProCompany);
    __forIndepInput(getNodes().resumeFirstProPosition, getNodes().firstProPosition);
    __forIndepInput(getNodes().resumeFirstProDescription, getNodes().firstProDescription);

    __forIndepInput(getNodes().resumelastProCompany, getNodes().lastProCompany);
    __forIndepInput(getNodes().resumelastProPosition, getNodes().lastProPosition);
    __forIndepInput(getNodes().resumeMainPosition, getNodes().lastProPosition);
    __forIndepInput(getNodes().resumelastProDescription, getNodes().lastProDescription);
  })();
};

export { responsiveTyping };
