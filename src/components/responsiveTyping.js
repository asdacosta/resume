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
  })();
};

export { responsiveTyping };
