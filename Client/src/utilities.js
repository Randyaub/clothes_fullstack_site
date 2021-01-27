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

export const passwordsAreEqual = (password, secondPassword, setError) => {
  if (password !== secondPassword) {
    setError("Passwords do not match");
    return false;
  }
  return true;
};

export const firstNameValid = (firstName, setError) => {
  if (!firstName) {
    setError("Please enter your first name");
    return false;
  }
  return true;
};

export const lastNameValid = (lastName, setError) => {
  if (!lastName) {
    setError("Please enter your last name");
    return false;
  }
  return true;
};
