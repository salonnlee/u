function isNil(value) {
  return value == null;
}

function isObjectLike(value) {
  return typeof value === "object" && value != null;
}

const toString = Object.prototype.toString;

// --------------------------------------------------

function isUndefined(value) {
  return value === undefined; // toString.call(value) === "[object Undefined]"
}

function isNull(value) {
  return value === null; // toString.call(value) === "[object Null]"
}

function isString(value) {
  return (
    typeof value === "string" ||
    (isObjectLike(value) && toString.call(value) === "[object String]")
  );
}

function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && toString.call(value) === "[object Number]")
  );
}

function isBoolean(value) {
  return (
    typeof value === "boolean" ||
    (isObjectLike(value) && toString.call(value) === "[object Boolean]")
  );
}

function isSymbol(value) {
  return (
    typeof value === "symbol" ||
    (isObjectLike(value) && toString.call(value) === "[object Symbol]")
  );
}

function isObject(value) {
  if (!isObjectLike(value) || toString.call(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  return Object.getPrototypeOf(value) === Object.getPrototypeOf({});
}

function isArray(value) {
  return (
    /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/.test(
      toString.call(value)
    ) ||
    (isObjectLike(value) && toString.call(value) === "[object Symbol]")
  );
}

function isRegExp(value) {
  return isObjectLike(value) && toString.call(value) === "[object RegExp]";
}

function isFunction(value) {
  return typeof value === "function"; // toString.call(value) === "[object Function]"
}

function isSet(value) {
  return isObjectLike(value) && toString.call(value) === "[object Set]";
}

function isMap(value) {
  return isObjectLike(value) && toString.call(value) === "[object Map]";
}

export {
  isNil,
  isUndefined,
  isNull,
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isObject,
  isArray,
  isFunction,
  isRegExp,
  isSet,
  isMap
};
