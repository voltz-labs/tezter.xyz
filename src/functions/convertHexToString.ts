export const convertHexToString = (hex: string) => {
  const matches = hex.match(/[0-9a-f]{2}/gi);

  if (!matches) {
    return "";
  }

  return matches.map((hex) => String.fromCharCode(parseInt(hex, 16))).join("");
};
