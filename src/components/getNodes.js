const getNodes = function () {
  const fieldStatus = document.querySelectorAll(".optional, .required");

  return {
    fieldStatus,
  };
};

export { getNodes };
