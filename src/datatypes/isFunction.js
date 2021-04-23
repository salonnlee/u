import _isFunction from "lodash/isFunction";
import complement from "ramda/src/complement";

const isFunction = _isFunction;

export const isNotFunction = complement(isFunction);

export default isFunction;
