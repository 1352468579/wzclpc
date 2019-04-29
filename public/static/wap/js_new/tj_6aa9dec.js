window.$ = window.jQuery = require("common:widget/jquery/1.11.3/jquery.js");
var wzcl = require("common:widget/wzcl/wzcl.js"), hasLogin = !!wzcl.data.get("stu");
$(function () {
    function e(e, n) {
        var t = window.location.search, a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = t.substr(1).match(a);
        return i ? decodeURIComponent(i[2]) : n
    }

    function n(e) {
        var n = document.cookie, t = n.indexOf(e);
        if (-1 != t) {
            t += e.length + 1;
            var a = n.indexOf(";", t);
            -1 == a && (a = n.length);
            var i = unescape(n.substring(t, a))
        }
        return i
    }

    var t = {domain: window.location.host, url: window.location.pathname, _ga: n("_ga")};
    $.ajax({
        type: "post",
        url: "/api/student/statistics-count",
        timeout: 5e3,
        data: JSON.stringify(t),
        headers: {"Content-Type": "application/json; charset=utf-8"},
        success: function (e) {
        },
        error: function () {
        }
    });
    var a = "", i = (new Date).getTime();
    a = "/appointment-success" == window.location.pathname || "/appointment-success2" == window.location.pathname ? "type:预约成功页" : "type:推广落地页";
    var o = [{
        page_id: window.location.pathname,
        page_name: "",
        refer_page_id: "",
        refer_page_name: "",
        device_id: n("_ga"),
        user_id: "",
        tracker_type: "3",
        channel_id: e("channel_code"),
        session_id: "",
        time_start: i,
        duration: "",
        content: "",
        linkurl: "",
        expand: a,
        app_id: "",
        platform: "pc"
    }];
    o && "{}" != o && $.ajax({
        type: "post",
        url: "/log/official",
        timeout: 5e3,
        data: JSON.stringify(o),
        headers: {"Content-Type": "application/json; charset=utf-8"},
        success: function (e) {
        },
        error: function () {
        }
    })
});