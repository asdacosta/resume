import { getNodes } from "./getNodes";

function clearSample() {
  // Personal Details
  getNodes().resumeProfile.classList.add("unknown");
  getNodes().resumeName.textContent = "Full Name";
  getNodes().resumeMainPosition.textContent = "Last Position";
  getNodes().resumePersonalPhone.textContent = "Phone";
  getNodes().resumePersonalMail.textContent = "Email";
  getNodes().resumePersonalLocation.textContent = "Location";
  getNodes().resumePersonalAddress.textContent = "Address";
  // Education
  getNodes().resumeFirstEduSchool.textContent = "First School";
  getNodes().resumeFirstEduDegree.textContent = "Degree";
  getNodes().resumeFirstEduHonors.textContent = "Class Honors";
  getNodes().resumeFirstEduDate.textContent = "Start to End";
  getNodes().resumeFirstEduLocation.textContent = "Country ⚫ City";

  getNodes().resumeLastEduSchool.textContent = "Second School";
  getNodes().resumeLastEduDegree.textContent = "Degree";
  getNodes().resumeLastEduHonors.textContent = "Class Honors";
  getNodes().resumeLastEduDate.textContent = "Start to End";
  getNodes().resumeLastEduLocation.textContent = "Country ⚫ City";
  // Professional
  getNodes().resumeFirstProCompany.textContent = "First Company";
  getNodes().resumeFirstProPosition.textContent = "Position";
  getNodes().resumeFirstProLocation.textContent = "Country ⚫ City";
  getNodes().resumeFirstProDate.textContent = "Start to End";
  getNodes().resumeFirstProDescription.textContent = "Description";

  getNodes().resumelastProCompany.textContent = "Second Company";
  getNodes().resumelastProPosition.textContent = "Position";
  getNodes().resumelastProLocation.textContent = "Country ⚫ City";
  getNodes().resumelastProDate.textContent = "Start to End";
  getNodes().resumelastProDescription.textContent = "Description";
}

function revealSample() {
  // Personal Details
  getNodes().resumeProfile.classList.remove("unknown");
  getNodes().resumeProfile.style.backgroundPosition = `center`;
  getNodes().resumeProfile.style.backgroundSize = `cover`;
  getNodes().resumeName.textContent = "Ever Costa";
  getNodes().resumeMainPosition.textContent = "Software Engineer";
  getNodes().resumePersonalPhone.textContent = "+1 416 123 4567";
  getNodes().resumePersonalMail.textContent = "ever@gmail.com";
  getNodes().resumePersonalLocation.textContent = "Canada, Ottawa";
  getNodes().resumePersonalAddress.textContent = "123 Main Street";
  // Education
  getNodes().resumeFirstEduSchool.textContent = "University of Montreal";
  getNodes().resumeFirstEduDegree.textContent = "Bachelor of Science";
  getNodes().resumeFirstEduHonors.textContent = "First Class Honors";
  getNodes().resumeFirstEduDate.textContent = "2020 - 2o24";
  getNodes().resumeFirstEduLocation.textContent = "Canada ⚫ Quebec";

  getNodes().resumeLastEduSchool.textContent = "Oxford University";
  getNodes().resumeLastEduDegree.textContent = "Master's Degree";
  getNodes().resumeLastEduHonors.textContent = "High distinction";
  getNodes().resumeLastEduDate.textContent = "2024 - 2025";
  getNodes().resumeLastEduLocation.textContent = "UK ⚫ Oxford";
  // Professional
  getNodes().resumeFirstProCompany.textContent = "Tesla Inc";
  getNodes().resumeFirstProPosition.textContent = "Chief Software Engineer";
  getNodes().resumeFirstProLocation.textContent = "Canada ⚫ Ottawa";
  getNodes().resumeFirstProDate.textContent = "Aug, 2025 - Sep, 2026";
  getNodes().resumeFirstProDescription.textContent =
    "As a software engineer, I turn challenges into solutions through lines of code. Dedicated to building impactful software.";

  getNodes().resumelastProCompany.textContent = "SpaceX Corp";
  getNodes().resumelastProPosition.textContent = "Software Engineer";
  getNodes().resumelastProLocation.textContent = "US ⚫ Hawthorne";
  getNodes().resumelastProDate.textContent = "Aug, 2027 - Sep, 2028";
  getNodes().resumelastProDescription.textContent =
    "As a chief software engineer, I turn challenges into solutions through lines of code. Dedicated to building impactful software.";
}

export { clearSample, revealSample };
