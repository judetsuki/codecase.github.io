export const square = (x) => x * x
export const capitalize = (text) => {
    if (text === null) {
      return undefined;
    }
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring + 1}`;
  };
export const getChildren = (arr) => arr.filter((child) => child.age < 17 ).map((child) => child.name);

