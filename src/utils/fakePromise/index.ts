export function positivePromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Text');
    }, 2000);
  });
}

export function negativePromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('ERROR TEXT');
    }, 2000);
  });
}
