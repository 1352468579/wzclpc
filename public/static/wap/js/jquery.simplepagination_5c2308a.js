define("desktop:widget/simplePagination/jquery.simplePagination.js", function () {
    !function (e) {
        var a = {
            init: function (t) {
                var s = e.extend({
                    items: 1,
                    itemsOnPage: 1,
                    pages: 0,
                    displayedPages: 5,
                    edges: 2,
                    currentPage: 0,
                    hrefTextPrefix: "#page-",
                    hrefTextSuffix: "",
                    prevText: "Prev",
                    nextText: "Next",
                    ellipseText: "&hellip;",
                    ellipsePageSet: !0,
                    cssStyle: "light-theme",
                    listStyle: "",
                    labelMap: [],
                    selectOnClick: !0,
                    nextAtFront: !1,
                    invertPageOrder: !1,
                    useStartEdge: !0,
                    useEndEdge: !0,
                    hasFirEndBtn: !1,
                    onPageClick: function () {
                    },
                    onInit: function () {
                    }
                }, t || {}), n = this;
                return s.pages = s.pages ? s.pages : Math.ceil(s.items / s.itemsOnPage) ? Math.ceil(s.items / s.itemsOnPage) : 1, s.currentPage = s.currentPage ? s.currentPage - 1 : s.invertPageOrder ? s.pages - 1 : 0, s.halfDisplayed = s.displayedPages / 2, this.each(function () {
                    n.addClass(s.cssStyle + " simple-pagination").data("pagination", s), a._draw.call(n)
                }), s.onInit(), this
            }, selectPage: function (e, t) {
                return a._selectPage.call(this, e - 1, t), this
            }, prevPage: function () {
                var e = this.data("pagination");
                return e.invertPageOrder ? e.currentPage < e.pages - 1 && a._selectPage.call(this, e.currentPage + 1) : e.currentPage > 0 && a._selectPage.call(this, e.currentPage - 1), this
            }, nextPage: function () {
                var e = this.data("pagination");
                return e.invertPageOrder ? e.currentPage > 0 && a._selectPage.call(this, e.currentPage - 1) : e.currentPage < e.pages - 1 && a._selectPage.call(this, e.currentPage + 1), this
            }, getPagesCount: function () {
                return this.data("pagination").pages
            }, setPagesCount: function (e) {
                this.data("pagination").pages = e
            }, getCurrentPage: function () {
                return this.data("pagination").currentPage + 1
            }, destroy: function () {
                return this.empty(), this
            }, drawPage: function (e) {
                var t = this.data("pagination");
                return t.currentPage = e - 1, this.data("pagination", t), a._draw.call(this), this
            }, redraw: function () {
                return a._draw.call(this), this
            }, disable: function () {
                var e = this.data("pagination");
                return e.disabled = !0, this.data("pagination", e), a._draw.call(this), this
            }, enable: function () {
                var e = this.data("pagination");
                return e.disabled = !1, this.data("pagination", e), a._draw.call(this), this
            }, updateItems: function (e) {
                var t = this.data("pagination");
                t.items = e, t.pages = a._getPages(t), this.data("pagination", t), a._draw.call(this)
            }, updateItemsOnPage: function (e) {
                var t = this.data("pagination");
                return t.itemsOnPage = e, t.pages = a._getPages(t), this.data("pagination", t), a._selectPage.call(this, 0), this
            }, getItemsOnPage: function () {
                return this.data("pagination").itemsOnPage
            }, _draw: function () {
                var t, s, n, i, l = this.data("pagination"), r = a._getInterval(l), p = this;
                a.destroy.call(this), s = "function" == typeof this.prop ? this.prop("tagName") : this.attr("tagName");
                var g = "UL" === s ? this : e("<ul" + (l.listStyle ? ' class="' + l.listStyle + '"' : "") + "></ul>").appendTo(this);
                if (l.prevText && a._appendItem.call(this, l.invertPageOrder ? l.currentPage + 1 : l.currentPage - 1, {
                    text: l.prevText,
                    classes: "prev"
                }), l.nextText && l.nextAtFront && a._appendItem.call(this, l.invertPageOrder ? l.currentPage - 1 : l.currentPage + 1, {
                    text: l.nextText,
                    classes: "next"
                }), l.invertPageOrder) {
                    if (r.end < l.pages && l.edges > 0) {
                        if (l.useStartEdge) {
                            var d = Math.max(l.pages - l.edges, r.end);
                            for (t = l.pages - 1; t >= d; t--) a._appendItem.call(this, t)
                        }
                        l.pages - l.edges > r.end && l.pages - l.edges - r.end != 1 ? g.append('<li class="disabled"><span class="ellipse">' + l.ellipseText + "</span></li>") : l.pages - l.edges - r.end == 1 && a._appendItem.call(this, r.end)
                    }
                } else if (r.start > 0 && l.edges > 0) {
                    if (l.useStartEdge) {
                        var c = Math.min(l.edges, r.start);
                        for (t = 0; c > t; t++) a._appendItem.call(this, t)
                    }
                    l.edges < r.start && r.start - l.edges != 1 ? g.append('<li class="disabled"><span class="ellipse">' + l.ellipseText + "</span></li>") : r.start - l.edges == 1 && a._appendItem.call(this, l.edges)
                }
                if (l.invertPageOrder) for (t = r.end - 1; t >= r.start; t--) a._appendItem.call(this, t); else for (t = r.start; t < r.end; t++) a._appendItem.call(this, t);
                if (l.invertPageOrder) {
                    if (r.start > 0 && l.edges > 0 && (l.edges < r.start && r.start - l.edges != 1 ? g.append('<li class="disabled"><span class="ellipse">' + l.ellipseText + "</span></li>") : r.start - l.edges == 1 && a._appendItem.call(this, l.edges), l.useEndEdge)) {
                        var c = Math.min(l.edges, r.start);
                        for (t = c - 1; t >= 0; t--) a._appendItem.call(this, t)
                    }
                } else if (r.end < l.pages && l.edges > 0 && (l.pages - l.edges > r.end && l.pages - l.edges - r.end != 1 ? g.append('<li class="disabled"><span class="ellipse">' + l.ellipseText + "</span></li>") : l.pages - l.edges - r.end == 1 && a._appendItem.call(this, r.end), l.useEndEdge)) {
                    var d = Math.max(l.pages - l.edges, r.end);
                    for (t = d; t < l.pages; t++) a._appendItem.call(this, t)
                }
                l.nextText && !l.nextAtFront && a._appendItem.call(this, l.invertPageOrder ? l.currentPage - 1 : l.currentPage + 1, {
                    text: l.nextText,
                    classes: "next"
                }), l.ellipsePageSet && !l.disabled && a._ellipseClick.call(this, g), l.hasFirEndBtn && (n = e('<a href="' + l.hrefTextPrefix + 1 + l.hrefTextSuffix + '" class="page-link">首页</a>'), i = e('<a href="' + l.hrefTextPrefix + l.pages + l.hrefTextSuffix + '" class="page-link">尾页</a>'), g.prepend(n), g.append(i), n.click(function (e) {
                    return a._selectPage.call(p, 0, e)
                }), i.click(function (e) {
                    return a._selectPage.call(p, l.pages - 1, e)
                }))
            }, _getPages: function (e) {
                var a = Math.ceil(e.items / e.itemsOnPage);
                return a || 1
            }, _getInterval: function (e) {
                return {
                    start: Math.ceil(e.currentPage > e.halfDisplayed ? Math.max(Math.min(e.currentPage - e.halfDisplayed, e.pages - e.displayedPages), 0) : 0),
                    end: Math.ceil(e.currentPage > e.halfDisplayed ? Math.min(e.currentPage + e.halfDisplayed, e.pages) : Math.min(e.displayedPages, e.pages))
                }
            }, _appendItem: function (t, s) {
                var n, i, l = this, r = l.data("pagination"), p = e("<li></li>"), g = l.find("ul");
                t = 0 > t ? 0 : t < r.pages ? t : r.pages - 1, n = {
                    text: t + 1,
                    classes: ""
                }, r.labelMap.length && r.labelMap[t] && (n.text = r.labelMap[t]), n = e.extend(n, s || {}), t == r.currentPage || r.disabled ? (p.addClass(r.disabled || "prev" === n.classes || "next" === n.classes ? "disabled" : "active"), i = e('<span class="current">' + n.text + "</span>")) : (i = e('<a href="' + r.hrefTextPrefix + (t + 1) + r.hrefTextSuffix + '" class="page-link">' + n.text + "</a>"), i.click(function (e) {
                    return a._selectPage.call(l, t, e)
                })), n.classes && i.addClass(n.classes), p.append(i), g.length ? g.append(p) : l.append(p)
            }, _selectPage: function (e, t) {
                var s = this.data("pagination");
                return s.currentPage = e, s.selectOnClick && a._draw.call(this), s.onPageClick(e + 1, t)
            }, _ellipseClick: function (t) {
                var s = this, n = this.data("pagination"), i = t.find(".ellipse");
                i.addClass("clickable").parent().removeClass("disabled"), i.click(function () {
                    if (!n.disable) {
                        var t = e(this), l = (parseInt(t.parent().prev().text(), 10) || 0) + 1;
                        t.html('<input type="number" min="1" max="' + n.pages + '" step="1" value="' + l + '">').find("input").focus().click(function (e) {
                            e.stopPropagation()
                        }).keyup(function (t) {
                            var l = e(this).val();
                            13 === t.which && "" !== l ? l > 0 && l <= n.pages && a._selectPage.call(s, l - 1) : 27 === t.which && i.empty().html(n.ellipseText)
                        }).bind("blur", function () {
                            var t = e(this).val();
                            return "" !== t && a._selectPage.call(s, t - 1), i.empty().html(n.ellipseText), !1
                        })
                    }
                    return !1
                })
            }
        };
        e.fn.pagination = function (t) {
            return a[t] && "_" != t.charAt(0) ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.pagination") : a.init.apply(this, arguments)
        }
    }($)
});