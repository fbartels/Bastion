const a113_0x38d9=['language','musicMaster','client','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','GREEN','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20Bastion\x27s\x20Music\x20Master\x20role.','channel','send','../../utils/constants','locale','name','exports','role','constructor','info','save','musicMaster\x20--role\x20ROLE_ID','tag','COLORS','exec','enabled','guild','getString','isPublicBastion','musicMasterRoleRemove','catch','resolveRole','apply','document','RED','Command','test','music','return\x20/\x22\x20+\x20this\x20+\x20\x22/','musicDisabled'];(function(_0x21b077,_0x148a1a){const _0x38d9bf=function(_0x20ed66){while(--_0x20ed66){_0x21b077['push'](_0x21b077['shift']());}},_0x542ded=function(){const _0x12f948={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13f217,_0x1736af,_0x476c5e,_0x1e3340){_0x1e3340=_0x1e3340||{};let _0x491f1d=_0x1736af+'='+_0x476c5e,_0x39934e=0x0;for(let _0x2eebfc=0x0,_0x540b7b=_0x13f217['length'];_0x2eebfc<_0x540b7b;_0x2eebfc++){const _0x329ea1=_0x13f217[_0x2eebfc];_0x491f1d+=';\x20'+_0x329ea1;const _0x308dc6=_0x13f217[_0x329ea1];_0x13f217['push'](_0x308dc6),_0x540b7b=_0x13f217['length'],_0x308dc6!==!![]&&(_0x491f1d+='='+_0x308dc6);}_0x1e3340['cookie']=_0x491f1d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1056d0,_0xca57cd){_0x1056d0=_0x1056d0||function(_0x199cc0){return _0x199cc0;};const _0x2b3328=_0x1056d0(new RegExp('(?:^|;\x20)'+_0xca57cd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2cebba=function(_0x286bca,_0x4b229e){_0x286bca(++_0x4b229e);};return _0x2cebba(_0x38d9bf,_0x148a1a),_0x2b3328?decodeURIComponent(_0x2b3328[0x1]):undefined;}},_0x3c687e=function(){const _0x1c0e2e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c0e2e['test'](_0x12f948['removeCookie']['toString']());};_0x12f948['updateCookie']=_0x3c687e;let _0x283465='';const _0x2a873c=_0x12f948['updateCookie']();if(!_0x2a873c)_0x12f948['setCookie'](['*'],'counter',0x1);else _0x2a873c?_0x283465=_0x12f948['getCookie'](null,'counter'):_0x12f948['removeCookie']();};_0x542ded();}(a113_0x38d9,0xd0));const a113_0x542d=function(_0x21b077,_0x148a1a){_0x21b077=_0x21b077-0x182;let _0x38d9bf=a113_0x38d9[_0x21b077];return _0x38d9bf;};const _0x150ab3=a113_0x542d,a113_0x3c687e=function(){let _0x2a873c=!![];return function(_0x13f217,_0x1736af){const _0x476c5e=_0x2a873c?function(){const _0x41d922=a113_0x542d;if(_0x1736af){const _0x1e3340=_0x1736af[_0x41d922(0x182)](_0x13f217,arguments);return _0x1736af=null,_0x1e3340;}}:function(){};return _0x2a873c=![],_0x476c5e;};}(),a113_0x12f948=a113_0x3c687e(this,function(){const _0x491f1d=function(){const _0x3e1811=a113_0x542d,_0x39934e=_0x491f1d[_0x3e1811(0x198)](_0x3e1811(0x188))()['constructor'](_0x3e1811(0x18d));return!_0x39934e[_0x3e1811(0x186)](a113_0x12f948);};return _0x491f1d();});a113_0x12f948();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(_0x150ab3(0x193));module[_0x150ab3(0x196)]=class MusicMaster extends tesseract_1[_0x150ab3(0x185)]{constructor(){const _0x954f34=_0x150ab3;super('musicMaster',{'description':_0x954f34(0x190),'triggers':[],'arguments':{'alias':{'role':['r']},'string':[_0x954f34(0x197)]},'scope':_0x954f34(0x1a0),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x954f34(0x19b),_0x954f34(0x18b)]}),this[_0x954f34(0x19e)]=async(_0x2eebfc,_0x540b7b)=>{const _0x51eada=_0x954f34,_0x329ea1=_0x2eebfc[_0x51eada(0x1a0)];if(!_0x329ea1[_0x51eada(0x183)][_0x51eada(0x187)]||!_0x329ea1['document']['music'][_0x51eada(0x19f)])return await _0x2eebfc[_0x51eada(0x191)][_0x51eada(0x192)]({'embed':{'color':tesseract_1[_0x51eada(0x18e)][_0x51eada(0x19d)]['RED'],'description':this[_0x51eada(0x18c)][_0x51eada(0x194)][_0x51eada(0x1a1)](_0x2eebfc[_0x51eada(0x1a0)][_0x51eada(0x183)][_0x51eada(0x18a)],'errors',constants[_0x51eada(0x1a2)](_0x2eebfc['author'])?'musicDisabledPublic':_0x51eada(0x189))}})[_0x51eada(0x1a4)](()=>{});const _0x308dc6=this[_0x51eada(0x18c)]['resolver'][_0x51eada(0x1a5)](_0x329ea1,_0x540b7b[_0x51eada(0x197)]);_0x329ea1[_0x51eada(0x183)][_0x51eada(0x187)]={..._0x329ea1[_0x51eada(0x183)][_0x51eada(0x187)],'roleId':_0x308dc6?_0x308dc6['id']:undefined},_0x329ea1[_0x51eada(0x183)][_0x51eada(0x19a)](),await _0x2eebfc[_0x51eada(0x191)][_0x51eada(0x192)]({'embed':{'color':_0x308dc6?tesseract_1[_0x51eada(0x18e)][_0x51eada(0x19d)][_0x51eada(0x18f)]:tesseract_1[_0x51eada(0x18e)]['COLORS'][_0x51eada(0x184)],'description':this['client'][_0x51eada(0x194)][_0x51eada(0x1a1)](_0x2eebfc['guild'][_0x51eada(0x183)][_0x51eada(0x18a)],_0x51eada(0x199),_0x308dc6?'musicMasterRoleAdd':_0x51eada(0x1a3),_0x2eebfc['author'][_0x51eada(0x19c)],_0x308dc6?_0x308dc6[_0x51eada(0x195)]:null)}})[_0x51eada(0x1a4)](()=>{});};}};