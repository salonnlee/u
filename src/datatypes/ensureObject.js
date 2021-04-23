import { isNotObject } from "./isObject";

const ensureObject = (obj) => (isNotObject(obj) ? {} : obj);

export default ensureObject;
