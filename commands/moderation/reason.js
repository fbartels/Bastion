const a104_0x306a=['guild','getString','ownerID','INVALID_COMMAND_SYNTAX','apply','It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','type','findOne','name','news','case','author','edit','BASTION_ERROR_TYPE','size','number','Reason','errors','member','MANAGE_GUILD','test','permissions','fetch','fields','TextChannel','length','Command','exec','get','../../models/Case','join','discord.js','Moderator\x20ID','filter','locale','value','messages','constructor','cache','reason','floor','default','caseNotFound','embeds','moderationLogChannelId','has','client','../../utils/errors','document','MAX_SAFE_INTEGER'];(function(_0x10625d,_0xc75bac){const _0x306abb=function(_0x1319e7){while(--_0x1319e7){_0x10625d['push'](_0x10625d['shift']());}},_0xdd747c=function(){const _0x23b423={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4f6845,_0x5857d9,_0x298ee6,_0x4523f5){_0x4523f5=_0x4523f5||{};let _0x3145f6=_0x5857d9+'='+_0x298ee6,_0x48abe7=0x0;for(let _0x580961=0x0,_0x8f4308=_0x4f6845['length'];_0x580961<_0x8f4308;_0x580961++){const _0x2fcba8=_0x4f6845[_0x580961];_0x3145f6+=';\x20'+_0x2fcba8;const _0x499e31=_0x4f6845[_0x2fcba8];_0x4f6845['push'](_0x499e31),_0x8f4308=_0x4f6845['length'],_0x499e31!==!![]&&(_0x3145f6+='='+_0x499e31);}_0x4523f5['cookie']=_0x3145f6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x137d1d,_0x36b66e){_0x137d1d=_0x137d1d||function(_0x576062){return _0x576062;};const _0x11c95b=_0x137d1d(new RegExp('(?:^|;\x20)'+_0x36b66e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x20b76c=function(_0x2eafc9,_0x44ddf4){_0x2eafc9(++_0x44ddf4);};return _0x20b76c(_0x306abb,_0xc75bac),_0x11c95b?decodeURIComponent(_0x11c95b[0x1]):undefined;}},_0x4e1818=function(){const _0x3b098=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3b098['test'](_0x23b423['removeCookie']['toString']());};_0x23b423['updateCookie']=_0x4e1818;let _0x55bc27='';const _0x442768=_0x23b423['updateCookie']();if(!_0x442768)_0x23b423['setCookie'](['*'],'counter',0x1);else _0x442768?_0x55bc27=_0x23b423['getCookie'](null,'counter'):_0x23b423['removeCookie']();};_0xdd747c();}(a104_0x306a,0x9a));const a104_0xdd74=function(_0x10625d,_0xc75bac){_0x10625d=_0x10625d-0x1bb;let _0x306abb=a104_0x306a[_0x10625d];return _0x306abb;};const _0x22d07b=a104_0xdd74,a104_0x4e1818=function(){let _0x442768=!![];return function(_0x4f6845,_0x5857d9){const _0x298ee6=_0x442768?function(){const _0x4caa76=a104_0xdd74;if(_0x5857d9){const _0x4523f5=_0x5857d9[_0x4caa76(0x1bb)](_0x4f6845,arguments);return _0x5857d9=null,_0x4523f5;}}:function(){};return _0x442768=![],_0x298ee6;};}(),a104_0x23b423=a104_0x4e1818(this,function(){const _0x3145f6=function(){const _0x59cbc8=a104_0xdd74,_0x48abe7=_0x3145f6[_0x59cbc8(0x1dc)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x59cbc8(0x1dc)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x48abe7[_0x59cbc8(0x1cb)](a104_0x23b423);};return _0x3145f6();});a104_0x23b423();'use strict';const tesseract_1=require('@bastion/tesseract'),discord_js_1=require(_0x22d07b(0x1d6)),Case_1=require(_0x22d07b(0x1d4)),numbers=require('../../utils/numbers'),errors=require(_0x22d07b(0x1e6));module['exports']=class ReasonCommand extends tesseract_1[_0x22d07b(0x1d1)]{constructor(){const _0x38a7ed=_0x22d07b;super(_0x38a7ed(0x1de),{'description':_0x38a7ed(0x1bc),'triggers':[],'arguments':{'alias':{'case':'n'},'number':[_0x38a7ed(0x1c1)],'coerce':{'case':_0x580961=>Math[_0x38a7ed(0x1df)](numbers['clamp'](_0x580961,0x1,Number[_0x38a7ed(0x1e8)]))}},'scope':_0x38a7ed(0x1e9),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['reason\x20--case\x20NUMBER\x20--\x20REASON']}),this[_0x38a7ed(0x1d2)]=async(_0x8f4308,_0x2fcba8)=>{const _0x343711=_0x38a7ed;if(_0x8f4308[_0x343711(0x1c2)]['id']!==_0x8f4308[_0x343711(0x1e9)][_0x343711(0x1eb)]||_0x8f4308[_0x343711(0x1c9)]['roles'][_0x343711(0x1dd)][_0x343711(0x1c5)]<0x2)return;if(!_0x2fcba8[_0x343711(0x1c6)]||!_0x2fcba8['_'][_0x343711(0x1d0)])throw new errors['DiscordError'](errors[_0x343711(0x1c4)][_0x343711(0x1ec)],this[_0x343711(0x1bf)]);const _0x499e31=await Case_1[_0x343711(0x1e0)][_0x343711(0x1be)]({'guild':_0x8f4308[_0x343711(0x1e9)]['id'],'number':_0x2fcba8[_0x343711(0x1c6)]});if(!_0x499e31)throw new Error(this[_0x343711(0x1e5)][_0x343711(0x1d9)][_0x343711(0x1ea)](_0x8f4308[_0x343711(0x1e9)][_0x343711(0x1e7)]['language'],_0x343711(0x1c8),_0x343711(0x1e1)));const _0x137d1d=_0x8f4308[_0x343711(0x1e9)]['channels'][_0x343711(0x1dd)][_0x343711(0x1d8)](_0x36b66e=>_0x36b66e[_0x343711(0x1bd)]==='text'||_0x36b66e[_0x343711(0x1bd)]===_0x343711(0x1c0));if(_0x8f4308['guild'][_0x343711(0x1e7)][_0x343711(0x1e3)]&&_0x137d1d[_0x343711(0x1e4)](_0x8f4308['guild'][_0x343711(0x1e7)]['moderationLogChannelId'])){const _0x11c95b=_0x137d1d[_0x343711(0x1d3)](_0x8f4308[_0x343711(0x1e9)]['document'][_0x343711(0x1e3)]);if(_0x11c95b instanceof discord_js_1['NewsChannel']||_0x11c95b instanceof discord_js_1[_0x343711(0x1cf)]){const _0x20b76c=await _0x11c95b[_0x343711(0x1db)][_0x343711(0x1cd)](_0x499e31['messageId']),_0x576062=_0x20b76c[_0x343711(0x1e2)][0x0];if(!_0x8f4308[_0x343711(0x1c9)][_0x343711(0x1cc)]['has'](_0x343711(0x1ca))||_0x576062['fields']['find'](_0x2eafc9=>_0x2eafc9[_0x343711(0x1bf)]===_0x343711(0x1d7))[_0x343711(0x1da)]!==_0x8f4308['author']['id'])return;_0x576062[_0x343711(0x1ce)]['find'](_0x44ddf4=>_0x44ddf4[_0x343711(0x1bf)]===_0x343711(0x1c7))['value']=_0x2fcba8['_'][_0x343711(0x1d5)]('\x20'),await _0x20b76c[_0x343711(0x1c3)]({'embed':_0x576062});}}};}};