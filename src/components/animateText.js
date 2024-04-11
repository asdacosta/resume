import { getNodes } from "./getNodes";

const animateText = async function () {
  // Wait before starting field status animation
  await new Promise((resolve) => {
    setTimeout(resolve, 100);
  });

  const animateFieldStatus = (function () {
    getNodes().fieldStatus.forEach(async (status) => {
      const content = status.textContent;
      status.textContent = "";
      status.style.visibility = "visible";
      status.style.fontWeight = "500";

      for (const char of content) {
        await new Promise((resolve) => {
          setTimeout(resolve, 120);
        });
        status.textContent += char;
      }
    });
  })();

  // Wait before starting placeholders animation
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

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

    // Address Samples
    const addressSamples = [
      "A24/12 Hell Street",
      "123 Main Street",
      "456 Elm Street, Apt 8B",
      "P.O. Box 246",
      "Paris, Île-de-France",
      "A24/12 Hell Street",
    ];

    const degreeSamples = [
      "Science",
      "Arts",
      "Business Administration",
      "Engineering",
      "Architecture",
      "Master's Degree",
      "Doctoral's Degree",
      "Bachelor of Science",
    ];

    const honorsSamples = [
      "First Class",
      "Upper Second Class",
      "Lower Second Class",
      "Pass Degree",
      "First Class",
    ];

    const positionSamples = [
      "Software Engineer",
      "IT Specialist",
      "Accountant",
      "Financial Analyst",
      "President",
      "Chief Officer",
      "Manager",
      "Supervisor",
      "Software Engineer",
    ];

    const descriptionSamples = [
      ", ...",
      ", I turn challenges into solutions through lines of code. Dedicated to building impactful software with innovation and expertise.",
      ", ...",
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
        if (
          name === "example" ||
          (names === phoneSamples && localIndex === 0) ||
          (names === addressSamples && localIndex === 0) ||
          (names === degreeSamples && localIndex === 0) ||
          (names === honorsSamples && localIndex === 0) ||
          (names === positionSamples && localIndex === 0) ||
          (names === descriptionSamples && localIndex === 0)
        ) {
          // Don't append for initial case, just erase;
          return;
        }

        for (const char of name) {
          let alteredPlaceholder = node.placeholder;
          await new Promise((resolve) => {
            setTimeout(resolve, 120);
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

        if (
          name === "example.com" ||
          (names === phoneSamples && localIndex === 3) ||
          (names === addressSamples && localIndex === 5) ||
          (names === degreeSamples && localIndex === 7) ||
          (names === honorsSamples && localIndex === 4) ||
          (names === positionSamples && localIndex === 8) ||
          (names === descriptionSamples && localIndex === 2)
        ) {
          const blinkToIndicateEnd = (async function () {
            await new Promise((resolve) => {
              setTimeout(resolve, 1500);
            });
            for (let rounds = 0; rounds < 2; rounds++) {
              node.removeAttribute("id");
              node.setAttribute("id", "now");
              await new Promise((resolve) => {
                setTimeout(resolve, 500);
              });
              node.removeAttribute("id");
              node.setAttribute("id", "add");
              await new Promise((resolve) => {
                setTimeout(resolve, 500);
              });
            }
          })();

          // Append and stop for last case
          return;
        }

        // Clear All For Degree From index 5
        if (names === degreeSamples && localIndex === 4) {
          name = "Bachelor of Architecture";
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
            setTimeout(resolve, 120);
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

    const animateMailInput = (async function () {
      const node = getNodes().emailInput;

      let rounds = 0;
      while (rounds !== 1) {
        const __localNames = async function () {
          for (let index = 0; index < 4; index++) {
            await new Promise((resolve) => {
              animateInput(node, localNames, index, "@");
              setTimeout(resolve, 2400);
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
        await __domainNames(0, 1200, ".");
        await __domainNames(1, 2200, ".");
        await __domainNames(2, 2600, ".");
        await __domainNames(3, 2400, ".");
        await __domainNames(4, 2200, ".");
        await __domainNames(5, 4600, "@", false);
        await __domainNames(6, 5200, "@", false);
      }
    })();

    // When stopCharIsLastIndex = false, stopChar is useless

    const animatePhoneInput = (async function () {
      const node = getNodes().phoneInput;

      const __eachSample = async function (
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
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 2200, "●");
        await __eachSample(1, 4200, "●");
        await __eachSample(2, 4000, "●");
        await __eachSample(3, 5600, "●");
      }
    })();

    const animateAddressInput = (async function () {
      const node = getNodes().addressInput;

      const __eachSample = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(node, addressSamples, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 2600, "t");
        await __eachSample(1, 4800, "t");
        await __eachSample(2, 6400, "t");
        await __eachSample(3, 4000, "t");
        await __eachSample(4, 6000, "t");
        await __eachSample(5, 6000, "t");
      }
    })();

    const animateDegreeInputs = (async function () {
      const firstNode = getNodes().firstEduDegree;
      const lastNode = getNodes().lastEduDegree;

      const __eachSample = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(firstNode, degreeSamples, index, stopChar, stopCharIsLastIndex);
          animateInput(lastNode, degreeSamples, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 1600, "e");
        await __eachSample(1, 1800, "e");
        await __eachSample(2, 6500, "e");
        await __eachSample(3, 4000, "e");
        await __eachSample(4, 6000, "e");
        await __eachSample(5, 4800, "e");
        await __eachSample(6, 5000, "e");
        await __eachSample(7, 6200, "e");
      }
    })();

    const animateHonorsField = (async function () {
      const firstNode = getNodes().firstEduHonors;
      const lastNode = getNodes().lastEduHonors;

      const __eachSample = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(firstNode, honorsSamples, index, stopChar, stopCharIsLastIndex);
          animateInput(lastNode, honorsSamples, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 1800, "s");
        await __eachSample(1, 5300, "s");
        await __eachSample(2, 5300, "s");
        await __eachSample(3, 3600, "s");
        await __eachSample(4, 5200, "s");
      }
    })();

    const animatePositionsField = (async function () {
      const firstNode = getNodes().firstProPosition;
      const lastNode = getNodes().lastProPosition;

      const __eachSample = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(firstNode, positionSamples, index, stopChar, stopCharIsLastIndex);
          animateInput(lastNode, positionSamples, index, stopChar, stopCharIsLastIndex);
          setTimeout(resolve, timer);
        });
      };
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 2500, "r");
        await __eachSample(1, 4200, "r");
        await __eachSample(2, 3600, "r");
        await __eachSample(3, 5000, "r");
        await __eachSample(4, 3200, "r");
        await __eachSample(5, 4000, "r");
        await __eachSample(6, 2800, "r");
        await __eachSample(7, 3400, "r");
        await __eachSample(8, 6000, "r");
      }
    })();

    const animateDescriptionField = (async function () {
      const firstNode = getNodes().firstProDescription;
      const lastNode = getNodes().lastProDescription;

      const __eachSample = async function (
        index,
        timer,
        stopChar,
        stopCharIsLastIndex = false,
      ) {
        await new Promise((resolve) => {
          animateInput(
            firstNode,
            descriptionSamples,
            index,
            stopChar,
            stopCharIsLastIndex,
          );
          animateInput(
            lastNode,
            descriptionSamples,
            index,
            stopChar,
            stopCharIsLastIndex,
          );
          setTimeout(resolve, timer);
        });
      };
      let rounds = 0;
      while (rounds !== 1) {
        await __eachSample(0, 1200, ".");
        await __eachSample(1, 32200, ".");
        await __eachSample(2, 4400, ".");
      }
    })();
  })();
};

export { animateText };
