'use strict'

class Url {

  get (url, param, payload) {
    return this.appendStringToParam(url, param, payload)
  }

  // returns an array of query parameters
  getQueryParams(url) {
      if(url.indexOf('?') == -1) return {};
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
    var params = this.getQueryParams(url);
    if(params[param]) { //param is in url, append to original param
      params[param] = params[param] + string;
    } else {
      params[param] = string;
    }
    return this.updateUrl(url, params);
  }

  // returns the url with the specified params
  updateUrl(url, params) {
    return url.split('?')[0] + '?' + Object.keys(params).map(k => k + '=' + params[k]).join('&');
  }

}
