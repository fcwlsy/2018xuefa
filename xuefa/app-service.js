	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	
	define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return(t=t.toString())[1]?t:"0"+t}module.exports={formatTime:function(e){var n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),u=e.getHours(),i=e.getMinutes(),g=e.getSeconds();return[n,o,r].map(t).join("/")+" "+[u,i,g].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({onLaunch:function(){wx.getStorageSync("openid");wx.login({success:function(n){var o=n.code;wx.request({url:"https://www.91cch.cn/userapi/uninoId.php",method:"GET",data:{code:o},success:function(n){console.log("openid:"+n.data.openid),wx.setStorageSync("unionid",n.data.unionid),wx.setStorageSync("openid",n.data.openid)}})}})},globalData:{zfengshu:null,guanzhu:null}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o,t,a,n,s,c,i,r,g,l,u,d,w,S,x,y,h,m,p=0,f=0,v=0,k=1,z=1,D=getApp(),_=0,b=0,T=1;Page({data:{guanzhu:0,zanzhu:0,zanzhu1:0,zanzhu2:0,motto:"Hello World",userinfo:{},username:null,password:null,nerong:null,usermsg:null,xm:null,zjf:null,drjf:null,xie:null,shijianzhi:0,clock:"",second:0,mingyan:null,kaitong:"",genghuan:0},onShow:function(){var e=this;1==v&&(console.log("激活前台jishi"+v),e.jishi())},onLoad:function(e){var t=0,a=this;T=1;wx.getStorageSync("banben");var n=this;o=wx.getStorageSync("xie"),g=wx.getStorageSync("id"+o),u=wx.getStorageSync("diqu"),console.log("地区 :"+u),"新疆"==u&&(u=65),"贵州"==u&&(u=52),"云南"==u&&(u=53),"青海"==u&&(u=63),"内蒙"==u&&(u=15),"山西"==u&&(u=14),void 0==g&&(g=""),console.log("ID:"+g),m=wx.getStorageSync("data"),console.log("数据啼:"+m),h="1"+m,console.log(h);wx.getStorageSync("userkey");if(""!=u&&wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",data:{user:u},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data.data),wx.setStorageSync("yztoken",e.data.data.yztoken),n.setData({mingyan:e.data.data.xz}),y=e.data.data.password,wx.setStorageSync("shoufei",e.data.data.password)}}),S=wx.getStorageSync("openid"),d=wx.getStorageSync("unionid"),console.log("unionid:"+d),console.log("openid:"+S),y==d&&(d=""),w=wx.getStorageSync("gopenid"),console.log("gopenid:"+w),void 0==w&&(w=""),S=wx.getStorageSync("openid"),l=wx.getStorageSync("jici"+o),l*=1,console.log(o+"-使用次:"+l),void 0==(y=wx.getStorageSync("shoufei"))&&(y=""),console.log("收费开启否:"+y),void 0==(x=wx.getStorageSync("kaitong"+o))&&(x=""),"0"==x&&(x=""),console.log(o+"-开通否:"+x),"x"==x&&(a.setData({kaitong:"已赞助开通学习"}),a.setData({genghuan:"1"})),"xk"==x&&a.setData({kaitong:"已赞助开通学习+考试"}),l>2){""!=x&&""==d&&(console.log("没关注"),wx.login({success:function(e){var o=e.code;wx.request({url:"https://www.91cch.cn/userapi/uninoId.php",method:"GET",data:{code:o},success:function(e){console.log(e.data),console.log(e.data.openid),console.log(e.data.unionid),console.log("unionid:"+e.data.openid),wx.setStorageSync("unionid",e.data.unionid),wx.setStorageSync("openid",S),void 0==d?wx.showModal({title:"提示",content:"要求关注公众号随时接受考试通知,点进入公众号!",success:function(e){if(e.confirm){console.log("用户点击确定");""==x&&wx.redirectTo({url:"../logs/logs"})}else e.cancel&&(console.log("用户点击取消"),""==x&&wx.redirectTo({url:"../logs/logs"}))}}):D.globalData.guanzhu=0}})}}),D.globalData.guanzhu=1);var s=wx.getStorageSync("yztoken");console.log("有赞："+s),void 0==s&&(s=""),void 0==x&&(x=""),"0"==x&&(x=""),""==x&&""!=g&&""!=s&&l>5&&1==y&&(t=1,wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+m,data:{id:g},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("开通获取"+e.data.data.kaitong),void 0==(x=e.data.data.kaitong)&&(x=""),"0"==x&&(x=""),""==x?T=0:wx.setStorageSync("kaitong"+o,x)}}))}if(0==t){var c=wx.getStorageSync("zidong"+o);console.log("自动:"+c),T="xk"==c?3:1,n.denglu()}else setTimeout(function(){console.log("有赞获取等待"),n.denglu()},3500)},denglu:function(){var t=this;if("0"==(x=wx.getStorageSync("kaitong"+o))&&(x=""),1==T){var a=new Date,n=a.getDate(),s=a.getMonth();e=s+":"+n;var c=wx.getStorageSync("userkey");console.log("一账号:"+c);var i=wx.getStorageSync("userpwd");if(console.log("一密码:"+i),1==g&&(g=""),""==i)wx.removeStorageSync("time"),wx.removeStorageSync("timeyueru"),console.log("logs"),wx.redirectTo({url:"../logs/logs"});else{wx.showLoading({title:"登录中"});var r=wx.getStorageSync("timeyueru"),u=wx.getStorageSync("user_time"+o);if(console.log("现在时间:"+e),console.log("user_time:"+o+u),console.log("使用过:"+r),u==n+s&&(console.log("账号同一天使用"),r=e),r!=e){wx.setStorageSync("timeyueru",e),z=0,console.log("时间不同步:"+z),v=0,t.setData({username:c});var y=wx.getStorageSync("userpwd");t.setData({password:y}),console.log("unionid"+d),console.log("账号:"+c+"密码:"+y);wx.getStorageSync("userkey1");wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=update&tablename=user_"+h,data:{user:c,long_time:"1",status:y,share_id:g,unionid:d,openid:S,kaitong:x,gopenid:w},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log("提交:"+e.data.data),void 0==e.data.data&&wx.showLoading({title:h+"失败"}),wx.setStorageSync("user_time"+o,n+s)}});var m=l+1;wx.setStorageSync("jici"+o,m)}r!=e?setTimeout(function(){console.log("正在等待"),t.binclicklj()},6e3):(console.log("无需等待"),t.binclicklj()),k=1}}0==T&&(t.setData({xm:"为保证小程序稳定性,赞助后正常使用"}),t.setData({zanzhu:"1"})),3==T&&(console.log("直接获取无需等待:"),t.binclicklj())},denglu2:function(){var e=this,o=wx.getStorageSync("userkey");console.log("一账号:"+o);var t=wx.getStorageSync("userpwd");console.log("一密码:"+t),console.log("更新ID:"+g),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+m,data:{id:g,user:o,password:t,long_time:"111"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){}}),wx.showToast({title:"5分钟后更新积分",icon:"success",duration:3e3}),e.jishi(),setTimeout(function(){console.log("正在等待"),e.binclicklj()},245e3)},zizhu:function(e){var o=this;wx.showActionSheet({itemList:["１、未更新积分处理","２、账号重复处理!","３、停止自动积分"],success:function(e){var t=e.tapIndex+1;console.log("切换"+t),1==t&&(console.log("重新提交"),o.denglu2()),2==t&&(console.log("重新提交"),o.chongfu()),3==t&&(console.log("停止自动 "),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+m,data:{id:g,chuli_time:"1"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){wx.showLoading({title:"成功!"}),setTimeout(function(){console.log("有赞获取等待"),wx.hideLoading()},1e3)}}))},fail:function(e){console.log(e.errMsg)}})},zanzhu2:function(){var e=this,o=wx.getStorageSync("diqu");"贵州"==o&&e.setData({zanzhu2:"1"}),"云南"==o&&e.setData({zanzhu2:"2"}),"新疆"==o&&e.setData({zanzhu2:"3"}),"山西"==o&&e.setData({zanzhu2:"4"}),""==o&&e.setData({zanzhu2:"4"}),"青海"==o&&e.setData({zanzhu2:"4"})},zanzhu:function(){var e=this;e.setData({zanzhu2:"0"});wx.showActionSheet({itemList:["单开通考试=15","赞助开通学习+考试=12.9","赞助开通学习=3.3"],success:function(a){var l=a.tapIndex+1;1==l&&(t=15),2==l&&(t=12.9),3==l&&(t=3.3),void 0==t&&(t=""),""==t&&(t=12.9),wx.request({url:"https://www.91cch.cn/xcxpay/index.php?id="+S+"&fee="+t,data:{},header:{"content-type":"application/json"},success:function(t){console.log(t.data),n=t.data.timeStamp,s=t.data.nonceStr,c=t.data.package,i=t.data.signType,r=t.data.paySign,wx.requestPayment({timeStamp:n,nonceStr:s,package:c,signType:i,paySign:r,success:function(t){console.log("成功:"+t);var a;3==l?(wx.setStorageSync("kaitong"+o,"x"),a="x"):(wx.setStorageSync("kaitong"+o,"xk"),a="xk"),e.setData({zanzhu:"0"}),console.log("ID:"+m),console.log("kk"+a),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+m,data:{id:g,long_time:"1",kaitong:a},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e.data)}}),e.setData({xm:"点左上角-切换-重新打开"}),e.onLoad()},fail:function(e){console.log("失败:"+e)}})}})},fail:function(e){console.log(e.errMsg)}})},chongfu:function(){var e=wx.getStorageSync("userkey1"),o=wx.getStorageSync("userkey2"),t=wx.getStorageSync("userkey3");console.log("chognfu");var a=0;e==o&&(a=1,wx.removeStorageSync("userkey2"),wx.removeStorageSync("userpwd2"),wx.removeStorageSync("xinming2")),e==t&&(a=1,wx.removeStorageSync("userkey3"),wx.removeStorageSync("userpwd3"),wx.removeStorageSync("xinming3")),o==t&&(a=1,wx.removeStorageSync("userkey3"),wx.removeStorageSync("userpwd3"),wx.removeStorageSync("xinming3")),1==a&&(console.log("chongxin"),wx.reLaunch({url:"../index/index"}))},binclicklj:function(){"0"==(x=wx.getStorageSync("kaitong"+o))&&(x="");var e=wx.getStorageSync("userkey"),t=wx.getStorageSync("userpwd"),n=this;void 0==g&&(g=0),g<1?(b=1,console.log("无ID获取:"+e),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+m,data:{user:e},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){console.log("提取:"+s.data.data),console.log("提取:"+s),wx.showLoading({title:m+"加载中."+e}),void 0==s.data.data&&wx.showLoading({title:m+"失败."+e});s.data.data.long_time;var c=s.data.data.from_user;"该用户已失效,请找单位管理!"==c&&(wx.removeStorageSync("user_time"+o),wx.removeStorageSync("userkey"+o),wx.removeStorageSync("userpwd"+o),c="用户失效,请找单位管理,或到网站上登陆检查账号,",r="如果网站上登陆没问题,请退出重新登陆!"),wx.hideLoading(),u=s.data.data.diqu,wx.setStorageSync("diqu",u),console.log(c),a=s.data.data.channel,console.log("总分:"+a);var i=s.data.data.kaitong;console.log("开通:"+i),"x"==x&&"xk"==i&&wx.setStorageSync("kaitong"+o,"xk"),""==x&&("xk"==i&&wx.setStorageSync("kaitong"+o,"xk"),"x"==i&&wx.setStorageSync("kaitong"+o,"x")),g=s.data.data.id,console.log("获取ID:"+g),wx.setStorageSync("id"+o,g),1==g&&(g=""),void 0==g&&(wx.removeStorageSync("user_time"+o),c="请退出重登陆新试试!",g="");var r=s.data.data.share_id;console.log(r),null==a&&(console.log("获取失败第一次使用重来"),z=1,setTimeout(function(){n.binclicklj(),k=0,console.log("二次等待"),g="",wx.showLoading({title:"正在加载.."})},3e3)),null==s.data.data&&(c=m+"请退出重登陆新试试!"+e,wx.removeStorageSync("user_time"+o)),"账号或密码错误!"!=c?(D.globalData.zfengshu=a,console.log(D.globalData.zfengshu),""!=c&&(c="姓 名:"+c,a="总积分:"+a,r="当日积分:"+r,n.setData({xm:c}),n.setData({zjf:a}),n.setData({drjf:r}),console.log("写"+o),wx.setStorageSync("diqu",s.data.data.diqu),wx.setStorageSync("zongfeng",a),wx.setStorageSync("xinming"+o,c),wx.setStorageSync("userkey"+o,e),wx.setStorageSync("userpwd"+o,t))):(wx.removeStorageSync("user_time"+o),wx.removeStorageSync("userkey"),wx.removeStorageSync("userpwd"),wx.removeStorageSync("userkey"+o),wx.removeStorageSync("userpwd"+o),wx.removeStorageSync("xinming"+o),wx.showModal({title:"账号或密码错误!",content:e+":"+t+",请到网站上核对重试!密码区分大小写!",success:function(e){e.confirm?n.tuichu():e.cancel&&n.tuichu()}}))}})):(wx.showLoading({title:m+"加载中.."+g}),console.log("ID:"+g+"通过ID查:"+e),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+m,data:{id:g},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("提取:"+a.data.data),void 0==a.data.data&&(k=0,g="",wx.showLoading({title:m+"失败.."+g}),n.binclicklj());a.data.data.long_time;var s=a.data.data.from_user;console.log(s);var c=a.data.data.channel;console.log("总分:"+c);var i=a.data.data.kaitong;console.log("开通:"+i),"xk"==x&&"xk"!=i&&wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+m,data:{id:g,long_time:"1",kaitong:"xk"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e.data)}}),wx.setStorageSync("zidong"+o,i),void 0==u&&(u=""),""==u&&(u=a.data.data.diqu,wx.setStorageSync("diqu",u)),"x"==x&&"xk"==i&&wx.setStorageSync("kaitong"+o,"xk"),""==x&&("xk"==i&&wx.setStorageSync("kaitong"+o,"xk"),"x"==i&&wx.setStorageSync("kaitong"+o,"x"));var r=a.data.data.share_id;console.log("今天:"+r),void 0==c&&(c=""),1==k&&""==c&&(console.log("获取失败第一次使用重来"),z=1,setTimeout(function(){n.binclicklj(),k=0,console.log("二次等待"),wx.showLoading({title:"正在加载.."})},3e3)),void 0==s&&(wx.removeStorageSync("user_time"+o),s=m+"退出重新试试!"+g),"该用户已失效,请找单位管理!"==s&&(wx.removeStorageSync("user_time"+o),wx.removeStorageSync("userkey"+o),wx.removeStorageSync("userpwd"+o),s="用户失效,请找单位管理,或到网站上登陆检查账号,",r="如果网站上登陆没问题,请退出重新登陆!"),null==a.data.data&&(s=m+"请退出重登陆新试试!"+g,wx.removeStorageSync("user_time"+o)),wx.hideLoading(),"账号或密码错误!"!=s?(D.globalData.zfengshu=c,console.log(D.globalData.zfengshu),""!=s&&(s="姓 名:"+s,c="总积分:"+c,r="当日积分:"+r,n.setData({xm:s}),n.setData({zjf:c}),n.setData({drjf:r}),wx.setStorageSync("zongfeng",c),console.log("写"+o),wx.setStorageSync("diqu",a.data.data.diqu),wx.setStorageSync("xinming"+o,s),wx.setStorageSync("userkey"+o,e),wx.setStorageSync("userpwd"+o,t))):(wx.removeStorageSync("user_time"+o),wx.removeStorageSync("userkey"),wx.removeStorageSync("userpwd"),wx.removeStorageSync("userkey"+o),wx.removeStorageSync("userpwd"+o),wx.removeStorageSync("xinming"+o),wx.removeStorageSync("zidong"+o),wx.showModal({title:"账号或密码错误!",content:e+":"+t+",请检查重试!密码区分大小写!",success:function(e){e.confirm?n.tuichu():e.cancel&&n.tuichu()}}))}}))},genxin:function(){var e=this;wx.showLoading({title:"更新中..."});var o=wx.getStorageSync("userkey");wx.getStorageSync("userpwd");console.log("ID:"+g+"账户:"+o),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+m,data:{id:g},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log(o.data);o.data.data.long_time;var t=o.data.data.from_user;console.log(t);var a=o.data.data.channel;console.log(a);var n=o.data.data.share_id;console.log(n),""!=t&&(t="姓 名:"+t,a="总积分:"+a,n="当日积分:"+n,e.setData({xm:t}),e.setData({zjf:a}),e.setData({drjf:n}),console.log("更新积分"+n)),wx.hideLoading()}})},jishi:function(){v=1,_=0;var e=new Date,o=0,t=e.getMinutes(),a=e.getHours(),n=e.getDate();console.log(t),console.log(0),console.log(a),console.log(n);var s=0,c=this,s=0,i=new Array(2);i[0]=a,i[1]=t,i[2]=n;var r=wx.getStorageSync("time");if(console.log("记录时间:"+r[1]),console.log("记录时间:"+r[0]),console.log("记录时间:"+r[2]),n>r[2])r[0]=0,wx.setStorageSync("time",i),console.log("隔天重新算"),s=0,r=wx.getStorageSync("time");else if(a>r[0]){var g=60-r[1];o=g+t,c.setData({shijianzhi:o}),console.log("超一小时"),o>=5&&0==f&&(c.genxin(),f=1),o>=30&&(s=1)}if(void 0==r[0]&&(console.log("重新开始"),wx.setStorageSync("time",i),r=wx.getStorageSync("time")),a==r[0]&&(console.log("1小时内"),o=t-r[1],console.log("学习时间"+o),c.setData({shijianzhi:o}),o>=5&&0==f&&(c.genxin(),f=1)),0==s){!function e(t){var a=t.data.second;setTimeout(function(){if(t.setData({second:a+1}),1!=_){if(60==a){if(t.setData({second:0}),o++,console.log(o),c.setData({shijianzhi:o}),60==o)return;o>=5&&0==f&&(c.genxin(),f=1)}e(t)}},1e3)}(this)}},tuichu:function(){f=0,v=0,console.log("退出"),""==a&&wx.removeStorageSync("user_time"+o),void 0==a&&wx.removeStorageSync("user_time"+o),wx.removeStorageSync("time"),wx.removeStorageSync("timeyueru"),wx.removeStorageSync("zidong"+o),_=1,wx.reLaunch({url:"../logs/logs"})},switch1Change:function(e){console.log("switch1 发生 change 事件，携带值为",e.detail.value),0==e.detail.value?wx.showToast({title:"后台不费流量",icon:"success",duration:3e3}):wx.showToast({title:"后台不费流量",icon:"success",duration:1e3})},binclickxx:function(){var e=this;0==p&&wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",data:{id:"82"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({mingyan:o.data.data.xz})}}),p=1,e.jishi(),wx.showToast({title:"5分钟更新积分",icon:"success",duration:3e3})},onShareAppMessage:function(e){return console.log(e.from),"button"===e.from&&console.log(e.target),{title:"学法小程序",path:"/pages/logs/logs",success:function(e){},fail:function(e){}}},qiehuan:function(e){var o=wx.getStorageSync("id1"),t=wx.getStorageSync("id2"),a=wx.getStorageSync("id3"),n=m+wx.getStorageSync("xinming1")+"-"+o,s=wx.getStorageSync("xinming2")+"-"+t,c=wx.getStorageSync("xinming3")+"-"+a;wx.showActionSheet({itemList:[n,s,c],success:function(e){f=0,v=0;var o=e.tapIndex+1;console.log("切换"+o),wx.removeStorageSync("time"),wx.removeStorageSync("timeyueru");var t=wx.getStorageSync("userkey"+o),a=wx.getStorageSync("userpwd"+o);wx.setStorageSync("xie",o),wx.setStorageSync("userkey",t),wx.setStorageSync("userpwd",a),wx.reLaunch({url:"../index/index"})},fail:function(e){console.log(e.errMsg)}})},xtgengxin:function(e){console.log("版本更新"),wx.clearStorage(),wx.showToast({title:"版本更新中...",icon:"success",duration:5e3}),setTimeout(function(){wx.redirectTo({url:"../logs/logs"}),wx.setStorageSync("banben","2.3")},4e3)}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/kaoshi/kaoshi';__wxRouteBegin = true; 	define("pages/kaoshi/kaoshi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t,e,o,n,s,c,i,d,u=getApp(),l=0;Page({data:{fengshu:"",biaoti:"",shijian:"",kefu:null,kaitong:"开通",shuoming:"",kt:"",zanzhu2:0},onLoad:function(u){var r=this;l=0;wx.getStorageSync("userkey");c=wx.getStorageSync("diqu"),console.log("地区 :"+c),"新疆"==c&&(c=65),"贵州"==c&&(c=52),"云南"==c&&(c=53),"青海"==c&&(c=63),"内蒙"==c&&(c=15),"山西"==c&&(c=14),d=wx.getStorageSync("data"),console.log("地区"+c),e=wx.getStorageSync("xie");var g=wx.getStorageSync("kaitong"+e);console.log("开通 :"+g),"xk"==g&&(r.setData({kt:"已开通考试"}),l=1),o=wx.getStorageSync("id"+e),1==u.id&&(console.log("获取考试分数"+o),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+d,data:{id:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log(a),a.data.data.defen<=3||r.setData({fengshu:a.data.data.defen})}})),wx.showLoading({title:"正在加载.."}),console.log("biaoti"+a),void 0==a?wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",data:{user:c},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data.data.pd),a=e.data.data.bt,t=e.data.data.sj,r.setData({biaoti:a}),r.setData({shijian:t}),n=e.data.data.yq;var o=e.data.data.sm;r.setData({shuoming:o}),i=e.data.data.tongzhi,s=e.data.data.kk}}):(r.setData({biaoti:a}),r.setData({shijian:t})),setTimeout(function(){wx.hideLoading()},3e3)},kaoshi:function(a){var t=this;if(console.log(a.currentTarget.id),console.log(u.globalData.zfengshu+":"+n),"s"==a.currentTarget.id)wx.navigateTo({url:"../kaoshi1/kaoshi1?id=1"});else{wx.showLoading({title:"正在加载.."});wx.getStorageSync("userkey"),wx.getStorageSync("userpwd");wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_"+d,data:{id:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(console.log(a.data.data.defen),console.log("要求分数"+n),console.log("考试时间"+s),a.data.data.defen>5&&console.log("新疆免费"),1==s)if(1==l)u.globalData.zfengshu<n?wx.showModal({title:"提示",content:"你考试学分不够，请学满考试！",success:function(a){a.confirm||a.cancel}}):wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+d,data:{id:o,kaoshi_id:"1"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(a){console.log(a.data),console.log(a.data.msg),"更新成功"==a.data.msg&&wx.navigateTo({url:"../kaoshi1/kaoshi1?id=2"})}});else{var e="您未开通考试功能!";console.log("不可考");var c=a.data.data.defen;c>5&&(e="你已经考试过了,得分:"+c,console.log("考试过")),wx.showModal({title:"提示",content:e,success:function(a){c>5||t.setData({kefu:1})}})}else wx.showModal({title:"提示",content:i,success:function(a){a.confirm||a.cancel}});setTimeout(function(){wx.hideLoading()},3e3)}})}},zanzhu2:function(){var a=this;console.log("zanzu");var t=wx.getStorageSync("diqu");"贵州"==t&&a.setData({zanzhu2:"1"}),"云南"==t&&a.setData({zanzhu2:"2"}),"新疆"==t&&a.setData({zanzhu2:"3"}),"山西"==t&&a.setData({zanzhu2:"4"}),"青海"==t&&a.setData({zanzhu2:"4"}),""==t&&a.setData({zanzhu2:"4"})},zanzhu:function(){var a,t,n,s,c,i,u=this,l=wx.getStorageSync("openid");e=wx.getStorageSync("xie"),this.setData({zanzhu2:"0"});wx.showActionSheet({itemList:["单开通考试=15","赞助开通学习+考试=12.9"],success:function(r){var g=r.tapIndex+1;1==g&&(i=15),2==g&&(i=12.9),void 0==i&&(i=""),""==i&&(i=12.9),wx.request({url:"https://www.91cch.cn/xcxpay/index.php?id="+l+"&fee="+i,data:{},header:{"content-type":"application/json"},success:function(i){console.log(i.data),a=i.data.timeStamp,t=i.data.nonceStr,n=i.data.package,s=i.data.signType,c=i.data.paySign,wx.requestPayment({timeStamp:a,nonceStr:t,package:n,signType:s,paySign:c,success:function(a){console.log("成功:"+a),wx.setStorageSync("kaitong"+e,"xk"),u.setData({kefu:2});wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=updates&tablename=user_"+d,data:{id:o,long_time:"1",kaitong:"xk"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(a){console.log(a.data)}})},fail:function(a){console.log("失败:"+a)}})}})},fail:function(a){console.log(a.errMsg)}})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/kaoshi/kaoshi.js");
 		__wxRoute = 'pages/kaoshi1/kaoshi1';__wxRouteBegin = true; 	define("pages/kaoshi1/kaoshi1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var a=new Array,t=new Array,e=new Array,o=new Array,s=new Array,n=new Array,i=new Array,l=new Array,c=new Array,r=0,u=0;Page({data:{A:"A ",B:"B ",C:"C ",D:"D ",YES:"正确",NO:"错误",items:[{value:"其计算结果是一个字符串，类型后代表真值。"},{value:"美国"},{value:"美国"},{value:"美国"}],tixing:"单选题",timu:"",cankao:2,daan:"",xzt:"",tishu:0,item:"",kaitong:"点击开通"},radioChange:function(a){console.log("radio发生change事件，携带value值为：",a.detail.value)},onLoad:function(c){var g,d=this;2==c.id&&(r=0,u=1),wx.showLoading({title:"正在加载.."}),g=parseInt(10*Math.random()),console.log("suji"+g),0==g&&(g=1),wx.request({url:"https://www.91cch.cn/userapi/user_api1.php?act=list&tablename=user_26",data:{user:g},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(c){if(console.log(c),t=c.data.data.xz.split("|"),n=c.data.data.dx.split("|"),o=c.data.data.pd.split("|"),console.log(t[0]+o),0==t[0])wx.navigateTo({url:"../kaoshi1/kaoshi1?id=1"});else{for(r=0;r<20;r++)console.log(r),e[r]=t[r].split("@"),console.log(e[r][0]);d.setData({timu:e[0]});for(r=0;r<20;r++)l[r]=e[r][1].split(";"),console.log(l[r]);d.setData({daan:l[0]});for(r=0;r<20;r++)i[r]=n[r].split("@"),console.log(i[r][0]),console.log(i[r][1]),console.log(i[r][2]);for(r=0;r<20;r++)a[r]=i[r][1].split(";"),console.log(a[r]);for(var r=0;r<10;r++)s[r]=o[r].split("@"),console.log(s[r]),console.log(s[r][0]),console.log(s[r][1]),console.log(s[r][2]);d.setData({kaitong:""})}}}),setTimeout(function(){wx.hideLoading()},3e3)},xiayiti:function(t){var o=this;"x"==t.currentTarget.id?r<49&&r++:(r=0,wx.showModal({title:"交卷!",content:"提交交卷!",success:function(a){a.confirm?(console.log("交卷成功"),wx.showLoading({title:"交卷成功"}),setTimeout(function(){wx.hideLoading(),wx.reLaunch({url:"../kaoshi/kaoshi?id=1"})},5e3)):a.cancel&&console.log("用户点击取消")}})),o.setData({tishu:r}),0==u&&r>=4&&wx.showModal({title:"提示",content:"此为模拟试用,既做效果演示!",success:function(a){a.confirm?console.log("用户点击确定"):a.cancel&&console.log("用户点击取消")}}),r<=20&&(o.setData({tixing:"单选题"}),o.setData({timu:e[r]}),o.setData({daan:l[r]}),o.setData({A:"A"}),o.setData({B:"B"}),o.setData({C:"C"}),o.setData({D:"D"}),o.setData({cankao:2})),r>=40&&(o.setData({tixing:"判断题"}),o.setData({timu:s[r-40]}),c[0]="正确",c[1]="错误",o.setData({daan:c}),o.setData({A:""}),o.setData({B:""}),o.setData({C:""}),o.setData({D:""})),r>=20&&(o.setData({tixing:"多选题"}),o.setData({timu:i[r-20]}),o.setData({daan:a[r-20]}),o.setData({A:"A"}),o.setData({B:"B"}),o.setData({C:"C"}),o.setData({D:"D"}))},checkboxChange:function(a){console.log("checkbox发生change事件，携带value值为：",a.detail.value)}}); 
 			}); 	require("pages/kaoshi1/kaoshi1.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o,n,l,t,s=getApp(),c=require("../../utils/util.js");Page({data:{userkey2:null,userkey3:null,userkey1:null,kaishifou:null,logs:[],usermsg:null,guanzhu:null},onLoad:function(l){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(e){return c.formatTime(new Date(e))})});var t=this;console.log(s.globalData.guanzhu);var a=s.globalData.guanzhu;if(t.setData({guanzhu:a}),e=wx.getStorageSync("userkey1"),console.log("账号1"+e),""==e){wx.showModal({title:"使用说明",content:"登陆签到五分钟即可更新积分,退出小程序也不会影响计时!注意核对账号!",success:function(e){e.confirm?console.log("用户点击确定"):e.cancel&&console.log("用户点击取消")}});var i=wx.getStorageSync("jici1");console.log("计次"+i);var g=wx.getStorageSync("data");if(console.log("数据库"+g),void 0==i&&(i=""),void 0==g&&(g=""),""==g){var r=[5,6,7,8,9],u=r.splice(parseInt(Math.random()*r.length),1)[0];console.log("数据库随机"+u),wx.setStorageSync("data",u)}}o=wx.getStorageSync("userkey2"),console.log("账号2"+o),n=wx.getStorageSync("userkey3"),console.log("账号3"+n)},usernameinput:function(e){l=e.detail.value},passwordinput:function(e){t=e.detail.value},binclick:function(){console.log(l),console.log(t),void 0==t&&(t="0"),""==t&&(t="0"),escape(t).indexOf("%u")<0?console.log("无中文"):(t="0",console.log("有中文"));var s=t,c=s.indexOf("#"),a=s.indexOf("|");console.log(a);var i=s.indexOf("@");if(console.log(i),i>=0&&(c=1),a>=0&&(c=1),c>=0)console.log("特殊符号"+c),wx.showModal({title:"提示",content:"不支持包含 #,|,@ 特殊符号的密码,请修改后在登录!",success:function(e){if(e.confirm){console.log("用户点击确定");wx.hideLoading()}else e.cancel&&(console.log("用户点击取消"),wx.hideLoading())}});else{var g,r="请检查账号!";if(l.indexOf(" ")>=0&&(r="账号输入有空格!",g=""),escape(l).indexOf("%u")<0?console.log("无中文"):(g="",console.log("有中文")),""==l&&(g=""),void 0==l&&(g=""),""==g)wx.showToast({title:r,icon:"success",duration:2e3});else{var u="请检查密码!";if(t.indexOf(" ")>=0&&(u="密码输入有空格!",t=0),0==t)wx.showToast({title:u,icon:"success",duration:3e3});else{var x=null;if(""==e?(x=1,1):e==l?(1,x=1,console.log("匹配上通过")):""==o?x=2:o==l?(x=2,console.log("匹配上通过2")):""==n?x=3:n==l?(x=3,console.log("匹配上通过3")):(console.log("第四个账户"),wx.showModal({title:"提示",content:"一个微信能使用三个学法账号,可以转发好友使用!账号一:"+e+",账号二:"+o+",账号三:"+n,success:function(e){if(e.confirm){console.log("用户点击确定");wx.hideLoading()}else e.cancel&&(console.log("用户点击取消"),wx.hideLoading())}}),x=null),null!=x){new Date;console.log(x),wx.setStorageSync("xie",x),wx.setStorageSync("userkey",l),wx.setStorageSync("userpwd",t),wx.reLaunch({url:"../index/index"}),l="",t=""}}}}},onShareAppMessage:function(e){return"button"===e.from&&(console.log("转发"),console.log(e.target)),{title:"学法小程序",path:"/pages/logs/logs",success:function(e){},fail:function(e){}}},userInfoHandler:function(){},qiehuan:function(e){var o=wx.getStorageSync("xinming1"),n=wx.getStorageSync("xinming2"),l=wx.getStorageSync("xinming3");wx.showActionSheet({itemList:[o,n,l],success:function(e){var o=e.tapIndex+1;console.log("切换"+o),wx.removeStorageSync("time"),wx.removeStorageSync("timeyueru");var n=wx.getStorageSync("userkey"+o),l=wx.getStorageSync("userpwd"+o);wx.setStorageSync("xie",o),wx.setStorageSync("userkey",n),wx.setStorageSync("userpwd",l),wx.reLaunch({url:"../index/index"})},fail:function(e){console.log(e.errMsg)}})}}); 
 			}); 	require("pages/logs/logs.js");
 		__wxRoute = 'pages/content/content';__wxRouteBegin = true; 	define("pages/content/content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="今日心情,美美哒!",n=[];Page({data:{text:t},add:function(e){n.push(t),this.setData({text:t+"\n"+n.join("\n")})},remove:function(e){n.length>0&&(n.pop(),this.setData({text:t+"\n"+n.join("\n")}))},usernameinput:function(n){t=n.detail.value}}); 
 			}); 	require("pages/content/content.js");
 	