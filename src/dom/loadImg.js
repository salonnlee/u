import isNil from "ramda/src/isNil";
import promisify from "../promise/promisify";

const _loadImg = require("licia/loadImg");

function loadImg(src) {
  return promisify(({ resolve, reject }) => {
    _loadImg(src, (err, img) => {
      if (!isNil(err)) {
        reject(err);
        return;
      }
      resolve(img);
    });
  })();
}

export default loadImg;
