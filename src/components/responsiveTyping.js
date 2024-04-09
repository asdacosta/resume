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
  })();
};

export { responsiveTyping };