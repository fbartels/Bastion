const a195_0x5bb2=['url','channel','exec','tag','Message\x20ID','constructor','apply','author','type','createLog','fetch','test','messageUpdate','@bastion/tesseract','partial','toUTCString','Listener','Author\x20ID','DMChannel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','DEFAULT','Constants'];(function(_0x5982bc,_0x5e5961){const _0x5bb24d=function(_0x572daa){while(--_0x572daa){_0x5982bc['push'](_0x5982bc['shift']());}},_0x21097d=function(){const _0x4cb7ac={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5c5bf2,_0x28c870,_0x5c76f2,_0x20339d){_0x20339d=_0x20339d||{};let _0x3a548e=_0x28c870+'='+_0x5c76f2,_0x2727a7=0x0;for(let _0x518fa2=0x0,_0x3aa032=_0x5c5bf2['length'];_0x518fa2<_0x3aa032;_0x518fa2++){const _0x273bb8=_0x5c5bf2[_0x518fa2];_0x3a548e+=';\x20'+_0x273bb8;const _0x17da3a=_0x5c5bf2[_0x273bb8];_0x5c5bf2['push'](_0x17da3a),_0x3aa032=_0x5c5bf2['length'],_0x17da3a!==!![]&&(_0x3a548e+='='+_0x17da3a);}_0x20339d['cookie']=_0x3a548e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3b7dc5,_0x4e4c98){_0x3b7dc5=_0x3b7dc5||function(_0x56f6cb){return _0x56f6cb;};const _0x5d6845=_0x3b7dc5(new RegExp('(?:^|;\x20)'+_0x4e4c98['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2e2586=function(_0x3ac270,_0x18f524){_0x3ac270(++_0x18f524);};return _0x2e2586(_0x5bb24d,_0x5e5961),_0x5d6845?decodeURIComponent(_0x5d6845[0x1]):undefined;}},_0x3c22c3=function(){const _0x1b74c1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1b74c1['test'](_0x4cb7ac['removeCookie']['toString']());};_0x4cb7ac['updateCookie']=_0x3c22c3;let _0x9abec0='';const _0x2e9518=_0x4cb7ac['updateCookie']();if(!_0x2e9518)_0x4cb7ac['setCookie'](['*'],'counter',0x1);else _0x2e9518?_0x9abec0=_0x4cb7ac['getCookie'](null,'counter'):_0x4cb7ac['removeCookie']();};_0x21097d();}(a195_0x5bb2,0x17c));const a195_0x2109=function(_0x5982bc,_0x5e5961){_0x5982bc=_0x5982bc-0x1f3;let _0x5bb24d=a195_0x5bb2[_0x5982bc];return _0x5bb24d;};const _0x54fb74=a195_0x2109,a195_0x3c22c3=function(){let _0x2e9518=!![];return function(_0x5c5bf2,_0x28c870){const _0x5c76f2=_0x2e9518?function(){const _0x253592=a195_0x2109;if(_0x28c870){const _0x20339d=_0x28c870[_0x253592(0x1f3)](_0x5c5bf2,arguments);return _0x28c870=null,_0x20339d;}}:function(){};return _0x2e9518=![],_0x5c76f2;};}(),a195_0x4cb7ac=a195_0x3c22c3(this,function(){const _0x3a548e=function(){const _0xcef6ea=a195_0x2109,_0x2727a7=_0x3a548e['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0xcef6ea(0x208)](_0xcef6ea(0x200));return!_0x2727a7[_0xcef6ea(0x1f8)](a195_0x4cb7ac);};return _0x3a548e();});a195_0x4cb7ac();'use strict';const tesseract_1=require(_0x54fb74(0x1fa)),discord_js_1=require('discord.js');module['exports']=class MessageUpdateListener extends tesseract_1[_0x54fb74(0x1fd)]{constructor(){const _0x9d91aa=_0x54fb74;super(_0x9d91aa(0x1f9),{'mode':tesseract_1[_0x9d91aa(0x202)]['LISTENER_MODE']['ON']}),this[_0x9d91aa(0x205)]=async(_0x518fa2,_0x3aa032)=>{const _0x570b8c=_0x9d91aa;_0x518fa2[_0x570b8c(0x1fb)]&&(_0x518fa2=await _0x518fa2[_0x570b8c(0x1f7)]());_0x3aa032['partial']&&(_0x3aa032=await _0x3aa032['fetch']());if(_0x518fa2[_0x570b8c(0x204)]instanceof discord_js_1[_0x570b8c(0x1ff)]||_0x3aa032['channel']instanceof discord_js_1['DMChannel'])return;if(_0x518fa2['content']===_0x3aa032['content'])return;const _0x273bb8=_0x518fa2['guild'];if(_0x518fa2[_0x570b8c(0x1f5)]!==_0x570b8c(0x201))return;_0x273bb8[_0x570b8c(0x1f6)]({'event':_0x570b8c(0x1f9),'fields':[{'name':_0x570b8c(0x207),'value':'['+_0x518fa2['id']+']('+_0x518fa2[_0x570b8c(0x203)]+')','inline':!![]},{'name':'Channel','value':_0x518fa2['channel']['name'],'inline':!![]},{'name':'Channel\x20ID','value':_0x518fa2[_0x570b8c(0x204)]['id'],'inline':!![]},{'name':'Author','value':_0x518fa2[_0x570b8c(0x1f4)][_0x570b8c(0x206)],'inline':!![]},{'name':_0x570b8c(0x1fe),'value':_0x518fa2['author']['id'],'inline':!![]},{'name':'Sent','value':_0x518fa2['createdAt'][_0x570b8c(0x1fc)](),'inline':!![]}]});};}};