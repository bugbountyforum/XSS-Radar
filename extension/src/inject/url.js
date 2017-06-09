class Url {
  
  get (url, param, payload) {
    var search = this.search()
    if (search != undefined) {
      var found = false
      var params = this.parameters(search)
      params.forEach((p) => {
        if (p == param) {
          arams[p] = payload
          found = true
        }
      })
      if (!found) {
        params[param] = payload
      }
      return url.split('?')[0] + '?' + params.join('&')
    } else {
      return url.split('?')[0] + '?' + param + '=' + decodeURIComponent(payload)
    }
  }

  search (url) {
    let link = document.createElement(url)
    link.href = url
    return link.search
  }

  parameters (query) {
    var result = {}
    query.split('&').forEach(function(part) {
      var item = part.split('=')
      result[item[0]] = decodeURIComponent(item[1])
    });
    return result;
  }
}
