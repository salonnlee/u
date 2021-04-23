import promisify from "../promise/promisify";

const _loadJs = require("licia/loadJs");

function loadJs(src) {
  return promisify(({ resolve, reject }) => {
    _loadJs(src, (isLoaded) => {
      if (isLoaded) {
        resolve(src);
      } else {
        reject("JS_IS_NOT_LOADED");
      }
    });
  })();
}

export default loadJs;
