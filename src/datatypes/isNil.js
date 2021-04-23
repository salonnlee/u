import _isNil from "ramda/src/isNil";
import _isEmpty from "ramda/src/isEmpty";
import complement from "ramda/src/complement";

const isNil = _isNil;
export const isNotNil = complement(isNil);

export const isEmpty = _isEmpty;
export const isNotEmpty = complement(isEmpty);

export default isNil;
