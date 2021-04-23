import _isBoolean from "lodash/isBoolean";
import equals from "ramda/src/equals";
import complement from "ramda/src/complement";

const isBoolean = _isBoolean;
export const isNotBoolean = complement(isBoolean);

export const isTrue = (bool) => equals(true, bool);
export const isFalse = (bool) => equals(false, bool);

export default isBoolean;
