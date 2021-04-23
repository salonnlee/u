const jsonParse = (str, defaultValue = null) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return defaultValue;
  }
};

export default jsonParse;
