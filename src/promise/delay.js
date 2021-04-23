import promisify from "./promisify";

function delay(timeout) {
  return promisify(({ resolve }) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  })();
}

export default delay;
