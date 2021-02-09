//format the data into presentable strings for webpage
export const formatCategory = (item) => {
  return item
    .replace(/-and-/g, " & ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
};

export const emailValid = (email, setError) => {
  if (!email) {
    setError("Please enter your email address");
    return false;
  }

  if (!email.includes("@") && !email.includes(".")) {
    setError("Please enter a valid email address");
    return false;
  }
  return true;
};

export const emailsAreEqual = (email, confirmEmail, setError) => {
  if (email !== confirmEmail) {
    setError("Email addresses do not match");
    return false;
  }
  return true;
};

export const passwordValid = (password, setError) => {
  if (!password) {
    setError("Please enter your password");
    return false;
  }
  if (password.length < 8) {
    setError("Your password must be at least 8 character");
    return false;
  }
  return true;
};

export const zipCodeValid = (zipCode, setError) => {
  if (!zipCode) {
    setError("Please enter your zipcode");
    return false;
  }
  if (zipCode.length !== 6) {
    setError("Your zipcode must be 6 character");
    return false;
  }
  return true;
};

export const passwordsAreEqual = (password, secondPassword, setError) => {
  if (password !== secondPassword) {
    setError("Passwords do not match");
    return false;
  }
  return true;
};

export const inputsNotEmpty = (input, setError, errorMessage) => {
  if (!input) {
    setError(errorMessage);
    return false;
  }
  return true;
};

export const creditCardNumberValidation = (input, setError) => {
  if (!input) {
    setError("Please enter your credit card number");
    return false;
  }
  if (input.length !== 16) {
    setError("Invalid credit card number. Enter the full 16 digits");
    return false;
  }
  return true;
};

export const inputEqualTo = (input, otherValue, setError, errorMessage) => {
  if (input === otherValue) {
    setError(errorMessage);
    return false;
  }
  return true;
};

export const isMonthSelected = (input, setError) => {
  if (input === "MONTH*") {
    setError("Month not selected");
    return false;
  }
  return true;
};

export const isYearSelected = (input, setError) => {
  if (input === "YEAR*") {
    setError("Year not selected");
    return false;
  }
  return true;
};

export const cvvValid = (cvv, setError) => {
  if (cvv.length !== 3) {
    setError("Please include your 3 digit cvv");
    return false;
  }
  return true;
};

export const months = [
  "MONTH*",
  "01 - January",
  "02 - February",
  "03 - March",
  "04 - April",
  "05 - May",
  "06 - June",
  "07 - July",
  "08 - August",
  "09 - September",
  "10 - October",
  "11 - November",
  "12 - December",
];

export const provinces = [
  "PROVINCE*",
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
];
