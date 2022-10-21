export default class LSRequest {
  setItem(...args) {
    return this.__makeRequest('set', ...args);
  }

  getItem(...args) {
    return this.__makeRequest('get', ...args);
  }

  __makeRequest(handler, ...args) {
    return new Promise(resolve => {
      setTimeout(() => {
        let response;
        if (handler === 'get') {
          response = JSON.parse(localStorage.getItem(args));
        } else if (handler === 'set') {
          localStorage.setItem(args[0], JSON.stringify(args[1]));
        }
        resolve(response || {});
      }, 1000);
    });
  }
}

