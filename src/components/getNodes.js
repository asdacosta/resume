const getNodes = function () {
  const fieldStatus = document.querySelectorAll(".optional, .required");
  const firstNamesInput = document.querySelector("#first-names");
  const lastNameInput = document.querySelector("#last-name");
  const emailInput = document.querySelector("#mail");
  const phoneInput = document.querySelector("#phone");
  const personalCountryInput = document.querySelector("#country-personal");
  const personalCityInput = document.querySelector("#city-personal");
  const addressInput = document.querySelector("#address");
  const personalImageInput = document.querySelector("#profile");

  const firstEduSchool = document.querySelector(".education-fields.first #school");
  const firstEduDegree = document.querySelector(".education-fields.first #degree");
  const firstEduHonors = document.querySelector(".education-fields.first #honors");
  const firstEduStartDate = document.querySelector(
    ".education-fields.first #start-date-education",
  );
  const firstEduEndDate = document.querySelector(
    ".education-fields.first #end-date-education",
  );
  const firstEduCountry = document.querySelector(
    ".education-fields.first #country-education",
  );
  const firstEduCity = document.querySelector(".education-fields.first #city-education");
  const lastEduSchool = document.querySelector(".education-fields.second #school");
  const lastEduDegree = document.querySelector(".education-fields.second #degree");
  const lastEduHonors = document.querySelector(".education-fields.second #honors");
  const lastEduStartDate = document.querySelector(
    ".education-fields.second #start-date-education",
  );
  const lastEduEndDate = document.querySelector(
    ".education-fields.second #end-date-education",
  );
  const lastEduCountry = document.querySelector(
    ".education-fields.second #country-education",
  );
  const lastEduCity = document.querySelector(".education-fields.second #city-education");
  const degreeInput = document.querySelector("#degree");
  const honorsInput = document.querySelector("#honors");
  const positionInput = document.querySelector("#position");
  const descriptionInput = document.querySelector("#description");

  const firstProCompany = document.querySelector(".professional-fields.first #company");
  const firstProPosition = document.querySelector(".professional-fields.first #position");
  const firstProStartDate = document.querySelector(
    ".professional-fields.first #start-date-professional",
  );
  const firstProEndDate = document.querySelector(
    ".professional-fields.first #end-date-professional",
  );
  const firstProCountry = document.querySelector(
    ".professional-fields.first #country-professional",
  );
  const firstProCity = document.querySelector(
    ".professional-fields.first #city-professional",
  );
  const firstProDescription = document.querySelector(
    ".professional-fields.first #description",
  );
  const lastProCompany = document.querySelector(".professional-fields.second #company");
  const lastProPosition = document.querySelector(".professional-fields.second #position");
  const lastProStartDate = document.querySelector(
    ".professional-fields.second #start-date-professional",
  );
  const lastProEndDate = document.querySelector(
    ".professional-fields.second #end-date-professional",
  );
  const lastProCountry = document.querySelector(
    ".professional-fields.second #country-professional",
  );
  const lastProCity = document.querySelector(
    ".professional-fields.second #city-professional",
  );
  const lastProDescription = document.querySelector(
    ".professional-fields.second #description",
  );

  const menu = document.querySelector(".menu");
  const sampleBar = document.querySelector(".sample-bar");
  const sampleBarIcon = document.querySelector(".sample-bar i");
  const sampleBarText = document.querySelector(".sample-bar span");
  const view = document.querySelector(".view");
  const dialog = document.querySelector(".dialog");
  const palette = document.querySelector(".palette");
  const paletteButtons = document.querySelectorAll(".palette > button");
  const layout = document.querySelector(".layout");
  const layoutButtons = document.querySelectorAll(".layout > button");
  const profileUploadBox = document.querySelector(".field-profile label");
  const resumeHeader = document.querySelector(".resume-header");
  const resumeCover = document.querySelector(".resume-cover");
  const editCover = document.querySelector(".edit-cover");
  const educationParagraph = document.querySelector(".education p");
  const professionalParagraph = document.querySelector(".professional p");
  const educationLocker = document.querySelector(".education .open-field");
  const professionalLocker = document.querySelector(".professional .open-field");
  const educationAddSection = document.querySelector(".education .add");
  const educationAdd = document.querySelector(".education .add span");
  const professionalAddSection = document.querySelector(".professional .add");
  const professionalAdd = document.querySelector(".professional .add span");
  const educationFirstField = document.querySelector(".education-fields.first");
  const educationLastField = document.querySelector(".education-fields.second");
  const educationFirstFieldAdded = document.querySelector(".education .first.added");
  const educationLastFieldAdded = document.querySelector(".education .second.added");
  const professionalFirstField = document.querySelector(".professional-fields.first");
  const professionalLastField = document.querySelector(".professional-fields.second");
  const professionalFirstFieldAdded = document.querySelector(
    ".professional .first.added",
  );
  const professionalLastFieldAdded = document.querySelector(
    ".professional .second.added",
  );
  const eduFirstEditIcon = document.querySelector(".education .first .fa-pen-to-square");
  const eduFirstRemoveIcon = document.querySelector(".education .first .fa-trash");
  const eduLastEditIcon = document.querySelector(".education .second .fa-pen-to-square");
  const eduLastRemoveIcon = document.querySelector(".education .second .fa-trash");
  const profFirstEditIcon = document.querySelector(
    ".professional .first .fa-pen-to-square",
  );
  const profFirstRemoveIcon = document.querySelector(".professional .first .fa-trash");
  const profLastEditIcon = document.querySelector(
    ".professional .second .fa-pen-to-square",
  );
  const profLastRemoveIcon = document.querySelector(".professional .second .fa-trash");

  const resumeName = document.querySelector(".resume-name");
  const resumePersonalPhone = document.querySelector(".resume-personal-phone");
  const resumePersonalMail = document.querySelector(".resume-personal-mail");
  const resumePersonalLocation = document.querySelector(".resume-personal-location");
  const resumePersonalAddress = document.querySelector(".resume-personal-address");
  const resumeProfile = document.querySelector(".resume-profile div");
  const resumeMainPosition = document.querySelector(".resume-position");
  const resumeFirstEduSchool = document.querySelector(
    ".resume-education .first .resume-school",
  );
  const resumeFirstEduDegree = document.querySelector(
    ".resume-education .first .resume-degree",
  );
  const resumeFirstEduHonors = document.querySelector(
    ".resume-education .first .resume-honors",
  );
  const resumeFirstEduDate = document.querySelector(
    ".resume-education .first .resume-date",
  );
  const resumeFirstEduLocation = document.querySelector(
    ".resume-education .first .resume-location",
  );
  const resumeLastEduSchool = document.querySelector(
    ".resume-education .second .resume-school",
  );
  const resumeLastEduDegree = document.querySelector(
    ".resume-education .second .resume-degree",
  );
  const resumeLastEduHonors = document.querySelector(
    ".resume-education .second .resume-honors",
  );
  const resumeLastEduDate = document.querySelector(
    ".resume-education .second .resume-date",
  );
  const resumeLastEduLocation = document.querySelector(
    ".resume-education .second .resume-location",
  );
  const resumeFirstProCompany = document.querySelector(
    ".resume-professional .first .resume-company",
  );
  const resumeFirstProDate = document.querySelector(
    ".resume-professional .first .resume-date",
  );
  const resumeFirstProPosition = document.querySelector(
    ".resume-professional .first .resume-position",
  );
  const resumeFirstProLocation = document.querySelector(
    ".resume-professional .first .resume-location",
  );
  const resumeFirstProDescription = document.querySelector(
    ".resume-professional .first .resume-description",
  );
  const resumelastProCompany = document.querySelector(
    ".resume-professional .second .resume-company",
  );
  const resumelastProDate = document.querySelector(
    ".resume-professional .second .resume-date",
  );
  const resumelastProPosition = document.querySelector(
    ".resume-professional .second .resume-position",
  );
  const resumelastProLocation = document.querySelector(
    ".resume-professional .second .resume-location",
  );
  const resumelastProDescription = document.querySelector(
    ".resume-professional .second .resume-description",
  );
  const downloadBox = document.querySelector(".download");
  const resume = document.querySelector(".resume-cover");

  const body = document.querySelector("body");
  const root = document.querySelector("#root");
  const inputs = document.querySelectorAll("input, textarea");
  const resumeH2 = document.querySelectorAll(".resume-cover h2");

  return {
    fieldStatus,
    firstNamesInput,
    lastNameInput,
    emailInput,
    phoneInput,
    personalCountryInput,
    personalCityInput,
    addressInput,
    personalImageInput,
    firstEduSchool,
    firstEduDegree,
    firstEduHonors,
    firstEduStartDate,
    firstEduEndDate,
    firstEduCountry,
    firstEduCity,
    lastEduSchool,
    lastEduDegree,
    lastEduHonors,
    lastEduStartDate,
    lastEduEndDate,
    lastEduCountry,
    lastEduCity,
    firstProCompany,
    firstProPosition,
    firstProStartDate,
    firstProEndDate,
    firstProCountry,
    firstProCity,
    firstProDescription,
    lastProCompany,
    lastProPosition,
    lastProStartDate,
    lastProEndDate,
    lastProCountry,
    lastProCity,
    lastProDescription,
    degreeInput,
    honorsInput,
    positionInput,
    descriptionInput,
    resumeName,
    resumePersonalPhone,
    resumePersonalMail,
    resumePersonalLocation,
    resumePersonalAddress,
    resumeProfile,
    resumeMainPosition,
    resumeFirstEduSchool,
    resumeFirstEduDegree,
    resumeFirstEduHonors,
    resumeFirstEduDate,
    resumeFirstEduLocation,
    resumeLastEduSchool,
    resumeLastEduDegree,
    resumeLastEduHonors,
    resumeLastEduDate,
    resumeLastEduLocation,
    resumeFirstProCompany,
    resumeFirstProDate,
    resumeFirstProPosition,
    resumeFirstProLocation,
    resumeFirstProDescription,
    resumelastProCompany,
    resumelastProDate,
    resumelastProPosition,
    resumelastProLocation,
    resumelastProDescription,
    menu,
    sampleBar,
    sampleBarIcon,
    sampleBarText,
    view,
    dialog,
    palette,
    paletteButtons,
    layout,
    layoutButtons,
    profileUploadBox,
    resumeHeader,
    resumeCover,
    editCover,
    educationParagraph,
    professionalParagraph,
    educationLocker,
    professionalLocker,
    educationAddSection,
    educationAdd,
    professionalAddSection,
    professionalAdd,
    educationFirstField,
    educationLastField,
    educationFirstFieldAdded,
    educationLastFieldAdded,
    professionalFirstField,
    professionalLastField,
    professionalFirstFieldAdded,
    professionalLastFieldAdded,
    eduFirstEditIcon,
    eduFirstRemoveIcon,
    eduLastEditIcon,
    eduLastRemoveIcon,
    profFirstEditIcon,
    profFirstRemoveIcon,
    profLastEditIcon,
    profLastRemoveIcon,
    downloadBox,
    resume,
    body,
    root,
    inputs,
    resumeH2,
  };
};

export { getNodes };
