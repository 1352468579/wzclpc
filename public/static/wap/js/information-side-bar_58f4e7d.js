define("desktop:widget/information-side-bar/information-side-bar.js", function (i) {
    var a = i("common:widget/jquery/1.11.3/jquery.js"), e = i("common:widget/wzcl/wzcl.js");
    !function () {
        var i = a(".navList").find("li"), s = e.data.get("extras.section");
        i.each(function (i, e) {
            var n = a(e);
            n.hasClass(s) && n.addClass("active").siblings().removeClass("active")
        })
    }()
});