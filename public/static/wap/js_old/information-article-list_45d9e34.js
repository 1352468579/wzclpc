define("desktop:widget/information-article-list/information-article-list.js", function (t) {
    var i = t("common:widget/jquery/1.11.3/jquery.js");
    window.jQuery = i, t("desktop:widget/dotdotdot/jquery.dotdotdot.min.js");
    t("common:widget/moment/2.8.4/moment.js");
    !function () {
        var t = i(".article-list");
        t.on("click", "img.cover", function () {
            var t = i(this).parents("li").attr("data-tid");
            location.href = "/Wap/News/newArticle/id/" + t + ".html"
        })
    }()
});