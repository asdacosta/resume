import { getNodes } from "./getNodes";

const animateText = function () {
  const animateFieldStatus = (function () {
    getNodes().fieldStatus.forEach(async (status) => {
      const content = status.textContent;
      status.textContent = "";
      status.style.visibility = "visible";

      for (const char of content) {
        await new Promise((resolve) => {
          setTimeout(resolve, 150);
        });
        status.textContent += char;
      }
    });
  })();

  const animatePlaceholders = (function () {
    const animateEmailField = (async function () {
      const localNames = [".green", "-green", "_green", "2024"];
      const domainNames = ["yahoo", "outlook", "icloud", "aol", "university.edu"];
      const placeholder = getNodes().emailInput.placeholder;

      //   for (let charIndex = 0; charIndex < localNames[0].length; charIndex++) {
      //     getNodes().emailInput.placeholder -= placeholder[charIndex];
      //   }

      const animateLocalName = function (localIndex) {
        const append = async function () {
          for (const char of localNames[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            strArray.splice(strArray.indexOf("@"), 0, char);
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
        };

        const removeAppended = (async function () {
          await append();
          for (const char of localNames[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            strArray.splice(strArray.indexOf("@") - 1, 1);
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
        })();
      };

      animateLocalName(0);
      //   animateLocalName(1);
      //   animateLocalName(2);
      //   animateLocalName(3);
    })();
  })();
};

export { animateText };
