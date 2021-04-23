import _isNumber from "lodash/isNumber";
import equals from "ramda/src/equals";
import complement from "ramda/src/complement";
import isNil from "ramda/src/isNil";

const isNumber = _isNumber;
export const isNotNumber = complement(isNumber);

export const isEmptyNumber = (num) =>
  isNumber(Number(num)) && equals(0, Number(num));
export const isZeroNumber = isEmptyNumber;
export const isNotEmptyNumber = complement(isEmptyNumber);
export const isNotZeroNumber = complement(isZeroNumber);

export const isNilNumber = (num) => isNil(num) && isEmptyNumber(num);
export const isNotNilNumber = complement(isNilNumber);

export default isNumber;
