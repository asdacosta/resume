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

      const animateMail = function (
        names,
        localIndex,
        stopChar,
        stopCharIsLastIndex = true,
      ) {
        let name = names[localIndex];

        const append = async function () {
          for (const char of name) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            if (stopCharIsLastIndex === true) {
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
          if (names === domainNames && localIndex === 3) {
            name = "aol.com";
            stopCharIsLastIndex = false;
          }
          for (const char of name) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });
            const strArray = alteredPlaceholder.split("");
            if (stopCharIsLastIndex === true) {
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

        const animateSomeDomainNames = async function (
          index,
          timer,
          stopChar,
          stopCharIsLastIndex = true,
        ) {
          await new Promise((resolve) => {
            animateMail(domainNames, index, stopChar, stopCharIsLastIndex);
            setTimeout(resolve, timer);
          });
        };
        await animateSomeDomainNames(0, 2400, ".");
        await animateSomeDomainNames(1, 2800, ".");
        await animateSomeDomainNames(2, 2600, ".");
        await animateSomeDomainNames(3, 2800, ".");
        await animateSomeDomainNames(4, 5000, "@", false);

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
