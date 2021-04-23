function promisify(fn, timeoutReject) {
  let resolve, reject;
  // eslint-disable-next-line promise/param-names
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return (...args) => {
    if (timeoutReject) {
      setTimeout(() => {
        reject("TIMEOUT");
      }, timeoutReject);
    }
    fn(
      { resolve, reject, promise },
      ...args
    );
    return promise;
  };
}

export default promisify;
