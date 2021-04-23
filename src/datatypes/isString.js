import _isString from "lodash/isString";
import equals from "ramda/src/equals";
import complement from "ramda/src/complement";
import isNil from "ramda/src/isNil";

const isString = _isString;
export const isNotString = complement(isString);

export const isEmptyString = (str) => isString(str) && equals("", str);
export const isNotEmptyString = complement(isEmptyString);

export const isNilString = (str) => isNil(str) || isEmptyString(str);
export const isNotNilString = complement(isNilString);

export default isString;
