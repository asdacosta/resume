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
      const domainNames = [
        "example",
        "yahoo",
        "outlook",
        "icloud",
        "aol",
        "university.edu",
        "example.com",
      ];

      const animateMail = function (
        names,
        localIndex,
        stopChar,
        stopCharIsLastIndex = true,
      ) {
        let name = names[localIndex];

        const append = async function () {
          if (name === "example") {
            // Don't append, just erase;
            return;
          }

          for (const char of name) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });

            const appendAndUpdate = (function () {
              const strArray = alteredPlaceholder.split("");
              if (stopCharIsLastIndex === true) {
                strArray.splice(strArray.lastIndexOf(stopChar), 0, char);
              } else {
                strArray.splice(strArray.length, 0, char);
              }
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            })();
          }
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
        };

        const erase = (async function () {
          await append();
          if (name === "example.com") {
            // Append and stop
            return;
          }
          const clearAllForLastDomain = (function () {
            if (names === domainNames && localIndex === 4) {
              name = "aol.com";
              stopCharIsLastIndex = false;
            }
          })();

          for (const char of name) {
            let alteredPlaceholder = getNodes().emailInput.placeholder;
            await new Promise((resolve) => {
              setTimeout(resolve, 150);
            });

            const eraseAndUpdate = (function () {
              const strArray = alteredPlaceholder.split("");
              if (stopCharIsLastIndex === true) {
                strArray.splice(strArray.lastIndexOf(stopChar) - 1, 1);
              } else {
                strArray.splice(strArray.length - 1, 1);
              }
              const updatedStr = strArray.join("");
              getNodes().emailInput.placeholder = updatedStr;
            })();
          }
        })();
      };

      const animateInOrder = (async function () {
        const __localNames = async function () {
          for (let index = 0; index < 4; index++) {
            await new Promise((resolve) => {
              animateMail(localNames, index, "@");
              setTimeout(resolve, 2600);
            });
          }
        };
        await __localNames();

        const __domainNames = async function (
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
        await __domainNames(0, 1400, ".");
        await __domainNames(1, 2400, ".");
        await __domainNames(2, 2800, ".");
        await __domainNames(3, 2600, ".");
        await __domainNames(4, 2800, ".");
        await __domainNames(5, 5000, "@", false);
        await __domainNames(6, 2600, "@", false);
      })();
    })();
  })();
};

export { animateText };
