const a97_0x198a=['Constants','send','name','has','ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON','../../utils/errors','paginate','@bastion/tesseract','resolver','page','reason','ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON','DARK_BUT_NOT_BLACK','join','COLORS','errors','list','map','resolveUser','members','test','apply','catch','ORANGE','DiscordError','channel','document','Page\x20','\x20of\x20','pages','client','Reason','author','Command','user','INVALID_COMMAND_SYNTAX','BAN_MEMBERS','guildBanAdd','ownerID','constructor','Banned\x20Users','exec','language','ban\x20--user\x20USER_ID\x20--\x20REASON','tag','ban\x20--list','soft','canManage','It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','\x20/\x20','getString','member','days','BASTION_ERROR_TYPE','rolePosition','locale','values','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','unauthorized','info'];(function(_0x53fead,_0x5d1642){const _0x198af5=function(_0x3fe3c6){while(--_0x3fe3c6){_0x53fead['push'](_0x53fead['shift']());}},_0x252071=function(){const _0x42d3a4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bf89d,_0x20aa3e,_0xa9ab53,_0xc34eb7){_0xc34eb7=_0xc34eb7||{};let _0x48d34f=_0x20aa3e+'='+_0xa9ab53,_0x6fdd8a=0x0;for(let _0xf400c2=0x0,_0x7d5faf=_0x5bf89d['length'];_0xf400c2<_0x7d5faf;_0xf400c2++){const _0x59d3f4=_0x5bf89d[_0xf400c2];_0x48d34f+=';\x20'+_0x59d3f4;const _0x3c7e82=_0x5bf89d[_0x59d3f4];_0x5bf89d['push'](_0x3c7e82),_0x7d5faf=_0x5bf89d['length'],_0x3c7e82!==!![]&&(_0x48d34f+='='+_0x3c7e82);}_0xc34eb7['cookie']=_0x48d34f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x515c94,_0x3500aa){_0x515c94=_0x515c94||function(_0x32aef9){return _0x32aef9;};const _0x159715=_0x515c94(new RegExp('(?:^|;\x20)'+_0x3500aa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x13d7c5=function(_0x2b617f,_0x21d703){_0x2b617f(++_0x21d703);};return _0x13d7c5(_0x198af5,_0x5d1642),_0x159715?decodeURIComponent(_0x159715[0x1]):undefined;}},_0x5829e4=function(){const _0x4bb0ca=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4bb0ca['test'](_0x42d3a4['removeCookie']['toString']());};_0x42d3a4['updateCookie']=_0x5829e4;let _0x291370='';const _0x5d55ae=_0x42d3a4['updateCookie']();if(!_0x5d55ae)_0x42d3a4['setCookie'](['*'],'counter',0x1);else _0x5d55ae?_0x291370=_0x42d3a4['getCookie'](null,'counter'):_0x42d3a4['removeCookie']();};_0x252071();}(a97_0x198a,0x12f));const a97_0x2520=function(_0x53fead,_0x5d1642){_0x53fead=_0x53fead-0x196;let _0x198af5=a97_0x198a[_0x53fead];return _0x198af5;};const _0x5531f7=a97_0x2520,a97_0x5829e4=function(){let _0x5d55ae=!![];return function(_0x5bf89d,_0x20aa3e){const _0xa9ab53=_0x5d55ae?function(){const _0x485e29=a97_0x2520;if(_0x20aa3e){const _0xc34eb7=_0x20aa3e[_0x485e29(0x1ad)](_0x5bf89d,arguments);return _0x20aa3e=null,_0xc34eb7;}}:function(){};return _0x5d55ae=![],_0xa9ab53;};}(),a97_0x42d3a4=a97_0x5829e4(this,function(){const _0x48d34f=function(){const _0x29d5d7=a97_0x2520,_0x6fdd8a=_0x48d34f[_0x29d5d7(0x1bf)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x29d5d7(0x1d2));return!_0x6fdd8a[_0x29d5d7(0x1ac)](a97_0x42d3a4);};return _0x48d34f();});a97_0x42d3a4();'use strict';const tesseract_1=require(_0x5531f7(0x19f)),errors=require(_0x5531f7(0x19d)),pagination=require('../../utils/pagination');module['exports']=class Ban extends tesseract_1[_0x5531f7(0x1b9)]{constructor(){const _0x3d3861=_0x5531f7;super('ban',{'description':_0x3d3861(0x1c8),'triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[_0x3d3861(0x1a8),_0x3d3861(0x1c6)],'default':{'days':0x0,'page':0x1},'number':[_0x3d3861(0x1cc),_0x3d3861(0x1a1)],'string':[_0x3d3861(0x1ba)]},'scope':_0x3d3861(0x1d1),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['BAN_MEMBERS'],'userPermissions':[_0x3d3861(0x1bc)],'syntax':[_0x3d3861(0x1c5),'ban\x20--list\x20--page\x203',_0x3d3861(0x1c3),_0x3d3861(0x1a3),_0x3d3861(0x19c)]}),this[_0x3d3861(0x1c1)]=async(_0xf400c2,_0x7d5faf)=>{const _0x27702a=_0x3d3861;if(_0x7d5faf[_0x27702a(0x1a8)]){const _0x515c94=await _0xf400c2['guild']['fetchBans'](),_0x3500aa=pagination[_0x27702a(0x19e)]([..._0x515c94[_0x27702a(0x1d0)]()],_0x7d5faf[_0x27702a(0x1a1)]);return await _0xf400c2[_0x27702a(0x1b1)][_0x27702a(0x199)]({'embed':{'color':tesseract_1[_0x27702a(0x198)][_0x27702a(0x1a6)][_0x27702a(0x1af)],'title':_0x27702a(0x1c0),'description':'Users\x20banned\x20in\x20'+_0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x19a)],'fields':_0x3500aa['items'][_0x27702a(0x1a9)](_0x159715=>({'name':_0x159715[_0x27702a(0x1ba)][_0x27702a(0x1c4)]+_0x27702a(0x1c9)+_0x159715['user']['id'],'value':_0x159715[_0x27702a(0x1a2)]||'-'})),'footer':{'text':_0x27702a(0x1b3)+_0x3500aa[_0x27702a(0x1a1)]+_0x27702a(0x1b4)+_0x3500aa[_0x27702a(0x1b5)]}}});}const _0x59d3f4=this['client'][_0x27702a(0x1a0)][_0x27702a(0x1aa)](_0x7d5faf['user']);if(!_0x59d3f4)throw new errors[(_0x27702a(0x1b0))](errors[_0x27702a(0x1cd)][_0x27702a(0x1bb)],this[_0x27702a(0x19a)]);if(_0xf400c2[_0x27702a(0x1b8)]['id']!==_0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1be)]&&_0xf400c2[_0x27702a(0x1d1)]['members']['cache'][_0x27702a(0x19b)](_0x59d3f4['id'])&&!_0xf400c2[_0x27702a(0x1cb)][_0x27702a(0x1c7)](_0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1ab)]['cache']['get'](_0x59d3f4['id'])))return await _0xf400c2[_0x27702a(0x1b1)][_0x27702a(0x199)]({'embed':{'color':tesseract_1[_0x27702a(0x198)]['COLORS']['RED'],'title':this['client'][_0x27702a(0x1cf)]['getString'](_0xf400c2['guild']['document'][_0x27702a(0x1c2)],_0x27702a(0x1a7),_0x27702a(0x196)),'description':this['client'][_0x27702a(0x1cf)][_0x27702a(0x1ca)](_0xf400c2[_0x27702a(0x1d1)]['document'][_0x27702a(0x1c2)],_0x27702a(0x1a7),_0x27702a(0x1ce),_0xf400c2['author'][_0x27702a(0x1c4)],_0x59d3f4[_0x27702a(0x1c4)])}})[_0x27702a(0x1ae)](()=>{});const _0x3c7e82=_0x7d5faf['_'][_0x27702a(0x1a5)]('\x20')||'-';await _0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1ab)]['ban'](_0x59d3f4,{'days':_0x7d5faf[_0x27702a(0x1cc)],'reason':_0x3c7e82}),_0x7d5faf[_0x27702a(0x1c6)]&&await _0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1ab)]['unban'](_0x59d3f4,_0x3c7e82),await _0xf400c2[_0x27702a(0x1b1)][_0x27702a(0x199)]({'embed':{'color':tesseract_1['Constants'][_0x27702a(0x1a6)][_0x27702a(0x1a4)],'description':_0x7d5faf[_0x27702a(0x1c6)]?this['client'][_0x27702a(0x1cf)]['getString'](_0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1b2)][_0x27702a(0x1c2)],'info','memberSoftBan',_0xf400c2['author']['tag'],_0x59d3f4['tag']):this[_0x27702a(0x1b6)][_0x27702a(0x1cf)][_0x27702a(0x1ca)](_0xf400c2[_0x27702a(0x1d1)][_0x27702a(0x1b2)][_0x27702a(0x1c2)],_0x27702a(0x197),_0x27702a(0x1bd),_0xf400c2[_0x27702a(0x1b8)]['tag'],_0x59d3f4[_0x27702a(0x1c4)]),'fields':[{'name':_0x27702a(0x1b7),'value':_0x3c7e82}],'footer':{'text':_0x59d3f4['id']}}})[_0x27702a(0x1ae)](()=>{});};}};