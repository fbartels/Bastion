const a134_0x4e75=['isPublicBastion','@bastion/tesseract','getString','member','karma','author','constructor','Karma','\x20/\x20','Cake\x20Day','badgeValue','test','resolver','profile\x20USER','language','computeExperience','../../models/Member','displayAvatarURL','nextLevel','round','locale','Bastion\x20Profile','default','user','cakeDay','IRIS','send','Rank','errors','memberNotFound','experience','gamification','info','../../utils/progress','catch','resolveGuildMember','document','Progress\x20-\x20','../../utils/badges','Location','DEFAUL_LEVELUP_MULTIPLIER','length','Command','apply','Bastion\x20Coins','Oh,\x20hey!\x20Here\x27s\x20my\x20developer!','toDateString','profile','Experience','level','countDocuments','guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','tag','channel','About','Constants','COLORS','map','exec','exports','Level','color','backdrop','join','currentLevel','then','findById','balance','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','multiplier','resolveBadges','find','client'];(function(_0x3899e8,_0x3d0c18){const _0x4e75f7=function(_0x2e2e3e){while(--_0x2e2e3e){_0x3899e8['push'](_0x3899e8['shift']());}},_0x2579a1=function(){const _0x1da317={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13fb34,_0x2293ed,_0x1062c0,_0x2adfec){_0x2adfec=_0x2adfec||{};let _0x9b2774=_0x2293ed+'='+_0x1062c0,_0x428553=0x0;for(let _0x260d24=0x0,_0x162add=_0x13fb34['length'];_0x260d24<_0x162add;_0x260d24++){const _0x110c4a=_0x13fb34[_0x260d24];_0x9b2774+=';\x20'+_0x110c4a;const _0x2c75a7=_0x13fb34[_0x110c4a];_0x13fb34['push'](_0x2c75a7),_0x162add=_0x13fb34['length'],_0x2c75a7!==!![]&&(_0x9b2774+='='+_0x2c75a7);}_0x2adfec['cookie']=_0x9b2774;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3125b2,_0x427440){_0x3125b2=_0x3125b2||function(_0x1fe766){return _0x1fe766;};const _0x4e380b=_0x3125b2(new RegExp('(?:^|;\x20)'+_0x427440['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3fc404=function(_0x280229,_0x3f417f){_0x280229(++_0x3f417f);};return _0x3fc404(_0x4e75f7,_0x3d0c18),_0x4e380b?decodeURIComponent(_0x4e380b[0x1]):undefined;}},_0x36d52e=function(){const _0x20b671=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x20b671['test'](_0x1da317['removeCookie']['toString']());};_0x1da317['updateCookie']=_0x36d52e;let _0xaa3369='';const _0x7c0cfb=_0x1da317['updateCookie']();if(!_0x7c0cfb)_0x1da317['setCookie'](['*'],'counter',0x1);else _0x7c0cfb?_0xaa3369=_0x1da317['getCookie'](null,'counter'):_0x1da317['removeCookie']();};_0x2579a1();}(a134_0x4e75,0x88));const a134_0x2579=function(_0x3899e8,_0x3d0c18){_0x3899e8=_0x3899e8-0xf8;let _0x4e75f7=a134_0x4e75[_0x3899e8];return _0x4e75f7;};const _0x2ebf0b=a134_0x2579,a134_0x36d52e=function(){let _0x7c0cfb=!![];return function(_0x13fb34,_0x2293ed){const _0x1062c0=_0x7c0cfb?function(){const _0x5147e5=a134_0x2579;if(_0x2293ed){const _0x2adfec=_0x2293ed[_0x5147e5(0x12f)](_0x13fb34,arguments);return _0x2293ed=null,_0x2adfec;}}:function(){};return _0x7c0cfb=![],_0x1062c0;};}(),a134_0x1da317=a134_0x36d52e(this,function(){const _0x9b2774=function(){const _0x4638e3=a134_0x2579,_0x428553=_0x9b2774[_0x4638e3(0x10a)](_0x4638e3(0x138))()[_0x4638e3(0x10a)](_0x4638e3(0xff));return!_0x428553[_0x4638e3(0x10f)](a134_0x1da317);};return _0x9b2774();});a134_0x1da317();'use strict';const tesseract_1=require(_0x2ebf0b(0x105)),Member_1=require(_0x2ebf0b(0x114)),User_1=require('../../models/User'),badges=require(_0x2ebf0b(0x12a)),constants=require('../../utils/constants'),gamification=require('../../utils/gamification'),progress_1=require(_0x2ebf0b(0x125));module[_0x2ebf0b(0x140)]=class ProfileCommand extends tesseract_1[_0x2ebf0b(0x12e)]{constructor(){const _0x10675a=_0x2ebf0b;super(_0x10675a(0x133),{'description':'It\x20allows\x20you\x20to\x20see\x20your\x20(or\x20any\x20of\x20the\x20server\x20member\x27s)\x20Bastion\x20Profile.','triggers':[],'arguments':{},'scope':_0x10675a(0x137),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['profile',_0x10675a(0x111)]}),this[_0x10675a(0x13f)]=async(_0x260d24,_0x162add)=>{const _0x3060a9=_0x10675a,_0x110c4a=_0x162add['_'][_0x3060a9(0x12d)]?_0x162add['_'][0x0]:_0x260d24[_0x3060a9(0x109)]['id'],_0x2c75a7=_0x110c4a===_0x260d24[_0x3060a9(0x109)]['id']?_0x260d24[_0x3060a9(0x107)]:this[_0x3060a9(0x103)][_0x3060a9(0x110)][_0x3060a9(0x127)](_0x260d24[_0x3060a9(0x137)],_0x110c4a);if(!_0x2c75a7)throw new Error(this[_0x3060a9(0x103)][_0x3060a9(0x118)]['getString'](_0x260d24['guild'][_0x3060a9(0x128)][_0x3060a9(0x112)],'errors',_0x3060a9(0x121)));const _0x3125b2=_0x110c4a===_0x260d24[_0x3060a9(0x109)]['id']?_0x260d24[_0x3060a9(0x109)][_0x3060a9(0x128)]:await User_1[_0x3060a9(0x11a)][_0x3060a9(0xfd)](_0x110c4a),_0x427440=_0x110c4a===_0x260d24[_0x3060a9(0x109)]['id']?_0x2c75a7['document']:await Member_1[_0x3060a9(0x11a)]['findOne']({'user':_0x110c4a,'guild':_0x260d24[_0x3060a9(0x137)]['id']});if(!_0x3125b2||!_0x427440)throw new Error(this[_0x3060a9(0x103)][_0x3060a9(0x118)][_0x3060a9(0x106)](_0x260d24[_0x3060a9(0x137)][_0x3060a9(0x128)][_0x3060a9(0x112)],_0x3060a9(0x120),'profileNotFound',_0x2c75a7['user'][_0x3060a9(0x139)]));const _0x4e380b=await Member_1[_0x3060a9(0x11a)][_0x3060a9(0x102)]({'guild':_0x260d24[_0x3060a9(0x137)]['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1}})[_0x3060a9(0x136)]({'$or':[{'level':{'$gt':_0x427440[_0x3060a9(0x135)]}},{'level':_0x427440[_0x3060a9(0x135)],'experience':{'$gt':_0x427440['experience']}},{'level':_0x427440[_0x3060a9(0x135)],'experience':_0x427440[_0x3060a9(0x122)],'karma':{'$gt':_0x427440[_0x3060a9(0x108)]}},{'level':_0x427440[_0x3060a9(0x135)],'experience':_0x427440['experience'],'karma':_0x427440['karma'],'balance':{'$gt':_0x427440[_0x3060a9(0xfe)]}}]}),_0x3fc404={'currentLevel':gamification[_0x3060a9(0x113)](_0x427440[_0x3060a9(0x135)],_0x260d24[_0x3060a9(0x137)]['document'][_0x3060a9(0x123)]?_0x260d24[_0x3060a9(0x137)]['document'][_0x3060a9(0x123)][_0x3060a9(0x100)]:gamification[_0x3060a9(0x12c)]),'nextLevel':gamification[_0x3060a9(0x113)](_0x427440[_0x3060a9(0x135)]+0x1,_0x260d24['guild'][_0x3060a9(0x128)][_0x3060a9(0x123)]?_0x260d24[_0x3060a9(0x137)][_0x3060a9(0x128)][_0x3060a9(0x123)][_0x3060a9(0x100)]:gamification[_0x3060a9(0x12c)])},_0x1fe766={'currentLevel':_0x427440[_0x3060a9(0x122)]-_0x3fc404[_0x3060a9(0xfb)],'nextLevel':_0x3fc404[_0x3060a9(0x116)]-_0x3fc404[_0x3060a9(0xfb)]},_0x280229=_0x1fe766[_0x3060a9(0xfb)]/_0x1fe766[_0x3060a9(0x116)]*0x64,_0x3f417f=constants[_0x3060a9(0x104)](this[_0x3060a9(0x103)]['user'])&&await badges['fetchBadges'](_0x2c75a7['id'])[_0x3060a9(0xfc)](_0x20b671=>_0x20b671['json']())['catch'](()=>{});_0x260d24[_0x3060a9(0x13a)][_0x3060a9(0x11e)]({'embed':{'color':_0x3125b2[_0x3060a9(0xf8)]||tesseract_1[_0x3060a9(0x13c)][_0x3060a9(0x13d)][_0x3060a9(0x11d)],'author':{'name':_0x2c75a7['user'][_0x3060a9(0x139)]},'title':_0x3060a9(0x119),'description':(_0x3f417f&&_0x3060a9(0x10e)in _0x3f417f?badges[_0x3060a9(0x101)](_0x3f417f[_0x3060a9(0x10e)]):[])[_0x3060a9(0x13e)](_0x5e0c37=>_0x5e0c37['emoji'])[_0x3060a9(0xfa)]('\x20'),'fields':[{'name':_0x3060a9(0x13b),'value':_0x3125b2[_0x3060a9(0x124)]||'-'},{'name':_0x3060a9(0x11f),'value':_0x4e380b+0x1,'inline':!![]},{'name':_0x3060a9(0x141),'value':_0x427440[_0x3060a9(0x135)],'inline':!![]},{'name':_0x3060a9(0x134),'value':_0x427440['experience'],'inline':!![]},{'name':_0x3060a9(0x10b),'value':_0x427440[_0x3060a9(0x108)],'inline':!![]},{'name':_0x3060a9(0x130),'value':_0x427440[_0x3060a9(0xfe)],'inline':!![]},{'name':_0x3060a9(0x129)+_0x1fe766[_0x3060a9(0xfb)]+_0x3060a9(0x10c)+_0x1fe766[_0x3060a9(0x116)]+'\x20-\x20'+Math[_0x3060a9(0x117)](_0x280229)+'%','value':'`'+progress_1[_0x3060a9(0x11a)](_0x280229,0x23)+'`'},{'name':_0x3060a9(0x10d),'value':_0x3125b2[_0x3060a9(0x11c)]?_0x3125b2[_0x3060a9(0x11c)][_0x3060a9(0x132)]():'-','inline':!![]},{'name':_0x3060a9(0x12b),'value':_0x3125b2['location']||'-','inline':!![]}],'thumbnail':{'url':_0x2c75a7[_0x3060a9(0x11b)][_0x3060a9(0x115)]({'dynamic':!![],'size':0x200})},'image':{'url':_0x3125b2[_0x3060a9(0xf9)]},'footer':{'text':_0x2c75a7['id']===this[_0x3060a9(0x103)][_0x3060a9(0x118)]['getConstant']('author.discord.id')?_0x3060a9(0x131):''}}})[_0x3060a9(0x126)](()=>{});};}};