//format the data into presentable strings for webpage
export const formatCategory = (item) => {
  return item
    .replace(/-and-/g, " & ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
};
