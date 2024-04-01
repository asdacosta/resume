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

  const animatePlaceholders = (async function () {
    // Email Samples
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

    // Phone Samples
    const phoneSamples = [
      "-●●●-●●●-●●●●",
      " ●●● ●●● ●●●●",
      "●●●●●●●●●●",
      "-●●●-●●●-●●●●",
    ];

    const animateInput = function (
      node,
      names,
      localIndex,
      stopChar,
      stopCharIsLastIndex = true,
    ) {
      let name = names[localIndex];

      const append = async function () {
        if (name === "example" || (names === phoneSamples && localIndex === 0)) {
          // Don't append for initial case, just erase;
          return;
        }

        for (const char of name) {
          let alteredPlaceholder = node.placeholder;
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
            node.placeholder = updatedStr;
          })();
        }
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
      };

      const erase = (async function () {
        await append();
        if (name === "example.com" || (names === phoneSamples && localIndex === 3)) {
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
          let alteredPlaceholder = node.placeholder;
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
            node.placeholder = updatedStr;
          })();
        }
      })();
    };

    const animateMail = (async function () {
      const node = getNodes().emailInput;

      const __localNames = async function () {
        for (let index = 0; index < 4; index++) {
          await new Promise((resolve) => {
            animateInput(node, localNames, index, "@");
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
          animateInput(node, domainNames, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      await __domainNames(0, 1400, ".");
      await __domainNames(1, 2400, ".");
      await __domainNames(2, 2800, ".");
      await __domainNames(3, 2600, ".");
      await __domainNames(4, 2600, ".");
      await __domainNames(5, 5000, "@", false);
      await __domainNames(6, 2600, "@", false);
    })();

    const animatePhoneField = (async function () {
      const node = getNodes().phoneInput;

      const __allSamples = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(node, phoneSamples, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      await __allSamples(0, 2500, "●");
      await __allSamples(1, 4500, "●");
      await __allSamples(2, 4500, "●");
      await __allSamples(3, 2500, "●");
    })();
  })();
};

export { animateText };
