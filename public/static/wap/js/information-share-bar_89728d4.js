define("desktop:widget/information-share-bar/information-share-bar.js", function (t) {
    var e = t("common:widget/jquery/1.11.3/jquery.js"), o = t("desktop:widget/information-share-bar/shareWidget.js"), i = t("common:widget/wzcl/wzcl.js");
    !function () {
        var t = '望子成龙新闻', a = i.data.get("extras.picUrl"),
            s = e(".articleDetail").find("h1.title").text(), r = i.data.get("extras.summary").slice(0, 30);
        r = "望子成龙资讯【" + s + "】| " + t + "-望子成龙资讯 - ▍（分享自@望子成龙官网）", e(".article-suspend-tool .share").hover(function () {
            o.show({title: t, pic: a, summary: r, target: this, offsetLeft: -82, offsetTop: 52})
        }, function () {
            o.hide()
        });
        var n = e(window), c = 0, l = 0;
        n.on("scroll load", function () {
            var t = e(window).scrollLeft(), o = n.scrollTop();
            o > 200 ? f.show() : f.hide(), l = o, c = t
        });
        var f = e(".toTop"), d = (e(".article-suspend-tool"), e("#main"));
        f.css("left", parseFloat(d.css("margin-left")) + 1099), n.on("resize", function () {
        }), f.click(function () {
            n.scrollTop(0)
        })
    }()
});