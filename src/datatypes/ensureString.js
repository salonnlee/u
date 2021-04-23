import isNumber from "./isNumber";
import { isNotString } from "./isString";

const ensureString = (str) => {
  if (isNotString(str)) {
    if (isNumber(str)) {
      if (!Number.isNaN(str) && Number.isFinite(str)) {
        return String(str);
      }
    }
    return "";
  } else {
    return str;
  }
};

export default ensureString;
