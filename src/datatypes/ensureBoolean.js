import { isNotBoolean } from "./isBoolean";

const ensureBoolean = (bool) => (isNotBoolean(bool) ? !!bool : bool);

export default ensureBoolean;
