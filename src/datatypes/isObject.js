import _isObject from "lodash/isPlainObject";
import equals from "ramda/src/equals";
import complement from "ramda/src/complement";
import jsonStringify from "../json/jsonStringify";
import isNil from "ramda/src/isNil";

const isObject = _isObject;
export const isNotObject = complement(isObject);

export const isEmptyObject = (obj) => equals("{}", jsonStringify(obj));
export const isNotEmptyObject = complement(isEmptyObject);

export const isNilObject = (obj) => isNil(obj) || isEmptyObject(obj);
export const isNotNilObject = complement(isNilObject);

export default isObject;
