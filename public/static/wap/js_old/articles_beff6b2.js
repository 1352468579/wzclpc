var $ = require("common:widget/jquery/1.11.3/jquery.js"), Env = require("common:widget/tool/env.js"),
    ZMPlayer = require("desktop:widget/zm-player/zm-player.js");
require("desktop:widget/sweetAlert/swal.js");
var QRCode = require("common:widget/qrcode/qrcode.js"), ZM = require("common:widget/zm/zm.js");
!function () {
    function t(t) {
        this.el = t, this.canUseAudio = Env.supportVideo;
        var e = this;
        this.el.each(function () {
            var t = $(this);
            e.init(t)
        })
    }

    function e() {
        for (var t = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], o = !0, i = 0; i < e.length; i++) if (t.indexOf(e[i]) > 0) {
            o = !1;
            break
        }
        return o
    }

    function o(t, e, o) {
        t = "#" + t;
        var i = $(t), r = i.offset().top - e, a = null;
        o = o && o[0] ? o : i;
        var n = o.width(), s = $("#n-top-bar").offset().top || 0;
        $(window).bind("scroll", function () {
            var t = $(window).scrollTop();
            s = $("#n-top-bar").offset().top || 0, i.css(t > r ? {position: "fixed", top: s} : {
                position: "relative",
                left: "",
                top: ""
            })
        }).resize(function () {
            clearTimeout(a), a = setTimeout(function () {
                n = o.width(), i.css({left: o.offset().left, width: n});
            }, 100)
        }).trigger("resize").trigger("scroll")
    }
    var i = $(".search-box").find(".J-search"), r = $(".search-box").find(".search");
    i.click(function () {
        var t = r.val();
        return t ? void $.get("/Wap/News/search", {name: t}, function (e) {
            location.href = e.data ? "/keyword/" + e.data + ".html" : "/Wap/News/search/keyword/" + t
        }) : void alert("请输入搜索内容！")
    });
    var a = $(".articleDetail .zm-video");
    a.attr("controls", !1), a.hide(), a.each(function (t, e) {
        var o = $(e), i = $("<div class='video-box'></div>"), r = o.attr("width") || 400, a = o.attr("height") || 300;
        i.css("width", r + "px"), i.css("height", a + "px"), i.insertBefore(o), i.append(o);
        var n = (new ZMPlayer(o), o.parents(".zm-player-container").find(".cover-img"));
        n.attr("src", o.data("cover")), o.attr("data-cover", ""), o.show()
    });
    var n = t.prototype;
    n.init = function (t) {
        var e = t.attr("data-src"), o = "";
        o = this.canUseAudio ? "<audio src='" + e + "' type='audio/mp3' autostart='false' controls='controls' />" : '<embed type="audio/mp3" src="' + e + '" autostart=false loop=false></embed> ', t.replaceWith(o)
    }, new t($(".articleDetail").find(".zm-audio")), $(".downloadPDF").click(function (t) {
        e() ? $("#zixun_download").addClass("show") : (t.stopPropagation(), t.preventDefault(), Swal({
            title: "温馨提醒:",
            text: "书籍下载请前往PC端页面",
            showCancelButton: !1,
            confirmButtonText: "我知道了",
            closeOnConfirm: !0
        }, function () {
        }))
    }),o("appoint-box", -200);
    var s = ZM.data.get("extras.tid");
    $(".share-box-weixin").on("click", function () {
        $("#qrcode").toggle()
    })
    // new QRCode(document.getElementById("qrcode"), {
    //     text: document.location.protocol+"//"+window.location.host+window.location.pathname,
    //     width: 100,
    //     height: 100
    // })
}();