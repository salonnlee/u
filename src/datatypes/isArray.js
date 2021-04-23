import _isArray from "lodash/isArray";
import isNil from "ramda/src/isNil";
import complement from "ramda/src/complement";
import equals from "ramda/src/equals";

const isArray = _isArray;
export const isNotArray = complement(isArray);

export const isEmptyArray = (arr) => isArray(arr) && equals(0, arr.length);
export const isNotEmptyArray = complement(isEmptyArray);

export const isNilArray = (arr) => isNil(arr) || isEmptyArray(arr);
export const isNotNilArray = complement(isNilArray);

export default isArray;
