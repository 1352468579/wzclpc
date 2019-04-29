var $ = require("common:widget/jquery/1.11.3/jquery.js");
require("desktop:widget/simplePagination/jquery.simplePagination.js");
var wzcl = require("common:widget/wzcl/wzcl.js"), moment = require("common:widget/moment/2.8.4/moment.js");
!function () {
    function e(e) {
        location.href = "/" + a + "/page-" + e
    }

    var t = wzcl.data.get("extras.totalCount"), a = wzcl.data.get("extras.section"),
        i = (wzcl.data.get("extras.sid"), wzcl.data.get("extras.curPage")), n = 10;
    t > n && $("#pagination").pagination({
        items: t,
        itemsOnPage: n,
        cssStyle: "wzcl-theme",
        displayedPages: 3,
        edges: 1,
        onPageClick: e,
        currentPage: i,
        hrefTextPrefix: "/" + a + "/page-",
        hrefTextSuffix: "/",
        prevText: "<",
        nextText: ">",
        hasFirEndBtn: !0
    });
    var r = $(".search-box").find(".J-search"), o = $(".search-box").find(".search");
    r.click(function () {
        var e = o.val();
        return e ? void $.get("/api/zixun/get-py-by-keyword", {name: e}, function (t) {
            location.href = t.data ? "/kw-" + t.data + ".html" : "/s?kw=" + encodeURI(e)
        }) : void alert("请输入搜索内容！")
    })
}();