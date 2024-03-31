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

      const animateMail = function (names, localIndex, stopChar, ifNoLastThenUse = null) {
        const append = async function () {
          for (const char of names[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            if (ifNoLastThenUse === null) {
              strArray.splice(strArray.lastIndexOf(stopChar), 0, char);
            } else {
              strArray.splice(strArray.length, 0, char);
            }
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
        };

        const erase = (async function () {
          await append();
          for (const char of names[localIndex]) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            if (ifNoLastThenUse === null) {
              strArray.splice(strArray.lastIndexOf(stopChar) - 1, 1);
            } else {
              strArray.splice(strArray.length - 1, 1);
            }
            const updatedStr = strArray.join("");
            getNodes().emailInput.placeholder = updatedStr;
          }
        })();
      };

      const animateInOrder = (async function () {
        // Local Names
        for (let index = 0; index < 4; index++) {
          await new Promise((resolve) => {
            animateMail(localNames, index, "@");
            setTimeout(resolve, 2600);
          });
        }

        // Domain Names
        await new Promise((resolve) => {
          const erase = (async function () {
            for (const char of "example") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.lastIndexOf(".") - 1, 1);
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            }
          })();
          setTimeout(resolve, 1400);
        });

        const animateSomeDomainNames = async function (index, timer, stop) {
          await new Promise((resolve) => {
            animateMail(domainNames, index, stop);
            setTimeout(resolve, timer);
          });
        };
        await animateSomeDomainNames(0, 2400, ".");
        await animateSomeDomainNames(1, 2800, ".");
        await animateSomeDomainNames(2, 2600, ".");

        await new Promise((resolve) => {
          const append = (async function () {
            for (const char of "aol") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.lastIndexOf("."), 0, char);
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            }
            await new Promise((resolve) => {
              setTimeout(resolve, 500);
            });
          })();
          setTimeout(resolve, 1200);
        });

        await new Promise((resolve) => {
          const erase = (async function () {
            for (const char of "aol.com") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.lastIndexOf("m"), 1);
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            }
          })();
          setTimeout(resolve, 1800);
        });

        await new Promise((resolve) => {
          animateMail(domainNames, 4, "@", 1);
          setTimeout(resolve, 4800);
        });

        await new Promise((resolve) => {
          const append = (async function () {
            for (const char of "example.com") {
              let alteredPlaceholder = getNodes().emailInput.placeholder;
              await new Promise((resolve) => {
                setTimeout(resolve, 150);
              });
              const strArray = alteredPlaceholder.split("");
              strArray.splice(strArray.length, 0, char);
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
