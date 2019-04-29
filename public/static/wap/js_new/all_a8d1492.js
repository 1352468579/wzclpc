define("common:widget/position/1.1.0/index.js", function (e, t) {
    function n(e) {
        e = f(e) || {}, e.nodeType && (e = {element: e});
        var t = f(e.element) || s;
        if (1 !== t.nodeType)throw new Error("posObject.element is invalid.");
        var n = {element: t, x: e.x || 0, y: e.y || 0}, o = t === s || "VIEWPORT" === t._id;
        return n.offset = function () {
            return p ? {left: 0, top: 0} : o ? {
                left: u(document).scrollLeft(),
                top: u(document).scrollTop()
            } : l(u(t)[0])
        }, n.size = function () {
            var e = u(o ? window : t);
            return {width: e.outerWidth(), height: e.outerHeight()}
        }, n
    }

    function o(e) {
        e.x = i(e.x, e, "width"), e.y = i(e.y, e, "height")
    }

    function i(e, t, n) {
        if (e += "", e = e.replace(/px/gi, ""), /\D/.test(e) && (e = e.replace(/(?:top|left)/gi, "0%").replace(/center/gi, "50%").replace(/(?:bottom|right)/gi, "100%")), -1 !== e.indexOf("%") && (e = e.replace(/(\d+(?:\.\d+)?)%/gi, function (e, o) {
                return t.size()[n] * (o / 100)
            })), /[+\-*\/]/.test(e))try {
            e = new Function("return " + e)()
        } catch (o) {
            throw new Error("Invalid position value: " + e)
        }
        return c(e)
    }

    function r(e) {
        var t = e.offsetParent();
        t[0] === document.documentElement && (t = u(document.body)), m && t.css("zoom", 1);
        var n;
        return n = t[0] === document.body && "static" === t.css("position") ? {
            top: 0,
            left: 0
        } : l(t[0]), n.top += c(t.css("border-top-width")), n.left += c(t.css("border-left-width")), n
    }

    function c(e) {
        return parseFloat(e, 10) || 0
    }

    function f(e) {
        return u(e)[0]
    }

    function l(e) {
        var t = e.getBoundingClientRect(), n = document.documentElement;
        return {
            left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
            top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
        }
    }

    var d = t, s = {
        _id: "VIEWPORT",
        nodeType: 1
    }, u = e("common:widget/jquery/1.11.3/jquery.js"), p = !1, a = (window.navigator.userAgent || "").toLowerCase(), m = -1 !== a.indexOf("msie 6");
    d.pin = function (e, t) {
        if (e = n(e), t = n(t), e.element !== s && "VIEWPORT" !== e.element._id) {
            var i = u(e.element);
            "fixed" !== i.css("position") || m ? (i.css("position", "absolute"), p = !1) : p = !0, o(e), o(t);
            var c = r(i), f = t.offset(), l = f.top + t.y - e.y - c.top, d = f.left + t.x - e.x - c.left;
            i.css({left: d, top: l})
        }
    }, d.center = function (e, t) {
        d.pin({element: e, x: "50%", y: "50%"}, {element: t, x: "50%", y: "50%"})
    }, d.VIEWPORT = s
});
;
define("common:widget/arale-iframe-shim/1.1.0/index.js", function (e, t, i) {
    function r(e) {
        this.target = s(e).eq(0)
    }

    function o() {
    }

    function n(e) {
        var t = {display: "none", border: "none", opacity: 0, position: "absolute"}, i = e.css("zIndex");
        return i && i > 0 && (t.zIndex = i - 1), s("<iframe>", {
            src: "javascript:''",
            frameborder: 0,
            css: t
        }).insertBefore(e)
    }

    var s = e("common:widget/jquery/1.11.3/jquery.js"), a = e("common:widget/position/1.1.0/index.js"), d = -1 !== (window.navigator.userAgent || "").toLowerCase().indexOf("msie 6");
    r.prototype.sync = function () {
        var e = this.target, t = this.iframe;
        if (!e.length)return this;
        var i = e.outerHeight(), r = e.outerWidth();
        return i && r && !e.is(":hidden") ? (t || (t = this.iframe = n(e)), t.css({
            height: i,
            width: r
        }), a.pin(t[0], e[0]), t.show()) : t && t.hide(), this
    }, r.prototype.destroy = function () {
        this.iframe && (this.iframe.remove(), delete this.iframe), delete this.target
    }, d ? i.exports = r : (o.prototype.sync = function () {
        return this
    }, o.prototype.destroy = o, i.exports = o)
});
;
define("common:widget/arale-class/1.2.0/class.js", function (t, n, r) {
    function o(t) {
        return this instanceof o || !f(t) ? void 0 : i(t)
    }

    function e(t) {
        var n, r;
        for (n in t)r = t[n], o.Mutators.hasOwnProperty(n) ? o.Mutators[n].call(this, r) : this.prototype[n] = r
    }

    function i(t) {
        return t.extend = o.extend, t.implement = e, t
    }

    function s() {
    }

    function c(t, n, r) {
        for (var o in n)if (n.hasOwnProperty(o)) {
            if (r && -1 === l(r, o))continue;
            "prototype" !== o && (t[o] = n[o])
        }
    }

    r.exports = o, o.create = function (t, n) {
        function r() {
            t.apply(this, arguments), this.constructor === r && this.initialize && this.initialize.apply(this, arguments)
        }

        return f(t) || (n = t, t = null), n || (n = {}), t || (t = n.Extends || o), n.Extends = t, t !== o && c(r, t, t.StaticsWhiteList), e.call(r, n), i(r)
    }, o.extend = function (t) {
        return t || (t = {}), t.Extends = this, o.create(t)
    }, o.Mutators = {
        Extends: function (t) {
            var n = this.prototype, r = u(t.prototype);
            c(r, n), r.constructor = this, this.prototype = r, this.superclass = t.prototype
        }, Implements: function (t) {
            p(t) || (t = [t]);
            for (var n, r = this.prototype; n = t.shift();)c(r, n.prototype || n)
        }, Statics: function (t) {
            c(this, t)
        }
    };
    var u = Object.__proto__ ? function (t) {
        return {__proto__: t}
    } : function (t) {
        return s.prototype = t, new s
    }, a = Object.prototype.toString, p = Array.isArray || function (t) {
            return "[object Array]" === a.call(t)
        }, f = function (t) {
        return "[object Function]" === a.call(t)
    }, l = Array.prototype.indexOf ? function (t, n) {
        return t.indexOf(n)
    } : function (t, n) {
        for (var r = 0, o = t.length; o > r; r++)if (t[r] === n)return r;
        return -1
    }
});
;
define("common:widget/arale-events/1.2.0/events.js", function (t, e, r) {
    function n() {
    }

    function o(t, e, r) {
        var n = !0;
        if (t) {
            var o = 0, i = t.length, s = e[0], a = e[1], f = e[2];
            switch (e.length) {
                case 0:
                    for (; i > o; o += 2)n = t[o].call(t[o + 1] || r) !== !1 && n;
                    break;
                case 1:
                    for (; i > o; o += 2)n = t[o].call(t[o + 1] || r, s) !== !1 && n;
                    break;
                case 2:
                    for (; i > o; o += 2)n = t[o].call(t[o + 1] || r, s, a) !== !1 && n;
                    break;
                case 3:
                    for (; i > o; o += 2)n = t[o].call(t[o + 1] || r, s, a, f) !== !1 && n;
                    break;
                default:
                    for (; i > o; o += 2)n = t[o].apply(t[o + 1] || r, e) !== !1 && n
            }
        }
        return n
    }

    function i(t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }

    var s = /\s+/;
    n.prototype.on = function (t, e, r) {
        var n, o, i;
        if (!e)return this;
        for (n = this.__events || (this.__events = {}), t = t.split(s); o = t.shift();)i = n[o] || (n[o] = []), i.push(e, r);
        return this
    }, n.prototype.once = function (t, e, r) {
        var n = this, o = function () {
            n.off(t, o), e.apply(r || n, arguments)
        };
        return this.on(t, o, r)
    }, n.prototype.off = function (t, e, r) {
        var n, o, i, f;
        if (!(n = this.__events))return this;
        if (!(t || e || r))return delete this.__events, this;
        for (t = t ? t.split(s) : a(n); o = t.shift();)if (i = n[o])if (e || r)for (f = i.length - 2; f >= 0; f -= 2)e && i[f] !== e || r && i[f + 1] !== r || i.splice(f, 2); else delete n[o];
        return this
    }, n.prototype.trigger = function (t) {
        var e, r, n, i, a, f, c = [], l = !0;
        if (!(e = this.__events))return this;
        for (t = t.split(s), a = 1, f = arguments.length; f > a; a++)c[a - 1] = arguments[a];
        for (; r = t.shift();)(n = e.all) && (n = n.slice()), (i = e[r]) && (i = i.slice()), "all" !== r && (l = o(i, c, this) && l), l = o(n, [r].concat(c), this) && l;
        return l
    }, n.prototype.emit = n.prototype.trigger;
    var a = Object.keys;
    a || (a = function (t) {
        var e = [];
        for (var r in t)t.hasOwnProperty(r) && e.push(r);
        return e
    }), n.mixTo = function (t) {
        function e(e) {
            t[e] = function () {
                return r[e].apply(o, Array.prototype.slice.call(arguments)), this
            }
        }

        t = i(t) ? t.prototype : t;
        var r = n.prototype, o = new n;
        for (var s in r)r.hasOwnProperty(s) && e(s)
    }, r.exports = n
});
;
define("common:widget/arale-base/1.2.0/src/aspect.js", function (t, r) {
    function e(t, r, e, a) {
        for (var c, o, f = r.split(s); c = f.shift();)o = i(this, c), o.__isAspected || n.call(this, c), this.on(t + ":" + c, e, a);
        return this
    }

    function i(t, r) {
        var e = t[r];
        if (!e)throw new Error("Invalid method name: " + r);
        return e
    }

    function n(t) {
        var r = this[t];
        this[t] = function () {
            var e = Array.prototype.slice.call(arguments), i = ["before:" + t].concat(e);
            if (this.trigger.apply(this, i) !== !1) {
                var n = r.apply(this, arguments), s = ["after:" + t, n].concat(e);
                return this.trigger.apply(this, s), n
            }
        }, this[t].__isAspected = !0
    }

    r.before = function (t, r, i) {
        return e.call(this, "before", t, r, i)
    }, r.after = function (t, r, i) {
        return e.call(this, "after", t, r, i)
    };
    var s = /\s+/
});
;
define("common:widget/arale-base/1.2.0/src/attribute.js", function (t, r) {
    function e(t) {
        return "[object String]" === w.call(t)
    }

    function n(t) {
        return "[object Function]" === w.call(t)
    }

    function i(t) {
        return null != t && t == t.window
    }

    function a(t) {
        if (!t || "[object Object]" !== w.call(t) || t.nodeType || i(t))return !1;
        try {
            if (t.constructor && !A.call(t, "constructor") && !A.call(t.constructor.prototype, "isPrototypeOf"))return !1
        } catch (r) {
            return !1
        }
        var e;
        if (j)for (e in t)return A.call(t, e);
        for (e in t);
        return void 0 === e || A.call(t, e)
    }

    function o(t) {
        if (!t || "[object Object]" !== w.call(t) || t.nodeType || i(t) || !t.hasOwnProperty)return !1;
        for (var r in t)if (t.hasOwnProperty(r))return !1;
        return !0
    }

    function c(t, r) {
        var e;
        for (e in r)r.hasOwnProperty(e) && (t[e] = s(r[e], t[e]));
        return t
    }

    function s(t, r) {
        return P(t) ? t = t.slice() : a(t) && (a(r) || (r = {}), t = c(r, t)), t
    }

    function u(t, r, e) {
        for (var n = [], i = r.constructor.prototype; i;)i.hasOwnProperty("attrs") || (i.attrs = {}), l(e, i.attrs, i), o(i.attrs) || n.unshift(i.attrs), i = i.constructor.superclass;
        for (var a = 0, c = n.length; c > a; a++)y(t, p(n[a]))
    }

    function f(t, r) {
        y(t, p(r, !0), !0)
    }

    function l(t, r, e, n) {
        for (var i = 0, a = t.length; a > i; i++) {
            var o = t[i];
            e.hasOwnProperty(o) && (r[o] = n ? r.get(o) : e[o])
        }
    }

    function h(t, r) {
        for (var e in r)if (r.hasOwnProperty(e)) {
            var i, a = r[e].value;
            n(a) && (i = e.match(m)) && (t[i[1]](v(i[2]), a), delete r[e])
        }
    }

    function v(t) {
        var r = t.match(S), e = r[1] ? "change:" : "";
        return e += r[2].toLowerCase() + r[3]
    }

    function g(t, r, e) {
        var n = {silent: !0};
        t.__initializingAttrs = !0;
        for (var i in e)e.hasOwnProperty(i) && r[i].setter && t.set(i, e[i], n);
        delete t.__initializingAttrs
    }

    function p(t, r) {
        var e = {};
        for (var n in t) {
            var i = t[n];
            e[n] = !r && a(i) && b(i, x) ? i : {value: i}
        }
        return e
    }

    function y(t, r, e) {
        var n, i, a;
        for (n in r)if (r.hasOwnProperty(n)) {
            if (i = r[n], a = t[n], a || (a = t[n] = {}), void 0 !== i.value && (a.value = s(i.value, a.value)), e)continue;
            for (var o in C) {
                var c = C[o];
                void 0 !== i[c] && (a[c] = i[c])
            }
        }
        return t
    }

    function b(t, r) {
        for (var e = 0, n = r.length; n > e; e++)if (t.hasOwnProperty(r[e]))return !0;
        return !1
    }

    function O(t) {
        return null == t || (e(t) || P(t)) && 0 === t.length || o(t)
    }

    function d(t, r) {
        if (t === r)return !0;
        if (O(t) && O(r))return !0;
        var e = w.call(t);
        if (e != w.call(r))return !1;
        switch (e) {
            case"[object String]":
                return t == String(r);
            case"[object Number]":
                return t != +t ? r != +r : 0 == t ? 1 / t == 1 / r : t == +r;
            case"[object Date]":
            case"[object Boolean]":
                return +t == +r;
            case"[object RegExp]":
                return t.source == r.source && t.global == r.global && t.multiline == r.multiline && t.ignoreCase == r.ignoreCase;
            case"[object Array]":
                var n = t.toString(), i = r.toString();
                return -1 === n.indexOf("[object") && -1 === i.indexOf("[object") && n === i
        }
        if ("object" != typeof t || "object" != typeof r)return !1;
        if (a(t) && a(r)) {
            if (!d(_(t), _(r)))return !1;
            for (var o in t)if (t[o] !== r[o])return !1;
            return !0
        }
        return !1
    }

    r.initAttrs = function (t) {
        var r = this.attrs = {}, e = this.propsInAttrs || [];
        u(r, this, e), t && f(r, t), g(this, r, t), h(this, r), l(e, this, r, !0)
    }, r.get = function (t) {
        var r = this.attrs[t] || {}, e = r.value;
        return r.getter ? r.getter.call(this, e, t) : e
    }, r.set = function (t, r, n) {
        var i = {};
        e(t) ? i[t] = r : (i = t, n = r), n || (n = {});
        var o = n.silent, s = n.override, u = this.attrs, f = this.__changedAttrs || (this.__changedAttrs = {});
        for (t in i)if (i.hasOwnProperty(t)) {
            var l = u[t] || (u[t] = {});
            if (r = i[t], l.readOnly)throw new Error("This attribute is readOnly: " + t);
            l.setter && (r = l.setter.call(this, r, t));
            var h = this.get(t);
            !s && a(h) && a(r) && (r = c(c({}, h), r)), u[t].value = r, this.__initializingAttrs || d(h, r) || (o ? f[t] = [r, h] : this.trigger("change:" + t, r, h, t))
        }
        return this
    }, r.change = function () {
        var t = this.__changedAttrs;
        if (t) {
            for (var r in t)if (t.hasOwnProperty(r)) {
                var e = t[r];
                this.trigger("change:" + r, e[0], e[1], r)
            }
            delete this.__changedAttrs
        }
        return this
    }, r._isPlainObject = a;
    var j, w = Object.prototype.toString, A = Object.prototype.hasOwnProperty;
    !function () {
        function t() {
            this.x = 1
        }

        var r = [];
        t.prototype = {valueOf: 1, y: 1};
        for (var e in new t)r.push(e);
        j = "x" !== r[0]
    }();
    var P = Array.isArray || function (t) {
            return "[object Array]" === w.call(t)
        }, _ = Object.keys;
    _ || (_ = function (t) {
        var r = [];
        for (var e in t)t.hasOwnProperty(e) && r.push(e);
        return r
    });
    var m = /^(on|before|after)([A-Z].*)$/, S = /^(Change)?([A-Z])(.*)/, x = ["value", "getter", "setter", "readOnly"], C = ["setter", "getter", "readOnly"]
});
;
define("common:widget/arale-base/1.2.0/src/base.js", function (t, e, s) {
    function n(t, e) {
        for (var s in e)if (e.hasOwnProperty(s)) {
            var n = "_onChange" + a(s);
            t[n] && t.on("change:" + s, t[n])
        }
    }

    function a(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    }

    var i = t("common:widget/arale-class/1.2.0/class.js"), r = t("common:widget/arale-events/1.2.0/events.js"), o = t("common:widget/arale-base/1.2.0/src/aspect.js"), c = t("common:widget/arale-base/1.2.0/src/attribute.js");
    s.exports = i.create({
        Implements: [r, o, c], initialize: function (t) {
            this.initAttrs(t), n(this, this.attrs)
        }, destroy: function () {
            this.off();
            for (var t in this)this.hasOwnProperty(t) && delete this[t];
            this.destroy = function () {
            }
        }
    })
});
;
define("common:widget/arale-base/1.2.0/base.js", function (e, a, s) {
    s.exports = e("common:widget/arale-base/1.2.0/src/base.js")
});
;
define("common:widget/arale-widget/1.2.0/src/daparser.js", function (e, t) {
    function r(e) {
        return e.toLowerCase().replace(i, function (e, t) {
            return (t + "").toUpperCase()
        })
    }

    function a(e) {
        for (var t in e)if (e.hasOwnProperty(t)) {
            var r = e[t];
            if ("string" != typeof r)continue;
            o.test(r) ? (r = r.replace(/'/g, '"'), e[t] = a(f(r))) : e[t] = n(r)
        }
        return e
    }

    function n(e) {
        if ("false" === e.toLowerCase())e = !1; else if ("true" === e.toLowerCase())e = !0; else if (/\d/.test(e) && /[^a-z]/i.test(e)) {
            var t = parseFloat(e);
            t + "" === e && (e = t)
        }
        return e
    }

    var s = e("common:widget/jquery/1.11.3/jquery.js");
    t.parseElement = function (e, t) {
        e = s(e)[0];
        var n = {};
        if (e.dataset)n = s.extend({}, e.dataset); else for (var i = e.attributes, o = 0, f = i.length; f > o; o++) {
            var u = i[o], c = u.name;
            0 === c.indexOf("data-") && (c = r(c.substring(5)), n[c] = u.value)
        }
        return t === !0 ? n : a(n)
    };
    var i = /-([a-z])/g, o = /^\s*[\[{].*[\]}]\s*$/, f = this.JSON ? JSON.parse : s.parseJSON
});
;
define("common:widget/arale-widget/1.2.0/src/auto-render.js", function (t, e) {
    var a = t("common:widget/jquery/1.11.3/jquery.js"), n = "data-widget-auto-rendered";
    e.autoRender = function (t) {
        return new this(t).render()
    }, e.autoRenderAll = function (t, r) {
        "function" == typeof t && (r = t, t = null), t = a(t || document.body);
        var o = [], d = [];
        t.find("[data-widget]").each(function (t, a) {
            e.isDataApiOff(a) || (o.push(a.getAttribute("data-widget").toLowerCase()), d.push(a))
        }), o.length && seajs.use(o, function () {
            for (var t = 0; t < arguments.length; t++) {
                var e = arguments[t], o = a(d[t]);
                if (!o.attr(n)) {
                    var u = {initElement: o, renderType: "auto"}, i = o.attr("data-widget-role");
                    u[i ? i : "element"] = o, e.autoRender && e.autoRender(u), o.attr(n, "true")
                }
            }
            r && r()
        })
    };
    var r = "off" === a(document.body).attr("data-api");
    e.isDataApiOff = function (t) {
        var e = a(t).attr("data-api");
        return "off" === e || "on" !== e && r
    }
});
;
define("common:widget/arale-widget/1.2.0/src/widget.js", function (e, t, n) {
    function i() {
        return "widget-" + j++
    }

    function s(e) {
        return "[object String]" === A.call(e)
    }

    function r(e) {
        return "[object Function]" === A.call(e)
    }

    function l(e) {
        return R(document.documentElement, e)
    }

    function o(e) {
        return e.charAt(0).toUpperCase() + e.substring(1)
    }

    function a(e) {
        return r(e.events) && (e.events = e.events()), e.events
    }

    function u(e, t) {
        var n = e.match(x), i = n[1] + g + t.cid, s = n[2] || void 0;
        return s && s.indexOf("{{") > -1 && (s = d(s, t)), {type: i, selector: s}
    }

    function d(e, t) {
        return e.replace(C, function (e, n) {
            for (var i, r = n.split("."), l = t; i = r.shift();)l = l === t.attrs ? t.get(i) : l[i];
            return s(l) ? l : b
        })
    }

    function h(e) {
        return null == e || void 0 === e
    }

    function c(e) {
        for (var t = e.length - 1; t >= 0 && void 0 === e[t]; t--)e.pop();
        return e
    }

    var m = e("common:widget/arale-base/1.2.0/base.js"), f = e("common:widget/jquery/1.11.3/jquery.js"), p = e("common:widget/arale-widget/1.2.0/src/daparser.js"), v = e("common:widget/arale-widget/1.2.0/src/auto-render.js"), g = ".delegate-events-", E = "_onRender", _ = "data-widget-cid", y = {}, w = m.extend({
        propsInAttrs: ["initElement", "element", "events"],
        element: null,
        events: null,
        attrs: {
            id: null,
            className: null,
            style: null,
            template: "<div></div>",
            model: null,
            parentNode: document.body
        },
        initialize: function (e) {
            this.cid = i();
            var t = this._parseDataAttrsConfig(e);
            w.superclass.initialize.call(this, e ? f.extend(t, e) : t), this.parseElement(), this.initProps(), this.delegateEvents(), this.setup(), this._stamp(), this._isTemplate = !(e && e.element)
        },
        _parseDataAttrsConfig: function (e) {
            var t, n;
            return e && (t = f(e.initElement ? e.initElement : e.element)), t && t[0] && !v.isDataApiOff(t) && (n = p.parseElement(t)), n
        },
        parseElement: function () {
            var e = this.element;
            e ? this.element = f(e) : this.get("template") && this.parseElementFromTemplate(), this.element && this.element[0] || console.log
        },
        parseElementFromTemplate: function () {
            this.element = f(this.get("template"))
        },
        initProps: function () {
        },
        delegateEvents: function (e, t, n) {
            var i = c(Array.prototype.slice.call(arguments));
            if (0 === i.length ? (t = a(this), e = this.element) : 1 === i.length ? (t = e, e = this.element) : 2 === i.length ? (n = t, t = e, e = this.element) : (e || (e = this.element), this._delegateElements || (this._delegateElements = []), this._delegateElements.push(f(e))), s(t) && r(n)) {
                var l = {};
                l[t] = n, t = l
            }
            for (var o in t)if (t.hasOwnProperty(o)) {
                var d = u(o, this), h = d.type, m = d.selector;
                !function (t, n) {
                    var i = function (e) {
                        r(t) ? t.call(n, e) : n[t](e)
                    };
                    m ? f(e).on(h, m, i) : f(e).on(h, i)
                }(t[o], this)
            }
            return this
        },
        undelegateEvents: function (e, t) {
            var n = c(Array.prototype.slice.call(arguments));
            if (t || (t = e, e = null), 0 === n.length) {
                var i = g + this.cid;
                if (this.element && this.element.off(i), this._delegateElements)for (var s in this._delegateElements)this._delegateElements.hasOwnProperty(s) && this._delegateElements[s].off(i)
            } else {
                var r = u(t, this);
                e ? f(e).off(r.type, r.selector) : this.element && this.element.off(r.type, r.selector)
            }
            return this
        },
        setup: function () {
        },
        render: function () {
            this.rendered || (this._renderAndBindAttrs(), this.rendered = !0);
            var e = this.get("parentNode");
            if (e && !l(this.element[0])) {
                var t = this.constructor.outerBoxClass;
                if (t) {
                    var n = this._outerBox = f("<div></div>").addClass(t);
                    n.append(this.element).appendTo(e)
                } else this.element.appendTo(e)
            }
            return this
        },
        _renderAndBindAttrs: function () {
            var e = this, t = e.attrs;
            for (var n in t)if (t.hasOwnProperty(n)) {
                var i = E + o(n);
                if (this[i]) {
                    var s = this.get(n);
                    h(s) || this[i](s, void 0, n), function (t) {
                        e.on("change:" + n, function (n, i, s) {
                            e[t](n, i, s)
                        })
                    }(i)
                }
            }
        },
        _onRenderId: function (e) {
            this.element.attr("id", e)
        },
        _onRenderClassName: function (e) {
            this.element.addClass(e)
        },
        _onRenderStyle: function (e) {
            this.element.css(e)
        },
        _stamp: function () {
            var e = this.cid;
            (this.initElement || this.element).attr(_, e), y[e] = this
        },
        $: function (e) {
            return this.element.find(e)
        },
        destroy: function () {
            this.undelegateEvents(), delete y[this.cid], this.element && this._isTemplate && (this.element.off(), this._outerBox ? this._outerBox.remove() : this.element.remove()), this.element = null, w.superclass.destroy.call(this)
        }
    });
    f(window).unload(function () {
        for (var e in y)y[e].destroy()
    }), w.query = function (e) {
        var t, n = f(e).eq(0);
        return n && (t = n.attr(_)), y[t]
    }, w.autoRender = v.autoRender, w.autoRenderAll = v.autoRenderAll, w.StaticsWhiteList = ["autoRender"], n.exports = w;
    var A = Object.prototype.toString, j = 0, R = f.contains || function (e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        }, x = /^(\S+)\s*(.*)$/, C = /{{([^}]+)}}/g, b = "INVALID_SELECTOR"
});
;
define("common:widget/arale-widget/1.2.0/widget.js", function (e, i, t) {
    t.exports = e("common:widget/arale-widget/1.2.0/src/widget.js")
});
;
define("common:widget/arale-overlay/1.2.0/src/overlay.js", function (e, t, i) {
    function n(e) {
        return r.contains(document.documentElement, e)
    }

    function s(e) {
        r(c.blurOverlays).each(function (t, i) {
            if (i && i.get("visible")) {
                for (var n = 0; n < i._relativeElements.length; n++) {
                    var s = r(i._relativeElements[n])[0];
                    if (s === e.target || r.contains(s, e.target))return
                }
                i.hide()
            }
        })
    }

    function o(e, t) {
        for (var i = 0; i < t.length; i++)if (e === t[i])return t.splice(i, 1), t
    }

    var r = e("common:widget/jquery/1.11.3/jquery.js"), l = e("common:widget/position/1.1.0/index.js"), h = e("common:widget/arale-iframe-shim/1.1.0/index.js"), a = e("common:widget/arale-widget/1.2.0/widget.js"), c = a.extend({
        attrs: {
            width: null,
            height: null,
            zIndex: 99,
            visible: !1,
            align: {selfXY: [0, 0], baseElement: l.VIEWPORT, baseXY: [0, 0]},
            parentNode: document.body
        }, show: function () {
            return this.rendered || this.render(), this.set("visible", !0), this
        }, hide: function () {
            return this.set("visible", !1), this
        }, setup: function () {
            var e = this;
            this._setupShim(), this._setupResize(), this.after("render", function () {
                var e = this.element.css("position");
                ("static" === e || "relative" === e) && this.element.css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px"
                })
            }), this.after("show", function () {
                e._setPosition()
            })
        }, destroy: function () {
            return o(this, c.allOverlays), o(this, c.blurOverlays), c.superclass.destroy.call(this)
        }, _setPosition: function (e) {
            if (n(this.element[0]) && (e || (e = this.get("align")), e)) {
                var t = "none" === this.element.css("display");
                return t && this.element.css({visibility: "hidden", display: "block"}), l.pin({
                    element: this.element,
                    x: e.selfXY[0],
                    y: e.selfXY[1]
                }, {element: e.baseElement, x: e.baseXY[0], y: e.baseXY[1]}), t && this.element.css({
                    visibility: "",
                    display: "none"
                }), this
            }
        }, _setupShim: function () {
            var e = new h(this.element);
            this.after("hide _setPosition", e.sync, e);
            var t = ["width", "height"];
            for (var i in t)t.hasOwnProperty(i) && this.on("change:" + i, e.sync, e);
            this.before("destroy", e.destroy, e)
        }, _setupResize: function () {
            c.allOverlays.push(this)
        }, _blurHide: function (e) {
            e = r.makeArray(e), e.push(this.element), this._relativeElements = e, c.blurOverlays.push(this)
        }, _onRenderWidth: function (e) {
            this.element.css("width", e)
        }, _onRenderHeight: function (e) {
            this.element.css("height", e)
        }, _onRenderZIndex: function (e) {
            this.element.css("zIndex", e)
        }, _onRenderAlign: function (e) {
            this._setPosition(e)
        }, _onRenderVisible: function (e) {
            this.element[e ? "show" : "hide"]()
        }
    });
    c.blurOverlays = [], r(document).on("click", function (e) {
        s(e)
    });
    var u, d = r(window).width(), m = r(window).height();
    c.allOverlays = [], r(window).resize(function () {
        u && clearTimeout(u), u = setTimeout(function () {
            var e = r(window).width(), t = r(window).height();
            (d !== e || m !== t) && r(c.allOverlays).each(function (e, t) {
                t && t.get("visible") && t._setPosition()
            }), d = e, m = t
        }, 80)
    }), i.exports = c
});
;
define("common:widget/arale-overlay/1.2.0/src/mask.js", function (e, t, o) {
    var i = e("common:widget/jquery/1.11.3/jquery.js"), s = e("common:widget/arale-overlay/1.2.0/src/overlay.js"), n = (window.navigator.userAgent || "").toLowerCase(), r = -1 !== n.indexOf("msie 6"), a = i(document.body), c = i(document), d = s.extend({
        attrs: {
            width: r ? c.outerWidth(!0) : "100%",
            height: r ? c.outerHeight(!0) : "100%",
            className: "ui-mask",
            opacity: .2,
            backgroundColor: "#000",
            style: {position: r ? "absolute" : "fixed", top: 0, left: 0},
            align: {baseElement: r ? a : void 0}
        }, show: function () {
            return r && (this.set("width", c.outerWidth(!0)), this.set("height", c.outerHeight(!0))), d.superclass.show.call(this)
        }, _onRenderBackgroundColor: function (e) {
            this.element.css("backgroundColor", e)
        }, _onRenderOpacity: function (e) {
            this.element.css("opacity", e)
        }
    });
    o.exports = new d
});
;
define("common:widget/arale-overlay/1.2.0/overlay.js", function (e, o, a) {
    a.exports = e("common:widget/arale-overlay/1.2.0/src/overlay.js"), a.exports.Mask = e("common:widget/arale-overlay/1.2.0/src/mask.js")
});
;
define("common:widget/arale-popup/1.2.0/src/popup.js", function (e, t, i) {
    function n(e, t, i, n, s) {
        var r = n && n[0];
        s.delegateEvents(r ? n : t, r ? e + " " + t.selector : e, function (e) {
            i.call(e.currentTarget, e)
        })
    }

    var s = e("common:widget/jquery/1.11.3/jquery.js"), r = e("common:widget/arale-overlay/1.2.0/overlay.js"), o = r.extend({
        attrs: {
            trigger: {
                value: null,
                getter: function (e) {
                    return s(e)
                }
            }, triggerType: "hover", delegateNode: {
                value: null, getter: function (e) {
                    return s(e)
                }
            }, align: {
                value: {baseXY: [0, "100%"], selfXY: [0, 0]}, setter: function (e) {
                    return e ? (e.baseElement ? this._specifiedBaseElement = !0 : this.activeTrigger && (e.baseElement = this.activeTrigger), e) : void 0
                }, getter: function (e) {
                    return s.extend({}, e, this._specifiedBaseElement ? {} : {baseElement: this.activeTrigger})
                }
            }, delay: 70, disabled: !1, effect: "", duration: 250
        }, setup: function () {
            o.superclass.setup.call(this), this._bindTrigger(), this._blurHide(this.get("trigger")), this.activeTrigger = this.get("trigger").eq(0);
            var e = this;
            this.get("delegateNode") && this.before("show", function () {
                e._relativeElements = e.get("trigger"), e._relativeElements.push(e.element)
            })
        }, render: function () {
            return o.superclass.render.call(this), this.element.hide(), this
        }, show: function () {
            return this.get("disabled") ? void 0 : o.superclass.show.call(this)
        }, hide: function (e) {
            return e ? this : o.superclass.hide.call(this)
        }, _bindTrigger: function () {
            var e = this.get("triggerType");
            "click" === e ? this._bindClick() : "focus" === e ? this._bindFocus() : this._bindHover()
        }, _bindClick: function () {
            function e(e) {
                t.get("disabled") || t.get("trigger").each(function (i, n) {
                    e == n ? (n._active = !0, t.activeTrigger = s(n)) : n._active = !1
                })
            }

            var t = this;
            n("click", this.get("trigger"), function () {
                this._active === !0 ? t.hide() : (e(this), t.show())
            }, this.get("delegateNode"), this), this.before("hide", function () {
                e()
            })
        }, _bindFocus: function () {
            var e = this;
            n("focus", this.get("trigger"), function () {
                e.activeTrigger = s(this), e.show()
            }, this.get("delegateNode"), this), n("blur", this.get("trigger"), function () {
                setTimeout(function () {
                    !e._downOnElement && e.hide(), e._downOnElement = !1
                }, e.get("delay"))
            }, this.get("delegateNode"), this), this.delegateEvents("mousedown", function () {
                this._downOnElement = !0
            })
        }, _bindHover: function () {
            function e() {
                clearTimeout(t), t = null, h.get("visible") && (i = setTimeout(function () {
                    h.hide()
                }, g))
            }

            var t, i, r = this.get("trigger"), o = this.get("delegateNode"), g = this.get("delay"), h = this;
            return 0 > g ? void this._bindTooltip() : (n("mouseenter", r, function () {
                clearTimeout(i), i = null, h.activeTrigger = s(this), t = setTimeout(function () {
                    h.show()
                }, g)
            }, o, this), n("mouseleave", r, e, o, this), this.delegateEvents("mouseenter", function () {
                clearTimeout(i)
            }), this.delegateEvents("mouseleave", e), void this.element.on("mouseleave", "select", function (e) {
                e.stopPropagation()
            }))
        }, _bindTooltip: function () {
            var e = this.get("trigger"), t = this.get("delegateNode"), i = this;
            n("mouseenter", e, function () {
                i.activeTrigger = s(this), i.show()
            }, t, this), n("mouseleave", e, function () {
                i.hide()
            }, t, this)
        }, _onRenderVisible: function (e, t) {
            if (e !== !!t) {
                var i = -1 !== this.get("effect").indexOf("fade"), n = -1 !== this.get("effect").indexOf("slide"), s = {};
                n && (s.height = e ? "show" : "hide"), i && (s.opacity = e ? "show" : "hide");
                var r = this, o = e ? function () {
                    r.trigger("animated")
                } : function () {
                    r.hide(!0), r.trigger("animated")
                };
                i || n ? this.element.stop(!0, !0).animate(s, this.get("duration"), o).css({visibility: "visible"}) : this.element[e ? "show" : "hide"]()
            }
        }
    });
    i.exports = o
});
;
define("common:widget/arale-popup/1.2.0/popup.js", function (p, o, e) {
    e.exports = p("common:widget/arale-popup/1.2.0/src/popup.js")
});
;
define("common:widget/arale-tip/1.3.0/src/basic-tip.js", function (t, e, i) {
    var n = t("common:widget/arale-popup/1.2.0/popup.js");
    i.exports = n.extend({
        attrs: {content: null, direction: "up", distance: 8, arrowShift: 22, pointPos: "50%"},
        _setAlign: function () {
            var t = {}, e = this.get("arrowShift"), i = this.get("distance"), n = this.get("pointPos"), o = this.get("direction");
            0 > e && (e = "100%" + e), "up" === o ? (t.baseXY = [n, 0], t.selfXY = [e, "100%+" + i]) : "down" === o ? (t.baseXY = [n, "100%+" + i], t.selfXY = [e, 0]) : "left" === o ? (t.baseXY = [0, n], t.selfXY = ["100%+" + i, e]) : "right" === o && (t.baseXY = ["100%+" + i, n], t.selfXY = [0, e]), t.comeFromArrowPosition = !0, this.set("align", t)
        },
        _onRenderContent: function (t) {
            var e = this.$('[data-role="content"]');
            "string" != typeof t && (t = t.call(this)), e && e.html(t)
        }
    })
});
;
define("common:widget/arale-tip/1.3.0/src/tip.js", function (i, t, o) {
    var e = i("common:widget/jquery/1.11.3/jquery.js"), s = i("common:widget/arale-tip/1.3.0/src/basic-tip.js"), n = s.extend({
        attrs: {
            template: '<div class="ui-poptip"><div class="ui-poptip-shadow"><div class="ui-poptip-container"><div class="ui-poptip-arrow"><em></em><span></span></div><div class="ui-poptip-content" data-role="content"></div></div></div></div>',
            content: "A TIP BOX",
            arrowPosition: 7,
            align: {
                setter: function (i) {
                    return i && !i.comeFromArrowPosition && (this._specifiedAlign = !0), i
                }
            },
            theme: "yellow",
            inViewport: !1
        }, setup: function () {
            s.superclass.setup.call(this), this._originArrowPosition = this.get("arrowPosition"), this.after("show", function () {
                this._makesureInViewport()
            })
        }, _makesureInViewport: function () {
            if (this.get("inViewport")) {
                var i = this._originArrowPosition, t = e(window).scrollTop(), o = e(window).outerHeight(), s = this.element.height() + this.get("distance"), n = this.get("trigger").offset().top, r = this.get("trigger").height(), p = {
                    1: 5,
                    5: 1,
                    7: 11,
                    11: 7
                };
                (11 == i || 1 == i) && n + r > t + o - s ? this.set("arrowPosition", p[i]) : (7 == i || 5 == i) && t + s > n ? this.set("arrowPosition", p[i]) : this.set("arrowPosition", this._originArrowPosition)
            }
        }, _onRenderArrowPosition: function (i, t) {
            i = parseInt(i, 10);
            var o = this.$(".ui-poptip-arrow");
            if (o.removeClass("ui-poptip-arrow-" + t).addClass("ui-poptip-arrow-" + i), !this._specifiedAlign) {
                var e = "", s = 0;
                10 === i ? (e = "right", s = 20) : 11 === i ? (e = "down", s = 22) : 1 === i ? (e = "down", s = -22) : 2 === i ? (e = "left", s = 20) : 5 === i ? (e = "up", s = -22) : 7 === i && (e = "up", s = 22), this.set("direction", e), this.set("arrowShift", s), this._setAlign()
            }
        }, _onRenderWidth: function (i) {
            this.$('[data-role="content"]').css("width", i)
        }, _onRenderHeight: function (i) {
            this.$('[data-role="content"]').css("height", i)
        }, _onRenderTheme: function (i, t) {
            this.element.removeClass("ui-poptip-" + t), this.element.addClass("ui-poptip-" + i)
        }
    });
    o.exports = n
});
;
define("common:widget/arale-tip/1.3.0/tip.js", function (i, t, e) {
    e.exports = i("common:widget/arale-tip/1.3.0/src/tip.js")
});
;
define("common:widget/arale-validator/0.10.1/src/async.js", function (n, r, t) {
    var e = {};
    t.exports = e;
    var c = function (n, r) {
        if (n.forEach)return n.forEach(r);
        for (var t = 0; t < n.length; t += 1)r(n[t], t, n)
    }, o = function (n, r) {
        if (n.map)return n.map(r);
        var t = [];
        return c(n, function (n, e, c) {
            t.push(r(n, e, c))
        }), t
    }, u = function (n) {
        if (Object.keys)return Object.keys(n);
        var r = [];
        for (var t in n)n.hasOwnProperty(t) && r.push(t);
        return r
    };
    e.forEach = function (n, r, t) {
        if (t = t || function () {
                }, !n.length)return t();
        var e = 0;
        c(n, function (c) {
            r(c, function (r) {
                r ? (t(r), t = function () {
                }) : (e += 1, e === n.length && t(null))
            })
        })
    }, e.forEachSeries = function (n, r, t) {
        if (t = t || function () {
                }, !n.length)return t();
        var e = 0, c = function () {
            r(n[e], function (r) {
                r ? (t(r), t = function () {
                }) : (e += 1, e === n.length ? t(null) : c())
            })
        };
        c()
    };
    var a = function (n) {
        return function () {
            var r = Array.prototype.slice.call(arguments);
            return n.apply(null, [e.forEach].concat(r))
        }
    }, i = function (n) {
        return function () {
            var r = Array.prototype.slice.call(arguments);
            return n.apply(null, [e.forEachSeries].concat(r))
        }
    }, f = function (n, r, t, e) {
        var c = [];
        r = o(r, function (n, r) {
            return {index: r, value: n}
        }), n(r, function (n, r) {
            t(n.value, function (t, e) {
                c[n.index] = e, r(t)
            })
        }, function (n) {
            e(n, c)
        })
    };
    e.map = a(f), e.mapSeries = i(f), e.series = function (n, r) {
        if (r = r || function () {
                }, n.constructor === Array)e.mapSeries(n, function (n, r) {
            n && n(function (n) {
                var t = Array.prototype.slice.call(arguments, 1);
                t.length <= 1 && (t = t[0]), r.call(null, n, t)
            })
        }, r); else {
            var t = {};
            e.forEachSeries(u(n), function (r, e) {
                n[r](function (n) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    c.length <= 1 && (c = c[0]), t[r] = c, e(n)
                })
            }, function (n) {
                r(n, t)
            })
        }
    }
});
;
define("common:widget/arale-validator/0.10.1/src/rule.js", function (e, n, t) {
    function r(e, n) {
        var t = this;
        if (t.name = e, n instanceof RegExp)t.operator = function (e, t) {
            var r = n.test(c(e.element).val());
            t(r ? null : e.rule, i(e, r))
        }; else {
            if (!c.isFunction(n))throw new Error("The second argument must be a regexp or a function.");
            t.operator = function (e, t) {
                var r = n.call(this, e, function (n, r) {
                    t(n ? null : e.rule, r || i(e, n))
                });
                void 0 !== r && t(r ? null : e.rule, i(e, r))
            }
        }
    }

    function a(e, n, t) {
        return c.isPlainObject(e) ? (c.each(e, function (e, n) {
            c.isArray(n) ? a(e, n[0], n[1]) : a(e, n)
        }), this) : (s[e] = n instanceof r ? new r(e, n.operator) : new r(e, n), o(e, t), this)
    }

    function i(e, n) {
        var t, r = e.rule;
        return e.message ? c.isPlainObject(e.message) ? (t = e.message[n ? "success" : "failure"], "undefined" == typeof t && (t = f[r][n ? "success" : "failure"])) : t = n ? "" : e.message : t = f[r][n ? "success" : "failure"], t ? l(e, t) : t
    }

    function o(e, n) {
        return c.isPlainObject(e) ? (c.each(e, function (e, n) {
            o(e, n)
        }), this) : (f[e] = c.isPlainObject(n) ? n : {failure: n}, this)
    }

    function u(e, n) {
        if (n) {
            var t = s[e];
            return new r(null, function (e, r) {
                t.operator(c.extend(null, e, n), r)
            })
        }
        return s[e]
    }

    function l(e, n) {
        var t = n, r = /\{\{[^\{\}]*\}\}/g, a = /\{\{(.*)\}\}/, i = n.match(r);
        return i && c.each(i, function (n, r) {
            var i = r.match(a)[1], o = e[c.trim(i)];
            t = t.replace(r, o)
        }), t
    }

    var c = e("common:widget/jquery/1.11.3/jquery.js"), s = {}, f = {};
    r.prototype.and = function (e, n) {
        var t = e instanceof r ? e : u(e, n);
        if (!t)throw new Error('No rule with name "' + e + '" found.');
        var a = this, o = function (e, n) {
            a.operator.call(this, e, function (r) {
                r ? n(r, i(e, !r)) : t.operator.call(this, e, n)
            })
        };
        return new r(null, o)
    }, r.prototype.or = function (e, n) {
        var t = e instanceof r ? e : u(e, n);
        if (!t)throw new Error('No rule with name "' + e + '" found.');
        var a = this, o = function (e, n) {
            a.operator.call(this, e, function (r) {
                r ? t.operator.call(this, e, n) : n(null, i(e, !0))
            })
        };
        return new r(null, o)
    }, r.prototype.not = function (e) {
        var n = u(this.name, e), t = function (e, t) {
            n.operator.call(this, e, function (n) {
                n ? t(null, i(e, !0)) : t(!0, i(e, !1))
            })
        };
        return new r(null, t)
    }, a("required", function (e) {
        var n = c(e.element), t = n.attr("type");
        switch (t) {
            case"checkbox":
            case"radio":
                var r = !1;
                return n.each(function (e, n) {
                    return c(n).prop("checked") ? (r = !0, !1) : void 0
                }), r;
            default:
                return Boolean(c.trim(n.val()))
        }
    }, "请输入{{display}}"), a("email", /^(?!.{64,})[a-z_\d]+(?:[-.][a-z_\d]+)*@(?:[a-z\d]+(?:-[a-z\d]+)*\.)+[a-z]{2,}$/i, "{{display}}的格式不正确"), a("text", /.*/), a("password", /.*/), a("radio", /.*/), a("checkbox", /.*/), a("url", /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, "{{display}}的格式不正确"), a("number", /^[+-]?[1-9][0-9]*(\.[0-9]+)?([eE][+-][1-9][0-9]*)?$|^[+-]?0?\.[0-9]+([eE][+-][1-9][0-9]*)?$|^0$/, "{{display}}的格式不正确"), a("digits", /^\s*\d+\s*$/, "{{display}}的格式不正确"), a("date", /^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}年[01]?\d月[0-3]?\d[日号]$/, "{{display}}的格式不正确"), a("min", function (e) {
        var n = e.element, t = e.min;
        return Number(n.val()) >= Number(t)
    }, "{{display}}必须大于或者等于{{min}}"), a("max", function (e) {
        var n = e.element, t = e.max;
        return Number(n.val()) <= Number(t)
    }, "{{display}}必须小于或者等于{{max}}"), a("minlength", function (e) {
        var n = e.element, t = n.val().length;
        return t >= Number(e.min)
    }, "{{display}}的长度必须大于或等于{{min}}"), a("maxlength", function (e) {
        var n = e.element, t = n.val().length;
        return t <= Number(e.max)
    }, "{{display}}的长度必须小于或等于{{max}}"), a("mobile", /^1\d{10}$/, "请输入正确的{{display}}"), a("confirmation", function (e) {
        var n = e.element, t = c(e.target);
        return n.val() == t.val()
    }, "两次输入的{{display}}不一致，请重新输入"), t.exports = {
        addRule: a, setMessage: o, getMessage: function (e, n) {
            return i(e, n)
        }, getRule: u, getOperator: function (e) {
            return s[e].operator
        }
    }
});
;
define("common:widget/arale-validator/0.10.1/src/utils.js", function (require, exports, module) {
    function unique() {
        return "__anonymous__" + u_count++
    }

    function parseRules(r) {
        return r ? r.match(/[a-zA-Z0-9\-\_]+(\{[^\{\}]*\})?/g) : null
    }

    function parseDom(r) {
        var r = $(r), e = {}, t = [], a = r.attr("required");
        a && (t.push("required"), e.required = !0);
        var n = r.attr("type");
        if (n && "submit" != n && "cancel" != n && "checkbox" != n && "radio" != n && "select" != n && "select-one" != n && "file" != n && "hidden" != n && "textarea" != n) {
            if (!Rule.getRule(n))throw new Error('Form field with type "' + n + '" not supported!');
            t.push(n)
        }
        var u = r.attr("min");
        u && t.push('min{"min":"' + u + '"}');
        var s = r.attr("max");
        s && t.push("max{max:" + s + "}");
        var i = r.attr("minlength");
        i && t.push("minlength{min:" + i + "}");
        var l = r.attr("maxlength");
        l && t.push("maxlength{max:" + l + "}");
        var o = r.attr("pattern");
        if (o) {
            var p = new RegExp(o), c = unique();
            Rule.addRule(c, p), t.push(c)
        }
        var m = r.attr("data-rule");
        return m = m && parseRules(m), m && (t = t.concat(m)), e.rule = 0 == t.length ? null : t.join(" "), e
    }

    function parseJSON(str) {
        function getValue(str) {
            return '"' == str.charAt(0) && '"' == str.charAt(str.length - 1) || "'" == str.charAt(0) && "'" == str.charAt(str.length - 1) ? eval(str) : str
        }

        if (!str)return null;
        var NOTICE = 'Invalid option object "' + str + '".';
        str = str.slice(1, -1);
        var result = {}, arr = str.split(",");
        return $.each(arr, function (r, e) {
            if (arr[r] = $.trim(e), !arr[r])throw new Error(NOTICE);
            var t = arr[r].split(":"), a = $.trim(t[0]), n = $.trim(t[1]);
            if (!a || !n)throw new Error(NOTICE);
            result[getValue(a)] = $.trim(getValue(n))
        }), result
    }

    function isHidden(r) {
        var e = r[0].offsetWidth, t = r[0].offsetHeight, a = "TR" === r.prop("tagName");
        return 0 !== e || 0 !== t || a ? 0 === e || 0 === t || a ? "none" === r.css("display") : !1 : !0
    }

    var $ = require("common:widget/jquery/1.11.3/jquery.js"), Rule = require("common:widget/arale-validator/0.10.1/src/rule.js"), u_count = 0, helpers = {};
    module.exports = {
        parseRule: function (r) {
            var e = r.match(/([^{}:\s]*)(\{[^\{\}]*\})?/);
            return {name: e[1], param: parseJSON(e[2])}
        }, parseRules: parseRules, parseDom: parseDom, isHidden: isHidden, helper: function (r, e) {
            return e ? (helpers[r] = e, this) : helpers[r]
        }
    }
});
;
define("common:widget/arale-validator/0.10.1/src/item.js", function (e, t, r) {
    function i(e) {
        return (" " + e + " ").indexOf(" required ") >= 0
    }

    function n(e, t, r) {
        var i = s.extend({}, e, {
            element: r.element,
            display: e && e.display || r.get("display"),
            rule: t
        }), n = r.get("errormessage") || r.get("errormessage" + a(t));
        return n && !i.message && (i.message = {failure: n}), i
    }

    function a(e) {
        return e += "", e.charAt(0).toUpperCase() + e.slice(1)
    }

    function l(e, t, r) {
        var i = e.element;
        if (!e.get("required")) {
            var a = !1, l = i.attr("type");
            switch (l) {
                case"checkbox":
                case"radio":
                    var o = !1;
                    i.each(function (e, t) {
                        return s(t).prop("checked") ? (o = !0, !1) : void 0
                    }), a = o;
                    break;
                default:
                    a = !!i.val()
            }
            if (!a)return void(r && r(null, null))
        }
        if (!s.isArray(t))throw new Error("No validation rule specified or not specified as an array.");
        var g = [];
        s.each(t, function (t, r) {
            var i = u.parseRule(r), a = i.name, l = i.param, s = c.getOperator(a);
            if (!s)throw new Error('Validation rule with name "' + a + '" cannot be found.');
            var o = n(l, a, e);
            g.push(function (t) {
                s.call(e._validator, o, t)
            })
        }), d.series(g, function (e, t) {
            r && r(e, t[t.length - 1])
        })
    }

    var s = e("common:widget/jquery/1.11.3/jquery.js"), u = e("common:widget/arale-validator/0.10.1/src/utils.js"), o = e("common:widget/arale-widget/1.2.0/widget.js"), d = e("common:widget/arale-validator/0.10.1/src/async.js"), c = e("common:widget/arale-validator/0.10.1/src/rule.js"), g = {
        value: s.noop,
        setter: function (e) {
            return s.isFunction(e) ? e : u.helper(e)
        }
    }, m = o.extend({
        attrs: {
            rule: {
                value: "", getter: function (e) {
                    return e = s.trim(e), this.get("required") ? e && i(e) || (e = s.trim("required " + e)) : i(e) && (e = s.trim((" " + e + " ").replace(" required ", " "))), e
                }
            }, display: null, displayHelper: null, triggerType: {
                getter: function (e) {
                    if (!e)return e;
                    var t = this.element, r = t.attr("type"), i = t.is("select") || "radio" == r || "checkbox" == r;
                    return i && (e.indexOf("blur") > -1 || e.indexOf("key") > -1) ? "change" : e
                }
            }, required: {
                value: !1, getter: function (e) {
                    return s.isFunction(e) ? e() : e
                }
            }, checkNull: !0, errormessage: null, onItemValidate: g, onItemValidated: g, showMessage: g, hideMessage: g
        }, setup: function () {
            !this.get("display") && s.isFunction(this.get("displayHelper")) && this.set("display", this.get("displayHelper")(this))
        }, execute: function (e, t) {
            var r = this, i = !!r.element.attr("disabled");
            if (t = t || {}, r.get("skipHidden") && u.isHidden(r.element) || i)return e && e(null, "", r.element), r;
            r.trigger("itemValidate", r.element, t.event);
            var n = u.parseRules(r.get("rule"));
            return n ? l(r, n, function (i, n) {
                r.trigger("itemValidated", i, n, r.element, t.event), e && e(i, n, r.element)
            }) : e && e(null, "", r.element), r
        }, getMessage: function (e, t, r) {
            var i = "", a = this, l = u.parseRules(a.get("rule"));
            return t = !!t, s.each(l, function (l, o) {
                var d = u.parseRule(o), g = d.name, m = d.param;
                e === g && (i = c.getMessage(s.extend(r || {}, n(m, g, a)), t))
            }), i
        }
    });
    r.exports = m
});
;
define("common:widget/arale-validator/0.10.1/src/core.js", function (e, t, n) {
    function i(e, t) {
        for (var n = 0; n < t.length; n++)if (e === t[n])return t.splice(n, 1), t
    }

    function r(e, t) {
        var n;
        return a.each(t, function (t, i) {
            return e.get(0) === i.element.get(0) ? (n = i, !1) : void 0
        }), n
    }

    var a = e("common:widget/jquery/1.11.3/jquery.js"), l = e("common:widget/arale-validator/0.10.1/src/async.js"), o = e("common:widget/arale-widget/1.2.0/widget.js"), s = e("common:widget/arale-validator/0.10.1/src/utils.js"), u = e("common:widget/arale-validator/0.10.1/src/item.js"), c = [], m = {
        value: a.noop,
        setter: function (e) {
            return a.isFunction(e) ? e : s.helper(e)
        }
    }, d = o.extend({
        attrs: {
            triggerType: "blur",
            checkOnSubmit: !0,
            stopOnError: !1,
            autoSubmit: !0,
            checkNull: !0,
            onItemValidate: m,
            onItemValidated: m,
            onFormValidate: m,
            onFormValidated: m,
            displayHelper: function (e) {
                var t, n, i = e.element.attr("id");
                return i && (t = a('label[for="' + i + '"]').text(), t && (t = t.replace(/^[\*\s\:\：]*/, "").replace(/[\*\s\:\：]*$/, ""))), n = e.element.attr("name"), t || n
            },
            showMessage: m,
            hideMessage: m,
            autoFocus: !0,
            failSilently: !1,
            skipHidden: !1
        },
        setup: function () {
            var e = this;
            if (e.items = [], e.element.is("form")) {
                e._novalidate_old = e.element.attr("novalidate");
                try {
                    e.element.attr("novalidate", "novalidate")
                } catch (t) {
                }
                e.get("checkOnSubmit") && e.element.on("submit.validator", function (t) {
                    t.preventDefault(), e.execute(function (t) {
                        !t && e.get("autoSubmit") && e.element.get(0).submit()
                    })
                })
            }
            e.on("itemValidated", function (e, t, n, i) {
                this.query(n).get(e ? "showMessage" : "hideMessage").call(this, t, n, i)
            }), c.push(e)
        },
        Statics: a.extend({helper: s.helper}, e("common:widget/arale-validator/0.10.1/src/rule.js"), {
            autoRender: function (e) {
                var t = new this(e);
                a("input, textarea, select", t.element).each(function (e, n) {
                    n = a(n);
                    var i = n.attr("type");
                    if ("button" == i || "submit" == i || "reset" == i)return !0;
                    var r = {};
                    if (r.element = "radio" == i || "checkbox" == i ? a("[type=" + i + "][name=" + n.attr("name") + "]", t.element) : n, !t.query(r.element)) {
                        var l = s.parseDom(n);
                        if (!l.rule)return !0;
                        a.extend(r, l), t.addItem(r)
                    }
                })
            }, query: function (e) {
                return o.query(e)
            }, validate: function (e) {
                var t = a(e.element), n = new d({element: t.parents()});
                n.addItem(e), n.query(t).execute(), n.destroy()
            }
        }),
        addItem: function (e) {
            var t = this;
            if (a.isArray(e))return a.each(e, function (e, n) {
                t.addItem(n)
            }), this;
            if (e = a.extend({
                    triggerType: t.get("triggerType"),
                    checkNull: t.get("checkNull"),
                    displayHelper: t.get("displayHelper"),
                    showMessage: t.get("showMessage"),
                    hideMessage: t.get("hideMessage"),
                    failSilently: t.get("failSilently"),
                    skipHidden: t.get("skipHidden")
                }, e), "string" == typeof e.element && (e.element = this.$(e.element)), !a(e.element).length) {
                if (e.failSilently)return t;
                console.log
            }
            var n = new u(e);
            return t.items.push(n), n._validator = t, n.delegateEvents(n.get("triggerType"), function (e) {
                (this.get("checkNull") || this.element.val()) && this.execute(null, {event: e})
            }), n.on("all", function () {
                this.trigger.apply(this, [].slice.call(arguments))
            }, t), t
        },
        removeItem: function (e) {
            var t = this, n = e instanceof u ? e : t.query(e);
            return n && (n.get("hideMessage").call(t, null, n.element), i(n, t.items), n.destroy()), t
        },
        execute: function (e) {
            var t = this, n = [], i = !1, r = null;
            return a.each(t.items, function (e, n) {
                n.get("hideMessage").call(t, null, n.element)
            }), t.trigger("formValidate", t.element), l[t.get("stopOnError") ? "forEachSeries" : "forEach"](t.items, function (e, a) {
                e.execute(function (e, l, o) {
                    e && !i && (i = !0, r = o), n.push([].slice.call(arguments, 0)), a(t.get("stopOnError") ? e : null)
                })
            }, function () {
                t.get("autoFocus") && i && (t.trigger("autoFocus", r), r.focus()), t.trigger("formValidated", i, n, t.element), e && e(i, n, t.element)
            }), t
        },
        destroy: function () {
            var e = this, t = e.items.length;
            if (e.element.is("form")) {
                try {
                    void 0 == e._novalidate_old ? e.element.removeAttr("novalidate") : e.element.attr("novalidate", e._novalidate_old)
                } catch (n) {
                }
                e.element.off("submit.validator")
            }
            for (var r = t - 1; r >= 0; r--)e.removeItem(e.items[r]);
            i(e, c), d.superclass.destroy.call(this)
        },
        query: function (e) {
            return r(this.$(e), this.items)
        }
    });
    n.exports = d
});
;
define("common:widget/arale-validator/0.10.1/src/validator.js", function (t, e, s) {
    var a = t("common:widget/arale-validator/0.10.1/src/core.js"), i = t("common:widget/jquery/1.11.3/jquery.js"), r = a.extend({
        events: {
            "mouseenter .{{attrs.inputClass}}": "mouseenter",
            "mouseleave .{{attrs.inputClass}}": "mouseleave",
            "mouseenter .{{attrs.textareaClass}}": "mouseenter",
            "mouseleave .{{attrs.textareaClass}}": "mouseleave",
            "focus .{{attrs.itemClass}} input,textarea,select": "focus",
            "blur .{{attrs.itemClass}} input,textarea,select": "blur"
        },
        attrs: {
            explainClass: "ui-form-explain",
            itemClass: "ui-form-item",
            itemHoverClass: "ui-form-item-hover",
            itemFocusClass: "ui-form-item-focus",
            itemErrorClass: "ui-form-item-error",
            inputClass: "ui-input",
            textareaClass: "ui-textarea",
            showMessage: function (t, e) {
                this.getExplain(e).html(t), this.getItem(e).addClass(this.get("itemErrorClass"))
            },
            hideMessage: function (t, e) {
                this.getExplain(e).html(e.attr("data-explain") || " "), this.getItem(e).removeClass(this.get("itemErrorClass"))
            }
        },
        setup: function () {
            r.superclass.setup.call(this);
            var t = this;
            this.on("autoFocus", function (e) {
                t.set("autoFocusEle", e)
            })
        },
        addItem: function (t) {
            r.superclass.addItem.apply(this, [].slice.call(arguments));
            var e = this.query(t.element);
            return e && this._saveExplainMessage(e), this
        },
        _saveExplainMessage: function (t) {
            var e = t.element, s = e.attr("data-explain");
            void 0 !== s || this.getItem(e).hasClass(this.get("itemErrorClass")) || e.attr("data-explain", this.getExplain(e).html())
        },
        getExplain: function (t) {
            var e = this.getItem(t), s = e.find("." + this.get("explainClass"));
            return 0 == s.length && (s = i('<div class="' + this.get("explainClass") + '"></div>').appendTo(e)), s
        },
        getItem: function (t) {
            t = i(t);
            var e = t.parents("." + this.get("itemClass"));
            return e
        },
        mouseenter: function (t) {
            this.getItem(t.target).addClass(this.get("itemHoverClass"))
        },
        mouseleave: function (t) {
            this.getItem(t.target).removeClass(this.get("itemHoverClass"))
        },
        focus: function (t) {
            var e = t.target, s = this.get("autoFocusEle");
            if (s && s.has(e)) {
                var a = this;
                return void i(e).keyup(function () {
                    a.set("autoFocusEle", null), a.focus({target: e})
                })
            }
            this.getItem(e).removeClass(this.get("itemErrorClass")), this.getItem(e).addClass(this.get("itemFocusClass")), this.getExplain(e).html(i(e).attr("data-explain") || "")
        },
        blur: function (t) {
            this.getItem(t.target).removeClass(this.get("itemFocusClass"))
        }
    });
    s.exports = r
});
;
define("common:widget/arale-validator/0.10.1/index.js", function (a, o, e) {
    e.exports = a("common:widget/arale-validator/0.10.1/src/validator.js")
});
;
define("common:widget/ajs-dialog/1.0.0/popup.js", function (t, e, i) {
    "use strict";
    function s() {
        this.destroyed = !1, this.__popup = o("<div />").attr({tabindex: "-1"}).css({
            display: "none",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: "auto",
            right: "auto",
            margin: 0,
            padding: 0,
            outline: 0,
            border: "0 none",
            background: "transparent"
        }).html(this.innerHTML).appendTo("body"), this.__backdrop = o("<div />"), this.node = this.__popup[0], this.backdrop = this.__backdrop[0], n++
    }

    var o = t("common:widget/jquery/1.11.3/jquery.js"), n = 0, r = !("minWidth"in o("html")[0].style), h = !r;
    o.extend(s.prototype, {
        node: null,
        backdrop: null,
        fixed: !1,
        destroyed: !0,
        open: !1,
        returnValue: "",
        autofocus: !0,
        align: "bottom left",
        backdropBackground: "#000",
        backdropOpacity: .7,
        innerHTML: "",
        className: "ui-popup",
        show: function (t) {
            if (this.destroyed)return this;
            var e = this, i = this.__popup;
            return this.__activeElement = this.__getActive(), this.open = !0, this.follow = t || this.follow, this.__ready || (i.addClass(this.className), this.modal && 0 != this.lock && this.__lock(), i.html() || i.html(this.innerHTML), r || o(window).on("resize", this.__onresize = function () {
                e.reset()
            }), this.__ready = !0), i.addClass(this.className + "-show").attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute").show(), this.__dispatchEvent("beforeshow"), this.__backdrop.show(), this.reset().focus(), this.__dispatchEvent("show"), this
        },
        showModal: function () {
            return this.modal = !0, this.show.apply(this, arguments)
        },
        close: function (t) {
            return !this.destroyed && this.open && (void 0 !== t && (this.returnValue = t), this.__popup.hide().removeClass(this.className + "-show"), this.__backdrop.hide(), this.open = !1, this.blur(), this.__dispatchEvent("close")), this
        },
        remove: function () {
            if (this.destroyed)return this;
            this.__dispatchEvent("beforeremove"), s.current === this && (s.current = null), this.__unlock(), this.__popup.remove(), this.__backdrop.remove(), this.blur(), r || o(window).off("resize", this.__onresize), this.__dispatchEvent("remove");
            for (var t in this)delete this[t];
            return this
        },
        reset: function () {
            var t = this.follow;
            return t ? this.__follow(t) : this.__center(), this.__dispatchEvent("reset"), this
        },
        focus: function () {
            var t = this.node, e = s.current;
            if (e && e !== this && e.blur(!1), !o.contains(t, this.__getActive())) {
                var i = this.__popup.find("[autofocus]")[0];
                !this._autofocus && i ? this._autofocus = !0 : i = t, this.__focus(i)
            }
            return s.current = this, this.__popup.addClass(this.className + "-focus"), this.__zIndex(), this.__dispatchEvent("focus"), this
        },
        blur: function () {
            var t = this.__activeElement, e = arguments[0];
            return e !== !1 && this.__focus(t), this._autofocus = !1, this.__popup.removeClass(this.className + "-focus"), this.__dispatchEvent("blur"), this
        },
        addEventListener: function (t, e) {
            return this.__getEventListener(t).push(e), this
        },
        removeEventListener: function (t, e) {
            for (var i = this.__getEventListener(t), s = 0; s < i.length; s++)e === i[s] && i.splice(s--, 1);
            return this
        },
        __getEventListener: function (t) {
            var e = this.__listener;
            return e || (e = this.__listener = {}), e[t] || (e[t] = []), e[t]
        },
        __dispatchEvent: function (t) {
            var e = this.__getEventListener(t);
            this["on" + t] && this["on" + t]();
            for (var i = 0; i < e.length; i++)e[i].call(this)
        },
        __focus: function (t) {
            try {
                this.autofocus && !/^iframe$/i.test(t.nodeName) && t.focus()
            } catch (e) {
            }
        },
        __getActive: function () {
            try {
                var t = document.activeElement, e = t.contentDocument, i = e && e.activeElement || t;
                return i
            } catch (s) {
            }
        },
        __zIndex: function () {
            var t = s.zIndex++;
            this.__popup.css("zIndex", t), this.__backdrop.css("zIndex", t - 1), this.zIndex = t
        },
        __center: function () {
            var t = this.__popup, e = o(window), i = o(document), s = this.fixed, n = s ? 0 : i.scrollLeft(), r = e.width(), h = t.width(), a = (r - h) / 2 + n, c = t[0].style;
            c.left = Math.max(parseInt(a), n) + "px"
        },
        __follow: function (t) {
            var e = t.parentNode && o(t), i = this.__popup;
            if (this.__followSkin && i.removeClass(this.__followSkin), e) {
                var s = e.offset();
                if (s.left * s.top < 0)return this.__center()
            }
            var n = this, r = this.fixed, h = o(window), a = o(document), c = h.width(), _ = h.height(), l = a.scrollLeft(), d = a.scrollTop(), p = i.width(), u = i.height(), f = e ? e.outerWidth() : 0, m = e ? e.outerHeight() : 0, v = this.__offset(t), w = v.left, g = v.top, b = r ? w - l : w, k = r ? g - d : g, x = r ? 0 : l, y = r ? 0 : d, E = x + c - p, z = y + _ - u, I = {}, L = this.align.split(" "), N = this.className + "-", C = {
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left"
            }, j = {top: "top", bottom: "top", left: "left", right: "left"}, T = [{
                top: k - u,
                bottom: k + m,
                left: b - p,
                right: b + f
            }, {top: k, bottom: k - u + m, left: b, right: b - p + f}], M = {
                left: b + f / 2 - p / 2,
                top: k + m / 2 - u / 2
            }, A = {left: [x, E], top: [y, z]};
            o.each(L, function (t, e) {
                T[t][e] > A[j[e]][1] && (e = L[t] = C[e]), T[t][e] < A[j[e]][0] && (L[t] = C[e])
            }), L[1] || (j[L[1]] = "left" === j[L[0]] ? "top" : "left", T[1][L[1]] = M[j[L[1]]]), N += L.join("-"), n.__followSkin = N, e && i.addClass(N), I[j[L[0]]] = parseInt(T[0][L[0]]), I[j[L[1]]] = parseInt(T[1][L[1]]), i.css(I)
        },
        __offset: function (t) {
            var e = t.parentNode, i = e ? o(t).offset() : {left: t.pageX, top: t.pageY};
            t = e ? t : t.target;
            var s = t.ownerDocument, n = s.defaultView || s.parentWindow;
            if (n == window)return i;
            var r = n.frameElement, h = o(s), a = h.scrollLeft(), c = h.scrollTop(), _ = o(r).offset(), l = _.left, d = _.top;
            return {left: i.left + l - a, top: i.top + d - c}
        },
        __lock: function () {
            var t = this, e = this.__popup, i = this.__backdrop, n = {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                userSelect: "none",
                opacity: 0,
                background: this.backdropBackground
            };
            e.addClass(this.className + "-modal"), s.zIndex = s.zIndex + 2, this.__zIndex(), h || o.extend(n, {
                position: "absolute",
                width: o(window).width() + "px",
                height: o(document).height() + "px"
            }), i.css(n).insertAfter(e).animate({opacity: this.backdropOpacity}, 300).attr({tabindex: "0"}).on("focus", function () {
                t.focus()
            })
        },
        __unlock: function (t) {
            if (this.modal && this.lock !== !1) {
                var e = this.__popup, i = this.__backdrop;
                i.animate({opacity: 0}, t || 300, function () {
                    e.removeClass(this.className + "-modal"), i.remove(), delete this.modal
                })
            }
        }
    }), s.zIndex = 50, s.current = null, i.exports = s
});
;
define("common:widget/ajs-dialog/1.0.0/dialog-config.js", function (i, a, l) {
    l.exports = {
        content: '<span class="ui-dialog-loading">Loading..</span>',
        title: "",
        statusbar: "",
        button: null,
        ok: null,
        cancel: null,
        okValue: "ok",
        cancelValue: "cancel",
        width: "",
        height: "",
        padding: "",
        skin: "",
        quickClose: !1,
        cssUri: "./css/ui-dialog.css",
        innerHTML: '<div i="dialog" class="art-ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" style="display: inline-block;" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>',
        allowDrag: !0
    }
});
;
define("common:widget/ajs-dialog/1.0.0/dialog.js", function (t, e, i) {
    var n = t("common:widget/jquery/1.11.3/jquery.js"), o = t("common:widget/ajs-dialog/1.0.0/popup.js"), s = t("common:widget/ajs-dialog/1.0.0/dialog-config.js"), c = (s.cssUri, "6.0.0"), a = 0, r = new Date - 0, u = !("minWidth"in n("html")[0].style), d = "createTouch"in document && !("onmousemove"in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent), l = !u && !d, h = function (t, e, i) {
        var o = t = t || {};
        ("string" == typeof t || 1 === t.nodeType) && (t = {
            content: t,
            fixed: !d
        }), t = n.extend(!0, {}, h.defaults, t), t._ = o;
        var s = t.id = t.id || r + a, c = h.get(s);
        return c ? c.focus() : (l || (t.fixed = !1), t.quickClose && (t.modal = !0, o.backdropOpacity || (t.backdropOpacity = 0)), n.isArray(t.button) || (t.button = []), void 0 !== i && (t.cancel = i), t.cancel && t.button.push({
            id: "cancel",
            value: t.cancelValue,
            callback: t.cancel
        }), void 0 !== e && (t.ok = e), t.ok && t.button.push({
            id: "ok",
            value: t.okValue,
            callback: t.ok,
            autofocus: !0
        }), h.list[s] = new h.create(t))
    }, f = function () {
    };
    f.prototype = o.prototype;
    var p = h.prototype = new f;
    h.version = c, h.create = function (t) {
        var e = this;
        n.extend(this, new o);
        var i = n(this.node).html(t.innerHTML);
        return this.options = t, this._popup = i, n.each(t, function (t, i) {
            "function" == typeof e[t] ? e[t](i) : e[t] = i
        }), t.zIndex && (o.zIndex = t.zIndex), i.attr({
            "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"),
            "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
        }), this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function (t) {
            e._trigger("cancel"), t.preventDefault()
        }), this._$("dialog").addClass(this.skin), this._$("body").css("padding", this.padding), this._$("content").css("width", "720px"), i.on("click", "[data-id]", function (t) {
            var i = n(this);
            i.attr("disabled") || e._trigger(i.data("id")), t.preventDefault()
        }), t.quickClose && n(this.backdrop).on("onmousedown"in document ? "mousedown" : "click", function () {
            e._trigger("cancel")
        }), this._esc = function (t) {
            var i = t.target, n = i.nodeName, s = /^input|textarea$/i, c = o.current === e, a = t.keyCode;
            !c || s.test(n) && "button" !== i.type || 27 === a && e._trigger("cancel")
        }, n(document).on("keydown", this._esc), this.addEventListener("remove", function () {
            n(document).off("keydown", this._esc), delete h.list[this.id]
        }), a++, h.oncreate(this), this
    }, h.create.prototype = p, n.extend(p, {
        content: function (t) {
            return this._$("content").empty("")["object" == typeof t ? "append" : "html"](t), this.reset()
        }, title: function (t) {
            return this._$("title").text(t), this._$("header")[t ? "show" : "hide"](), this
        }, width: function (t) {
            return this._$("content").css("width", t), this.reset()
        }, height: function (t) {
            return this._$("content").css("height", t), this.reset()
        }, button: function (t) {
            t = t || [];
            var e = this, i = "";
            return this.callbacks = {}, this._$("footer")[t.length ? "show" : "hide"](), "string" == typeof t ? i = t : n.each(t, function (t, n) {
                n.id = n.id || n.value, e.callbacks[n.id] = n.callback, "cancel" != n.id && (i += '<button type="button" data-id="' + n.id + '"' + (n.classname ? ' class="' + n.classname + (n.autofocus ? " ui-dialog-autofocus" : "") + '"' : "") + (n.disabled ? " disabled" : "") + (n.autofocus ? " autofocus " + (n.classname ? "" : 'class="ui-dialog-autofocus"') : "") + ">" + n.value + "</button>")
            }), this._$("button").html(i), this
        }, statusbar: function (t) {
            return this._$("statusbar").html(t)[t ? "show" : "hide"](), this
        }, _$: function (t) {
            return this._popup.find("[i=" + t + "]")
        }, _trigger: function (t) {
            var e = this.callbacks[t];
            return "function" != typeof e || e.call(this) !== !1 ? "cancel" == t ? this.close().remove() : this._trigger("cancel") : this
        }, toClose: function () {
            return this._trigger("cancel")
        }
    }), h.oncreate = n.noop, h.getCurrent = function () {
        return o.current
    }, h.get = function (t) {
        return void 0 === t ? h.list : h.list[t]
    }, h.list = {}, h.defaults = s, i.exports = h
});
;
define("common:widget/json/1.0.3/json.js", function (require, exports, module) {
    "object" != typeof JSON && (JSON = {}), function () {
        "use strict";
        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, r, o, f, u, i = gap, p = e[t];
            switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)), "function" == typeof rep && (p = rep.call(e, t, p)), typeof p) {
                case"string":
                    return quote(p);
                case"number":
                    return isFinite(p) ? String(p) : "null";
                case"boolean":
                case"null":
                    return String(p);
                case"object":
                    if (!p)return "null";
                    if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) {
                        for (f = p.length, n = 0; f > n; n += 1)u[n] = str(n, p) || "null";
                        return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o
                    }
                    if (rep && "object" == typeof rep)for (f = rep.length, n = 0; f > n; n += 1)"string" == typeof rep[n] && (r = rep[n], o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o)); else for (r in p)Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                    return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o
            }
        }

        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)for (r = 0; n > r; r += 1)indent += " "; else"string" == typeof n && (indent = n);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))throw new Error("JSON.stringify");
            return str("", {"": t})
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            function walk(t, e) {
                var n, r, o = t[e];
                if (o && "object" == typeof o)for (n in o)Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                return reviver.call(t, e, o)
            }

            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), define("gallery/json/1.0.3/json", [], function () {
        return window.JSON
    })
});
;
define("common:widget/city-select/city-select.js", function (t) {
    var i = t("common:widget/jquery/1.11.3/jquery.js"), e = "/static/common/widget/city-select/city.json";
    i.fn.citySelect = function (t) {
        if (!(this.length < 1)) {
            t = i.extend({url: e, prov: null, city: null, dist: null, nodata: null, required: !0}, t);
            var n, l = this, d = l.find(".prov"), o = l.find(".city"), s = l.find(".dist"), c = (t.prov, t.city, t.dist, t.required ? "" : "<option value=''>请选择</option>"), a = function () {
                var e = d.get(0).selectedIndex;
                return t.required || e--, o.empty().attr("disabled", !0), s.empty().attr("disabled", !0), 0 > e || "undefined" == typeof n.citylist[e].c ? void("none" == t.nodata ? (o.css("display", "none"), s.css("display", "none")) : "hidden" == t.nodata && (o.css("visibility", "hidden"), s.css("visibility", "hidden"))) : (temp_html = c, i.each(n.citylist[e].c, function (t, i) {
                    temp_html += "<option value='" + i.n + "'>" + i.n + "</option>"
                }), o.html(temp_html).attr("disabled", !1).css({display: "", visibility: ""}), void(s.length && u()))
            }, u = function () {
                var e = d.get(0).selectedIndex, l = o.get(0).selectedIndex;
                return t.required || (e--, l--), s.empty().attr("disabled", !0), 0 > e || 0 > l || "undefined" == typeof n.citylist[e].c[l].a ? void("none" == t.nodata ? s.css("display", "none") : "hidden" == t.nodata && s.css("visibility", "hidden")) : (temp_html = c, i.each(n.citylist[e].c[l].a, function (t, i) {
                    temp_html += "<option value='" + i.s + "'>" + i.s + "</option>"
                }), void s.html(temp_html).attr("disabled", !1).css({display: "", visibility: ""}))
            }, p = function () {
                temp_html = c, i.each(n.citylist, function (t, i) {
                    temp_html += "<option value='" + i.p + "'>" + i.p + "</option>"
                }), d.html(temp_html), setTimeout(function () {
                    null != t.prov && (d.val(t.prov), o.length && a(), setTimeout(function () {
                        null != t.city && (o.length && o.val(t.city), s.length && u(), setTimeout(function () {
                            null != t.dist && s.val(t.dist)
                        }, 1))
                    }, 1))
                }, 1), d.bind("change", function () {
                    o.length && a()
                }), o.bind("change", function () {
                    s.length && u()
                })
            };
            "string" == typeof t.url ? i.getJSON(t.url, function (t) {
                n = t, p()
            }) : (n = t.url, p())
        }
    }
});
;
define("common:widget/arale-easing/1.1.0/index.js", function (n, t, e) {
    var u = Math.PI, r = Math.pow, o = Math.sin, c = 1.70158, a = {
        easeNone: function (n) {
            return n
        }, easeIn: function (n) {
            return n * n
        }, easeOut: function (n) {
            return (2 - n) * n
        }, easeBoth: function (n) {
            return (n *= 2) < 1 ? .5 * n * n : .5 * (1 - --n * (n - 2))
        }, easeInStrong: function (n) {
            return n * n * n * n
        }, easeOutStrong: function (n) {
            return 1 - --n * n * n * n
        }, easeBothStrong: function (n) {
            return (n *= 2) < 1 ? .5 * n * n * n * n : .5 * (2 - (n -= 2) * n * n * n)
        }, backIn: function (n) {
            return 1 === n && (n -= .001), n * n * ((c + 1) * n - c)
        }, backOut: function (n) {
            return (n -= 1) * n * ((c + 1) * n + c) + 1
        }, backBoth: function (n) {
            var t = c, e = (t *= 1.525) + 1;
            return (n *= 2) < 1 ? .5 * n * n * (e * n - t) : .5 * ((n -= 2) * n * (e * n + t) + 2)
        }, elasticIn: function (n) {
            var t = .3, e = t / 4;
            return 0 === n || 1 === n ? n : -(r(2, 10 * (n -= 1)) * o(2 * (n - e) * u / t))
        }, elasticOut: function (n) {
            var t = .3, e = t / 4;
            return 0 === n || 1 === n ? n : r(2, -10 * n) * o(2 * (n - e) * u / t) + 1
        }, elasticBoth: function (n) {
            var t = .45, e = t / 4;
            return 0 === n || 2 === (n *= 2) ? n : 1 > n ? -.5 * r(2, 10 * (n -= 1)) * o(2 * (n - e) * u / t) : r(2, -10 * (n -= 1)) * o(2 * (n - e) * u / t) * .5 + 1
        }, bounceIn: function (n) {
            return 1 - a.bounceOut(1 - n)
        }, bounceOut: function (n) {
            var t, e = 7.5625;
            return t = 1 / 2.75 > n ? e * n * n : 2 / 2.75 > n ? e * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? e * (n -= 2.25 / 2.75) * n + .9375 : e * (n -= 2.625 / 2.75) * n + .984375
        }, bounceBoth: function (n) {
            return .5 > n ? .5 * a.bounceIn(2 * n) : .5 * a.bounceOut(2 * n - 1) + .5
        }
    };
    e.exports = a;
    var i = n("common:widget/jquery/1.11.3/jquery.js");
    i.extend(i.easing, a)
});
;
define("common:widget/zeroclipboard/2.0.0/ZeroClipboard.Core.js", function (e, t, n) {
    !function (e, t) {
        "use strict";
        var a, r = e, i = r.document, o = r.navigator, l = r.setTimeout, s = r.Number.parseInt || r.parseInt, c = r.Number.parseFloat || r.parseFloat, u = r.Number.isNaN || r.isNaN, f = r.encodeURIComponent, d = r.Math, p = r.Date, v = r.ActiveXObject, y = r.Array.prototype.slice, h = r.Object.keys, b = r.Object.prototype.hasOwnProperty, m = function () {
            return "function" == typeof r.Object.defineProperty && function () {
                try {
                    var e = {};
                    return r.Object.defineProperty(e, "y", {value: "z"}), "z" === e.y
                } catch (t) {
                    return !1
                }
            }() ? r.Object.defineProperty : void 0
        }(), g = function (e) {
            return y.call(e, 0)
        }, w = function (e, t, n) {
            if ("function" == typeof t.indexOf)return t.indexOf(e, n);
            var a, r = t.length;
            for ("undefined" == typeof n ? n = 0 : 0 > n && (n = r + n), a = n; r > a; a++)if (b.call(t, a) && t[a] === e)return a;
            return -1
        }, C = function () {
            var e, n, a, r, i, o, l = g(arguments), s = l[0] || {};
            for (e = 1, n = l.length; n > e; e++)if (null != (a = l[e]))for (r in a)if (b.call(a, r)) {
                if (i = s[r], o = a[r], s === o)continue;
                o !== t && (s[r] = o)
            }
            return s
        }, x = function (e) {
            var t, n, a, r;
            if ("object" != typeof e || null == e)t = e; else if ("number" == typeof e.length)for (t = [], n = 0, a = e.length; a > n; n++)b.call(e, n) && (t[n] = x(e[n])); else {
                t = {};
                for (r in e)b.call(e, r) && (t[r] = x(e[r]))
            }
            return t
        }, E = function (e, t) {
            for (var n = {}, a = 0, r = t.length; r > a; a++)t[a]in e && (n[t[a]] = e[t[a]]);
            return n
        }, T = function (e, t) {
            var n = {};
            for (var a in e)-1 === w(a, t) && (n[a] = e[a]);
            return n
        }, j = function (e) {
            if (null == e)return [];
            if (h)return h(e);
            var t = [];
            for (var n in e)b.call(e, n) && t.push(n);
            return t
        }, k = function (e) {
            if (e)for (var t in e)b.call(e, t) && delete e[t];
            return e
        }, O = function (e, t) {
            t in e && "function" == typeof m && m(e, t, {value: e[t], writable: !1, configurable: !0, enumerable: !0})
        }, N = function (e) {
            return function () {
                var t;
                return t = e.now ? e.now() : (new e).getTime()
            }
        }(p), D = {
            bridge: null,
            version: "0.0.0",
            pluginType: "unknown",
            disabled: null,
            outdated: null,
            unavailable: null,
            deactivated: null,
            overdue: null,
            ready: null
        }, I = "11.0.0", L = {}, S = {}, _ = null, z = {
            ready: "Flash communication is established",
            error: {
                "flash-disabled": "Flash is disabled or not installed",
                "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
            }
        }, F = function () {
            var e, t, n, a, r = "ZeroClipboard.swf";
            if (!i.currentScript || !(a = i.currentScript.src)) {
                var o = i.getElementsByTagName("script");
                if ("readyState"in o[0])for (e = o.length; e-- && ("interactive" !== o[e].readyState || !(a = o[e].src));); else if ("loading" === i.readyState)a = o[o.length - 1].src; else {
                    for (e = o.length; e--;) {
                        if (n = o[e].src, !n) {
                            t = null;
                            break
                        }
                        if (n = n.split("#")[0].split("?")[0], n = n.slice(0, n.lastIndexOf("/") + 1), null == t)t = n; else if (t !== n) {
                            t = null;
                            break
                        }
                    }
                    null !== t && (a = t)
                }
            }
            return a && (a = a.split("#")[0].split("?")[0], r = a.slice(0, a.lastIndexOf("/") + 1) + r), r
        }(), X = {
            swfPath: F,
            trustedDomains: e.location.host ? [e.location.host] : [],
            cacheBust: !0,
            forceEnhancedClipboard: !1,
            flashLoadTimeout: 3e4,
            autoActivate: !0,
            bubbleEvents: !0,
            containerId: "global-zeroclipboard-html-bridge",
            containerClass: "global-zeroclipboard-container",
            swfObjectId: "global-zeroclipboard-flash-bridge",
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            forceHandCursor: !1,
            title: null,
            zIndex: 999999999
        }, Y = function (e) {
            if ("object" == typeof e && null !== e)for (var t in e)if (b.call(e, t))if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))X[t] = e[t]; else if (null == D.bridge)if ("containerId" === t || "swfObjectId" === t) {
                if (!J(e[t]))throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                X[t] = e[t]
            } else X[t] = e[t];
            {
                if ("string" != typeof e || !e)return x(X);
                if (b.call(X, e))return X[e]
            }
        }, $ = function () {
            return {
                browser: E(o, ["userAgent", "platform", "appName"]),
                flash: T(D, ["bridge"]),
                zeroclipboard: {version: kt.version, config: kt.config()}
            }
        }, A = function () {
            return !!(D.disabled || D.outdated || D.unavailable || D.deactivated)
        }, B = function (e, t) {
            var n, a, r, i = {};
            if ("string" == typeof e && e)r = e.toLowerCase().split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)b.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.on(n, e[n]);
            if (r && r.length) {
                for (n = 0, a = r.length; a > n; n++)e = r[n].replace(/^on/, ""), i[e] = !0, L[e] || (L[e] = []), L[e].push(t);
                if (i.ready && D.ready && kt.emit({type: "ready"}), i.error) {
                    var o = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                    for (n = 0, a = o.length; a > n; n++)if (D[o[n]] === !0) {
                        kt.emit({type: "error", name: "flash-" + o[n]});
                        break
                    }
                }
            }
            return kt
        }, M = function (e, t) {
            var n, a, r, i, o;
            if (0 === arguments.length)i = j(L); else if ("string" == typeof e && e)i = e.split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)b.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.off(n, e[n]);
            if (i && i.length)for (n = 0, a = i.length; a > n; n++)if (e = i[n].toLowerCase().replace(/^on/, ""), o = L[e], o && o.length)if (t)for (r = w(t, o); -1 !== r;)o.splice(r, 1), r = w(t, o, r); else o.length = 0;
            return kt
        }, P = function (e) {
            var t;
            return t = "string" == typeof e && e ? x(L[e]) || null : x(L)
        }, H = function (e) {
            var t, n, a;
            return e = W(e), e && !at(e) ? "ready" === e.type && D.overdue === !0 ? kt.emit({
                type: "error",
                name: "flash-overdue"
            }) : (t = C({}, e), nt.call(this, t), "copy" === e.type && (a = ct(S), n = a.data, _ = a.formatMap), n) : void 0
        }, Z = function () {
            if ("boolean" != typeof D.ready && (D.ready = !1), !kt.isFlashUnusable() && null === D.bridge) {
                var e = X.flashLoadTimeout;
                "number" == typeof e && e >= 0 && l(function () {
                    "boolean" != typeof D.deactivated && (D.deactivated = !0), D.deactivated === !0 && kt.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, e), D.overdue = !1, lt()
            }
        }, R = function () {
            kt.clearData(), kt.deactivate(), kt.emit("destroy"), st(), kt.off()
        }, V = function (e, t) {
            var n;
            if ("object" == typeof e && e && "undefined" == typeof t)n = e, kt.clearData(); else {
                if ("string" != typeof e || !e)return;
                n = {}, n[e] = t
            }
            for (var a in n)"string" == typeof a && a && b.call(n, a) && "string" == typeof n[a] && n[a] && (S[a] = n[a])
        }, K = function (e) {
            "undefined" == typeof e ? (k(S), _ = null) : "string" == typeof e && b.call(S, e) && delete S[e]
        }, U = function (e) {
            if (e && 1 === e.nodeType) {
                a && (bt(a, X.activeClass), a !== e && bt(a, X.hoverClass)), a = e, ht(e, X.hoverClass);
                var t = e.getAttribute("title") || X.title;
                if ("string" == typeof t && t) {
                    var n = ot(D.bridge);
                    n && n.setAttribute("title", t)
                }
                var r = X.forceHandCursor === !0 || "pointer" === gt(e, "cursor");
                Et(r), xt()
            }
        }, G = function () {
            var e = ot(D.bridge);
            e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), a && (bt(a, X.hoverClass), bt(a, X.activeClass), a = null)
        }, J = function (e) {
            return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
        }, W = function (e) {
            var t;
            if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                C(e, {
                    type: t.toLowerCase(),
                    target: e.target || a || null,
                    relatedTarget: e.relatedTarget || null,
                    currentTarget: D && D.bridge || null,
                    timeStamp: e.timeStamp || N() || null
                });
                var n = z[e.type];
                return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && C(e, {
                    target: null,
                    version: D.version
                }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && C(e, {
                    target: null,
                    minimumVersion: I
                }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && C(e, {version: D.version})), "copy" === e.type && (e.clipboardData = {
                    setData: kt.setData,
                    clearData: kt.clearData
                }), "aftercopy" === e.type && (e = ut(e, _)), e.target && !e.relatedTarget && (e.relatedTarget = q(e.target)), e = Q(e)
            }
        }, q = function (e) {
            var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
            return t ? i.getElementById(t) : null
        }, Q = function (e) {
            if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                var n = e.target, a = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t, o = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t, l = Ct(n), s = r.screenLeft || r.screenX || 0, c = r.screenTop || r.screenY || 0, u = i.body.scrollLeft + i.documentElement.scrollLeft, f = i.body.scrollTop + i.documentElement.scrollTop, d = l.left + ("number" == typeof e._stageX ? e._stageX : 0), p = l.top + ("number" == typeof e._stageY ? e._stageY : 0), v = d - u, y = p - f, h = s + v, b = c + y, m = "number" == typeof e.movementX ? e.movementX : 0, g = "number" == typeof e.movementY ? e.movementY : 0;
                delete e._stageX, delete e._stageY, C(e, {
                    srcElement: n,
                    fromElement: a,
                    toElement: o,
                    screenX: h,
                    screenY: b,
                    pageX: d,
                    pageY: p,
                    clientX: v,
                    clientY: y,
                    x: v,
                    y: y,
                    movementX: m,
                    movementY: g,
                    offsetX: 0,
                    offsetY: 0,
                    layerX: 0,
                    layerY: 0
                })
            }
            return e
        }, et = function (e) {
            var t = e && "string" == typeof e.type && e.type || "";
            return !/^(?:(?:before)?copy|destroy)$/.test(t)
        }, tt = function (e, t, n, a) {
            a ? l(function () {
                e.apply(t, n)
            }, 0) : e.apply(t, n)
        }, nt = function (e) {
            if ("object" == typeof e && e && e.type) {
                var t = et(e), n = L["*"] || [], a = L[e.type] || [], i = n.concat(a);
                if (i && i.length) {
                    var o, l, s, c, u, f = this;
                    for (o = 0, l = i.length; l > o; o++)s = i[o], c = f, "string" == typeof s && "function" == typeof r[s] && (s = r[s]), "object" == typeof s && s && "function" == typeof s.handleEvent && (c = s, s = s.handleEvent), "function" == typeof s && (u = C({}, e), tt(s, c, [u], t))
                }
                return this
            }
        }, at = function (e) {
            var t = e.target || a || null, n = "swf" === e._source;
            switch (delete e._source, e.type) {
                case"error":
                    w(e.name, ["flash-disabled", "flash-outdated", "flash-deactivated", "flash-overdue"]) && C(D, {
                        disabled: "flash-disabled" === e.name,
                        outdated: "flash-outdated" === e.name,
                        unavailable: "flash-unavailable" === e.name,
                        deactivated: "flash-deactivated" === e.name,
                        overdue: "flash-overdue" === e.name,
                        ready: !1
                    });
                    break;
                case"ready":
                    var r = D.deactivated === !0;
                    C(D, {disabled: !1, outdated: !1, unavailable: !1, deactivated: !1, overdue: r, ready: !r});
                    break;
                case"copy":
                    var i, o, l = e.relatedTarget;
                    !S["text/html"] && !S["text/plain"] && l && (o = l.value || l.outerHTML || l.innerHTML) && (i = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", i), o !== i && e.clipboardData.setData("text/html", o)) : !S["text/plain"] && e.target && (i = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", i));
                    break;
                case"aftercopy":
                    kt.clearData(), t && t !== yt() && t.focus && t.focus();
                    break;
                case"_mouseover":
                    kt.activate(t), X.bubbleEvents === !0 && n && (rt(C({}, e, {type: "mouseover"})), rt(C({}, e, {
                        type: "mouseenter",
                        bubbles: !1
                    })));
                    break;
                case"_mouseout":
                    kt.deactivate(), X.bubbleEvents === !0 && n && (rt(C({}, e, {type: "mouseout"})), rt(C({}, e, {
                        type: "mouseleave",
                        bubbles: !1
                    })));
                    break;
                case"_mousedown":
                    ht(t, X.activeClass), X.bubbleEvents === !0 && n && rt(C({}, e, {type: e.type.slice(1)}));
                    break;
                case"_mouseup":
                    bt(t, X.activeClass), X.bubbleEvents === !0 && n && rt(C({}, e, {type: e.type.slice(1)}));
                    break;
                case"_click":
                case"_mousemove":
                    X.bubbleEvents === !0 && n && rt(C({}, e, {type: e.type.slice(1)}))
            }
            return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
        }, rt = function (e) {
            if (e && "string" == typeof e.type && e) {
                var t, n = e.target || e.srcElement || null, a = n && n.ownerDocument || i, o = {
                    view: a.defaultView || r,
                    canBubble: !0,
                    cancelable: !0,
                    detail: "click" === e.type ? 1 : 0,
                    button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : a.createEvent ? 0 : 1
                }, l = C(o, e);
                n && (a.createEvent && n.dispatchEvent ? (l = [l.type, l.canBubble, l.cancelable, l.view, l.detail, l.screenX, l.screenY, l.clientX, l.clientY, l.ctrlKey, l.altKey, l.shiftKey, l.metaKey, l.button, l.relatedTarget], t = a.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, l), n.dispatchEvent(t))) : a.createEventObject && n.fireEvent && (t = a.createEventObject(l), n.fireEvent("on" + l.type, t)))
            }
        }, it = function () {
            var e = i.createElement("div");
            return e.id = X.containerId, e.className = X.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Tt(X.zIndex), e
        }, ot = function (e) {
            for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;)t = t.parentNode;
            return t || null
        }, lt = function () {
            var e, t = D.bridge, n = ot(t);
            if (!t) {
                var a = vt(r.location.host, X), o = "never" === a ? "none" : "all", l = dt(X), s = X.swfPath + ft(X.swfPath, X);
                n = it();
                var c = i.createElement("div");
                n.appendChild(c), i.body.appendChild(n);
                var u = i.createElement("div"), f = "activex" === D.pluginType;
                u.innerHTML = '<object id="' + X.swfObjectId + '" name="' + X.swfObjectId + '" width="100%" height="100%" ' + (f ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + s + '"') + ">" + (f ? '<param name="movie" value="' + s + '"/>' : "") + '<param name="allowScriptAccess" value="' + a + '"/><param name="allowNetworking" value="' + o + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + l + '"/></object>', t = u.firstChild, u = null, t.ZeroClipboard = kt, n.replaceChild(t, c)
            }
            return t || (t = i[X.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), D.bridge = t || null, t
        }, st = function () {
            var e = D.bridge;
            if (e) {
                var t = ot(e);
                t && ("activex" === D.pluginType && "readyState"in e ? (e.style.display = "none", function n() {
                    if (4 === e.readyState) {
                        for (var a in e)"function" == typeof e[a] && (e[a] = null);
                        e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                    } else l(n, 10)
                }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), D.ready = null, D.bridge = null, D.deactivated = null
            }
        }, ct = function (e) {
            var t = {}, n = {};
            if ("object" == typeof e && e) {
                for (var a in e)if (a && b.call(e, a) && "string" == typeof e[a] && e[a])switch (a.toLowerCase()) {
                    case"text/plain":
                    case"text":
                    case"air:text":
                    case"flash:text":
                        t.text = e[a], n.text = a;
                        break;
                    case"text/html":
                    case"html":
                    case"air:html":
                    case"flash:html":
                        t.html = e[a], n.html = a;
                        break;
                    case"application/rtf":
                    case"text/rtf":
                    case"rtf":
                    case"richtext":
                    case"air:rtf":
                    case"flash:rtf":
                        t.rtf = e[a], n.rtf = a
                }
                return {data: t, formatMap: n}
            }
        }, ut = function (e, t) {
            if ("object" != typeof e || !e || "object" != typeof t || !t)return e;
            var n = {};
            for (var a in e)if (b.call(e, a)) {
                if ("success" !== a && "data" !== a) {
                    n[a] = e[a];
                    continue
                }
                n[a] = {};
                var r = e[a];
                for (var i in r)i && b.call(r, i) && b.call(t, i) && (n[a][t[i]] = r[i])
            }
            return n
        }, ft = function (e, t) {
            var n = null == t || t && t.cacheBust === !0;
            return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + N() : ""
        }, dt = function (e) {
            var t, n, a, i, o = "", l = [];
            if (e.trustedDomains && ("string" == typeof e.trustedDomains ? i = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length"in e.trustedDomains && (i = e.trustedDomains)), i && i.length)for (t = 0, n = i.length; n > t; t++)if (b.call(i, t) && i[t] && "string" == typeof i[t]) {
                if (a = pt(i[t]), !a)continue;
                if ("*" === a) {
                    l = [a];
                    break
                }
                l.push.apply(l, [a, "//" + a, r.location.protocol + "//" + a])
            }
            return l.length && (o += "trustedOrigins=" + f(l.join(","))), e.forceEnhancedClipboard === !0 && (o += (o ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (o += (o ? "&" : "") + "swfObjectId=" + f(e.swfObjectId)), o
        }, pt = function (e) {
            if (null == e || "" === e)return null;
            if (e = e.replace(/^\s+|\s+$/g, ""), "" === e)return null;
            var t = e.indexOf("//");
            e = -1 === t ? e : e.slice(t + 2);
            var n = e.indexOf("/");
            return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
        }, vt = function () {
            var e = function (e, t) {
                var n, a, r;
                if (null != e && "*" !== t[0] && ("string" == typeof e && (e = [e]), "object" == typeof e && "number" == typeof e.length))for (n = 0, a = e.length; a > n; n++)if (b.call(e, n) && (r = pt(e[n]))) {
                    if ("*" === r) {
                        t.length = 0, t.push("*");
                        break
                    }
                    -1 === w(r, t) && t.push(r)
                }
            };
            return function (t, n) {
                var a = pt(n.swfPath);
                null === a && (a = t);
                var r = [];
                e(n.trustedOrigins, r), e(n.trustedDomains, r);
                var i = r.length;
                if (i > 0) {
                    if (1 === i && "*" === r[0])return "always";
                    if (-1 !== w(t, r))return 1 === i && t === a ? "sameDomain" : "always"
                }
                return "never"
            }
        }(), yt = function () {
            try {
                return i.activeElement
            } catch (e) {
                return null
            }
        }, ht = function (e, t) {
            if (!e || 1 !== e.nodeType)return e;
            if (e.classList)return e.classList.contains(t) || e.classList.add(t), e;
            if (t && "string" == typeof t) {
                var n = (t || "").split(/\s+/);
                if (1 === e.nodeType)if (e.className) {
                    for (var a = " " + e.className + " ", r = e.className, i = 0, o = n.length; o > i; i++)a.indexOf(" " + n[i] + " ") < 0 && (r += " " + n[i]);
                    e.className = r.replace(/^\s+|\s+$/g, "")
                } else e.className = t
            }
            return e
        }, bt = function (e, t) {
            if (!e || 1 !== e.nodeType)return e;
            if (e.classList)return e.classList.contains(t) && e.classList.remove(t), e;
            if ("string" == typeof t && t) {
                var n = t.split(/\s+/);
                if (1 === e.nodeType && e.className) {
                    for (var a = (" " + e.className + " ").replace(/[\n\t]/g, " "), r = 0, i = n.length; i > r; r++)a = a.replace(" " + n[r] + " ", " ");
                    e.className = a.replace(/^\s+|\s+$/g, "")
                }
            }
            return e
        }, mt = function () {
            var e = /\-([a-z])/g, t = function (e, t) {
                return t.toUpperCase()
            };
            return function (n) {
                return n.replace(e, t)
            }
        }(), gt = function (e, t) {
            var n, a, i;
            return r.getComputedStyle ? n = r.getComputedStyle(e, null).getPropertyValue(t) : (a = mt(t), n = e.currentStyle ? e.currentStyle[a] : e.style[a]), "cursor" !== t || n && "auto" !== n || (i = e.tagName.toLowerCase(), "a" !== i) ? n : "pointer"
        }, wt = function () {
            var e, t, n, a = 1;
            return "function" == typeof i.body.getBoundingClientRect && (e = i.body.getBoundingClientRect(), t = e.right - e.left, n = i.body.offsetWidth, a = d.round(t / n * 100) / 100), a
        }, Ct = function (e) {
            var t = {left: 0, top: 0, width: 0, height: 0};
            if (e.getBoundingClientRect) {
                var n, a, o, l = e.getBoundingClientRect();
                "pageXOffset"in r && "pageYOffset"in r ? (n = r.pageXOffset, a = r.pageYOffset) : (o = wt(), n = d.round(i.documentElement.scrollLeft / o), a = d.round(i.documentElement.scrollTop / o));
                var s = i.documentElement.clientLeft || 0, c = i.documentElement.clientTop || 0;
                t.left = l.left + n - s, t.top = l.top + a - c, t.width = "width"in l ? l.width : l.right - l.left, t.height = "height"in l ? l.height : l.bottom - l.top
            }
            return t
        }, xt = function () {
            var e;
            if (a && (e = ot(D.bridge))) {
                var t = Ct(a);
                C(e.style, {
                    width: t.width + "px",
                    height: t.height + "px",
                    top: t.top + "px",
                    left: t.left + "px",
                    zIndex: "" + Tt(X.zIndex)
                })
            }
        }, Et = function (e) {
            D.ready === !0 && (D.bridge && "function" == typeof D.bridge.setHandCursor ? D.bridge.setHandCursor(e) : D.ready = !1)
        }, Tt = function (e) {
            if (/^(?:auto|inherit)$/.test(e))return e;
            var t;
            return "number" != typeof e || u(e) ? "string" == typeof e && (t = Tt(s(e, 10))) : t = e, "number" == typeof t ? t : "auto"
        }, jt = function (e) {
            function t(e) {
                var t = e.match(/[\d]+/g);
                return t.length = 3, t.join(".")
            }

            function n(e) {
                return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
            }

            function a(e) {
                e && (s = !0, e.version && (d = t(e.version)), !d && e.description && (d = t(e.description)), e.filename && (f = n(e.filename)))
            }

            var r, i, l, s = !1, u = !1, f = !1, d = "";
            if (o.plugins && o.plugins.length)r = o.plugins["Shockwave Flash"], a(r), o.plugins["Shockwave Flash 2.0"] && (s = !0, d = "2.0.0.11"); else if (o.mimeTypes && o.mimeTypes.length)l = o.mimeTypes["application/x-shockwave-flash"], r = l && l.enabledPlugin, a(r); else if ("undefined" != typeof e) {
                u = !0;
                try {
                    i = new e("ShockwaveFlash.ShockwaveFlash.7"), s = !0, d = t(i.GetVariable("$version"))
                } catch (p) {
                    try {
                        i = new e("ShockwaveFlash.ShockwaveFlash.6"), s = !0, d = "6.0.21"
                    } catch (v) {
                        try {
                            i = new e("ShockwaveFlash.ShockwaveFlash"), s = !0, d = t(i.GetVariable("$version"))
                        } catch (y) {
                            u = !1
                        }
                    }
                }
            }
            D.disabled = s !== !0, D.outdated = d && c(d) < c(I), D.version = d || "0.0.0", D.pluginType = f ? "pepper" : u ? "activex" : s ? "netscape" : "unknown"
        };
        jt(v);
        var kt = function () {
            return this instanceof kt ? void("function" == typeof kt._createClient && kt._createClient.apply(this, g(arguments))) : new kt
        };
        kt.version = "2.0.0", O(kt, "version"), kt.config = function () {
            return Y.apply(this, g(arguments))
        }, kt.state = function () {
            return $.apply(this, g(arguments))
        }, kt.isFlashUnusable = function () {
            return A.apply(this, g(arguments))
        }, kt.on = function () {
            return B.apply(this, g(arguments))
        }, kt.off = function () {
            return M.apply(this, g(arguments))
        }, kt.handlers = function () {
            return P.apply(this, g(arguments))
        }, kt.emit = function () {
            return H.apply(this, g(arguments))
        }, kt.create = function () {
            return Z.apply(this, g(arguments))
        }, kt.destroy = function () {
            return R.apply(this, g(arguments))
        }, kt.setData = function () {
            return V.apply(this, g(arguments))
        }, kt.clearData = function () {
            return K.apply(this, g(arguments))
        }, kt.activate = function () {
            return U.apply(this, g(arguments))
        }, kt.deactivate = function () {
            return G.apply(this, g(arguments))
        }, "function" == typeof define && define.amd ? define(function () {
            return kt
        }) : "object" == typeof n && n && "object" == typeof n.exports && n.exports ? n.exports = kt : e.ZeroClipboard = kt
    }(function () {
        return this
    }())
});
;
define("common:widget/placeholder/placeholder.js", function (e) {
    function t(e, t) {
        var a = o('<span class="J-placeholder placeholder">' + e.attr("placeholder") + "</span>").appendTo(t);
        /relative|absoulte/i.test(t.css("position")) || t.css({
            position: "relative",
            zIndex: 1
        }), e.addClass("J-placeholder-input"), e.css({
            backgroundColor: "transparent",
            backgroundRepeat: "repeat",
            backgroundImage: "url(/static/common/widget/placeholder/placeholder_a5ae551.gif)"
        });
        var n = e.offset(), l = t.offset();
        a.css({
            top: n.top - l.top + (parseInt(e.css("borderTopWidth")) || 0),
            left: n.left - l.left + (parseInt(e.css("paddingLeft")) || 0) + (parseInt(e.css("borderLeftWidth")) || 0),
            height: e.innerHeight(),
            lineHeight: e.innerHeight() + "px"
        }), a.data("input", e), e.data("placeholder", a)
    }

    function a() {
        var e = o(this), t = e.data("placeholder");
        t && (e.val() ? t.hide() : t.show())
    }

    var o = e("common:widget/jquery/1.11.3/jquery.js");
    o.fn.placeholder = [function () {
        var e = null, n = null;
        /input|textarea/i.test(this[0].nodeName) ? (e = null, n = this) : (e = this, n = e.find("input[placeholder], textarea[placeholder]")), n.each(function (n, l) {
            l = o(l), l.data("placeholder") && l.data("placeholder").remove(), t(l, e || l.parent()), l.off("propertychange", a), l.on("propertychange", a)
        })
    }, o.noop][+("placeholder"in document.createElement("input"))], o(document).on("click focus blur keydown", ".J-placeholder-input", a)
});
;
define("common:widget/moment/2.8.4/moment.js", function (e, t, n) {
    (function (t) {
        function s(e, t, n) {
            switch (arguments.length) {
                case 2:
                    return null != e ? e : t;
                case 3:
                    return null != e ? e : null != t ? t : n;
                default:
                    throw new Error("Implement me")
            }
        }

        function a(e, t) {
            return Tt.call(e, t)
        }

        function i() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function r(e) {
            Yt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn
        }

        function o(e, t) {
            var n = !0;
            return _(function () {
                return n && (r(e), n = !1), t.apply(this, arguments)
            }, t)
        }

        function u(e, t) {
            Mn[e] || (r(t), Mn[e] = !0)
        }

        function c(e, t) {
            return function (n) {
                return p(e.call(this, n), t)
            }
        }

        function l(e, t) {
            return function (n) {
                return this.localeData().ordinal(e.call(this, n), t)
            }
        }

        function d() {
        }

        function h(e, t) {
            t !== !1 && F(e), m(this, e), this._d = new Date(+e._d)
        }

        function f(e) {
            var t = S(e), n = t.year || 0, s = t.quarter || 0, a = t.month || 0, i = t.week || 0, r = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, l = t.millisecond || 0;
            this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * o, this._days = +r + 7 * i, this._months = +a + 3 * s + 12 * n, this._data = {}, this._locale = Yt.localeData(), this._bubble()
        }

        function _(e, t) {
            for (var n in t)a(t, n) && (e[n] = t[n]);
            return a(t, "toString") && (e.toString = t.toString), a(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function m(e, t) {
            var n, s, a;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), It.length > 0)for (n in It)s = It[n], a = t[s], "undefined" != typeof a && (e[s] = a);
            return e
        }

        function y(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function p(e, t, n) {
            for (var s = "" + Math.abs(e), a = e >= 0; s.length < t;)s = "0" + s;
            return (a ? n ? "+" : "" : "-") + s
        }

        function g(e, t) {
            var n = {milliseconds: 0, months: 0};
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function M(e, t) {
            var n;
            return t = x(t, e), e.isBefore(t) ? n = g(e, t) : (n = g(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function D(e, t) {
            return function (n, s) {
                var a, i;
                return null === s || isNaN(+s) || (u(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), i = n, n = s, s = i), n = "string" == typeof n ? +n : n, a = Yt.duration(n, s), Y(this, a, e), this
            }
        }

        function Y(e, t, n, s) {
            var a = t._milliseconds, i = t._days, r = t._months;
            s = null == s ? !0 : s, a && e._d.setTime(+e._d + a * n), i && mt(e, "Date", _t(e, "Date") + i * n), r && ft(e, _t(e, "Month") + r * n), s && Yt.updateOffset(e, i || r)
        }

        function w(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function v(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }

        function k(e, t, n) {
            var s, a = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0;
            for (s = 0; a > s; s++)(n && e[s] !== t[s] || !n && O(e[s]) !== O(t[s])) && r++;
            return r + i
        }

        function b(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = hn[e] || fn[t] || t
            }
            return e
        }

        function S(e) {
            var t, n, s = {};
            for (n in e)a(e, n) && (t = b(n), t && (s[t] = e[n]));
            return s
        }

        function T(e) {
            var n, s;
            if (0 === e.indexOf("week"))n = 7, s = "day"; else {
                if (0 !== e.indexOf("month"))return;
                n = 12, s = "month"
            }
            Yt[e] = function (a, i) {
                var r, o, u = Yt._locale[e], c = [];
                if ("number" == typeof a && (i = a, a = t), o = function (e) {
                        var t = Yt().utc().set(s, e);
                        return u.call(Yt._locale, t, a || "")
                    }, null != i)return o(i);
                for (r = 0; n > r; r++)c.push(o(r));
                return c
            }
        }

        function O(e) {
            var t = +e, n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function W(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function G(e, t, n) {
            return ct(Yt([e, 11, 31 + t - n]), t, n).week
        }

        function U(e) {
            return C(e) ? 366 : 365
        }

        function C(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function F(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[Wt] < 0 || e._a[Wt] > 11 ? Wt : e._a[Gt] < 1 || e._a[Gt] > W(e._a[Ot], e._a[Wt]) ? Gt : e._a[Ut] < 0 || e._a[Ut] > 24 || 24 === e._a[Ut] && (0 !== e._a[Ct] || 0 !== e._a[Ft] || 0 !== e._a[Pt]) ? Ut : e._a[Ct] < 0 || e._a[Ct] > 59 ? Ct : e._a[Ft] < 0 || e._a[Ft] > 59 ? Ft : e._a[Pt] < 0 || e._a[Pt] > 999 ? Pt : -1, e._pf._overflowDayOfYear && (Ot > t || t > Gt) && (t = Gt), e._pf.overflow = t)
        }

        function P(e) {
            return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === t)), e._isValid
        }

        function z(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function I(e) {
            for (var t, n, s, a, i = 0; i < e.length;) {
                for (a = z(e[i]).split("-"), t = a.length, n = z(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (s = L(a.slice(0, t).join("-")))return s;
                    if (n && n.length >= t && k(a, n, !0) >= t - 1)break;
                    t--
                }
                i++
            }
            return null
        }

        function L(t) {
            var n = null;
            if (!zt[t] && Lt)try {
                n = Yt.locale(), e("./locale/" + t), Yt.locale(n)
            } catch (s) {
            }
            return zt[t]
        }

        function x(e, t) {
            var n, s;
            return t._isUTC ? (n = t.clone(), s = (Yt.isMoment(e) || v(e) ? +e : +Yt(e)) - +n, n._d.setTime(+n._d + s), Yt.updateOffset(n, !1), n) : Yt(e).local()
        }

        function H(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function A(e) {
            var t, n, s = e.match(Zt);
            for (t = 0, n = s.length; n > t; t++)s[t] = gn[s[t]] ? gn[s[t]] : H(s[t]);
            return function (a) {
                var i = "";
                for (t = 0; n > t; t++)i += s[t]instanceof Function ? s[t].call(a, e) : s[t];
                return i
            }
        }

        function Z(e, t) {
            return e.isValid() ? (t = E(t, e.localeData()), _n[t] || (_n[t] = A(t)), _n[t](e)) : e.localeData().invalidDate()
        }

        function E(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }

            var s = 5;
            for (Et.lastIndex = 0; s >= 0 && Et.test(e);)e = e.replace(Et, n), Et.lastIndex = 0, s -= 1;
            return e
        }

        function j(e, t) {
            var n, s = t._strict;
            switch (e) {
                case"Q":
                    return Kt;
                case"DDDD":
                    return tn;
                case"YYYY":
                case"GGGG":
                case"gggg":
                    return s ? nn : Vt;
                case"Y":
                case"G":
                case"g":
                    return an;
                case"YYYYYY":
                case"YYYYY":
                case"GGGGG":
                case"ggggg":
                    return s ? sn : $t;
                case"S":
                    if (s)return Kt;
                case"SS":
                    if (s)return en;
                case"SSS":
                    if (s)return tn;
                case"DDD":
                    return Nt;
                case"MMM":
                case"MMMM":
                case"dd":
                case"ddd":
                case"dddd":
                    return Jt;
                case"a":
                case"A":
                    return t._locale._meridiemParse;
                case"x":
                    return Xt;
                case"X":
                    return Bt;
                case"Z":
                case"ZZ":
                    return Rt;
                case"T":
                    return Qt;
                case"SSSS":
                    return qt;
                case"MM":
                case"DD":
                case"YY":
                case"GG":
                case"gg":
                case"HH":
                case"hh":
                case"mm":
                case"ss":
                case"ww":
                case"WW":
                    return s ? en : jt;
                case"M":
                case"D":
                case"d":
                case"H":
                case"h":
                case"m":
                case"s":
                case"w":
                case"W":
                case"e":
                case"E":
                    return jt;
                case"Do":
                    return s ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                default:
                    return n = new RegExp(B(X(e.replace("\\", "")), "i"))
            }
        }

        function N(e) {
            e = e || "";
            var t = e.match(Rt) || [], n = t[t.length - 1] || [], s = (n + "").match(ln) || ["-", 0, 0], a = +(60 * s[1]) + O(s[2]);
            return "+" === s[0] ? -a : a
        }

        function V(e, t, n) {
            var s, a = n._a;
            switch (e) {
                case"Q":
                    null != t && (a[Wt] = 3 * (O(t) - 1));
                    break;
                case"M":
                case"MM":
                    null != t && (a[Wt] = O(t) - 1);
                    break;
                case"MMM":
                case"MMMM":
                    s = n._locale.monthsParse(t, e, n._strict), null != s ? a[Wt] = s : n._pf.invalidMonth = t;
                    break;
                case"D":
                case"DD":
                    null != t && (a[Gt] = O(t));
                    break;
                case"Do":
                    null != t && (a[Gt] = O(parseInt(t.match(/\d{1,2}/)[0], 10)));
                    break;
                case"DDD":
                case"DDDD":
                    null != t && (n._dayOfYear = O(t));
                    break;
                case"YY":
                    a[Ot] = Yt.parseTwoDigitYear(t);
                    break;
                case"YYYY":
                case"YYYYY":
                case"YYYYYY":
                    a[Ot] = O(t);
                    break;
                case"a":
                case"A":
                    n._isPm = n._locale.isPM(t);
                    break;
                case"h":
                case"hh":
                    n._pf.bigHour = !0;
                case"H":
                case"HH":
                    a[Ut] = O(t);
                    break;
                case"m":
                case"mm":
                    a[Ct] = O(t);
                    break;
                case"s":
                case"ss":
                    a[Ft] = O(t);
                    break;
                case"S":
                case"SS":
                case"SSS":
                case"SSSS":
                    a[Pt] = O(1e3 * ("0." + t));
                    break;
                case"x":
                    n._d = new Date(O(t));
                    break;
                case"X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case"Z":
                case"ZZ":
                    n._useUTC = !0, n._tzm = N(t);
                    break;
                case"dd":
                case"ddd":
                case"dddd":
                    s = n._locale.weekdaysParse(t), null != s ? (n._w = n._w || {}, n._w.d = s) : n._pf.invalidWeekday = t;
                    break;
                case"w":
                case"ww":
                case"W":
                case"WW":
                case"d":
                case"e":
                case"E":
                    e = e.substr(0, 1);
                case"gggg":
                case"GGGG":
                case"GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = O(t));
                    break;
                case"gg":
                case"GG":
                    n._w = n._w || {}, n._w[e] = Yt.parseTwoDigitYear(t)
            }
        }

        function $(e) {
            var t, n, a, i, r, o, u;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (r = 1, o = 4, n = s(t.GG, e._a[Ot], ct(Yt(), 1, 4).year), a = s(t.W, 1), i = s(t.E, 1)) : (r = e._locale._week.dow, o = e._locale._week.doy, n = s(t.gg, e._a[Ot], ct(Yt(), r, o).year), a = s(t.w, 1), null != t.d ? (i = t.d, r > i && ++a) : i = null != t.e ? t.e + r : r), u = lt(n, a, i, o, r), e._a[Ot] = u.year, e._dayOfYear = u.dayOfYear
        }

        function q(e) {
            var t, n, a, i, r = [];
            if (!e._d) {
                for (a = R(e), e._w && null == e._a[Gt] && null == e._a[Wt] && $(e), e._dayOfYear && (i = s(e._a[Ot], a[Ot]), e._dayOfYear > U(i) && (e._pf._overflowDayOfYear = !0), n = it(i, 0, e._dayOfYear), e._a[Wt] = n.getUTCMonth(), e._a[Gt] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t)e._a[t] = r[t] = a[t];
                for (; 7 > t; t++)e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[Ut] && 0 === e._a[Ct] && 0 === e._a[Ft] && 0 === e._a[Pt] && (e._nextDay = !0, e._a[Ut] = 0), e._d = (e._useUTC ? it : at).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm), e._nextDay && (e._a[Ut] = 24)
            }
        }

        function J(e) {
            var t;
            e._d || (t = S(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], q(e))
        }

        function R(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function Q(e) {
            if (e._f === Yt.ISO_8601)return void et(e);
            e._a = [], e._pf.empty = !0;
            var n, s, a, i, r, o = "" + e._i, u = o.length, c = 0;
            for (a = E(e._f, e._locale).match(Zt) || [], n = 0; n < a.length; n++)i = a[n], s = (o.match(j(i, e)) || [])[0], s && (r = o.substr(0, o.indexOf(s)), r.length > 0 && e._pf.unusedInput.push(r), o = o.slice(o.indexOf(s) + s.length), c += s.length), gn[i] ? (s ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), V(i, s, e)) : e._strict && !s && e._pf.unusedTokens.push(i);
            e._pf.charsLeftOver = u - c, o.length > 0 && e._pf.unusedInput.push(o), e._pf.bigHour === !0 && e._a[Ut] <= 12 && (e._pf.bigHour = t), e._isPm && e._a[Ut] < 12 && (e._a[Ut] += 12), e._isPm === !1 && 12 === e._a[Ut] && (e._a[Ut] = 0), q(e), F(e)
        }

        function X(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, a) {
                return t || n || s || a
            })
        }

        function B(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function K(e) {
            var t, n, s, a, r;
            if (0 === e._f.length)return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
            for (a = 0; a < e._f.length; a++)r = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = i(), t._f = e._f[a], Q(t), P(t) && (r += t._pf.charsLeftOver, r += 10 * t._pf.unusedTokens.length, t._pf.score = r, (null == s || s > r) && (s = r, n = t));
            _(e, n || t)
        }

        function et(e) {
            var t, n, s = e._i, a = rn.exec(s);
            if (a) {
                for (e._pf.iso = !0, t = 0, n = un.length; n > t; t++)if (un[t][1].exec(s)) {
                    e._f = un[t][0] + (a[6] || " ");
                    break
                }
                for (t = 0, n = cn.length; n > t; t++)if (cn[t][1].exec(s)) {
                    e._f += cn[t][0];
                    break
                }
                s.match(Rt) && (e._f += "Z"), Q(e)
            } else e._isValid = !1
        }

        function tt(e) {
            et(e), e._isValid === !1 && (delete e._isValid, Yt.createFromInputFallback(e))
        }

        function nt(e, t) {
            var n, s = [];
            for (n = 0; n < e.length; ++n)s.push(t(e[n], n));
            return s
        }

        function st(e) {
            var n, s = e._i;
            s === t ? e._d = new Date : v(s) ? e._d = new Date(+s) : null !== (n = xt.exec(s)) ? e._d = new Date(+n[1]) : "string" == typeof s ? tt(e) : w(s) ? (e._a = nt(s.slice(0), function (e) {
                return parseInt(e, 10)
            }), q(e)) : "object" == typeof s ? J(e) : "number" == typeof s ? e._d = new Date(s) : Yt.createFromInputFallback(e)
        }

        function at(e, t, n, s, a, i, r) {
            var o = new Date(e, t, n, s, a, i, r);
            return 1970 > e && o.setFullYear(e), o
        }

        function it(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e), t
        }

        function rt(e, t) {
            if ("string" == typeof e)if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e)return null
            } else e = parseInt(e, 10);
            return e
        }

        function ot(e, t, n, s, a) {
            return a.relativeTime(t || 1, !!n, e, s)
        }

        function ut(e, t, n) {
            var s = Yt.duration(e).abs(), a = St(s.as("s")), i = St(s.as("m")), r = St(s.as("h")), o = St(s.as("d")), u = St(s.as("M")), c = St(s.as("y")), l = a < mn.s && ["s", a] || 1 === i && ["m"] || i < mn.m && ["mm", i] || 1 === r && ["h"] || r < mn.h && ["hh", r] || 1 === o && ["d"] || o < mn.d && ["dd", o] || 1 === u && ["M"] || u < mn.M && ["MM", u] || 1 === c && ["y"] || ["yy", c];
            return l[2] = t, l[3] = +e > 0, l[4] = n, ot.apply({}, l)
        }

        function ct(e, t, n) {
            var s, a = n - t, i = n - e.day();
            return i > a && (i -= 7), a - 7 > i && (i += 7), s = Yt(e).add(i, "d"), {
                week: Math.ceil(s.dayOfYear() / 7),
                year: s.year()
            }
        }

        function lt(e, t, n, s, a) {
            var i, r, o = it(e, 0, 1).getUTCDay();
            return o = 0 === o ? 7 : o, n = null != n ? n : a, i = a - o + (o > s ? 7 : 0) - (a > o ? 7 : 0), r = 7 * (t - 1) + (n - a) + i + 1, {
                year: r > 0 ? e : e - 1,
                dayOfYear: r > 0 ? r : U(e - 1) + r
            }
        }

        function dt(e) {
            var n, s = e._i, a = e._f;
            return e._locale = e._locale || Yt.localeData(e._l), null === s || a === t && "" === s ? Yt.invalid({nullInput: !0}) : ("string" == typeof s && (e._i = s = e._locale.preparse(s)), Yt.isMoment(s) ? new h(s, !0) : (a ? w(a) ? K(e) : Q(e) : st(e), n = new h(e), n._nextDay && (n.add(1, "d"), n._nextDay = t), n))
        }

        function ht(e, t) {
            var n, s;
            if (1 === t.length && w(t[0]) && (t = t[0]), !t.length)return Yt();
            for (n = t[0], s = 1; s < t.length; ++s)t[s][e](n) && (n = t[s]);
            return n
        }

        function ft(e, t) {
            var n;
            return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), W(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
        }

        function _t(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function mt(e, t, n) {
            return "Month" === t ? ft(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function yt(e, t) {
            return function (n) {
                return null != n ? (mt(this, e, n), Yt.updateOffset(this, t), this) : _t(this, e)
            }
        }

        function pt(e) {
            return 400 * e / 146097
        }

        function gt(e) {
            return 146097 * e / 400
        }

        function Mt(e) {
            Yt.duration.fn[e] = function () {
                return this._data[e]
            }
        }

        function Dt(e) {
            "undefined" == typeof ender && (wt = bt.moment, bt.moment = e ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", Yt) : Yt)
        }

        for (var Yt, wt, vt, kt = "2.8.4", bt = "undefined" != typeof global ? global : this, St = Math.round, Tt = Object.prototype.hasOwnProperty, Ot = 0, Wt = 1, Gt = 2, Ut = 3, Ct = 4, Ft = 5, Pt = 6, zt = {}, It = [], Lt = "undefined" != typeof n && n && n.exports, xt = /^\/?Date\((\-?\d+)/i, Ht = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, At = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Zt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Et = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, jt = /\d\d?/, Nt = /\d{1,3}/, Vt = /\d{1,4}/, $t = /[+\-]?\d{1,6}/, qt = /\d+/, Jt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Rt = /Z|[\+\-]\d\d:?\d\d/gi, Qt = /T/i, Xt = /[\+\-]?\d+/, Bt = /[\+\-]?\d+(\.\d{1,3})?/, Kt = /\d/, en = /\d\d/, tn = /\d{3}/, nn = /\d{4}/, sn = /[+-]?\d{6}/, an = /[+-]?\d+/, rn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", un = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], cn = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], ln = /([\+\-]|\d\d)/gi, dn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), hn = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, fn = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, _n = {}, mn = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, yn = "DDD w W M D d".split(" "), pn = "M D H h m s w W".split(" "), gn = {
            M: function () {
                return this.month() + 1
            }, MMM: function (e) {
                return this.localeData().monthsShort(this, e)
            }, MMMM: function (e) {
                return this.localeData().months(this, e)
            }, D: function () {
                return this.date()
            }, DDD: function () {
                return this.dayOfYear()
            }, d: function () {
                return this.day()
            }, dd: function (e) {
                return this.localeData().weekdaysMin(this, e)
            }, ddd: function (e) {
                return this.localeData().weekdaysShort(this, e)
            }, dddd: function (e) {
                return this.localeData().weekdays(this, e)
            }, w: function () {
                return this.week()
            }, W: function () {
                return this.isoWeek()
            }, YY: function () {
                return p(this.year() % 100, 2)
            }, YYYY: function () {
                return p(this.year(), 4)
            }, YYYYY: function () {
                return p(this.year(), 5)
            }, YYYYYY: function () {
                var e = this.year(), t = e >= 0 ? "+" : "-";
                return t + p(Math.abs(e), 6)
            }, gg: function () {
                return p(this.weekYear() % 100, 2)
            }, gggg: function () {
                return p(this.weekYear(), 4)
            }, ggggg: function () {
                return p(this.weekYear(), 5)
            }, GG: function () {
                return p(this.isoWeekYear() % 100, 2)
            }, GGGG: function () {
                return p(this.isoWeekYear(), 4)
            }, GGGGG: function () {
                return p(this.isoWeekYear(), 5)
            }, e: function () {
                return this.weekday()
            }, E: function () {
                return this.isoWeekday()
            }, a: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            }, A: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            }, H: function () {
                return this.hours()
            }, h: function () {
                return this.hours() % 12 || 12
            }, m: function () {
                return this.minutes()
            }, s: function () {
                return this.seconds()
            }, S: function () {
                return O(this.milliseconds() / 100)
            }, SS: function () {
                return p(O(this.milliseconds() / 10), 2)
            }, SSS: function () {
                return p(this.milliseconds(), 3)
            }, SSSS: function () {
                return p(this.milliseconds(), 3)
            }, Z: function () {
                var e = -this.zone(), t = "+";
                return 0 > e && (e = -e, t = "-"), t + p(O(e / 60), 2) + ":" + p(O(e) % 60, 2)
            }, ZZ: function () {
                var e = -this.zone(), t = "+";
                return 0 > e && (e = -e, t = "-"), t + p(O(e / 60), 2) + p(O(e) % 60, 2)
            }, z: function () {
                return this.zoneAbbr()
            }, zz: function () {
                return this.zoneName()
            }, x: function () {
                return this.valueOf()
            }, X: function () {
                return this.unix()
            }, Q: function () {
                return this.quarter()
            }
        }, Mn = {}, Dn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; yn.length;)vt = yn.pop(), gn[vt + "o"] = l(gn[vt], vt);
        for (; pn.length;)vt = pn.pop(), gn[vt + vt] = c(gn[vt], 2);
        gn.DDDD = c(gn.DDD, 3), _(d.prototype, {
            set: function (e) {
                var t, n;
                for (n in e)t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function (e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function (e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function (e, t, n) {
                var s, a, i;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; 12 > s; s++) {
                    if (a = Yt.utc([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e))return s;
                    if (n && "MMM" === t && this._shortMonthsParse[s].test(e))return s;
                    if (!n && this._monthsParse[s].test(e))return s
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function (e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function (e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function (e) {
                return this._weekdaysMin[e.day()]
            },
            weekdaysParse: function (e) {
                var t, n, s;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)if (this._weekdaysParse[t] || (n = Yt([2e3, 1]).day(t), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[t].test(e))return t
            },
            _longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function (e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            isPM: function (e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function (e, t, n) {
                var s = this._calendar[e];
                return "function" == typeof s ? s.apply(t, [n]) : s
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function (e, t, n, s) {
                var a = this._relativeTime[n];
                return "function" == typeof a ? a(e, t, n, s) : a.replace(/%d/i, e)
            },
            pastFuture: function (e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function (e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            _ordinalParse: /\d{1,2}/,
            preparse: function (e) {
                return e
            },
            postformat: function (e) {
                return e
            },
            week: function (e) {
                return ct(e, this._week.dow, this._week.doy).week
            },
            _week: {dow: 0, doy: 6},
            _invalidDate: "Invalid date",
            invalidDate: function () {
                return this._invalidDate
            }
        }), Yt = function (e, n, s, a) {
            var r;
            return "boolean" == typeof s && (a = s, s = t), r = {}, r._isAMomentObject = !0, r._i = e, r._f = n, r._l = s, r._strict = a, r._isUTC = !1, r._pf = i(), dt(r)
        }, Yt.suppressDeprecationWarnings = !1, Yt.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), Yt.min = function () {
            var e = [].slice.call(arguments, 0);
            return ht("isBefore", e)
        }, Yt.max = function () {
            var e = [].slice.call(arguments, 0);
            return ht("isAfter", e)
        }, Yt.utc = function (e, n, s, a) {
            var r;
            return "boolean" == typeof s && (a = s, s = t), r = {}, r._isAMomentObject = !0, r._useUTC = !0, r._isUTC = !0, r._l = s, r._i = e, r._f = n, r._strict = a, r._pf = i(), dt(r).utc()
        }, Yt.unix = function (e) {
            return Yt(1e3 * e)
        }, Yt.duration = function (e, t) {
            var n, s, i, r, o = e, u = null;
            return Yt.isDuration(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (u = Ht.exec(e)) ? (n = "-" === u[1] ? -1 : 1, o = {
                y: 0,
                d: O(u[Gt]) * n,
                h: O(u[Ut]) * n,
                m: O(u[Ct]) * n,
                s: O(u[Ft]) * n,
                ms: O(u[Pt]) * n
            }) : (u = At.exec(e)) ? (n = "-" === u[1] ? -1 : 1, i = function (e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * n
            }, o = {
                y: i(u[2]),
                M: i(u[3]),
                d: i(u[4]),
                h: i(u[5]),
                m: i(u[6]),
                s: i(u[7]),
                w: i(u[8])
            }) : "object" == typeof o && ("from"in o || "to"in o) && (r = M(Yt(o.from), Yt(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), s = new f(o), Yt.isDuration(e) && a(e, "_locale") && (s._locale = e._locale), s
        }, Yt.version = kt, Yt.defaultFormat = on, Yt.ISO_8601 = function () {
        }, Yt.momentProperties = It, Yt.updateOffset = function () {
        }, Yt.relativeTimeThreshold = function (e, n) {
            return mn[e] === t ? !1 : n === t ? mn[e] : (mn[e] = n, !0)
        }, Yt.lang = o("moment.lang is deprecated. Use moment.locale instead.", function (e, t) {
            return Yt.locale(e, t)
        }), Yt.locale = function (e, t) {
            var n;
            return e && (n = "undefined" != typeof t ? Yt.defineLocale(e, t) : Yt.localeData(e), n && (Yt.duration._locale = Yt._locale = n)), Yt._locale._abbr
        }, Yt.defineLocale = function (e, t) {
            return null !== t ? (t.abbr = e, zt[e] || (zt[e] = new d), zt[e].set(t), Yt.locale(e), zt[e]) : (delete zt[e], null)
        }, Yt.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function (e) {
            return Yt.localeData(e)
        }), Yt.localeData = function (e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)return Yt._locale;
            if (!w(e)) {
                if (t = L(e))return t;
                e = [e]
            }
            return I(e)
        }, Yt.isMoment = function (e) {
            return e instanceof h || null != e && a(e, "_isAMomentObject")
        }, Yt.isDuration = function (e) {
            return e instanceof f
        };
        for (vt = Dn.length - 1; vt >= 0; --vt)T(Dn[vt]);
        Yt.normalizeUnits = function (e) {
            return b(e)
        }, Yt.invalid = function (e) {
            var t = Yt.utc(0 / 0);
            return null != e ? _(t._pf, e) : t._pf.userInvalidated = !0, t
        }, Yt.parseZone = function () {
            return Yt.apply(null, arguments).parseZone()
        }, Yt.parseTwoDigitYear = function (e) {
            return O(e) + (O(e) > 68 ? 1900 : 2e3)
        }, _(Yt.fn = h.prototype, {
            clone: function () {
                return Yt(this)
            },
            valueOf: function () {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function () {
                return Math.floor(+this / 1e3)
            },
            toString: function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function () {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function () {
                var e = Yt(this).utc();
                return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : Z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function () {
                return P(this)
            },
            isDSTShifted: function () {
                return this._a ? this.isValid() && k(this._a, (this._isUTC ? Yt.utc(this._a) : Yt(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function () {
                return _({}, this._pf)
            },
            invalidAt: function () {
                return this._pf.overflow
            },
            utc: function (e) {
                return this.zone(0, e)
            },
            local: function (e) {
                return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._dateTzOffset(), "m")), this
            },
            format: function (e) {
                var t = Z(this, e || Yt.defaultFormat);
                return this.localeData().postformat(t)
            },
            add: D(1, "add"),
            subtract: D(-1, "subtract"),
            diff: function (e, t, n) {
                var s, a, i, r = x(e, this), o = 6e4 * (this.zone() - r.zone());
                return t = b(t), "year" === t || "month" === t ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), a = 12 * (this.year() - r.year()) + (this.month() - r.month()), i = this - Yt(this).startOf("month") - (r - Yt(r).startOf("month")), i -= 6e4 * (this.zone() - Yt(this).startOf("month").zone() - (r.zone() - Yt(r).startOf("month").zone())), a += i / s, "year" === t && (a /= 12)) : (s = this - r, a = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - o) / 864e5 : "week" === t ? (s - o) / 6048e5 : s), n ? a : y(a)
            },
            from: function (e, t) {
                return Yt.duration({to: this, from: e}).locale(this.locale()).humanize(!t)
            },
            fromNow: function (e) {
                return this.from(Yt(), e)
            },
            calendar: function (e) {
                var t = e || Yt(), n = x(t, this).startOf("day"), s = this.diff(n, "days", !0), a = -6 > s ? "sameElse" : -1 > s ? "lastWeek" : 0 > s ? "lastDay" : 1 > s ? "sameDay" : 2 > s ? "nextDay" : 7 > s ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(a, this, Yt(t)))
            },
            isLeapYear: function () {
                return C(this.year())
            },
            isDST: function () {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function (e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = rt(e, this.localeData()), this.add(e - t, "d")) : t
            },
            month: yt("Month", !0),
            startOf: function (e) {
                switch (e = b(e)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function (e) {
                return e = b(e), e === t || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
            },
            isAfter: function (e, t) {
                var n;
                return t = b("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Yt.isMoment(e) ? e : Yt(e), +this > +e) : (n = Yt.isMoment(e) ? +e : +Yt(e), n < +this.clone().startOf(t))
            },
            isBefore: function (e, t) {
                var n;
                return t = b("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Yt.isMoment(e) ? e : Yt(e), +e > +this) : (n = Yt.isMoment(e) ? +e : +Yt(e), +this.clone().endOf(t) < n)
            },
            isSame: function (e, t) {
                var n;
                return t = b(t || "millisecond"), "millisecond" === t ? (e = Yt.isMoment(e) ? e : Yt(e), +this === +e) : (n = +Yt(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            },
            min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (e) {
                return e = Yt.apply(null, arguments), this > e ? this : e
            }),
            max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (e) {
                return e = Yt.apply(null, arguments), e > this ? this : e
            }),
            zone: function (e, t) {
                var n, s = this._offset || 0;
                return null == e ? this._isUTC ? s : this._dateTzOffset() : ("string" == typeof e && (e = N(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateTzOffset()), this._offset = e, this._isUTC = !0, null != n && this.subtract(n, "m"), s !== e && (!t || this._changeInProgress ? Y(this, Yt.duration(s - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, Yt.updateOffset(this, !0), this._changeInProgress = null)), this)
            },
            zoneAbbr: function () {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function () {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function (e) {
                return e = e ? Yt(e).zone() : 0, (this.zone() - e) % 60 === 0
            },
            daysInMonth: function () {
                return W(this.year(), this.month())
            },
            dayOfYear: function (e) {
                var t = St((Yt(this).startOf("day") - Yt(this).startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            },
            quarter: function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            },
            weekYear: function (e) {
                var t = ct(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == e ? t : this.add(e - t, "y")
            },
            isoWeekYear: function (e) {
                var t = ct(this, 1, 4).year;
                return null == e ? t : this.add(e - t, "y")
            },
            week: function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            isoWeek: function (e) {
                var t = ct(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            weekday: function (e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            },
            isoWeekday: function (e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            },
            isoWeeksInYear: function () {
                return G(this.year(), 1, 4)
            },
            weeksInYear: function () {
                var e = this.localeData()._week;
                return G(this.year(), e.dow, e.doy)
            },
            get: function (e) {
                return e = b(e), this[e]()
            },
            set: function (e, t) {
                return e = b(e), "function" == typeof this[e] && this[e](t), this
            },
            locale: function (e) {
                var n;
                return e === t ? this._locale._abbr : (n = Yt.localeData(e), null != n && (this._locale = n), this)
            },
            lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                return e === t ? this.localeData() : this.locale(e)
            }),
            localeData: function () {
                return this._locale
            },
            _dateTzOffset: function () {
                return 15 * Math.round(this._d.getTimezoneOffset() / 15)
            }
        }), Yt.fn.millisecond = Yt.fn.milliseconds = yt("Milliseconds", !1), Yt.fn.second = Yt.fn.seconds = yt("Seconds", !1), Yt.fn.minute = Yt.fn.minutes = yt("Minutes", !1), Yt.fn.hour = Yt.fn.hours = yt("Hours", !0), Yt.fn.date = yt("Date", !0), Yt.fn.dates = o("dates accessor is deprecated. Use date instead.", yt("Date", !0)), Yt.fn.year = yt("FullYear", !0), Yt.fn.years = o("years accessor is deprecated. Use year instead.", yt("FullYear", !0)), Yt.fn.days = Yt.fn.day, Yt.fn.months = Yt.fn.month, Yt.fn.weeks = Yt.fn.week, Yt.fn.isoWeeks = Yt.fn.isoWeek, Yt.fn.quarters = Yt.fn.quarter, Yt.fn.toJSON = Yt.fn.toISOString, _(Yt.duration.fn = f.prototype, {
            _bubble: function () {
                var e, t, n, s = this._milliseconds, a = this._days, i = this._months, r = this._data, o = 0;
                r.milliseconds = s % 1e3, e = y(s / 1e3), r.seconds = e % 60, t = y(e / 60), r.minutes = t % 60, n = y(t / 60), r.hours = n % 24, a += y(n / 24), o = y(pt(a)), a -= y(gt(o)), i += y(a / 30), a %= 30, o += y(i / 12), i %= 12, r.days = a, r.months = i, r.years = o
            },
            abs: function () {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function () {
                return y(this.days() / 7)
            },
            valueOf: function () {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * O(this._months / 12)
            },
            humanize: function (e) {
                var t = ut(this, !e, this.localeData());
                return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
            },
            add: function (e, t) {
                var n = Yt.duration(e, t);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function (e, t) {
                var n = Yt.duration(e, t);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function (e) {
                return e = b(e), this[e.toLowerCase() + "s"]()
            },
            as: function (e) {
                var t, n;
                if (e = b(e), "month" === e || "year" === e)return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * pt(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(gt(this._months / 12)), e) {
                    case"week":
                        return t / 7 + this._milliseconds / 6048e5;
                    case"day":
                        return t + this._milliseconds / 864e5;
                    case"hour":
                        return 24 * t + this._milliseconds / 36e5;
                    case"minute":
                        return 24 * t * 60 + this._milliseconds / 6e4;
                    case"second":
                        return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                    case"millisecond":
                        return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            },
            lang: Yt.fn.lang,
            locale: Yt.fn.locale,
            toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
                return this.toISOString()
            }),
            toISOString: function () {
                var e = Math.abs(this.years()), t = Math.abs(this.months()), n = Math.abs(this.days()), s = Math.abs(this.hours()), a = Math.abs(this.minutes()), i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (s || a || i ? "T" : "") + (s ? s + "H" : "") + (a ? a + "M" : "") + (i ? i + "S" : "") : "P0D"
            },
            localeData: function () {
                return this._locale
            }
        }), Yt.duration.fn.toString = Yt.duration.fn.toISOString;
        for (vt in dn)a(dn, vt) && Mt(vt.toLowerCase());
        Yt.duration.fn.asMilliseconds = function () {
            return this.as("ms")
        }, Yt.duration.fn.asSeconds = function () {
            return this.as("s")
        }, Yt.duration.fn.asMinutes = function () {
            return this.as("m")
        }, Yt.duration.fn.asHours = function () {
            return this.as("h")
        }, Yt.duration.fn.asDays = function () {
            return this.as("d")
        }, Yt.duration.fn.asWeeks = function () {
            return this.as("weeks")
        }, Yt.duration.fn.asMonths = function () {
            return this.as("M")
        }, Yt.duration.fn.asYears = function () {
            return this.as("y")
        }, Yt.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
                var t = e % 10, n = 1 === O(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), Lt ? n.exports = Yt : "function" == typeof define && define.amd ? (define("moment", function (e, t, n) {
            return n.config && n.config() && n.config().noGlobal === !0 && (bt.moment = wt), Yt
        }), Dt(!0)) : Dt()
    }).call(this)
});
;
define("common:widget/underscore/1.6.0/underscore.js", function (n, t, r) {
    (function () {
        var n = this, e = n._, u = {}, i = Array.prototype, a = Object.prototype, o = Function.prototype, c = i.push, l = i.slice, f = i.concat, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, g = Object.keys, v = o.bind, m = function (n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
        };
        "undefined" != typeof t ? ("undefined" != typeof r && r.exports && (t = r.exports = m), t._ = m) : n._ = m, m.VERSION = "1.6.0", m.each = m.forEach = function (n, t, r) {
            if (null == n)return n;
            if (n.length === +n.length) {
                for (var e = 0, i = n.length; i > e; e++)if (t.call(r, n[e], e, n) === u)return
            } else for (var a = m.keys(n), e = 0, i = a.length; i > e; e++)if (t.call(r, n[a[e]], a[e], n) === u)return;
            return n
        }, m.map = m.collect = function (n, t, r) {
            var e = [];
            return null == n ? e : (m.each(n, function (n, u, i) {
                e.push(t.call(r, n, u, i))
            }), e)
        };
        var y = "Reduce of empty array with no initial value";
        m.reduce = m.foldl = m.inject = function (n, t, r, e) {
            var u = arguments.length > 2;
            if (null == n && (n = []), m.each(n, function (n, i, a) {
                    u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
                }), !u)throw new TypeError(y);
            return r
        }, m.reduceRight = m.foldr = function (n, t, r, e) {
            var u = arguments.length > 2;
            null == n && (n = []);
            var i = n.length;
            if (i !== +i) {
                var a = m.keys(n);
                i = a.length
            }
            if (m.each(n, function (o, c, l) {
                    c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
                }), !u)throw new TypeError(y);
            return r
        }, m.find = m.detect = function (n, t, r) {
            var e;
            return m.some(n, function (n, u, i) {
                return t.call(r, n, u, i) ? (e = n, !0) : void 0
            }), e
        }, m.filter = m.select = function (n, t, r) {
            var e = [];
            return null == n ? e : (m.each(n, function (n, u, i) {
                t.call(r, n, u, i) && e.push(n)
            }), e)
        }, m.reject = function (n, t, r) {
            return m.filter(n, m.negate(t), r)
        }, m.every = m.all = function (n, t, r) {
            t || (t = m.identity);
            var e = !0;
            return null == n ? e : (m.each(n, function (n, i, a) {
                return (e = e && t.call(r, n, i, a)) ? void 0 : u
            }), !!e)
        }, m.some = m.any = function (n, t, r) {
            t || (t = m.identity);
            var e = !1;
            return null == n ? e : (m.each(n, function (n, i, a) {
                return e || (e = t.call(r, n, i, a)) ? u : void 0
            }), !!e)
        }, m.contains = m.include = function (n, t) {
            return null == n ? !1 : n.length === +n.length ? m.indexOf(n, t) >= 0 : m.some(n, function (n) {
                return n === t
            })
        }, m.invoke = function (n, t) {
            var r = l.call(arguments, 2), e = m.isFunction(t);
            return m.map(n, function (n) {
                return (e ? t : n[t]).apply(n, r)
            })
        }, m.pluck = function (n, t) {
            return m.map(n, m.property(t))
        }, m.where = function (n, t) {
            return m.filter(n, m.matches(t))
        }, m.findWhere = function (n, t) {
            return m.find(n, m.matches(t))
        }, m.max = function (n, t, r) {
            var e, u, i = -1 / 0, a = -1 / 0;
            if (!t && m.isArray(n))for (var o = 0, c = n.length; c > o; o++)e = n[o], e > i && (i = e); else m.each(n, function (n, e, o) {
                u = t ? t.call(r, n, e, o) : n, (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u)
            });
            return i
        }, m.min = function (n, t, r) {
            var e, u, i = 1 / 0, a = 1 / 0;
            if (!t && m.isArray(n))for (var o = 0, c = n.length; c > o; o++)e = n[o], i > e && (i = e); else m.each(n, function (n, e, o) {
                u = t ? t.call(r, n, e, o) : n, (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u)
            });
            return i
        }, m.shuffle = function (n) {
            var t, r = 0, e = [];
            return m.each(n, function (n) {
                t = m.random(r++), e[r - 1] = e[t], e[t] = n
            }), e
        }, m.sample = function (n, t, r) {
            return null == t || r ? (n.length !== +n.length && (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
        };
        var d = function (n, t) {
            return null == n ? m.identity : m.isFunction(n) ? t ? function () {
                return n.apply(t, arguments)
            } : n : m.property(n)
        };
        m.sortBy = function (n, t, r) {
            return t = d(t, r), m.pluck(m.map(n, function (n, r, e) {
                return {value: n, index: r, criteria: t(n, r, e)}
            }).sort(function (n, t) {
                var r = n.criteria, e = t.criteria;
                if (r !== e) {
                    if (r > e || void 0 === r)return 1;
                    if (e > r || void 0 === e)return -1
                }
                return n.index - t.index
            }), "value")
        };
        var b = function (n) {
            return function (t, r, e) {
                var u = {};
                return r = d(r, e), m.each(t, function (e, i) {
                    var a = r(e, i, t);
                    n(u, e, a)
                }), u
            }
        };
        m.groupBy = b(function (n, t, r) {
            m.has(n, r) ? n[r].push(t) : n[r] = [t]
        }), m.indexBy = b(function (n, t, r) {
            n[r] = t
        }), m.countBy = b(function (n, t, r) {
            m.has(n, r) ? n[r]++ : n[r] = 1
        }), m.sortedIndex = function (n, t, r, e) {
            r = d(r, e);
            for (var u = r(t), i = 0, a = n.length; a > i;) {
                var o = i + a >>> 1;
                r(n[o]) < u ? i = o + 1 : a = o
            }
            return i
        }, m.toArray = function (n) {
            return n ? m.isArray(n) ? l.call(n) : n.length === +n.length ? m.map(n, m.identity) : m.values(n) : []
        }, m.size = function (n) {
            return null == n ? 0 : n.length === +n.length ? n.length : m.keys(n).length
        }, m.first = m.head = m.take = function (n, t, r) {
            return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : l.call(n, 0, t)
        }, m.initial = function (n, t, r) {
            return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
        }, m.last = function (n, t, r) {
            return null == n ? void 0 : null == t || r ? n[n.length - 1] : l.call(n, Math.max(n.length - t, 0))
        }, m.rest = m.tail = m.drop = function (n, t, r) {
            return l.call(n, null == t || r ? 1 : t)
        }, m.compact = function (n) {
            return m.filter(n, m.identity)
        };
        var w = function (n, t, r, e) {
            if (t && m.every(n, m.isArray))return f.apply(e, n);
            for (var u = 0, i = n.length; i > u; u++) {
                var a = n[u];
                m.isArray(a) || m.isArguments(a) ? t ? c.apply(e, a) : w(a, t, r, e) : r || e.push(a)
            }
            return e
        };
        m.flatten = function (n, t) {
            return w(n, t, !1, [])
        }, m.without = function (n) {
            return m.difference(n, l.call(arguments, 1))
        }, m.partition = function (n, t, r) {
            t = d(t, r);
            var e = [], u = [];
            return m.each(n, function (n, r, i) {
                (t(n, r, i) ? e : u).push(n)
            }), [e, u]
        }, m.uniq = m.unique = function (n, t, r, e) {
            if (null == n)return [];
            m.isFunction(t) && (e = r, r = t, t = !1);
            for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
                var c = n[a];
                r && (c = r.call(e, c, a, n)), (t ? a && i === c : m.contains(i, c)) || (t ? i = c : i.push(c), u.push(n[a]))
            }
            return u
        }, m.union = function () {
            return m.uniq(w(arguments, !0, !0, []))
        }, m.intersection = function (n) {
            if (null == n)return [];
            for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
                var i = n[e];
                if (!m.contains(t, i)) {
                    for (var a = 1; r > a && m.contains(arguments[a], i); a++);
                    a === r && t.push(i)
                }
            }
            return t
        }, m.difference = function (n) {
            var t = w(l.call(arguments, 1), !0, !0, []);
            return m.filter(n, function (n) {
                return !m.contains(t, n)
            })
        }, m.zip = function () {
            for (var n = m.max(m.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++)t[r] = m.pluck(arguments, "" + r);
            return t
        }, m.object = function (n, t) {
            if (null == n)return {};
            for (var r = {}, e = 0, u = n.length; u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
            return r
        }, m.indexOf = function (n, t, r) {
            if (null == n)return -1;
            var e = 0, u = n.length;
            if (r) {
                if ("number" != typeof r)return e = m.sortedIndex(n, t), n[e] === t ? e : -1;
                e = 0 > r ? Math.max(0, u + r) : r
            }
            for (; u > e; e++)if (n[e] === t)return e;
            return -1
        }, m.lastIndexOf = function (n, t, r) {
            if (null == n)return -1;
            for (var e = null == r ? n.length : r; e--;)if (n[e] === t)return e;
            return -1
        }, m.range = function (n, t, r) {
            arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
            for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;)i[u++] = n, n += r;
            return i
        };
        var _ = function () {
        };
        m.bind = function (n, t) {
            var r, e;
            if (v && n.bind === v)return v.apply(n, l.call(arguments, 1));
            if (!m.isFunction(n))throw new TypeError("Bind must be called on a function");
            return r = l.call(arguments, 2), e = function () {
                if (!(this instanceof e))return n.apply(t, r.concat(l.call(arguments)));
                _.prototype = n.prototype;
                var u = new _;
                _.prototype = null;
                var i = n.apply(u, r.concat(l.call(arguments)));
                return Object(i) === i ? i : u
            }
        }, m.partial = function (n) {
            var t = l.call(arguments, 1);
            return function () {
                for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++)e[u] === m && (e[u] = arguments[r++]);
                for (; r < arguments.length;)e.push(arguments[r++]);
                return n.apply(this, e)
            }
        }, m.bindAll = function (n) {
            var t = l.call(arguments, 1);
            if (0 === t.length)throw new Error("bindAll must be passed function names");
            return m.each(t, function (t) {
                n[t] = m.bind(n[t], n)
            }), n
        }, m.memoize = function (n, t) {
            var r = {};
            return t || (t = m.identity), function () {
                var e = t.apply(this, arguments);
                return m.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
            }
        }, m.delay = function (n, t) {
            var r = l.call(arguments, 2);
            return setTimeout(function () {
                return n.apply(null, r)
            }, t)
        }, m.defer = function (n) {
            return m.delay.apply(m, [n, 1].concat(l.call(arguments, 1)))
        }, m.throttle = function (n, t, r) {
            var e, u, i, a = null, o = 0;
            r || (r = {});
            var c = function () {
                o = r.leading === !1 ? 0 : m.now(), a = null, i = n.apply(e, u), e = u = null
            };
            return function () {
                var l = m.now();
                o || r.leading !== !1 || (o = l);
                var f = t - (l - o);
                return e = this, u = arguments, 0 >= f || f > t ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u), e = u = null) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
            }
        }, m.debounce = function (n, t, r) {
            var e, u, i, a, o, c = function () {
                var l = m.now() - a;
                t > l && l > 0 ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u), i = u = null))
            };
            return function () {
                i = this, u = arguments, a = m.now();
                var l = r && !e;
                return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u), i = u = null), o
            }
        }, m.once = function (n) {
            var t, r = !1;
            return function () {
                return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
            }
        }, m.wrap = function (n, t) {
            return m.partial(t, n)
        }, m.negate = function (n) {
            return function () {
                return !n.apply(this, arguments)
            }
        }, m.compose = function () {
            var n = arguments;
            return function () {
                for (var t = arguments, r = n.length - 1; r >= 0; r--)t = [n[r].apply(this, t)];
                return t[0]
            }
        }, m.after = function (n, t) {
            return function () {
                return --n < 1 ? t.apply(this, arguments) : void 0
            }
        }, m.keys = function (n) {
            if (!m.isObject(n))return [];
            if (g)return g(n);
            var t = [];
            for (var r in n)m.has(n, r) && t.push(r);
            return t
        }, m.values = function (n) {
            for (var t = m.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)e[u] = n[t[u]];
            return e
        }, m.pairs = function (n) {
            for (var t = m.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]];
            return e
        }, m.invert = function (n) {
            for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e];
            return t
        }, m.functions = m.methods = function (n) {
            var t = [];
            for (var r in n)m.isFunction(n[r]) && t.push(r);
            return t.sort()
        }, m.extend = function (n) {
            return m.isObject(n) ? (m.each(l.call(arguments, 1), function (t) {
                for (var r in t)n[r] = t[r]
            }), n) : n
        }, m.pick = function (n, t, r) {
            var e = {};
            if (m.isFunction(t))for (var u in n) {
                var i = n[u];
                t.call(r, i, u, n) && (e[u] = i)
            } else for (var a = f.apply([], l.call(arguments, 1)), o = 0, c = a.length; c > o; o++) {
                var u = a[o];
                u in n && (e[u] = n[u])
            }
            return e
        }, m.omit = function (n, t, r) {
            var e;
            return m.isFunction(t) ? t = m.negate(t) : (e = m.map(f.apply([], l.call(arguments, 1)), String), t = function (n, t) {
                return !m.contains(e, t)
            }), m.pick(n, t, r)
        }, m.defaults = function (n) {
            return m.isObject(n) ? (m.each(l.call(arguments, 1), function (t) {
                for (var r in t)void 0 === n[r] && (n[r] = t[r])
            }), n) : n
        }, m.clone = function (n) {
            return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
        }, m.tap = function (n, t) {
            return t(n), n
        };
        var j = function (n, t, r, e) {
            if (n === t)return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t)return n === t;
            n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
            var u = s.call(n);
            if (u != s.call(t))return !1;
            switch (u) {
                case"[object String]":
                    return n == String(t);
                case"[object Number]":
                    return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                case"[object Date]":
                case"[object Boolean]":
                    return +n == +t;
                case"[object RegExp]":
                    return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof n || "object" != typeof t)return !1;
            for (var i = r.length; i--;)if (r[i] == n)return e[i] == t;
            var a = n.constructor, o = t.constructor;
            if (a !== o && !(m.isFunction(a) && a instanceof a && m.isFunction(o) && o instanceof o) && "constructor"in n && "constructor"in t)return !1;
            r.push(n), e.push(t);
            var c = 0, l = !0;
            if ("[object Array]" == u) {
                if (c = n.length, l = c == t.length)for (; c-- && (l = j(n[c], t[c], r, e)););
            } else {
                for (var f in n)if (m.has(n, f) && (c++, !(l = m.has(t, f) && j(n[f], t[f], r, e))))break;
                if (l) {
                    for (f in t)if (m.has(t, f) && !c--)break;
                    l = !c
                }
            }
            return r.pop(), e.pop(), l
        };
        m.isEqual = function (n, t) {
            return j(n, t, [], [])
        }, m.isEmpty = function (n) {
            if (null == n)return !0;
            if (m.isArray(n) || m.isString(n) || m.isArguments(n))return 0 === n.length;
            for (var t in n)if (m.has(n, t))return !1;
            return !0
        }, m.isElement = function (n) {
            return !(!n || 1 !== n.nodeType)
        }, m.isArray = h || function (n) {
                return "[object Array]" == s.call(n)
            }, m.isObject = function (n) {
            return n === Object(n)
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) {
            m["is" + n] = function (t) {
                return s.call(t) == "[object " + n + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function (n) {
            return !(!n || !m.has(n, "callee"))
        }), "function" != typeof/./ && (m.isFunction = function (n) {
            return "function" == typeof n
        }), m.isFinite = function (n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        }, m.isNaN = function (n) {
            return m.isNumber(n) && n != +n
        }, m.isBoolean = function (n) {
            return n === !0 || n === !1 || "[object Boolean]" == s.call(n)
        }, m.isNull = function (n) {
            return null === n
        }, m.isUndefined = function (n) {
            return void 0 === n
        }, m.has = function (n, t) {
            return p.call(n, t)
        }, m.noConflict = function () {
            return n._ = e, this
        }, m.identity = function (n) {
            return n
        }, m.constant = function (n) {
            return function () {
                return n
            }
        }, m.noop = function () {
        }, m.property = function (n) {
            return function (t) {
                return t[n]
            }
        }, m.matches = function (n) {
            return function (t) {
                if (null == t)return m.isEmpty(n);
                if (t === n)return !0;
                for (var r in n)if (n[r] !== t[r])return !1;
                return !0
            }
        }, m.times = function (n, t, r) {
            for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)e[u] = t.call(r, u);
            return e
        }, m.random = function (n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        }, m.now = Date.now || function () {
                return (new Date).getTime()
            };
        var x = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
        x.unescape = m.invert(x.escape);
        var A = {
            escape: new RegExp("[" + m.keys(x.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + m.keys(x.unescape).join("|") + ")", "g")
        };
        m.each(["escape", "unescape"], function (n) {
            m[n] = function (t) {
                return null == t ? "" : ("" + t).replace(A[n], function (t) {
                    return x[n][t]
                })
            }
        }), m.result = function (n, t) {
            if (null == n)return void 0;
            var r = n[t];
            return m.isFunction(r) ? n[t]() : r
        }, m.mixin = function (n) {
            m.each(m.functions(n), function (t) {
                var r = m[t] = n[t];
                m.prototype[t] = function () {
                    var n = [this._wrapped];
                    return c.apply(n, arguments), T.call(this, r.apply(m, n))
                }
            })
        };
        var k = 0;
        m.uniqueId = function (n) {
            var t = ++k + "";
            return n ? n + t : t
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var F = /(.)^/, E = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, O = /\\|'|\r|\n|\u2028|\u2029/g, S = function (n) {
            return "\\" + E[n]
        };
        m.template = function (n, t, r) {
            r = m.defaults({}, r, m.templateSettings);
            var e = new RegExp([(r.escape || F).source, (r.interpolate || F).source, (r.evaluate || F).source].join("|") + "|$", "g"), u = 0, i = "__p+='";
            n.replace(e, function (t, r, e, a, o) {
                return i += n.slice(u, o).replace(O, S), u = o + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"), t
            }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var a = new Function(r.variable || "obj", "_", i)
            } catch (o) {
                throw o.source = i, o
            }
            if (t)return a(t, m);
            var c = function (n) {
                return a.call(this, n, m)
            }, l = r.variable || "obj";
            return c.source = "function(" + l + "){\n" + i + "}", c
        }, m.chain = function (n) {
            return m(n).chain()
        };
        var T = function (n) {
            return this._chain ? m(n).chain() : n
        };
        m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
            var t = i[n];
            m.prototype[n] = function () {
                var r = this._wrapped;
                return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], T.call(this, r)
            }
        }), m.each(["concat", "join", "slice"], function (n) {
            var t = i[n];
            m.prototype[n] = function () {
                return T.call(this, t.apply(this._wrapped, arguments))
            }
        }), m.extend(m.prototype, {
            chain: function () {
                return this._chain = !0, this
            }, value: function () {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function () {
            return m
        })
    }).call(this)
});
;
define("common:widget/my-util/my-util.js", function (t, e, n) {
    $ = t("common:widget/jquery/1.11.3/jquery.js");
    var r = {};
    r.serializeNodes = function (t, e, n) {
        t = $(t).find("input,option,textarea").andSelf();
        var r, o = {};
        "string" == typeof e ? (r = e, e = function (t) {
            return t.join(r)
        }) : null == e && (e = function (t) {
            return (t.length > 1 ? t : t[0]) || ""
        });
        for (var a = 0; a <= t.length; a++)if ("object" == typeof t[a] && "value"in t[a]) {
            var i = t[a].name;
            "OPTION" == t[a].tagName && (i = $(t[a]).closest("select").attr("name")), i && (o[i] = o[i] || [], (n || "OPTION" != t[a].tagName && "checkbox" != t[a].type && "radio" != t[a].type || t[a].checked || t[a].selected) && o[i].push(t[a].value.trim()))
        }
        if ("function" == typeof e)for (var a in o)o[a] = e(o[a]);
        return o
    }, r.requestOperate = function (t, e, n, r, o) {
        return $.ajax({url: t, type: "post", dataType: "json", data: e}).done(function (t) {
            0 == t.code ? t.redirect.need ? "!refresh" == t.redirect.url ? location.reload() : location.href = t.redirect.url : n && n(t) : r && r()
        }).fail(function (t) {
            var e = t.responseText, n = JSON.parse(e);
            alert(n.msg), o && o()
        })
    }, r.create = function () {
        function t(t) {
            this.constructor = t || this.constructor
        }

        return function (e, n) {
            var r = null;
            return t.prototype = e, r = new t(n)
        }
    }(), r.requestUserAuth = function () {
        window.location.href = window.location.href.replace(/(.*?)\/?(?:[?#].*)?$/, "$1/auth")
    }, r.trim = function (t) {
        for (var e = -1, n = t.length, r = /\s/; r.test(t.charAt(++e)););
        for (; n > e && r.test(t.charAt(--n)););
        return t.slice(e, n + 1)
    }, r.getParames = function () {
        var t, e, n, r, o, a = {};
        t = location.search.length > 0 ? location.search.substring(1) : null, e = t ? t.split("&") : "";
        for (var i = 0, c = e.length; c > i; i++)n = e[i].split("="), r = decodeURIComponent(n[0]), o = decodeURIComponent(n[1]), r.length > 0 && (a[r] = o);
        return a
    }, r.random = function (t, e) {
        var n = e - t;
        return Math.floor(Math.random() * n + t)
    }, window.myUtil = r, n.exports = r
});
;
define("common:widget/wzcl/wzcl.js", function (t, r) {
    var e = t("common:widget/jquery/1.11.3/jquery.js"), n = r, o = Object.prototype.hasOwnProperty;
    n.data = function () {
        function t() {
            r = {};
            var t = e('script[data-id^="wzcl.data"]');
            t.each(function () {
                var t = e(this), n = t.attr("data-id").replace(/^wzcl\.data\.?/i, "").replace(/\./g, "-");
                try {
                    r[n] = e.parseJSON(t.text() || this.text)
                } catch (o) {
                }
            })
        }

        var r = null;
        return {
            get: function (e) {
                if (e) {
                    r || t();
                    for (var n = e.split("."), i = r, a = void 0, c = void 0; a = n.shift();) {
                        if (!o.call(i, a)) {
                            c = void 0;
                            break
                        }
                        i = i[a], c = i
                    }
                    return c
                }
            }
        }
    }(), n.Api = function () {
        function t(t, n, o, i, a) {
            return e.ajax({
                type: t, url: n, data: o, dataType: "json", complete: function () {
                }, success: function (t) {
                    0 == t.code ? (i && i(t), t.redirect && t.redirect.need && !a && ("!refresh" == t.redirect.url ? location.reload() : location.href = t.redirect.url)) : (t.msg = r[t.code] || t.msg.toString(), alert(t.msg))
                }
            }).done(function (t) {
                t && (t.msg = r[t.code] || t.msg.toString())
            })
        }

        var r = {3001: "您的学习币余额不足, 请充值!"};
        return {
            get: function (r, e, n, o) {
                return t("get", r, e, n, o)
            }, post: function (r, e, n, o) {
                return t("post", r, e, n, o)
            }
        }
    }(), n.utils = function () {
        var t = {};
        return t.parseUrlQuery = function (t) {
            var r = t.match(/[^?#]*(?=$|#)/)[0];
            if (!r)return {};
            for (var e = {}, n = 0, o = r.split("&"), i = o.length; i > n; n++) {
                var a = o[n], c = a.indexOf("="), u = a.substr(0, c), d = a.substr(c + 1);
                e[decodeURIComponent(u)] = decodeURIComponent(d)
            }
            return e
        }, t
    }()
});
;
define("common:widget/x-wzcl-player/index.js", function (e) {
    function t(e) {
        return e = parseInt(e, 10), e >= 10 ? e : "0" + e
    }

    function a(e) {
        e = e || 0;
        var a = Math.floor(e / 3600), o = Math.floor(e / 60);
        return e -= 60 * o, a >= 1 ? (o -= 60 * a, a + ":" + t(o) + ":" + t(e)) : t(o) + ":" + t(e)
    }

    {
        var o = e("common:widget/jquery/1.11.3/jquery.js");
        e("common:widget/my-util/my-util.js")
    }
    window.jQuery = o, e("common:widget/x-wzcl-player/libs/flowplayer-5.5.2/flowplayer.js");
    {
        var i = {
            swf: "/static/common/widget/x-wzcl-player/libs/flowplayer-5.5.2/flowplayer_a57cda7.swf",
            ratio: .75
        }, n = {4: '<div class="load-fail">   <img src="/static/common/widget/x-wzcl-player/no_c2c3370.gif">   <h2>纳尼，我也不知道发生了什么！</h2>   <a href="javascript:;" class="retry-btn">重 试</a></div>'};
        Object.prototype.hasOwnProperty
    }
    jQuery.fn.zmPlayer = function (e, t) {
        function r(e) {
            s.css("left", e - s.width() / 2), s.time.html(a(parseInt(e / f.width() * d.video.duration)))
        }

        var l = o(this), d = l.data("zmPlayer.api");
        if (d && d.resumeTimer && clearTimeout(d.resumeTimer), d)return decodeURI(d.video.src) === e ? (d.load.ed = !0, d.play()) : d.play(e), d;
        if (!e)return d || l;
        l.find(".placeholder").remove(), d = l.flowplayer(o.extend({
            autoplay: "none",
            muted: !1,
            playlist: [[{mp4: e}, {flash: e}]]
        }, i, t)).data("flowplayer"), l.data("zmPlayer.api", d), l.find("video").on("canplaythrough", function () {
            d.paused || (d.load.ed = !0, setTimeout(function () {
                d.paused || d.play()
            }, 500))
        }), d.bind("error", function (e, t, a) {
            4 === a.code && (l.find(".fp-message").html(n[a.code]), l.find(".fp-message .retry-btn").on("click", function () {
                d.trigger("retry")
            }))
        });
        var f = l.find(".fp-controls .fp-timeline"), s = o('<div class="fp-flag"><b class="val">00:00</b><i></i></div>').appendTo(f), c = f.find(".fp-progress");
        s.time = s.find(".val"), f.on("mousemove", function (e) {
            return o(e.target).closest(".fp-flag").length || e.target === s[0] ? void e.stopPropagation() : void r(e.offsetX || e.clientX - f.offset().left)
        }), o(document).on("mousemove", function () {
            f.hasClass("is-dragging") && r(c.width())
        });
        var m = null;
        return m = l.find("video"), m.length && m.one("canplay canplaythrough", function () {
            this.play()
        }), d
    }
});