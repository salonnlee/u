import { isNotFunction } from "./isFunction";

const ensureFunction = (fn) => (isNotFunction(fn) ? () => {} : fn);

export default ensureFunction;
