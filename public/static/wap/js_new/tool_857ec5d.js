define("common:widget/tool/utils.js",function(t,e){{var n=t("common:widget/jquery/1.11.3/jquery.js"),o=n(document),r=document.documentElement,i=e;window.navigator.userAgent.toLowerCase()}i.create=function(){function t(){}return function(e,n){t.prototype=e;var o=new t;return n&&(o.constructor=n),o}}(),i.string={format:function(t,e){var t=String(t),n=Array.prototype.slice.call(arguments,1),o=Object.prototype.toString;return n.length?(1===n.length&&null!==e&&/\[object Array\]|\[object Object\]/.test(o.call(e))&&(n=e),t.replace(/#\{(.+?)\}/g,function(t,e){var o=n[e];return o instanceof Function&&(o=o(e)),"undefined"==typeof o||null===o?"":o})):t},trim:function(t){for(var e=-1,n=t.length,o=/\s/;o.test(t.charAt(++e)););for(;n>e&&o.test(t.charAt(--n)););return t.slice(e,n+1)},getStrLength:function(t,e){e=e||2;for(var n=0,o=0;o<t.length;o++){var r=t.charCodeAt(o);n+=r>=0&&128>=r?1:e}return n}},i.Animate=function(t,e,n){var o=null;e=e||400,n=n||"swing",this.stopAnimate=function(){if(t.stop(),o){var e=o;o=null,e()}},this.nextAnimate=function(r,i,l){this.stopAnimate(),t=r||t,o=l,t.animate(i,e,n,this.stopAnimate)}},i.dom={intersectRect:function(t,e){var n=null,o=null,r=null;return n={left:t.left,top:t.top,right:t.left+t.width,bottom:t.top+t.height},o={left:e.left,top:e.top,right:e.left+e.width,bottom:e.top+e.height},r={left:Math.max(n.left,o.left),top:Math.max(n.top,o.top),right:Math.min(n.right,o.right),bottom:Math.min(n.bottom,o.bottom)},!(r.left>r.right||r.top>r.bottom)},elementIsVisible:function(t,e,n){var l=null,a=null,u=e&&e.offset(),e=e||o;return"none"===t.css("display")||"hidden"===t.css("visibility")?!1:(l=t.offset(),a={top:e.scrollTop(),left:e.scrollLeft()},"fixed"===t.css("position")&&(l.left-=a.left,l.top-=a.top),i.dom.intersectRect(u?{left:u.left,top:u.top,height:e.height(),width:e.width()}:{left:a.left,top:a.top,height:r.clientHeight,width:r.clientWidth},{left:l.left+(n&&n.left||0),top:l.top+(n&&n.top||0),height:t.outerHeight(),width:t.outerWidth()}))}},i.zoom=function(t,e,n,o){for(var r=0;;)if(t>n)r=n/t,t=n,e*=r;else{if(!(e>o))return{width:t,height:e};r=o/e,e=o,t*=r}},i.getURLParam=function(){for(var t=/\s*=\s*/g,e=location.search.replace("?",""),n=e.split(/\s*&\s*/g),o={},r=n.length;--r>=0;){var i=n[r].split((t.lastIndex=0,t));o[i[0].toLocaleLowerCase()]=decodeURIComponent(i[1])}return function(t,e){return t=(t||"").toLocaleLowerCase(),o.hasOwnProperty(t)?o[t]:e}}(),i.data=function(){function t(t){for(var t=t.split("."),n=e,o=0,r=t.length;r>o;o++){if(!n.hasOwnProperty(t[o]))return null;n=n[t[o]]}return n}var e={};return n("script[type='application/json'][data-id]").each(function(t,o){var o=n(o),r=o.attr("data-id");e[r]=n.parseJSON(o.html()||null)}),t.set=function(t,n){var t=t.split("."),o=t.pop(),r=e;o||(e=n);for(var i=0,l=t.length;l>i;i++){if(!r.hasOwnProperty(t[i]))return null;r=r[t[i]]}return r[o]=n},t}(),i.getComputedPosition=function(t){var e=window.getComputedStyle(t,null),n=0,o=0;return e=(e.webkitTransform||e.transform).split(")")[0].split(", "),n=+(e[12]||e[4]),o=+(e[13]||e[5]),{x:n||0,y:o||0}},i.queryStr2Object=function(t){t=t||location.search.replace(/\?/g,"");var e=t.split("&")||[],n={};return e.forEach(function(t){var e=t.split("=");n[e[0]]=e[1]}),n},i.listenerScrollInView=function(){function t(){this.init()}function e(t){var e=null,n=null,o=i.scrollTop(),l=o+i.height(),a=null,u=0,c=0;for(n in r)if(e=r[n],a=e.$el,a&&a[0]){u=e.$el.offset().top,c=u+e.$el.height()+(e.margin||0);var f=o-c,s=l-u;(0>f&&Math.abs(f)<a.height()||s>0&&Math.abs(s)<a.height()||u>o&&l>c)&&"function"==typeof e.callback&&e.callback(t)}}var o=t.prototype,r={},i=n(window);return o.add=function(t,e){if(e=e||!1)r[t.key]=t;else{if(t.key in r)return;r[t.key]=t}i.trigger("scroll")},o.remove=function(t){r[t]&&delete r[t]},o.clearAll=function(){r={}},o.init=function(){i.bind("scroll",function(t){e(t)}).trigger("scroll")},new t},i.LimitScroll=function(){function t(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}function e(e){e=e||window.event;for(var n=i.length;n--;)if(e.keyCode===i[n])return void t(e)}function n(e){t(e)}function o(){window.addEventListener&&window.addEventListener("DOMMouseScroll",n,!1),window.onmousewheel=document.onmousewheel=n,document.onkeydown=e}function r(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",n,!1),window.onmousewheel=document.onmousewheel=document.onkeydown=null}var i=[37,38,39,40];return{disabled:function(){o()},enable:function(){r()}}},i.millSecondFormtForDate=function(t){var e=1e3,n=60*e,o=60*n,r=24*o,i=t%e,l=(t-i)%n,a=(t-i-l)%o,u=(t-i-l-a)%r,c=t-i-l-a-u;return{days:c/r,hours:u/o,minute:a/n,second:l/e,millSecond:i}},i.serializeNodes=function(t,e,o){t=n(t).find("input,option,textarea").andSelf();var r,i={};"string"==typeof e?(r=e,e=function(t){return t.join(r)}):null==e&&(e=function(t){return(t.length>1?t:t[0])||""});for(var l=0;l<=t.length;l++)if("object"==typeof t[l]&&"value"in t[l]){var a=t[l].name;"OPTION"==t[l].tagName&&(a=n(t[l]).closest("select").attr("name")),a&&(i[a]=i[a]||[],(o||"OPTION"!=t[l].tagName&&"checkbox"!=t[l].type&&"radio"!=t[l].type||t[l].checked||t[l].selected)&&i[a].push(t[l].value.trim()))}if("function"==typeof e)for(var l in i)i[l]=e(i[l]);return i},e.getTextFrom=function(t,e){for(var n=t,o=0;o<e.length;o++)if(t===e[o][0]){n=e[o][1];break}return n}});
;define("common:widget/tool/env.js",function(t,n){var e=t("common:widget/jquery/1.11.3/jquery.js"),r=n;r.DOC_ROOT=e(document.documentElement),r.UA=navigator.userAgent,r.VENDOR=function(){for(var t=document.documentElement.style,n=["t","webkitT","MozT","msT","OT"],e=0,r=n.length,o=null;r>e;e++)if(o=n[e]+"ransform",o in t)return n[e].substr(0,n[e].length-1);return!1}(),r.CSS_VENDOR=r.VENDOR?"-"+r.VENDOR+"-":"";var o=document.body.style;r.CSS_SUPPORT={TRANSFORM:r.VENDOR+"Transform"in o||"transform"in o,ANIMATE:r.VENDOR+"Transition"in o||"transition"in o,BACKGROUND_SIZE:"backgroundSize"in document.body.style,TRANSFORM_3D:function(){var t=document.createElement("p"),n=void 0,e=r.VENDOR?"Transform":"transform";return document.body.insertBefore(t,null),void 0!==t.style[e]&&(t.style[e]="translate3d(1px,1px,1px)",n=window.getComputedStyle(t).getPropertyValue(r.CSS_VENDOR+"transform")),document.body.removeChild(t),void 0!==n&&n.length>0&&"none"!==n}()},r.cssp=function(t){if(t in r.CSSPROP)return r.CSSPROP[t];if(r.VENDOR===!1)return!1;if(""===r.VENDOR)return r.CSSPROP[t]=t;try{return r.CSSPROP[t]=r.VENDOR+t.charAt(0).toUpperCase()+t.slice(1)}catch(n){alert(t+n)}},r.CSSPROP={},e.each(["transition","transitionProperty","transitionDuration","transitionDelay","transitionTimingFunction","transform","transformOrigin"],function(t,n){r.cssp(n)}),r.hasTouch="ontouchstart"in window,r.hasPointer=!(!navigator.msPointerEnabled&&!navigator.pointerEnabled),r.hasMSPointer=!!navigator.msPointerEnabled,r.isHapticDevices=r.hasTouch||r.hasPointer||/msie.*touch/i.test(r.UA)||/iphone|ipod|ipad|android/i.test(r.UA),r.isIE8=r.UA.match(/Trident/i)&&r.UA.match(/MSIE 8.0/i),r.isIE9=r.UA.match(/Trident/i)&&r.UA.match(/MSIE 9.0/i),r.supportVideo=function(){var t=document.createElement("video");try{t.canPlayType("video/mp4")}catch(n){return!1}return!0}(),r.supportAudio=function(){var t=document.createElement("audio");try{t.canPlayType("audio/mp3")}catch(n){return!1}return!0}(),r.supportFullScreen="function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(r.UA)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen||"function"==typeof document.msExitFullscreen});
;define("common:widget/tool/event.js",function(t,e,n){var i=(Array.prototype.slice,Object.prototype.hasOwnProperty,n.exports=function(){this._events={}}),s=i.prototype;s.on=function(t,e){if(t&&e){var n=this._events[t];n||(n=this._events[t]=[]),n.push(e)}},s.un=function(t,e){if(t&&this._events.hasOwnProperty(t)){if(!e)return void(this._events[t].length=0);for(var n=this._events[t],i=0,s=0,r=n.length;r>s;s++)n[s]!==e&&(n[i++]=n[s]);n.length=i}},s.once=function(t,e){if(t&&e){var n=this;this.on(t,function(){e.apply(this,arguments),n.un(t,arguments.callee)})}},s.fireEvent=function(t,e,n){if(t&&this._events.hasOwnProperty(t)){e=e||[],n=n||this;for(var i=this._events[t].slice(),s=null,r=0,o=i.length;o>r;r++)if(i[r]){var h=i[r].apply(n,e);void 0!==h&&(s=h)}return s}},s.getHandlers=function(t){return this._events[t]},s.isEmptyHandler=function(t){var e=this._events[t];return e&&e.length},s.emit=s.fireEvent});
;define("common:widget/tool/animation/animation.js",function(t,e,i){function s(t){var e=this;m.call(this),this.update(t),this.playState=S,this.startTime=0,this.currentTime=0,this.timer=null,l.each(["onStartBefore","onStart","onPaused","onEnd"],function(i,n){t[n]instanceof Function&&(e[n]=t[n])}),this.animateDoneHandler=function(){e.end()},this.timing=f.call(l.easing,this.timing)?this.timing:"swing"}function a(t){var e,i={};delete t.CSS3;for(var e in t)f.call(t,e)&&(i[r(e)]=t[e]);return i}function r(t){for(var t=t.split("-"),e=0,i=0,n=t.length;n>i;i++){var s=t[i];s&&(t[e]=0===e?s:s.charAt(0).toUpperCase()+s.slice(1),e++)}return t.length=e,t.join("")}function o(t,e){for(var i in e)t[i]=e[i]}function h(t,e){m.call(this);var i=this,e=e||{},t=t instanceof Array?t:d.call(arguments);n=0,t[arguments.length-1]===e&&(e={}),l.each(t,function(e,a){a&&a instanceof Object&&(a=t[e=n++]=a instanceof h?a:new s(a),a.on("end",function(){return e+1>=i._count?void i.end():void t[i._currentIndex=e+1].play()}))}),t.length=n,this._animates=t,this._currentIndex=0,this._count=t.length,this._playState=S,this._returnstate=l.Deferred(),l.each(["onStartBefore","onStart","onPaused","onEnd"],function(t,n){e[n]instanceof Function&&(i[n]=e[n])})}var l=t("common:widget/jquery/1.11.3/jquery.js"),u=t("common:widget/tool/utils.js"),c=t("common:widget/tool/env.js"),m=t("common:widget/tool/event.js"),f=Object.prototype.hasOwnProperty,d=Array.prototype.slice,S=0,p=1,y=2,_=3,T=((new Date).getTime(),s.prototype=u.create(m.prototype,s));T.onStartBefore=T.onStart=T.onPaused=T.onEnd=l.noop,[function(){T.play=function(){var t=this;switch(this.playState){case S:case _:t.timer=setTimeout(function(){t.playState=p,t.currentTime=0,t.startTime=(new Date).getTime(),t.onStartBefore(),t.fireEvent("startBefore"),t.el.stop().css(t.from).animate(t.to,t.duration,t.timing,t.animateDoneHandler),t.onStart(),t.fireEvent("start")},this.delay);break;case y:this.startTime=(new Date).getTime(),this.playState=p,this.el.stop().animate(this.to,this.duration,this.timing,this.animateDoneHandler),this.onStart(),this.fireEvent("start")}},T.pause=function(){clearTimeout(this.timer),this.playState===p&&(this.currentTime+=(new Date).getTime()-this.startTime,this.el.stop(),this.playState=y,this.onPaused(),this.fireEvent("paused"))},T.end=function(){this.playState!==_&&(this.el.stop(),"forwards"===this.fillMode?(this.playState===y||this.currentTime+(new Date-this.startTime)<this.duration)&&this.el.css(this.to):this.el.css(this.from),this.playState=_,this.currentTime=this.duration,this.onEnd(),this.fireEvent("end"))},T.reset=function(){clearTimeout(this.timer),this.playState=S,this.currentTime=0,this.startTime=0,this.el.stop()}},function(){T.play=function(){var t=this;switch(this.playState){case S:case _:this.elStyle[c.CSSPROP.transitionDuration]="0ms",this.elStyle[c.CSSPROP.transitionTimingFunction]=this.timing,this.elStyle[c.CSSPROP.transitionProperty]=this.property,t.timer=setTimeout(function(){t.timer=setTimeout(function(){t.playState=p,t.currentTime=0,t.startTime=(new Date).getTime(),t.elStyle[c.CSSPROP.transitionDuration]=t.duration+"ms",o(t.elStyle,t.to),t.onStart(),t.fireEvent("start")},70),t.onStartBefore(t.timer),o(t.elStyle,t.from),t.fireEvent("startBefore")},this.delay);break;case y:t.startTime=(new Date).getTime(),this.playState=p,this.elStyle[c.CSSPROP.transitionDuration]=this.duration-this.currentTime+"ms",o(this.elStyle,this.to),this.onStart(),this.fireEvent("start")}},T.pause=function(){if(clearTimeout(this.timer),this.playState===p){this.currentTime+=(new Date).getTime()-this.startTime,this.elStyle[c.CSSPROP.transitionDuration]="0ms";var t=window.getComputedStyle(this.el[0],null);for(var e in this.to)f.call(this.to,e)&&(this.elStyle[e]=t[e]);this.playState=y,this.onPaused(),this.fireEvent("paused")}},T.end=function(){this.playState!==_&&(this.elStyle[c.CSSPROP.transition]="none","forwards"===this.fillMode?(this.playState===y||this.currentTime+(new Date-this.startTime)<this.duration)&&o(this.elStyle,this.to):o(this.elStyle,this.from),this.playState=_,this.currentTime=this.duration,this.onEnd(),this.fireEvent("end"))},T.reset=function(){clearTimeout(this.timer),this.playState=S,this.currentTime=0,this.startTime=0,this.elStyle[c.CSSPROP.transition]="none"}}][0](),T.update=function(t){this.el=t.element?t.element instanceof l?t.element:l(t.element):this.el,this.elStyle=this.el[0].style,this.duration=(t.duration?t.duration:this.duration)||400,this.delay=t.delay?Math.max(~~t.delay,0):~~this.delay,this.timing=(t.timing?t.timing:this.timing)||"ease",this.fillMode=(t.fillMode?t.fillMode:this.fillMode)||"forwards",this.to=(t.to?a(t.to):this.to)||{},this.from=(t.from?a(t.from):this.from)||{}};var T=h.prototype=u.create(m.prototype,h);T.onStartBefore=T.onStart=T.onPaused=T.onEnd=l.noop,T.play=function(){if(!this._count)return this._returnstate;switch(this._playState){case S:case _:this._returnstate=l.Deferred(),this._currentIndex=0,this.onStartBefore(),this.fireEvent("startBefore"),this._animates[0].play(),this._playState=p,this.onStart(),this.fireEvent("start");break;case y:this._animates[this._currentIndex].play(),this.onStart(),this.fireEvent("start")}return this._returnstate},T.pause=function(){this._count&&this._playState!==y&&(this._playState=y,this._animates[this._currentIndex].pause(),this.onPaused(),this.fireEvent("paused"))},T.end=function(){if(this._count&&this._playState!==_){for(var t=this._animates.length;--t>=0;)this._animates[t].end();this._currentIndex=this._count-1,this._playState=_,this._returnstate&&this._returnstate.resolve(),this.onEnd(),this.fireEvent("end"),this._returnstate=null}},T.reset=function(){this._animates[this._currentIndex].reset(),this._currentIndex=0,this._playState=S,this._returnstate=null},T.get=function(t){return this._animates[~~t]},T.isRunning=function(){return this._playState===p},T.isPaused=function(){return this._playState===y},T.isDone=function(){return this._playState===_},i.exports=h});
;define("common:widget/tool/bigrender/bigrender.js",function(t,e,r){var i=t("common:widget/jquery/1.11.3/jquery.js"),n=t("common:widget/tool/utils.js"),o=t("common:widget/tool/event.js"),s=function(t){var e=t.attr("id"),r=i("textarea[data-id="+e+"]");o.call(this),this.id=e,this.prit=t,this.data=r,this.mode=(t.attr("mode")||"override").toLowerCase(),this._rendered=!1};s.prototype=n.create(o.prototype,s),s.prototype.render=function(){if(!this._rendered){var t=this.data.val();"append"===this.mode?this.prit.append(i(t)):this.prit.html(t),this._rendered=!0,this.fireEvent("render",[this.prit,t]),this.data.remove()}};var d=r.exports=function(t){var e=this;o.call(this),this._prits={},t.each(function(t,r){e.append(i(r))})},a=d.prototype=n.create(o.prototype,d);a.append=function(t){return this._prits[t.attr("id")]=new s(t)},a.remove=function(t){var e=this._prits[t];return delete this._prits[t],e},a.has=function(t){return!!this._prits[t]},a.render=function(t){var e=this._prits[t];if(e)return e.render(),delete this._prits[t],this.fireEvent("render",[t,e]),e},a.get=function(t){return this._prits[t]},a.onRender=function(t,e){if(t instanceof Function)return void this.on("render",t);var r=this._prits[t];r&&r.once("render",e)}});
;define("common:widget/tool/cookie/cookie.js",function(e,o,t){function i(e,o,t,n){if(1===arguments.length){var r=document.cookie.match(new RegExp("(?:^|\\s+)"+e+"=([^;]*);?","m"));return r?r[1]:void 0}document.cookie=e+"="+o+(t?";expires="+i.parseExpires(t):"")+";path="+(n||"/")}i.MT=26784e5,i.WT=6048e5,i.DT=864e5,i.HT=36e5,i.parseExpires=function(e){var o=0,t=new Date,n=(""+e).slice(-1).toUpperCase()+"T";return o=i.hasOwnProperty(n)?t.getTime()+~~e.slice(0,-1)*i[n]:-1==e?t.getTime()-1:~~e,t.setTime(o),t.toGMTString()},t.exports=i});
;define("common:widget/tool/touch/touch.js",function(t){function e(){this._handlers=[]}var n=t("common:widget/jquery/1.11.3/jquery.js"),r=(n(document),e.prototype);r.invoke=function(t,e){var n=this._handlers;t=t||[],e=e||window;for(var r=0,i=n.length;i>r;r++)n[r].apply(e,t)},r.push=function(t){this._handlers.push(t)},r.remove=function(t){for(var e=this._handlers,n=0,r=0,i=e.length;i>r;r++)t!==e[r]&&(e[n++]=e[r]);e.length=n},r.empty=function(){this._handlers.length=0},r.isEmpty=function(){return 0===this._handlers.length};var i=function(){function t(t,e,r){t.startTime=new Date,t.path.push({x:e,y:r});var i={target:t.target,startTime:t.startTime,path:t.path,start:t.path[0],end:t.path[t.path.length-1],isStart:!0,complete:!1};for(var a in t.cGestures)if(t.cGestures.hasOwnProperty(a)){var s=t.cGestures[a];s.data={};var o=s.identifier(i,!1,s.data);s.identified=!!o,o&&(n.extend(i,o),s.handlers.invoke([i],t.target))}}function r(t,e,r){var i=t.path[t.path.length-1];if(!(1==t.path.length&&Math.pow(i.x-e,2)+Math.pow(i.y-r,2)<18)){t.path.push({x:e,y:r});var a={target:t.target,startTime:t.startTime,path:t.path,start:t.path[0],end:t.path[t.path.length-1],isStart:!1,complete:!1};for(var s in t.cGestures)if(t.cGestures.hasOwnProperty(s)){var o=t.cGestures[s],d=o.identifier(a,o.identified,o.data);d&&(o.identified=!0,n.extend(a,d),o.handlers.invoke([a],t.target))}}}function i(t){var e={target:t.target,startTime:t.startTime,path:t.path,start:t.path[0],end:t.path[t.path.length-1],isStart:!1,complete:!0};for(var r in t.cGestures)if(t.cGestures.hasOwnProperty(r)){var i=t.cGestures[r],a=i.identifier(e,i.identified,i.data);a&&(i.identified=!0,n.extend(e,a),i.handlers.invoke([e],t.target))}for(var r in t.pGestures)if(t.pGestures.hasOwnProperty(r)){var i=t.pGestures[r],a=i.identifier(e);a&&i.handlers.invoke([n.extend({},e,a)],t.target)}t.target=null,t.path.length=0,t.startTime=null,t.pointerId=null}var a=navigator.msPointerEnabled||navigator.pointerEnabled,s=null,o=null,d=null;a?(o=function(t){s&&s.pointerId==t.pointerId&&r(s,t.clientX,t.clientY)},d=function(t){if(s&&t.pointerId===s.pointerId){var e=s;s=null,i(e)}}):(o=function(t){var e=t.targetTouches[0];s&&e.identifier===s.pointerId&&r(s,e.clientX,e.clientY)},d=function(t){if(s){var e=t.changedTouches[0];if(e.identifier===s.pointerId){var n=s;s=null,i(n)}}}),document.addEventListener("MsPointerMove",o,!1),document.addEventListener("pointermove",o,!1),document.addEventListener("touchmove",o,!0),document.addEventListener("MsPointerUp",d,!1),document.addEventListener("pointerup",d,!1),document.addEventListener("touchend",d,!1),document.addEventListener("touchcancel",d,!1);var h=function(e,r){var o=this;this.target=null,this.path=[],this.cGestures={},this.pGestures={},this.pointerId=null,this.startTime=null,this.context=e,this.touchHandler=[function(e){if(null===o.pointerId){var n=e.originalEvent.targetTouches[0];o.pointerId=n.identifier,o.target=this,s=o,t(s,n.clientX,n.clientY)}e.stopPropagation()},function(e){var n=e.originalEvent;o.pointerId&&n.isPrimary&&i(o),null===o.pointerId&&(o.pointerId=n.pointerId,o.target=this,s=o,t(o,n.clientX,n.clientY)),e.stopPropagation()}][a?1:0],n(e).on("touchstart MsPointerDown pointerdown",r||"",this.touchHandler)},u=h.prototype;return u.add=function(t,n){var r=t.type;if(t.continuing){var i=this.cGestures[r];i||(i=this.cGestures[r]={identified:void 0,data:void 0,identifier:t.identifier,handlers:new e}),i.handlers.push(n)}else{var i=this.pGestures[r];i||(i=this.pGestures[r]={identifier:t.identifier,handlers:new e}),i.handlers.push(n)}},u.remove=function(t,e){var r=t.type,i=!0;return n.each([this.cGestures,this.pGestures],function(t,n){for(var a in n)if(n.hasOwnProperty(a)){if(r===a){if(!e)return void delete n[a];if(n[a].handlers.remove(e),n[a].handlers.isEmpty())return void delete n[a]}i=!1}}),i&&this.destroy(),i},u.destroy=function(){s===this&&(s=null);var t=n(this.context);t.off("touchstart",this.touchHandler)},h}(),a=function(){function t(t,e){var n=r+">"+e,a=t.data(n);return a||(a=new i(t,e),t.data(n,a)),a}function e(e,r,i){var a=this;this.continuing=r,this.identifier=i,this.type=e,n.event.special[e]={add:function(e){var r=n(this),i=t(r,e.selector);if("once"===e.namespace){var s=e.handler;e.handler=function(){i.remove(a,arguments.callee),s.apply(this,arguments)}}i.add(a,e.handler)},remove:function(e){var r=n(this),i=t(r,e.selector);if(i.remove(a,e.handler)){var s=r.data();for(var o in s)i===s[o]&&delete s[o]}}},n.fn[e]=function(t){return t?this.on(e,t):this.trigger(e)},n.attrFn&&(n[e]=!0)}var r="touch-gesture-delegate";return e}();new a("tap",!1,function(t){return 1==t.path.length&&new Date-t.startTime<200?{}:void 0}),new a("horizontallySlider",!0,function(t,e){var n=t.path[1];return n&&(e||(e=Math.abs((n.x-t.start.x)/(n.y-t.start.y))>1),e)?{diffX:t.end.x-t.start.x}:void 0}),new a("verticallySlide",!0,function(t,e){var n=t.path[1];return n&&(e||(e=Math.abs((n.y-t.start.y)/(n.x-t.start.x))>1),e)?{diffY:t.end.y-t.start.y}:void 0}),new a("touchDown",!0,function(t){return t.isStart}),new a("touchMove",!0,function(t){return!t.isStart&&!t.complete}),new a("touchUp",!0,function(t){return t.complete})});
;define("common:widget/tool/fullpage/fullpage.js",function(t,e,n){function o(t,e){var n=this;a.call(this),t=t instanceof c?t:c(t),e=e||{},this._containerEl=t,this._sectionEls=t.find(".section"),this._navbarEl=e.navbar,this._anchors=[],this._lock=!1,this._current=-1,this._count=this._sectionEls.length,this._scrollings=[],this._wrapper=c('<div class="sections-wrapper"></div>').appendTo(this._sectionEls.parent()).append(this._sectionEls);var o="";this._sectionEls.each(function(t){var e=c(this);e.css("top",100*t+"%");var i=e.attr("data-anchor")||"page-"+t;n._anchors.push(i),n._anchors[i]=t,o+='<a class="page-btn page-btn-'+t+'" href="#'+i+'"><b>'+(e.attr("data-title")||i)+"</b></a>"}),this._navbarEl&&(this._navbarEl.html(o),this._navbarEl.on("click","a.page-btn",function(){n.scrollTo(this.getAttribute("href").slice(1))})),s();var r=0,h=0;l.on("mousewheel verticallySlide",t.selector,function(t){var e=(t.originEvent,"mousewheel"!==t.type),o=e?t.diffY:t.wheelDelta||-t.deltaY||-t.detail,s=e?h>o?1:-1:Math.max(-1,Math.min(1,o)),c=+new Date,a=c-r,l=n._scrollings;e&&t.complete||(h=t.diffY,r=c,l.length>149&&l.shift(),l.push(Math.abs(o)),a>200&&(l=[]),n.isLocked()||i(l,10)>=i(l,70)&&n[0>s?"prev":"next"]())})}function i(t,e){for(var n=0,o=t.slice(),i=Math.max(t.length-e,1);i<o.length;i++)n+=o[i];return Math.ceil(n/e)}function s(){l.off("mousewheel",r),l.on("mousewheel",r),l.off("touchmove MsPointerMove pointermove",r),l.on("touchmove MsPointerMove pointermove",r)}function r(t){t.preventDefault()}var c=t("common:widget/jquery/1.11.3/jquery.js"),h=(t("common:widget/jquery/mousewheel/mousewheel.js"),t("common:widget/tool/env.js"),t("common:widget/tool/utils.js")),a=t("common:widget/tool/event.js"),l=(t("common:widget/tool/touch/touch.js"),c(document)),u=o.prototype=h.create(a.prototype,o);u.scrollTo=function(t){function e(){o._current=t,s.removeClass("active-section"),i.addClass("active-section");var e=o.fireEvent("scroll",[t,c,r,i]);e&&e.done instanceof Function?e.done(n):n()}function n(){o.unLock(),o.fireEvent("scrollAfter",[t,c,r,i])}if(!this.isLocked()&&this._anchors.hasOwnProperty(t)&&this._current!==t){var t="number"==typeof t?t:this._anchors[t],o=(this._anchors[t],this),i=this._sectionEls.eq(t),s=this._sectionEls.eq(this._current),r=t>this._current?1:-1,c=this._current,h=this.fireEvent("scrollBefore",[t,c,r,i]);this.lock(),h&&h.done instanceof Function?h.done(e):e()}},u.lock=function(){this._lock=!0},u.unLock=function(){this._lock=!1},u.isLocked=function(){return this._lock},u.prev=function(){this.scrollTo(this._current-1)},u.next=function(){this.scrollTo(this._current+1)},u.getSections=function(){return this._sectionEls},u.getCurrent=function(){return this._current},u.getIndex=function(t){return this._anchors[t]},u.getAnchor=function(t){return this._anchors[t]},u.getWrapper=function(){return this._wrapper},n.exports=o});
;define("common:widget/tool/visible/visible.js",function(e,i,t){function n(e){var i=e._container,t=e._handler;i[0]===window&&i.on("resize",t),i.on("scroll",t),e._listen=!0}function s(e){var i=e._container,t=e._handler;i[0]===window&&i.off("resize",t),i.off("scroll",t),e.fireEvent("done"),this._listen=!1}var o=e("common:widget/jquery/1.11.3/jquery.js"),l=o(window),r=o(document),h=20,c=e("common:widget/tool/utils.js"),f=e("common:widget/tool/event.js"),_=null;_=t.exports=function(e,i,t,s,o){var c=this,_=null;f.call(this),this._vcontainer=i||r,this._container=i=i||l,this._pending=e,this._listen=!1,this._keep=!!s,this._offset=o,this._handler=[function(){c.trigger()},function(){clearTimeout(_),_=setTimeout(function(){c.trigger()},h)}][t?1:0],this._pending.length&&n(this)};var d=_.prototype=c.create(f.prototype,_);d.append=function(e){this._pending.push(e),this._listen||n(this)},d.clear=function(){this._pending.length=0},d.trigger=function(e){var i=this._pending;if(e){var t=c.list.indexOf(i,e);t>-1&&c.dom.elementIsVisible(e,this._vcontainer,this._offset)&&(!this._keep&&i.splice(t,1),this.fireEvent("visible",[o(e)]))}else{for(var n=this._keep?i.length:0,l=0,r=i.length;r>l;l++)e=i.eq(l),c.dom.elementIsVisible(e,this._vcontainer,this._offset)?this.fireEvent("visible",[e]):this._keep||(i[n++]=e[0]);i.length=n}0===i.length&&s(this)},d.noPending=function(){return 0===this._pending.length}});
;define("common:widget/tool/lazy-load-image/lazy-load-image.js",function(t,o,e){function i(t){function o(){i.fireEvent("loaded",[t])}function e(){i.fireEvent("error",[t])}var i=this;this.fireEvent("loadBefore",[t]),this._listenLoad&&(t.one("load",o),t.one("error",e)),t.attr("src",t.attr("data-src")),this.fireEvent("loadAfter",[t])}var n=t("common:widget/tool/utils.js"),l=(t("common:widget/tool/event.js"),t("common:widget/tool/visible/visible.js")),r=null;r=e.exports=function(t,o,e,n){l.call(this,t,o,e),this._imgs=t,this._listenLoad=!n,this.on("visible",i)};r.prototype=n.create(l.prototype,r)});
;define("common:widget/tool/queue/queue.js",function(t,i,n){function e(){h.call(this),this._list=[],this._active=!1;var t=this;this._next=function(){var i=this._active;if(t._active=t._list.shift(),t._active!==o){if(!t._active)return void t.fireEvent("done",[]);var n=0;t.fireEvent("active",[t._active,function(){0===n&&(n=1,t._next())},i])}}}var s=t("common:widget/tool/utils.js"),h=t("common:widget/tool/event.js"),o=function(){},_=e.prototype=s.create(h.prototype,e);_.push=function(t){this._list.push(t),this._active||this._next()},_.open=function(){this._active=null,this._list[0]===o&&this._list.shift(),this._next()},_.close=function(){this._list.unshift(o)},_.shift=function(){return this._list.shift()},_.pop=function(){return this._list.pop()},_.hasNext=function(){return!!this._list.length},_.empty=function(){this._list.length=0},_.isClose=function(){};var c=function(){e.call(this);var t=this;this._index=0;var i=null,n=this._next=function(){if(t._active!==o){if(t._index+1>t._list.length)return t._index=t._list.length,void t.fireEvent("done",[]);t._active=t._list[t._index++];var e=0;t._next=function(){0===e&&(e=1,t._next=n,t._next())},t.fireEvent("active",[t._active,t._next,i]),i=t._active}}},_=c.prototype=s.create(e.prototype,c);_.push=function(t){this._list.push(t)},_.prev=function(){this._active=null,this._index=Math.max(this._index-2,0),this._next()},_.open=_.next=function(t){this._active=null,arguments.length&&(t=~~t,this._index=t),this._next()},_.close=function(){this._active=o},_.hasNext=function(){return this._index<this._list.length},_.hasPrev=function(){return this._index>0},_.shift=function(){e.prototype.shift.call(this),this._index=Math.max(this._index-1,0)},_.get=function(t){return this._list[t]},_.query=function(t){for(var i=0,n=this._list,e=n.length;e>i;i++)if(t(n[i],i)===!1)return},_.reset=function(){this._index=0},e.Loop=c,n.exports=e});
;define("common:widget/tool/slider/slider.js",function(t,i,s){function e(t,i){var s=this;if(!(this instanceof e)||this.constructor===e)return new e[i&&i.effect||"ScrollX"](t,i);t.show(),this._items=t.children(),this._config=i=n.extend({width:this._items.outerWidth(),height:this._items.outerHeight()},u,i||r),_.call(this),c.Animate.call(this,t,i.duration,i.ease);var o=this._items.length;if(o<=i.pageSize&&(i.pageSize=o),this._slider=t,this._active=1,this._pageCount=~~(o/i.pageSize)+(o%i.pageSize?1:0),this._pageButton=i.pageButton,this._itemWidth=i.width,this._itemHeight=i.height,this._auto_timer=null,this._auto_play=!1,this._count=this._pageCount*this._config.pageSize,this._offset=0,i.pageButton instanceof Function){for(var a="",l=0,p=this._pageCount;p>l;l++)a+=i.pageButton(l+1);var g=n('<ul class="slider-navigate">'+a+"</ul>");t.after(g),this._pageButton=g.children()}if(this._pageButton instanceof n&&this._pageButton.on(this._config.buttonEvent,function(){s.switchTo(n(this).index()+1)}),~~i.direction<0){var f=this.prev;this.prev=this.next,this.next=f}i.interval&&h.call(this)}function h(){var t=this;this._auto_play=!0,this._slider.hover(function(){t._auto_play=!1,t.stop()},function(){t._auto_play=!0,t.play()}),this.play()}function o(t,i,s){if(e.call(this,t,s),this._scrollProp=i,this._step=this["marginLeft"===i?"_itemWidth":"_itemHeight"]*this._config.pageSize,this._startPos=0,this._endPos=-(this._pageCount-1)*this._step,this._items.length<this._count){var h=this._items.slice(0,this._count-this._items.length).clone(!0);t.append(h),this._items.push.apply(this._items,a.call(h))}}var n=t("common:widget/jquery/1.11.3/jquery.js"),a=Array.prototype.slice,c=t("common:widget/tool/utils.js"),_=t("common:widget/tool/event.js"),r={},u={duration:400,direction:1,ease:"easeInOutCubic",interval:0,pageSize:1,pageButton:function(t){return"<li>"+t+"</li>"},buttonEvent:"click"},l={opacity:1},p=e.prototype=c.create(_.prototype,e);p.switchTo=function(t){t=Math.min(Math.max(~~t,1),this._pageCount);var i=this._active;this._active=t,this._items.removeClass("active"),this.getActive().addClass("active"),this._pageButton&&(this._pageButton.removeClass("active"),this._pageButton.eq(t-1).addClass("active")),this.fireEvent("switch",[t,i]),!this._from_auto_paly&&this._auto_play&&this._auto_timer&&this.play()},p.next=function(){this.switchTo(this._active+1>this._pageCount?1:this._active+1)},p.prev=function(){this.switchTo(this._active-1<1?this._pageCount:this._active-1)},p.getActive=function(t){t=Math.min(Math.max(~~t||this._active,1),this._pageCount);var i=(t-1)*this._config.pageSize;return this._items.slice(i,i+this._config.pageSize)},p.getPage=function(){return this._active},p.getItems=function(){return this._items},p.get=function(t){return this._items.eq(t)},p.pageButton=function(){return this._pageButton},p.getSlider=function(){return this._slider},p.getPageCount=function(){return this._pageCount},p.play=function(){var t=this;this._auto_play&&(this.fireEvent("play"),clearInterval(this._auto_timer),this._auto_timer=setInterval(function(){t._from_auto_paly=!0,t.next(),t._from_auto_paly=!1},this._config.interval))},p.stop=function(){this._auto_timer&&(this.fireEvent("stop"),clearInterval(this._auto_timer),this._auto_timer=null)};var g=o.prototype=c.create(e.prototype,o);g.switchTo=function(t,i){if(this._pageCount<2)return void(i&&i());p.switchTo.call(this,t),t=this._active;var s={};s[this._scrollProp]=Math.min(0,Math.max(-((t-1+this._offset)*this._step),this._endPos)),this.nextAnimate(this._slider,s,i)},g.prev=function(){if(1===this._active){var t=this,i=this._slider,s=this.getActive();i.css(this._scrollProp,this._endPos),i.append(s),this._offset=-1,this.switchTo(this._pageCount,function(){t._offset=0,i.css(t._scrollProp,t._endPos),s.insertBefore(i.children()[0])})}else this.switchTo(this._active-1)},g.next=function(){if(this._active===this._pageCount){var t=this,i=this._slider,s=this.getActive();i.css(this._scrollProp,this._startPos),s.insertBefore(this._items[0]),this._offset=1,this.switchTo(1,function(){t._offset=0,i.css(t._scrollProp,t._startPos),i.append(s)})}else this.switchTo(this._active+1)},e.ScrollX=function(t,i){o.call(this,t,"marginLeft",i),this._items.css("float","left"),t.css({width:this._itemWidth*this._count,height:this._itemHeight,marginLeft:0}),~~this._config.direction<0?(t.css("marginLeft",this._endPos),this._active=this._pageCount,this.switchTo(this._pageCount)):this.switchTo(1)};e.ScrollX.prototype=c.create(o.prototype,e.ScrollX);e.ScrollY=function(t,i){o.call(this,t,"marginTop",i),t.css({width:this._itemWidth,height:this._itemHeight*this._count,marginTop:0}),~~this._config.direction<0?(t.css("marginTop",this._endPos),this._active=this._pageCount,this.switchTo(this._pageCount)):this.switchTo(1)};e.ScrollY.prototype=c.create(o.prototype,e.ScrollY);e.Fade=function(t,i){i&&(i.pageSize=1),e.call(this,t,i),t.css({position:"relative",width:this._itemWidth,height:this._itemHeight}),this._items.css({position:"absolute",zIndex:"1"}),this._z=1,~~this._config.direction<0?(this._items.eq(-1).css("zIndex",++this._z),this._active=this._pageCount,this.switchTo(this._pageCount)):(this._items.eq(0).css("zIndex",++this._z),this.switchTo(1))};var f=e.Fade.prototype=c.create(e.prototype,e.Fade);f.switchTo=function(t,i){var s=this._active;if(p.switchTo.call(this,t),t=this._active,s!==t){var e=this._items.eq(t-1);e.css({zIndex:++this._z,opacity:0}),this.nextAnimate(e,l,i)}},s.exports=e,n.easing.easeInOutCubic=function(t,i,s,e,h){return(i/=h/2)<1?e/2*i*i*i+s:e/2*((i-=2)*i*i+2)+s}});
;define("common:widget/tool/validation/validation.js",function(require,exports,module){var $=require("common:widget/jquery/1.11.3/jquery.js"),SLICE=Array.prototype.slice,RE_FILTER_TYPE=/^(?:checkbox|radio|file|button|submit|reset|image)$/i,Utils=require("common:widget/tool/utils.js"),Event=require("common:widget/tool/event.js"),Validation=module.exports=function(t,e,n){var i=this,r={},o=[];Event.call(this),this._inputs=r,t.each(function(t,e){i.push(e)}),e&&(this.on("inputBlur",function(t){this.check(t.getAttribute("name"))}),this.on("pass",function(t,e){var i=$(e.input);if(i.parent().hasClass("input-text")&&(i=i.parent()),n){for(var r=0,u=0,l=o.length;l>u;u++){var a=o[u];a.name!==e.name&&(o[r++]=a)}o.length=r,t?(i.removeClass("error"),o.length||n.removeClass("error").html("")):(i.addClass("error"),o.unshift(e),n.addClass("error").html(e.msg))}}),n&&this.on("inputFocus",function(t){if(o.length){for(var e=null,i=o.length;--i>=0;)if(o[i].input===this){e=o[i].msg;break}return void n.addClass("error").html(e||o[0].msg)}n.removeClass("error").html(t.getAttribute("tip"))}))},api=Validation.prototype=Utils.create(Event.prototype,Validation);api.push=function(t,e){var n=this,i=this._inputs,r=t.getAttribute("type")||"",e=e||t.getAttribute("test")||"",o=t.getAttribute("name")||"";!RE_FILTER_TYPE.test(r)&&e&&o&&(i[o]={input:t,verify:getValidationTool(e)},$(t).on("focus",function(){n.fireEvent("inputFocus",[this])}).on("blur",function(){n.fireEvent("inputBlur",[this])}))},api.check=function(t){var e=this,n=this._inputs[t],i=null,r=null;if(n)return i=n.input,i.disabled?!0:(this.fireEvent("next",[i]),r=n.verify.test instanceof RegExp?n.verify.test.test(i.value):n.verify.test(i,i.value,this),e.fireEvent("pass",[!!r,{pass:r,name:t,input:i,value:i.value,msg:r?"":n.verify.errmsg}]),r)},api.checkAll=function(t){var e=this,n=e._inputs,i=!0;for(var r in n)if(n.hasOwnProperty(r)){var o=n[r],u=o.input,l=null;if(!u.disabled&&(this._cancelCheck=!1,this.fireEvent("next",[u]),l=o.verify.test instanceof RegExp?o.verify.test.test(u.value):o.verify.test(u,u.value,e),l||(i=!1),this.fireEvent("pass",[l,{pass:l,name:r,input:u,value:u.value,msg:l?"":o.verify.errmsg}]),this._cancelCheck||!l&&t))return l}return i},api.cancelCheck=function(){this._cancelCheck=!0},getValidationTool=function(){function Tool(t,e,n){this.tool=t||"",this.errmsg=e||"",this.test=n instanceof RegExp?function(t,e){return""===e?!0:n.test(e)}:n}function SimpleTool(t,e,n){return function(i){return new Tool(t,i||e,n)}}function DateTool(t,e,n,i){return function(r,o,u){if(r&&o){var l=null;r=l=new Date(n+r).getTime(),o=new Date(n+o).getTime()}return new Tool(t,u||e,function(t,e){return""===e?!0:i.test(e)?r&&o?(e=new Date(n+e).getTime(),e>=r&&o>=e):!0:!1})}}var RE_NUMBER=/^(?:-?\d+|\d*(?:\.{0,1}\d+))$/,RE_USER_NAME=/^[A-Za-z_\.][\w\d]*$/,RE_INTEGER=/^-?\d+$/,RE_URL_SIGN=/^\w+:\/\/[\w\-\.]+(?:\:\d+)?[\w\-%&\?\/.=]+$/,RE_URI_SIGN=/^[\.\/\S]+(?:\?[&#%_\w]*)?$/,RE_MOBILE_SIGN=/^1\d{10}$/,RE_TEL_SIGN=/^(?:\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,RE_EMAIL_SIGN=/^[a-z0-9]+(?:[._-][a-z0-9]+)*@[a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,}$/i,RE_DATE_SIGN=/^\d{2,4}\/(?:0?\d|1[0-2])\/(?:[0-2]?\d|3[0-1])$|^(?:0?\d|1[0-2])\/(?:[0-2]?\d|3[0-1])\/\d{2,4}$/,RE_TIME_SIGN=/^(?:[0-1]?\d|2[0-3]):[0-5]?\d(?:\:[0-5]?\d)?$/,RE_DTIME_SIGN=/^(?:\d{2,4}\/(?:0?\d|1[0-2])\/(?:[0-2]?\d|3[0-1])|^(?:0?\d|1[0-2])\/(?:[0-2]?\d|3[0-1])\/\d{2,4}) (?:[0-1]?\d|2[0-3]):[0-5]?\d(?:\:[0-5]?\d)?$/,userName=null,len=null,int=null,decimal=null,reg=null,tel=null,mobile=null,email=null,must=null,date=null,time=null,dateTime=null,Enum=null,and=null,url=null,or=null,check=null,eq=null,neq=null;return len=function(t,e,n){var t=void 0===t?-Number.MAX_VALUE:t,e=void 0===e?Number.MAX_VALUE:e,i=t;return t=Math.min(e,t),e=Math.max(e,i),new Tool("len",n||"输入字符长度不符合要求",function(n,i){return""===i?!0:i.length>=t&&i.length<=e})},int=function(t,e,n){var t=void 0===t?-Number.MAX_VALUE:t,e=void 0===e?Number.MAX_VALUE:e,i=t;return t=Math.min(e,t),e=Math.max(e,i),new Tool("int",n||"输入数值非整数值或不大限定大小范围内",function(n,i){return""===i?!0:RE_INTEGER.test(i)&&i>=t&&e>=i})},decimal=function(t,e,n,i){var t=void 0===t?-Number.MAX_VALUE:t,e=void 0===e?Number.MAX_VALUE:e,n=void 0==n?Number.MAX_VALUE:n,r=t;return t=Math.min(e,t),e=Math.max(e,r),new Tool("decimal",i||"输入数字值不符合格式要求",function(i,r){return""===r?!0:!RE_NUMBER.test(r)||t>r||r>e||r.length-(r.lastIndexOf(".")+1)>n?!1:!0})},reg=function(t,e,n){return t instanceof RegExp||(t=new RegExp(t,e||"")),new Tool("reg",n||"输入数据格式不符合要求",t)},must=SimpleTool("must","必填项",function(t,e){return!!e}),Enum=function(t,e){for(var n={},i=t.length;--i>=0;)n[t[i]]=1;return new Tool("enum",e||"输入数据不包含在限定列表中",function(t,e){return""===e?!0:n.hasOwnProperty(e)})},eq=function(t,e){return new Tool("eq",e||"两次输入不一至",function(e,n,i){return""===n?!0:i._inputs[t].input.value===n})},neq=function(t,e){return new Tool("neq",e||"输入数据重复",function(e,n,i){return""===n?!0:i._inputs[t].input.value!==n})},url=SimpleTool("url","输入的URL有误",RE_URL_SIGN),uri=SimpleTool("uri","输入的URI有误",RE_URI_SIGN),mobile=SimpleTool("mobile","输入的手机号码有误",RE_MOBILE_SIGN),tel=SimpleTool("tel","输入的电话号码有误",RE_TEL_SIGN),email=SimpleTool("email","输入的Email有误",RE_EMAIL_SIGN),date=DateTool("date","输入的日期有误","",RE_DATE_SIGN),time=DateTool("time","输入的时间有误","1900/1/1 ",RE_TIME_SIGN),dateTime=DateTool("DateTime","输入的日期时间有误","",RE_DTIME_SIGN),and=function(){for(var t=[],e=0,n=arguments.length;n>e;e++){var i=arguments[e];t.push(i instanceof Function?i():i)}return new Tool("and","",function(e,n,i){for(var r=0,o=t.length;o>r;r++){var u=t[r];if(u.test instanceof RegExp?!u.test.test(n):!u.test(e,n,i))return this.errmsg=u.errmsg,!1}return!0})},or=function(){for(var t=[],e=[],n=0,i=arguments.length;i>n;n++){var r=arguments[n];t.push(t instanceof Function?r():r),e.push(r.errmsg)}return new Tool("or",e.join(" 或 "),function(e,n,i){for(var r=0,o=t.length;o>r;r++)if(t[r].test(e,n,i))return!0;return!1})},check=function(t,e,n){return e=e instanceof Function?e():e,new Tool("check",n||"不通过",function(n,i,r){return n=r._inputs[t].input,i=n.value,(!e||e.test(n,i,r))&&r.check(t)})},function(expression){var tool=eval("("+expression+")");return tool instanceof Function&&(tool=tool()),tool}}()});