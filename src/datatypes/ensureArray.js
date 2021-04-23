import { isNotArray } from "./isArray";

const ensureArray = (arr) => (isNotArray(arr) ? [] : arr);

export default ensureArray;
