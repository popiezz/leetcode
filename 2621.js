async function sleep(millis) {
  function callback(resolve, reject) {
    setTimeout(resolve, millis);
  }
  return new Promise(callback);
}
// OR

async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  })
}
