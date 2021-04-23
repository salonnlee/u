import { filter, forEachObjIndexed, isNil } from "ramda";
import { isNotArray } from "../datatypes/isArray";
import { isNotObject } from "../datatypes/isObject";

function filterArrayNil(arr) {
  if (isNil(arr) || isNotArray(arr)) return [];
  return filter((v) => !isNil(v), arr);
}

export function filterObjectNil(obj) {
  if (isNil(obj) || isNotObject(obj)) return {};
  const filteredObj = {};
  forEachObjIndexed((v, k) => {
    if (!isNil(v)) {
      filteredObj[k] = v;
    }
  }, obj);
  return filteredObj;
}

export default filterArrayNil;
