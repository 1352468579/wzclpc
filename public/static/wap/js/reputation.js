!function () {
    function e(e, t) {
        function n() {
            var t, n = parseInt(f.css("left")) || 0;
            Math.abs(n / c) + 1 == o ? (t = 0, u.removeClass("act").eq(0).addClass("act")) : (t = n - c + "px", e.find("span.act").removeClass("act").next().addClass("act")), f.animate({left: t}, 500, "linear")
        }

        function a() {
            s = setInterval(function () {
                n()
            }, 5e3)
        }

        var s, i = this, r = !1, c = parseInt(t.width()), o = t.length, l = e.find(".pre_btn"), d = e.find(".next_btn"), f = e.find(".slide-wrapper"), u = e.find(".dot");
        return f.css({position: "relative", left: 0}), l.click(function () {
            var t, n = parseInt(f.css("left")) || 0;
            0 == n ? (t = -1 * (o - 1) * c + "px", u.removeClass("act").eq(o - 1).addClass("act")) : (t = n + c, e.find("span.act").removeClass("act").prev().addClass("act")), f.animate({left: t}, 500, "linear")
        }), d.click(function () {
            n()
        }), t.mouseenter(function () {
            clearInterval(s)
        }).mouseleave(function () {
            clearInterval(s), a()
        }), u.each(function (e) {
            $(u[e]).mouseenter(function () {
                if (r)return !1;
                r = !0, clearInterval(s), u.removeClass("act").eq(e).addClass("act");
                var t = -e * c + "px";
                f.animate({left: t}, 500, "linear", function () {
                    r = !1, a()
                })
            })
        }), a(), i.next = n, i
    }

    window.$ = require("common:widget/jquery/1.11.3/jquery.js");
    require("common:widget/tool/utils.js"), require("desktop:widget/wzcl-player/wzcl-player.js");
    require("common:widget/jquery/slimscroll/slimscroll.js");
    var t = (new e($("#shudao"), $("#shudao").find(".content")), new e($("#comment"), $("#comment").find(".content")), $("#records").find(".item"));
    t.each(function (e) {
        $(this).mouseenter(function () {
            t.removeClass("act"), $(this).addClass("act"), $(".rk-cn").hide().eq(e).show()
        })
    })
}();