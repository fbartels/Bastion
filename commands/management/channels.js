const a80_0x33c6=['channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','send','channelDeleteQuestion','channel','author','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','../../utils/confirmation','constructor','document','default','has','MANAGE_CHANNELS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','create','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','ChannelCreate','join','channels\x20--rename\x20NAME\x20--\x20REASON','exports','../../utils/errors','language','premiumTier','Command','includes','channels\x20--delete\x20--\x20REASON','INVALID_COMMAND_SYNTAX','type','channels\x20--create\x20NAME\x20--\x20REASON','catch','length','textChannelRename','cache','category','GREEN','getString','guild','delete','rename','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','info','BASTION_ERROR_TYPE','tag','locale','text','DiscordError','nsfw','slowmode','client','topic','COLORS','limit','@bastion/tesseract','name','channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON','test'];(function(_0x52963b,_0x719c65){const _0x33c631=function(_0xe060b6){while(--_0xe060b6){_0x52963b['push'](_0x52963b['shift']());}},_0x12a579=function(){const _0x52b2ac={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2e9882,_0x5dc05a,_0x5bf772,_0xfec7e7){_0xfec7e7=_0xfec7e7||{};let _0x17ed34=_0x5dc05a+'='+_0x5bf772,_0x249f3b=0x0;for(let _0x176847=0x0,_0x221102=_0x2e9882['length'];_0x176847<_0x221102;_0x176847++){const _0x1b99dc=_0x2e9882[_0x176847];_0x17ed34+=';\x20'+_0x1b99dc;const _0x225798=_0x2e9882[_0x1b99dc];_0x2e9882['push'](_0x225798),_0x221102=_0x2e9882['length'],_0x225798!==!![]&&(_0x17ed34+='='+_0x225798);}_0xfec7e7['cookie']=_0x17ed34;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d9fcc,_0x2f177e){_0x1d9fcc=_0x1d9fcc||function(_0x5ce859){return _0x5ce859;};const _0x32fb33=_0x1d9fcc(new RegExp('(?:^|;\x20)'+_0x2f177e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x21d3d8=function(_0x4aa489,_0x3a4497){_0x4aa489(++_0x3a4497);};return _0x21d3d8(_0x33c631,_0x719c65),_0x32fb33?decodeURIComponent(_0x32fb33[0x1]):undefined;}},_0x1e162c=function(){const _0x328268=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x328268['test'](_0x52b2ac['removeCookie']['toString']());};_0x52b2ac['updateCookie']=_0x1e162c;let _0x1ec2c3='';const _0xa3dff9=_0x52b2ac['updateCookie']();if(!_0xa3dff9)_0x52b2ac['setCookie'](['*'],'counter',0x1);else _0xa3dff9?_0x1ec2c3=_0x52b2ac['getCookie'](null,'counter'):_0x52b2ac['removeCookie']();};_0x12a579();}(a80_0x33c6,0xe0));const a80_0x12a5=function(_0x52963b,_0x719c65){_0x52963b=_0x52963b-0x129;let _0x33c631=a80_0x33c6[_0x52963b];return _0x33c631;};const _0x134c04=a80_0x12a5,a80_0x1e162c=function(){let _0xa3dff9=!![];return function(_0x2e9882,_0x5dc05a){const _0x5bf772=_0xa3dff9?function(){if(_0x5dc05a){const _0xfec7e7=_0x5dc05a['apply'](_0x2e9882,arguments);return _0x5dc05a=null,_0xfec7e7;}}:function(){};return _0xa3dff9=![],_0x5bf772;};}(),a80_0x52b2ac=a80_0x1e162c(this,function(){const _0x17ed34=function(){const _0x1a3b90=a80_0x12a5,_0x249f3b=_0x17ed34[_0x1a3b90(0x131)](_0x1a3b90(0x136))()[_0x1a3b90(0x131)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x249f3b[_0x1a3b90(0x160)](a80_0x52b2ac);};return _0x17ed34();});a80_0x52b2ac();'use strict';const tesseract_1=require(_0x134c04(0x15d)),confirmation_1=require(_0x134c04(0x130)),errors=require(_0x134c04(0x13d)),numbers=require('../../utils/numbers');module[_0x134c04(0x13c)]=class ChannelsCommand extends tesseract_1[_0x134c04(0x140)]{constructor(){const _0x1c53b9=_0x134c04;super('channels',{'description':_0x1c53b9(0x12f),'triggers':[],'arguments':{'array':[_0x1c53b9(0x137),'rename',_0x1c53b9(0x15a)],'boolean':[_0x1c53b9(0x14e),_0x1c53b9(0x157),_0x1c53b9(0x158)],'number':[_0x1c53b9(0x15c)],'string':[_0x1c53b9(0x14a),_0x1c53b9(0x137),_0x1c53b9(0x14f),_0x1c53b9(0x15a)],'coerce':{'type':_0x176847=>[_0x1c53b9(0x14a),_0x1c53b9(0x155),'voice'][_0x1c53b9(0x141)](_0x176847['toLowerCase']())?_0x176847:_0x1c53b9(0x155),'limit':_0x221102=>numbers['clamp'](_0x221102,0x1,0x63)}},'scope':_0x1c53b9(0x14d),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x1c53b9(0x135)],'userPermissions':[_0x1c53b9(0x135)],'syntax':[_0x1c53b9(0x145),'channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON',_0x1c53b9(0x150),_0x1c53b9(0x129),_0x1c53b9(0x12a),_0x1c53b9(0x15f),_0x1c53b9(0x138),_0x1c53b9(0x142),_0x1c53b9(0x13b)]}),this['exec']=async(_0x1b99dc,_0x225798)=>{const _0x9b7c38=_0x1c53b9,_0x1d9fcc=_0x225798['_'][_0x9b7c38(0x13a)]('\x20')||'-';if(_0x225798[_0x9b7c38(0x137)]&&_0x225798['create']['length']){const _0x2f177e=_0x225798[_0x9b7c38(0x137)][_0x9b7c38(0x13a)]('\x20'),_0x32fb33=await _0x1b99dc[_0x9b7c38(0x14d)]['channels'][_0x9b7c38(0x137)](_0x2f177e,{'type':_0x225798[_0x9b7c38(0x144)],'bitrate':_0x1b99dc[_0x9b7c38(0x14d)][_0x9b7c38(0x13f)]*0x1f400||0x17700,'nsfw':_0x225798[_0x9b7c38(0x157)],'reason':_0x1d9fcc,'topic':_0x225798['topic']&&_0x225798[_0x9b7c38(0x15a)][_0x9b7c38(0x147)]?_0x225798[_0x9b7c38(0x15a)][_0x9b7c38(0x13a)]('\x20'):'','userLimit':_0x225798[_0x9b7c38(0x15c)]?_0x225798['limit']:0x0,'rateLimitPerUser':_0x225798['slowmode']?0x5:0x0,'parent':_0x1b99dc[_0x9b7c38(0x14d)]['channels'][_0x9b7c38(0x149)][_0x9b7c38(0x134)](_0x225798[_0x9b7c38(0x14a)])?_0x225798[_0x9b7c38(0x14a)]:_0x1b99dc[_0x9b7c38(0x12d)]['parent']});return await _0x1b99dc[_0x9b7c38(0x12d)][_0x9b7c38(0x12b)]({'embed':{'color':tesseract_1['Constants'][_0x9b7c38(0x15b)][_0x9b7c38(0x14b)],'description':this[_0x9b7c38(0x159)][_0x9b7c38(0x154)][_0x9b7c38(0x14c)](_0x1b99dc[_0x9b7c38(0x14d)][_0x9b7c38(0x132)][_0x9b7c38(0x13e)],_0x9b7c38(0x151),_0x32fb33['type']+_0x9b7c38(0x139),_0x1b99dc[_0x9b7c38(0x12e)]['tag'],_0x32fb33[_0x9b7c38(0x15e)],_0x1d9fcc)}})[_0x9b7c38(0x146)](()=>{});}if(_0x225798[_0x9b7c38(0x14e)]){const _0x21d3d8=await confirmation_1[_0x9b7c38(0x133)](_0x1b99dc,this[_0x9b7c38(0x159)][_0x9b7c38(0x154)][_0x9b7c38(0x14c)](_0x1b99dc[_0x9b7c38(0x14d)][_0x9b7c38(0x132)][_0x9b7c38(0x13e)],'info',_0x9b7c38(0x12c),_0x1b99dc[_0x9b7c38(0x12e)][_0x9b7c38(0x153)],_0x1b99dc[_0x9b7c38(0x12d)][_0x9b7c38(0x15e)]));return _0x21d3d8&&await _0x1b99dc[_0x9b7c38(0x12d)]['delete'](_0x1d9fcc),!![];}if(_0x225798[_0x9b7c38(0x14f)]&&_0x225798[_0x9b7c38(0x14f)]['length']){const _0x5ce859=await _0x1b99dc['channel']['edit']({'name':_0x225798[_0x9b7c38(0x14f)]['join']('\x20')});return await _0x1b99dc[_0x9b7c38(0x12d)]['send']({'embed':{'color':tesseract_1['Constants'][_0x9b7c38(0x15b)][_0x9b7c38(0x14b)],'description':this[_0x9b7c38(0x159)][_0x9b7c38(0x154)][_0x9b7c38(0x14c)](_0x1b99dc['guild'][_0x9b7c38(0x132)][_0x9b7c38(0x13e)],'info',_0x9b7c38(0x148),_0x1b99dc[_0x9b7c38(0x12e)][_0x9b7c38(0x153)],_0x5ce859[_0x9b7c38(0x15e)],_0x1d9fcc)}})[_0x9b7c38(0x146)](()=>{});}throw new errors[(_0x9b7c38(0x156))](errors[_0x9b7c38(0x152)][_0x9b7c38(0x143)],this[_0x9b7c38(0x15e)]);};}};