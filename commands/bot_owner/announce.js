const a1_0x26f8=['title','INVALID_COMMAND_SYNTAX','../../models/Guild','exports','has','announce\x20--message\x20MESSAGE','message','announcementsChannelId','tag','join','catch','COLORS','Constants','../../utils/errors','IRIS','apply','send','Announced','constructor','client','DiscordError','exec','BASTION_ERROR_TYPE','author','PUPIL','📣\x20','\x20/\x20','get','channel','channels','guild'];(function(_0x3dc155,_0x286eeb){const _0x26f8fa=function(_0x24d005){while(--_0x24d005){_0x3dc155['push'](_0x3dc155['shift']());}},_0x145e46=function(){const _0x4c2baa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1588c7,_0xd80606,_0x216999,_0x4b2aea){_0x4b2aea=_0x4b2aea||{};let _0x3eda98=_0xd80606+'='+_0x216999,_0x4275dc=0x0;for(let _0x20145e=0x0,_0x1a7e94=_0x1588c7['length'];_0x20145e<_0x1a7e94;_0x20145e++){const _0x311915=_0x1588c7[_0x20145e];_0x3eda98+=';\x20'+_0x311915;const _0xdd4ed9=_0x1588c7[_0x311915];_0x1588c7['push'](_0xdd4ed9),_0x1a7e94=_0x1588c7['length'],_0xdd4ed9!==!![]&&(_0x3eda98+='='+_0xdd4ed9);}_0x4b2aea['cookie']=_0x3eda98;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4584ed,_0x81f066){_0x4584ed=_0x4584ed||function(_0x1870e8){return _0x1870e8;};const _0x325070=_0x4584ed(new RegExp('(?:^|;\x20)'+_0x81f066['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2643a3=function(_0xd154ce,_0x363fc0){_0xd154ce(++_0x363fc0);};return _0x2643a3(_0x26f8fa,_0x286eeb),_0x325070?decodeURIComponent(_0x325070[0x1]):undefined;}},_0x3cf129=function(){const _0x5e2dc8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5e2dc8['test'](_0x4c2baa['removeCookie']['toString']());};_0x4c2baa['updateCookie']=_0x3cf129;let _0xbf1f92='';const _0x1a780c=_0x4c2baa['updateCookie']();if(!_0x1a780c)_0x4c2baa['setCookie'](['*'],'counter',0x1);else _0x1a780c?_0xbf1f92=_0x4c2baa['getCookie'](null,'counter'):_0x4c2baa['removeCookie']();};_0x145e46();}(a1_0x26f8,0xe8));const a1_0x145e=function(_0x3dc155,_0x286eeb){_0x3dc155=_0x3dc155-0x7c;let _0x26f8fa=a1_0x26f8[_0x3dc155];return _0x26f8fa;};const _0x26b38a=a1_0x145e,a1_0x3cf129=function(){let _0x1a780c=!![];return function(_0x1588c7,_0xd80606){const _0x216999=_0x1a780c?function(){const _0x419ae5=a1_0x145e;if(_0xd80606){const _0x4b2aea=_0xd80606[_0x419ae5(0x7c)](_0x1588c7,arguments);return _0xd80606=null,_0x4b2aea;}}:function(){};return _0x1a780c=![],_0x216999;};}(),a1_0x4c2baa=a1_0x3cf129(this,function(){const _0x3eda98=function(){const _0x1a0bf4=a1_0x145e,_0x4275dc=_0x3eda98[_0x1a0bf4(0x7f)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4275dc['test'](a1_0x4c2baa);};return _0x3eda98();});a1_0x4c2baa();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(_0x26b38a(0x8e)),errors=require(_0x26b38a(0x99));module[_0x26b38a(0x8f)]=class Announce extends tesseract_1['Command']{constructor(){const _0x2ab9b5=_0x26b38a;super('announce',{'description':'It\x20allows\x20you\x20to\x20send\x20announcements\x20to\x20the\x20announcement\x20channels\x20in\x20the\x20servers\x20where\x20it\x20has\x20been\x20set.','triggers':[],'arguments':{'array':['message','title'],'string':['message',_0x2ab9b5(0x8c)]},'scope':_0x2ab9b5(0x8b),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x2ab9b5(0x91),'announce\x20--title\x20TITLE\x20--message\x20MESSAGE']}),this[_0x2ab9b5(0x82)]=async(_0x20145e,_0x1a7e94)=>{const _0x2d5b55=_0x2ab9b5,_0x311915=_0x1a7e94[_0x2d5b55(0x8c)]&&_0x1a7e94['title'][_0x2d5b55(0x95)]('\x20'),_0xdd4ed9=_0x1a7e94['message']&&_0x1a7e94[_0x2d5b55(0x92)]['join']('\x20');if(!_0xdd4ed9)throw new errors[(_0x2d5b55(0x81))](errors[_0x2d5b55(0x83)][_0x2d5b55(0x8d)],this['name']);const _0x4584ed=await Guild_1['default']['find']({'announcementsChannelId':{'$exists':!![]}});for(const _0x81f066 of _0x4584ed){if(this[_0x2d5b55(0x80)][_0x2d5b55(0x8a)]['cache'][_0x2d5b55(0x90)](_0x81f066[_0x2d5b55(0x93)])){const _0x325070=this[_0x2d5b55(0x80)][_0x2d5b55(0x8a)]['cache'][_0x2d5b55(0x88)](_0x81f066[_0x2d5b55(0x93)]);_0x325070['send']({'embed':{'color':tesseract_1[_0x2d5b55(0x98)][_0x2d5b55(0x97)][_0x2d5b55(0x9a)],'title':_0x311915,'description':_0xdd4ed9,'footer':{'text':_0x2d5b55(0x86)+_0x20145e[_0x2d5b55(0x84)][_0x2d5b55(0x94)]+'\x20/\x20'+_0x20145e[_0x2d5b55(0x84)]['id']}}})['catch'](()=>{});}}await _0x20145e[_0x2d5b55(0x89)][_0x2d5b55(0x7d)]({'embed':{'color':tesseract_1[_0x2d5b55(0x98)]['COLORS'][_0x2d5b55(0x85)],'author':{'name':_0x2d5b55(0x7e)},'title':_0x311915,'description':_0xdd4ed9,'footer':{'text':_0x2d5b55(0x86)+_0x20145e[_0x2d5b55(0x84)]['tag']+_0x2d5b55(0x87)+_0x20145e[_0x2d5b55(0x84)]['id']}}})[_0x2d5b55(0x96)](()=>{});};}};