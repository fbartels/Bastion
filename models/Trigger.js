const a218_0x1058=['apply','Trigger','Guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','__esModule','default','constructor','defineProperty','test'];(function(_0x15777d,_0x201264){const _0x1058df=function(_0x3cc5cd){while(--_0x3cc5cd){_0x15777d['push'](_0x15777d['shift']());}},_0x2252fe=function(){const _0xc910b7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x51ed71,_0x1f2d61,_0x2158df,_0x15903f){_0x15903f=_0x15903f||{};let _0xec8a9c=_0x1f2d61+'='+_0x2158df,_0x484436=0x0;for(let _0x2f6855=0x0,_0x123e25=_0x51ed71['length'];_0x2f6855<_0x123e25;_0x2f6855++){const _0x19cf56=_0x51ed71[_0x2f6855];_0xec8a9c+=';\x20'+_0x19cf56;const _0x4a5004=_0x51ed71[_0x19cf56];_0x51ed71['push'](_0x4a5004),_0x123e25=_0x51ed71['length'],_0x4a5004!==!![]&&(_0xec8a9c+='='+_0x4a5004);}_0x15903f['cookie']=_0xec8a9c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1da2a4,_0x15b31a){_0x1da2a4=_0x1da2a4||function(_0x502e27){return _0x502e27;};const _0x7702f1=_0x1da2a4(new RegExp('(?:^|;\x20)'+_0x15b31a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5b6073=function(_0x1160ae,_0x52171e){_0x1160ae(++_0x52171e);};return _0x5b6073(_0x1058df,_0x201264),_0x7702f1?decodeURIComponent(_0x7702f1[0x1]):undefined;}},_0x5b9ff4=function(){const _0x445166=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x445166['test'](_0xc910b7['removeCookie']['toString']());};_0xc910b7['updateCookie']=_0x5b9ff4;let _0x2d01eb='';const _0x21575d=_0xc910b7['updateCookie']();if(!_0x21575d)_0xc910b7['setCookie'](['*'],'counter',0x1);else _0x21575d?_0x2d01eb=_0xc910b7['getCookie'](null,'counter'):_0xc910b7['removeCookie']();};_0x2252fe();}(a218_0x1058,0x188));const a218_0x2252=function(_0x15777d,_0x201264){_0x15777d=_0x15777d-0x152;let _0x1058df=a218_0x1058[_0x15777d];return _0x1058df;};const _0x4add58=a218_0x2252,a218_0x5b9ff4=function(){let _0x21575d=!![];return function(_0x51ed71,_0x1f2d61){const _0x2158df=_0x21575d?function(){const _0x6ae7df=a218_0x2252;if(_0x1f2d61){const _0x15903f=_0x1f2d61[_0x6ae7df(0x156)](_0x51ed71,arguments);return _0x1f2d61=null,_0x15903f;}}:function(){};return _0x21575d=![],_0x2158df;};}(),a218_0xc910b7=a218_0x5b9ff4(this,function(){const _0xec8a9c=function(){const _0x2e0b5d=a218_0x2252,_0x484436=_0xec8a9c[_0x2e0b5d(0x153)](_0x2e0b5d(0x159))()[_0x2e0b5d(0x153)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x484436[_0x2e0b5d(0x155)](a218_0xc910b7);};return _0xec8a9c();});a218_0xc910b7();'use strict';Object[_0x4add58(0x154)](exports,_0x4add58(0x15a),{'value':!![]});const mongoose=require('mongoose'),triggerSchema=new mongoose['Schema']({'guild':{'type':String,'required':!![],'ref':_0x4add58(0x158)},'trigger':{'type':String,'required':!![]},'responseMessage':{'type':Object},'responseReaction':{'type':String}});exports[_0x4add58(0x152)]=mongoose['model'](_0x4add58(0x157),triggerSchema);