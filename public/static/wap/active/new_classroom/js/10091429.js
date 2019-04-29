if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<32;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var schema='http';
if(location.href.indexOf('https:') == 0){
	schema = 'https';
}
var doyoo={
env:{
secure:schema=='https',
mon:schema+'://m9107.talk99.cn/monitor',
chat:schema+'://chat7713.talk99.cn/chat',
file:schema+'://yun-static.soperson.com/131221',
compId:10041231,
confId:10091429,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:27734,
_mark:'b2162a86972358544f10b97e68d40861d173afdc67ea7db30d215439b8f91d01f42763737f9673d3'
},
chat:{
mobileColor:'',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'',
mobileChatHintSize:0,
priorMiniChat:0
}

, monParam:{
index:-1,
preferConfig:0,

style:{mbg:'http://chengdu.gedu.org/talk99/2017spring/center2.jpg',mh:340,mw:600,
elepos:'0 0 0 0 0 0 0 0 165 29 260 45 570 320 20 20 0 0 0 0',
mbabg:'',
mbdbg:'http://yun-static.soperson.com/default/images/close.gif',
mbpbg:''},

title:'\u73af\u7403\u6559\u80b2',
text:'',
auto:1,
group:'10077563',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:30,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:3,
allowMobileDirect:0,
minBallon:1,
chatFollow:1,
backCloseChat:0,
ratio:0
}


, panelParam:{
mobileIcon:'',
mobileIconWidth:0,
mobileIconHeight:0,
category:'icon',
preferConfig:0,
position:1,
vertical:120,
horizon:5


}



};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="'+schema+'://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="'+schema+'://yun-static.soperson.com/131221/oms.js?181104" charset="utf-8"></scr'+'ipt>');
}
}
