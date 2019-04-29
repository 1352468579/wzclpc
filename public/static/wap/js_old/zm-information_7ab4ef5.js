var $ = require("common:widget/jquery/1.11.3/jquery.js");
require("desktop:widget/simplePagination/jquery.simplePagination.js");
var ZM = require("common:widget/zm/zm.js"), moment = require("common:widget/moment/2.8.4/moment.js");
!function () {
    function e(e) {
        location.href = "/" + a + "/page-" + e
    }
    // var t = ZM.data.get("extras.totalCount"), a = ZM.data.get("extras.section"),
    //     i = (ZM.data.get("extras.sid"), ZM.data.get("extras.curPage")), n = 10;
    // t > n && $("#pagination").pagination({
    //     items: t,
    //     itemsOnPage: n,
    //     cssStyle: "zm-theme",
    //     displayedPages: 3,
    //     edges: 1,
    //     onPageClick: e,
    //     currentPage: i,
    //     hrefTextPrefix: "/" + a + "/page-",
    //     hrefTextSuffix: "/",
    //     prevText: "<",
    //     nextText: ">",
    //     hasFirEndBtn: !0
    // });
    var r = $(".search-box").find(".J-search"), o = $(".search-box").find(".search");
    r.click(function () {
        var e = o.val();
        return e ? void $.get("/Wap/News/search/", {keyword: e}, function (t) {
            location.href = t.data ? "/Wap/News/search/keyword/" + t.data + ".html" : "/Wap/News/search/keyword/" + encodeURI(e)
        }) : void alert("请输入搜索内容！")
    })
}();