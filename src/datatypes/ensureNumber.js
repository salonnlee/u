import isString from "./isString";
import { isNotNumber } from "./isNumber";

const ensureNumber = (num) => {
  if (isNotNumber(num)) {
    if (isString(num)) {
      num = Number(num);
      if (!Number.isNaN(num) && Number.isFinite(num)) {
        return num;
      }
    }
    return 0;
  } else {
    return num;
  }
};

export default ensureNumber;
