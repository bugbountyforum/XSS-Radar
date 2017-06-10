class Url {
  
  get (url, param, payload) {
    return this.appendStringToParam(url, param, payload)
  }

  // returns an array of query parameters
  getQueryParams(url) {
      var request = {};
      var pairs = url.substring(url.indexOf('?') + 1).split('&');
      for (var i = 0; i < pairs.length; i++) {
          if (!pairs[i])
              continue;
          var pair = pairs[i].split('=');
          request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
       }
       return request;
  }

  // Identify parameters of query
  // TODO: look in url as well
  appendStringToParam(url, param, string) {
    console.log(param)
    var originalParams = this.getQueryParams(url);
    var updatedParams = {};
    for (var key in originalParams) {
      if (Object.prototype.hasOwnProperty.call(originalParams, key)) {
          if (key == param) {
            updatedParams[key] = originalParams[key] + string;
          } else {
            updatedParams[key] = originalParams[key];
          }
      }
    }
    return this.updateUrl(url, updatedParams);
  }

  // returns the url with the specified params
  updateUrl(url, params) {
    return url.split('?')[0] + '?' + Object.keys(params).map(k => k + '=' + encodeURIComponent(params[k])).join('&');
  }

}
