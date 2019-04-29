define("desktop:widget/footer-version-download/footer-version-renew.js", function (e) {
    !function () {
        function a() {

        }

        function l(e) {
            o = !1, t.each(e, function (e, a) {
                var l = t(".newsInfo").find(".newcon").eq(e);
                l.html(""), t.each(a, function (e, a) {
                    l.append('<li><a href ="/article-' + a.id + '.html">' + a.title + "</li>")
                })
            })
        }
        var t = e("common:widget/jquery/1.11.3/jquery.js");
        t(".contactWay .footHome").hover(function () {
            t(this).animate({width: "235px"}, 200)
        }, function () {
            t(this).animate({width: "32px"}, 200)
        }), t(".contactWay .footPosition").hover(function () {
            t(this).animate({width: "400px"}, 200)
        }, function () {
            t(this).animate({width: "32px"}, 200)
        });
        var w = !0;
        t(".firends-website2 .showLinks").click(function () {
            var e = t(this).siblings(".linkmap").height();
            w ? (t(this).removeClass("play2").addClass("play1"), t(this).parents(".copyright").animate({height: e}, 300), w = !1) : (t(this).removeClass("play1").addClass("play2"), t(this).parents(".copyright").animate({height: "22px"}, 300), w = !0)
        });
        var i = !0;
        t(".newsShowBtn #a-footer").click(function () {
            i ? (t(this).removeClass("play2").addClass("play1"), t(".newsInfo").animate({height: "195px"}, 300), i = !1) : (t(this).removeClass("play1").addClass("play2"), t(".newsInfo").animate({height: "0"}, 300), i = !0)
        });
        var o = !0, c = (t(".newsInfo ul"), []);
        t(".newsShowBtn #a-footer").click(a), a();
        // var r = getzhiSDKInstance();
        // r.on("load", function () {
        //     r.initBtnDOM()
        // }), r.set("customBtn", "true"), r.set("customMargin", 120)
    }()
});