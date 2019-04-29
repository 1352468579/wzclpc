!function () {
    function e() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function n() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }

    var i = require("common:widget/wzcl/wzcl.js"), o = {}, r = null;
    o.cookie = {}, o.cookie.set = function (e, t, n) {
        var i;
        n.H && (i = new Date, i.setTime(i.getTime() + n.H)), document.cookie = e + "=" + t + (n.domain ? "; domain=" + n.domain : "") + (n.path ? "; path=" + n.path : "") + (i ? "; expires=" + i.toGMTString() : ";expire=Thu, 18 Dec 2013") + (n.hb ? "; secure" : "")
    }, o.cookie.get = function (e) {
        return (e = RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie)) ? e[2] : r
    }, o.Utils = {}, o.Utils.getById = function (e) {
        return document.getElementById(e)
    }, o.Utils.getDomain = function () {
        return document.domain
    }, o.Utils.getUrl = function () {
        return document.URL
    }, o.Utils.getTitle = function () {
        return document.title
    }, o.Utils.getUrl = function () {
        var e = document.URL, t = e ? e.split("://")[1] : "";
        return t ? t.split("?")[0] : t
    }, o.Utils.getPreUrl = function () {
        return document.referrer
    }, o.Utils.getRp = function () {
        return window.screen.height + "*" + window.screen.width
    }, o.Utils.getColorDepth = function () {
        return window.screen.colorDepth
    }, o.Utils.getQueryString = function (e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(t);
        return null != n ? decodeURIComponent(n[2]) : null
    }, o.Utils.bindEvent = function (e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, function (t) {
            n.call(e, t)
        }) : e.addEventListener && e.addEventListener(t, n)
    }, o.Utils.removeEvent = function (e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, function (t) {
            n.call(e, t)
        }) : e.removeEventListener && e.removeEventListener(t, n)
    }, o.Utils.parse = function () {
        return new Function('return (" + source + ")')()
    }, o.Utils.stringify = function () {
        function e(e) {
            return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function (e) {
                var t = i[e];
                return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
            })), '"' + e + '"'
        }

        function n(e) {
            return 10 > e ? "0" + e : e
        }

        var i = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (i) {
            switch (typeof i) {
                case"undefined":
                    return "undefined";
                case"number":
                    return isFinite(i) ? String(i) : "null";
                case"string":
                    return e(i);
                case"boolean":
                    return String(i);
                default:
                    if (i === t)return "null";
                    if (i instanceof Array) {
                        var o, r, s, c = ["["], u = i.length;
                        for (r = 0; u > r; r++)switch (s = i[r], typeof s) {
                            case"undefined":
                            case"function":
                            case"unknown":
                                break;
                            default:
                                o && c.push(","), c.push(mt.l.stringify(s)), o = 1
                        }
                        return c.push("]"), c.join("")
                    }
                    if (i instanceof Date)return '"' + i.getFullYear() + "-" + n(i.getMonth() + 1) + "-" + n(i.getDate()) + "T" + n(i.getHours()) + ":" + n(i.getMinutes()) + ":" + n(i.getSeconds()) + '"';
                    o = ["{"], r = mt.l.stringify;
                    for (u in i)if (Object.prototype.hasOwnProperty.call(i, u))switch (s = i[u], typeof s) {
                        case"undefined":
                        case"unknown":
                        case"function":
                            break;
                        default:
                            c && o.push(","), c = 1, o.push(r(u) + ":" + r(s))
                    }
                    return o.push("}"), o.join("")
            }
        }
    };
    var s = 0, c = o.cookie.get("zmTongJi_session"), u = c && c.split("entertime="), l = o.Utils.getDomain();
    o.Utils.sendMessage = function (e) {
        if (e) {
            var t = i.data.get("extras.zmTjUrl") + "/z.gif?", n = o.Utils.getUrl(), r = o.Utils.getQueryString("channel_code") || "", c = o.Utils.getQueryString("channel_keyword") || "", u = o.Utils.getTitle(), a = o.Utils.getPreUrl(), g = o.Utils.getRp(), f = o.Utils.getColorDepth(), d = e.ev || "", m = e.ck || "", U = e.li || "", h = e.lt || "", p = e.lo || "", v = e.sk || "", k = new Image(1, 1);
            k.src = t + "co=" + r + "&ke=" + c + "&ev=" + d + "&st=" + s + "&do=" + l + "&ur=" + n + "&ti=" + u + "&re=" + a + "&sc=" + g + "&cd=" + f + "&ck=" + m + "&li=" + U + "&lt=" + h + "&lo=" + p + "&sk=" + v
        }
    }, window.onload = function () {
        if (!o.cookie.get("zmTongJi_session")) {
            var e = n() + "entertime=" + (new Date).getTime();
            o.cookie.set("zmTongJi_session", e, {domain: l})
        }
        if (c = o.cookie.get("zmTongJi_session"), u = c && c.split("entertime="), o.cookie.get("zmTongJi"))o.Utils.sendMessage({
            ev: 1,
            sk: u[0],
            ck: o.cookie.get("zmTongJi").split("zmtj-")[1]
        }); else {
            var t = "zmtj-" + n();
            o.cookie.set("zmTongJi", t, {domain: l, H: 9e12}), o.Utils.sendMessage({
                ev: 1,
                sk: u[0],
                ck: t.split("zmtj-")[1]
            })
        }
    }, window.onbeforeunload = function () {
        s = u[1] ? (new Date).getTime() - u[1] : 0;
        var e = u[0] + "entertime=" + (new Date).getTime();
        o.cookie.set("zmTongJi_session", e, {domain: l}), o.Utils.sendMessage({ev: 2, sk: u[0]})
    }
}();