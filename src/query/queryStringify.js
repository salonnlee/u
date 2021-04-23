import { isNilString } from "../datatypes/isString";

const query = require("licia/query");

const queryStringify = (obj, { arrKey, questionMark } = {}) => {
  let queryString = query.stringify(obj, arrKey);
  if (questionMark && !isNilString(queryString)) {
    queryString = "?" + queryString;
  }
  return queryString;
};

export default queryStringify;
