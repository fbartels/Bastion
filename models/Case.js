const a207_0x2bba=['mongoose','model','Guild','Case','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Schema','constructor','test','apply','__esModule'];(function(_0x59e853,_0x123e22){const _0x2bba78=function(_0x2589f2){while(--_0x2589f2){_0x59e853['push'](_0x59e853['shift']());}},_0xed872a=function(){const _0x12247a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x48b295,_0x128452,_0x2d8761,_0x107ff3){_0x107ff3=_0x107ff3||{};let _0x47526e=_0x128452+'='+_0x2d8761,_0x1004af=0x0;for(let _0xf448fe=0x0,_0x1480e0=_0x48b295['length'];_0xf448fe<_0x1480e0;_0xf448fe++){const _0x4819b6=_0x48b295[_0xf448fe];_0x47526e+=';\x20'+_0x4819b6;const _0x49d5a9=_0x48b295[_0x4819b6];_0x48b295['push'](_0x49d5a9),_0x1480e0=_0x48b295['length'],_0x49d5a9!==!![]&&(_0x47526e+='='+_0x49d5a9);}_0x107ff3['cookie']=_0x47526e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3b4c8c,_0x3bb1ed){_0x3b4c8c=_0x3b4c8c||function(_0x681f89){return _0x681f89;};const _0x1e02b3=_0x3b4c8c(new RegExp('(?:^|;\x20)'+_0x3bb1ed['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x191414=function(_0x5b9c4a,_0x59a5d1){_0x5b9c4a(++_0x59a5d1);};return _0x191414(_0x2bba78,_0x123e22),_0x1e02b3?decodeURIComponent(_0x1e02b3[0x1]):undefined;}},_0x1c4ed6=function(){const _0xcd19a7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xcd19a7['test'](_0x12247a['removeCookie']['toString']());};_0x12247a['updateCookie']=_0x1c4ed6;let _0x5d32d5='';const _0x35fd7d=_0x12247a['updateCookie']();if(!_0x35fd7d)_0x12247a['setCookie'](['*'],'counter',0x1);else _0x35fd7d?_0x5d32d5=_0x12247a['getCookie'](null,'counter'):_0x12247a['removeCookie']();};_0xed872a();}(a207_0x2bba,0x1c6));const a207_0xed87=function(_0x59e853,_0x123e22){_0x59e853=_0x59e853-0x135;let _0x2bba78=a207_0x2bba[_0x59e853];return _0x2bba78;};const _0x1e61da=a207_0xed87,a207_0x1c4ed6=function(){let _0x35fd7d=!![];return function(_0x48b295,_0x128452){const _0x2d8761=_0x35fd7d?function(){const _0x98396a=a207_0xed87;if(_0x128452){const _0x107ff3=_0x128452[_0x98396a(0x139)](_0x48b295,arguments);return _0x128452=null,_0x107ff3;}}:function(){};return _0x35fd7d=![],_0x2d8761;};}(),a207_0x12247a=a207_0x1c4ed6(this,function(){const _0x47526e=function(){const _0xba45c2=a207_0xed87,_0x1004af=_0x47526e['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0xba45c2(0x137)](_0xba45c2(0x135));return!_0x1004af[_0xba45c2(0x138)](a207_0x12247a);};return _0x47526e();});a207_0x12247a();'use strict';Object['defineProperty'](exports,_0x1e61da(0x13a),{'value':!![]});const mongoose=require(_0x1e61da(0x13b)),caseSchema=new mongoose[(_0x1e61da(0x136))]({'guild':{'type':String,'required':!![],'ref':_0x1e61da(0x13d)},'number':{'type':Number,'required':!![],'default':0x1},'messageId':{'type':String,'required':!![]}});caseSchema['index']({'guild':0x1,'number':0x1},{'unique':!![]}),exports['default']=mongoose[_0x1e61da(0x13c)](_0x1e61da(0x13e),caseSchema);