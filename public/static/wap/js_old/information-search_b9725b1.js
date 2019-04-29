var $ = require("common:widget/jquery/1.11.3/jquery.js");
// require("desktop:widget/simplePagination/jquery.simplePagination.js");
var ZM = require("common:widget/zm/zm.js"), moment = require("common:widget/moment/2.8.4/moment.js");
!function () {
    function e(e) {
        c && $.ajax({
            type: "post",
            url: "/api/student/get-search-list",
            data: {pageNo: e, kw: d},
            success: function (e) {
                0 == e.code && t(e.data.data)
            }
        })
    }

    function t(e) {
        var t = '<li data-tid="{{tid}}"><img src="{{cover}}" alt="{{title}}-����" class="cover"/><div class="arc-cnt"><h1 class="title"><a href="/article/{{tid}}">{{title}}</a></h1><p class="dot-ellipsis dot-height-42 description">{{description}}</p><div class="footer"><span class="time">{{inTime}}</span>��<span class="section"><a href="/{{sectionUrl}}">{{sectionName}}</a></span></div></div></li>',
            i = "";
        $.each(e, function (e, a) {
            a.inTime = moment(a.inTime).format("YYYY-MM-DD"), a.sectionName = a.section.parent ? a.section.parent.name : a.section.name, a.sectionUrl = a.section.parent ? a.section.parent.tab : a.section.tab, i += t.replace(/{{cover}}/g, a.cover).replace(/{{title}}/g, a.title).replace(/{{description}}/g, a.description).replace(/{{inTime}}/g, a.inTime).replace(/{{sectionName}}/g, a.sectionName).replace(/{{tid}}/g, a.id).replace(/{{sectionUrl}}/g, a.sectionUrl)
        }), $(".article-list").html(i), $(document).scrollTop(0)
    }

    function i() {
        var e = location.href, t = new Object;
        if (-1 != e.indexOf("?")) {
            var i = e.substr(e.indexOf("?") + 1);
            -1 != i.indexOf("/page-") && (i = i.slice(0, i.indexOf("/page-")));
            for (var a = i.split("&"), n = 0; n < a.length; n++) t[a[n].split("=")[0]] = decodeURI(a[n].split("=")[1])
        } else if (-1 == e.indexOf("?") && e.split("-").length - 1 == 1) {
            var t = e.slice(e.indexOf("-") + 1, e.indexOf("."));
            for (var r in s) t == s[r] && (t = r)
        } else if (-1 == e.indexOf("?") && e.split("-").length - 1 == 2) {
            var t = e.slice(e.indexOf("-") + 1, e.lastIndexOf("-"));
            for (var r in s) t == s[r] && (t = r)
        }
        return t.kw ? t.kw : t
    }

    var a = $(".search-box").find(".search-btn"), n = $("#pagination"), r = n.find("ul"),
        s = ZM.data.get("extras.keyMap"), c = (ZM.data.get("extras.section"), ZM.data.get("extras.inDefault")),
        o = ZM.data.get("extras.pageNo"), l = ZM.data.get("extras.searchKey"), d = i();
    a.click(function () {
        var e = (ZM.data.get("extras.searchKey"), $(this).siblings("input").val());
        return e ? void $.get("/Wap/News/search", {keyword: e}, function (t) {
            location.href = t.data ? "/Wap/News/search/keyword/" + t.data + ".html" : "/Wap/News/search/keyword/" + encodeURI(e)
        }) : void alert("请输入相关搜索内容！")
    });
    var p = ZM.data.get("extras.totalCount"), g = 10;
    if (p > g) {
        if (c) return void $("#pagination").pagination({
            items: p,
            itemsOnPage: g,
            cssStyle: "zm-theme",
            onPageClick: e,
            hrefTextPrefix: "/s?kw=" + l + "/page-",
            prevText: "<",
            nextText: ">",
            currentPage: o,
            hasFirEndBtn: !0
        });
        $("#pagination").pagination({
            items: p,
            itemsOnPage: g,
            cssStyle: "zm-theme",
            onPageClick: e,
            hrefTextPrefix: "kw-" + l + "-",
            hrefTextSuffix: ".html",
            prevText: "<",
            nextText: ">",
            currentPage: o,
            hasFirEndBtn: !0
        })
    }
    r.append("<li>12312</li>")
}();