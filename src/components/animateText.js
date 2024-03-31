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

      const animateDomainName = function (localIndex) {
        const append = async function () {
          for (const char of domainNames[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            strArray.splice(strArray.indexOf("."), 0, char);
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
        };

        const removeAppended = (async function () {
          await append();
          for (const char of domainNames[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            strArray.splice(strArray.indexOf(".") - 1, 1);
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
        })();
      };

      const animateInOrder = (async function () {
        await new Promise((resolve) => {
          animateLocalName(0);
          setTimeout(resolve, 2600);
        });
        await new Promise((resolve) => {
          animateLocalName(1);
          setTimeout(resolve, 2600);
        });
        await new Promise((resolve) => {
          animateLocalName(2);
          setTimeout(resolve, 2600);
        });
        await new Promise((resolve) => {
          animateLocalName(3);
          setTimeout(resolve, 2600);
        });

        await new Promise((resolve) => {
          const removeAppended = (async function () {
            for (const char of "example") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.indexOf(".") - 1, 1);
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            }
          })();
          setTimeout(resolve, 1400);
        });

        await new Promise((resolve) => {
          animateDomainName(0);
          setTimeout(resolve, 2400);
        });
        await new Promise((resolve) => {
          animateDomainName(1);
          setTimeout(resolve, 2800);
        });
        await new Promise((resolve) => {
          animateDomainName(2);
          setTimeout(resolve, 2600);
        });
        await new Promise((resolve) => {
          animateDomainName(3);
          setTimeout(resolve, 1800);
        });

        await new Promise((resolve) => {
          const append = (async function () {
            for (const char of "example") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.indexOf("."), 0, char);
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            }
          })();
          setTimeout(resolve, 2600);
        });
      })();
    })();
  })();
};

export { animateText };
