!function(){function e(){var e=r.scrollTop(),o=r.height();o>e?n.fadeOut():e>=o&&n.fadeIn()}window.$=window.jQuery=require("common:widget/jquery/1.11.3/jquery.js");{var o=require("common:widget/zm/zm.js");require("common:widget/tool/slider/slider.js")}require("common:widget/jquery/mousewheel/mousewheel.js");var i=(require("common:widget/arale-easing/1.1.0/index.js"),!!o.data.get("stu")),r=$(window),n=$(".J-top");i&&n.css("bottom","12px"),n.click(function(){$("html, body").animate({scrollTop:0},"slow")}),r.on("resize scroll",e),e()}();