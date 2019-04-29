define("desktop:widget/nav-version5/nav-version5.js", function (e) {
    function n(e, n, o) {
        var a = o ? o.name : "";
        if (e[a]) {
            var t = [];
            i(e[a], f, t), o.phase = t, n.push(o)
        }
    }

    function i(e, n, i) {
        for (var o = 0; o < e.length; o++) for (var a = 0; a < n.length; a++) n[a] && e[o] == n[a].name && i.push(n[a])
    }

    function o() {
        var e = u(window).scrollTop();
        if (0 >= e) return void a();
        if (e >= C) return void t();
        if (C > e) {
            var n = e / C;
            return O > e && (s(n), O = e), e > O && (r(n), O = e), void(A && (z.css({
                position: "relative",
                top: 0
            }), A = !1))
        }
    }

    function a() {
        b.css({height: I}), y.css({height: k}), j.css({top: M, left: L}), z.css({position: "relative", top: 0}), A = !1
    }

    function t() {
        b.css({height: S}), y.css({height: q}), j.css({left: _, top: Z}), z.css({position: "fixed", top: 0}), A = !0
    }

    function s(e) {
        var n = parseInt(b.height()), i = parseInt(y.height()), o = parseInt(j.css("top")), a = parseInt(j.css("left"));
        if (I > n) {
            var t = I - e * H > I ? I : I - e * H;
            b.css({height: t})
        }
        if (k > i) {
            var s = k - e * N > k ? k : k - e * N;
            y.css({height: s})
        }
        if (o > M) {
            var r = M > M + e * J ? M : M + e * J;
            j.css({top: r})
        }
        if (L > a) {
            var u = L - e * $ > L ? L : L - e * $;
            j.css({left: u})
        }
    }

    function r(e) {
        var n = parseInt(b.height()), i = parseInt(y.height()), o = parseInt(j.css("top")), a = parseInt(j.css("left"));
        if (n > S) {
            var t = S > I - e * H ? S : I - e * H;
            b.css({height: t})
        }
        if (i > q) {
            var s = q > k - e * N ? q : k - e * N;
            y.css({height: s})
        }
        if (Z > o) {
            var r = M + e * J > Z ? Z : M + e * J;
            j.css({top: r})
        }
        if (a > _) {
            var u = _ > L - e * $ ? _ : L - e * $;
            j.css({left: u})
        }
    }

    var u = e("common:widget/jquery/1.11.3/jquery.js"),
        c = (e("common:widget/wzcl/wzcl.js"), e("common:widget/arale-easing/1.1.0/index.js"), e("desktop:static/statis-evaluate/evaluate.js"));
    u(".login-btn").on("click", function () {
        localStorage.evaluate_login = "true"
    });
    var l = u("#usermobile").val();
    if ("true" == localStorage.evaluate_login && (localStorage.evaluate_login = "false", c.send("login", l)), u("#courseNav")[0].innerHTML) var m = JSON.parse(u("#courseNav")[0].innerHTML);
    !function () {
        var e = u("#logined-area"), n = u("ul", e);
        e.length && e.on("mouseover", function () {
            n.show()
        }).on("mouseout", function () {
            n.hide()
        })
    }();
    !function () {
        u.ajax({url: '/Wap/Api/getClassOption',type: 'POST',dataType: 'json',contentType: 'application/json',data: {},success(s){
                if(s.code)
                {
                    var h = s.data;
                    console.log(h)
                    function e(e, n) {
                        e.append('<li><a class="lesson" href ="javascript:void(0)" data-id=' + h[n].id + ">" + h[n].name + "</a></li>")
                    }

                    function n(e, n, i) {
                        e.append('<li><a href ="javascript:void(0)" >' + h[n].grade[i].name + "</a></li>")
                    }

                    function i(e, n, i, o) {
                        e.append('<li><a href ="' + h[n].grade[i].phase[o].href + '">' + h[n].grade[i].phase[o].name + "</a></li>");
                    }
                    var o, a, t, s, r = u("#n-nav-area"), c = u(".wzclLessons"), l = u(".secondwzclLessons"), m = u(".thirdwzclLessons"),
                        f = u(".zixunTags"), d = u(".primary-courses");
                    f.on("mouseenter", function () {
                        clearTimeout(o);
                        r.find(".area-zixun")
                    }), f.on("mouseleave", function () {
                        o = setTimeout(function () {
                            f.hide()
                        }, 300)
                    }), d.on("mouseenter", function () {
                        clearTimeout(o);
                        r.find(".area-course")
                    }), d.on("mouseleave", function () {
                        o = setTimeout(function () {
                            d.hide()
                        }, 300)
                    }), r.on("mouseenter", ".item", function () {
                        var e = u(this);
                        e.hasClass("area-zixun") && (clearTimeout(o), f.show()), e.hasClass("area-course") && (clearTimeout(o), d.show())
                    }), r.on("mouseleave", ".item", function () {
                        var e = u(this);
                        e.hasClass("area-zixun") && (o = setTimeout(function () {
                            f.hide()
                        }, 300)), e.hasClass("area-course") && (o = setTimeout(function () {
                            d.hide()
                        }, 300))
                    });
                    for (var v = 0; v < h.length; v++) e(c, v);
                    c.on("mouseover", function () {
                        clearTimeout(a)
                    }), c.on("mouseout", function () {
                        a = setTimeout(function () {
                            c.hide()
                        }, 500), t = setTimeout(function () {
                            l.hide()
                        }, 500)
                    }), l.on("mouseover", function () {
                        clearTimeout(a), clearTimeout(t), clearTimeout(s)
                    }), l.on("mouseout", function () {
                        a = setTimeout(function () {
                            c.hide()
                        }, 500), t = setTimeout(function () {
                            l.hide()
                        }, 500), s = setTimeout(function () {
                            m.hide()
                        }, 500)
                    }), m.on("mouseover", function () {
                        clearTimeout(a), clearTimeout(t), clearTimeout(s)
                    }), m.on("mouseout", function () {
                        a = setTimeout(function () {
                            c.hide()
                        }, 500), t = setTimeout(function () {
                            l.hide()
                        }, 500), s = setTimeout(function () {
                            m.hide()
                        }, 500)
                    }), r.on("mouseenter", ".item", function () {
                        var e = u(this);
                        e.hasClass("area-lessons") && (clearTimeout(a), c.show())
                    }), r.on("mouseleave", ".item", function () {
                        var e = u(this);
                        e.hasClass("area-lessons") && (a = setTimeout(function () {
                            c.hide()
                        }, 500))
                    }), u.each(u(".wzclLessons li"), function (e, i) {
                        u(i).on("mouseover", function () {
                            l.html(""), m.html(""), u(this).addClass("active").siblings().removeClass("active");
                            for (var i = 0; i < h[e].grade.length; i++) n(l, e, i);
                            u(this).find("a").hasClass("lesson") && (clearTimeout(t), l.show())
                        })
                    }), u(".secondwzclLessons").on("mouseover", "li", function () {
                        u(this).addClass("active").siblings().removeClass("active");
                        var e = u(".wzclLessons .active").index(), n = u(this).index();
                        m.html("");
                        for (var o = 0; o < h[e].grade[n].phase.length; o++) i(m, e, n, o);
                        m.show()
                    }), u(".secondwzclLessons").on("mouseout", "li", function () {
                        u(this).removeClass("active")
                    }), r.find(".item").trigger("mouseleave")
                }

            },
        });
    }(), !function () {
        function e(e) {
            var n = /(?:https?:\/\/.*?|^)(\/[^#?]*)(?:[#?].*)?$/i;
            return (n.exec(e.toLocaleLowerCase()) || [0, "/"])[1].toLowerCase()
        }

        var n = u("#n-nav-area"), i = u(".item", n), o = i.filter(".current"), a = e(location.href),
            t = {open: /open\./};
        window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
        for (var s = location.origin, r = i.length - 1; r >= 0; r--) {
            var c = i.eq(r).attr("href"), l = e(c), m = !1;
            if ("/" === l) {
                for (var h in t) if (t[h].test(c)) {
                    l = s, m = !0;
                    break
                }
                if (!m && "/" !== a) continue
            }
            (a.slice(0, l.length) == l || location.origin === c) && (o = i.eq(r))
        }
        var f = /\/(tuijian|zixun|xinwen|jiazhang|xuesheng)(\/page-(\d))?/, d = /\/article\/(\d+)/, v = /^\/s$/;
        (f.test(a) || d.test(a) || v.test(a)) && (o = n.find(".zixun"));
        var g, p = u(".secoundTag");
        o && o.addClass("current"), p.on("mouseenter", ".level2", function () {
            clearTimeout(g);
            n.find(".zixun")
        }), p.on("mouseleave", function () {
            g = setTimeout(function () {
                p.hide()
            }, 300)
        }), n.on("mouseenter", ".item", function () {
            var e = u(this);
            e.hasClass("zixun") && (clearTimeout(g), p.show())
        }), n.on("mouseleave", ".item", function () {
            var e = u(this);
            e.hasClass("zixun") && (g = setTimeout(function () {
                p.hide()
            }, 300))
        }), n.find(".item").trigger("mouseleave")
    }(), function () {
        var e = u("#national-day-tip"), n = e.find(".close"), i = u("#national-pillar");
        n.bind("click", function () {
            e.remove(), i.remove()
        }), setTimeout(function () {
            n.show()
        }, 2e3)
    }(), function () {
        var e = u("#national-day-tip"), n = e.find(".close"), i = u("#national-pillar");
        n.bind("click", function () {
            e.remove(), i.remove()
        }), setTimeout(function () {
            n.show()
        }, 2e3)
    }();
    var z = u("#n-nav-bar"), C = u("#n-top-bar").height(), b = z.find(".nav-box"), I = b.height(), j = u("#hide_tel"),
        y = u("#logo"), k = y.height(), L = parseInt(j.css("left")), M = parseInt(j.css("top")), q = 20, S = 45, Z = 0,
        _ = 220, N = Math.abs(parseInt(k) - q), H = Math.abs(parseInt(I) - S), J = Math.abs(parseInt(j.css("top")) - Z),
        $ = Math.abs(parseInt(j.css("left")) - _);
    u(window).on("resize scroll", o);
    var O = 0, A = !1;
    o(), !function () {
        var e = u("#bulletin");
        e.on("click", ".J-close-bulletin", function () {
            e.addClass("hide")
        })
    }();
});
;define("desktop:widget/quick-appoint-renew/quick-appoint-renew.js", function (e) {
    var t, n, a = e("common:widget/jquery/1.11.3/jquery.js"), i = e("common:widget/my-util/my-util.js"),
        o = e("common:widget/tool/utils.js"), r = e("common:widget/tool/event.js"),
        s = (e("common:widget/tool/env.js"), e("common:widget/placeholder/placeholder.js"), e("common:widget/arale-validator/0.10.1/index.js")),
        l = e("common:widget/wzcl/wzcl.js"), c = l.data.get("subjectLabel"), d = l.data.get("gradeLabel"),
        u = l.data.get("extras.cooperatorUrl"), m = l.data.get("sem.semChannelSwitch");
    s.addRule("chineseAndWord", function (e) {
        var t = o.string.trim(e.element.val()) || "", n = /^([\u4e00-\u9fa5]|[a-zA-Z])+$/;
        return !n.test(t) || o.string.getStrLength(t) > 14 || o.string.getStrLength(t) < 1 ? !1 : !0
    }, "请输入1—14位中英文格式"), s.addRule("validateMobile", function (e, n) {
        t = o.string.trim(e.element.val()) || null, l.Api.post('/Wap/Api/exists', {mobile: t}).done(function (e) {
            e && 0 == e.code && 1 != e.data ? n(!0, "") : n(!1, e && e.msg || '您的手机号已经注册，请 <a href="' + l.data.get("url.login") + '">先登录</a>!')
        }).fail(function () {
            n(!0, "")
        })
    }), s.addRule("zCardOrMobile", function (e) {
        return n = o.string.trim(e.element.val()) || null, /^(?:80\d{6}|1\d{10}|13\d{5})$/.test(n) && (t == n ? !1 : !0)
    }, "{{display}}输入无效"), s.addRule("vertifyCode", function (e) {
        var t = o.string.trim(e.element.val()) || "";
        return 0 == o.string.getStrLength(t) ? !1 : !0
    }, "请输入验证码"), a(function () {
        function e(e, t, n) {
            var i = function (e) {
                var n = "";
                for (var a in e) e.hasOwnProperty(a) && (n += "高一" == a ? "<option value='" + a + "' selected>" + o.getTextFrom(a, d) + "</option>" : "初四" == a ? "<option value='初三'>" + o.getTextFrom(a, d) + "</option>" : "<option value='" + a + "'>" + o.getTextFrom(a, d) + "</option>");
                t.html(n)
            }, r = function (e) {
                var t = "";
                for (var a in e) e.hasOwnProperty(a) && (t += 0 == a ? c[e[a]] ? "<option value='" + c[e[a]] + "' selected > " + e[a] + "</option>" : "<option value='" + e[a] + "' selected> " + e[a] + "</option>" : c[e[a]] ? "<option value='" + c[e[a]] + "' > " + e[a] + "</option>" : "<option value='" + e[a] + "' > " + e[a] + "</option>");
                n.html(t)
            };
            this.init = function () {
                var t = e["高一"];
                i(e), r(t)
            }, t.on("change", function () {
                var t = a(this).val();
                r(e[t])
            })
        }

        // var t = l.data.get("gradeTosubject"), n = a("#reservation-bar"), i = a("#reservation"),
        //     r = n.find(".stu-grade"), s = n.find(".stu-subject"), u = i.find(".stu-grade"), m = i.find(".stu-subject"),
        //     p = new e(t, r, s), f = new e(t, u, m);
        // p.init(), f.init()
    });
    var p = a("#n-footer"), f = a(window);
    !function () {
        function t(e, t) {
            var n = window.location.search, a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = n.substr(1).match(a);
            return i ? decodeURIComponent(i[2]) : t
        }

        var n = function () {
                function e() {
                    var e = f.scrollTop(), o = e + f.height();
                    if (p.length > 0) var r = p.offset().top; else var r = a("body").height();
                    o > r ? (t.style.position = "absolute", t.style.bottom = "auto", t.style.top = r - 55 + "px", n.style.position = "absolute", n.style.bottom = "auto", n.style.top = "-178px", i = !0) : i && (i = !1, t.style.position = "fixed", t.style.bottom = 0, t.style.top = "auto", n.style.position = "fixed", n.style.bottom = 0, n.style.top = "auto")
                }

                var t = a("#reservation-bar"), n = a(".img");
                t.style = t[0].style, n.style = n[0].style;
                var i = !1, o = new r;
                return o.show = function () {
                    t.stop().css("display", "block").animate({opacity: 1}, 400), n.stop().css("display", "block").animate({opacity: 1}, 400), o.fireEvent("show"), e(), f.on("scroll resize", e)
                }, o.hide = function () {
                    t.stop().animate({opacity: 0}, 400, function () {
                        t.css("display", "none")
                    }), n.stop().animate({opacity: 0}, 400, function () {
                        n.css("display", "none")
                    }), o.fireEvent("hide"), f.off("scroll resize", e)
                }, o
            }(), c = function () {
                var e = new r, t = a("#reservation"), n = t.find(".dialog"), i = n.find(".p"), o = n.find(".form"),
                    s = n.find(".step-3"), l = 0, c = !1;
                return a.easing.dialogShowAnimate = function (e, t, n, a, i) {
                    return (t /= i / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
                }, e.show = function (a) {
                    var a = Math.min(Math.max(~~a, 1), 2), r = o.eq(a - 1), c = t.hasClass("show");
                    l = a, t.addClass("show"), i.css("marginLeft", 0), s.css("display", "none"), o.css("display", "none"), r.css("display", "block"), r.find(".form-items").css("left", 0), r.find(".slogan").css("left", 250), r.find(".slogan, .form-items").css("opacity", 1), n.stop(), !c && n.css({
                        display: "block",
                        opacity: 0
                    }), !c && n.animate({
                        opacity: 1,
                        top: "50%",
                        marginTop: "-245px"
                    }, 600, "dialogShowAnimate"), e.fireEvent("show", [r]), e.fireEvent("active", [l])
                }, e.hide = function () {
                    t.removeClass("show"), n.css({
                        opacity: 0,
                        bottom: "-100%"
                    }), o.stop(), s.stop(), i.stop(), c && c.stop(), c = !1, e.fireEvent("hide")
                }, e.isShow = function () {
                    return t.hasClass("show")
                }, e.next = function () {
                    if (!(c || l >= 3) && t.hasClass("show")) {
                        var n = o.eq(l - 1), r = o.eq(l);
                        l = Math.min(l + 1, 3), n.slogan = n.find(".slogan"), n.formItems = n.find(".form-items"), 3 > l && (r.slogan = r.find(".slogan").css({
                            opacity: 0,
                            left: 500
                        }), r.formItems = r.find(".form-items").css({
                            opacity: 0,
                            left: "100%"
                        }), r.css("display", "block")), l >= 3 && s.css({
                            opacity: 0,
                            left: "50%",
                            display: "block"
                        }), c = a({p: 0}).animate({p: 1}, {
                            step: function (e) {
                                n.slogan.css({left: 250 * (1 - e), opacity: 1 - e}), n.formItems.css({
                                    left: -100 * e + "%",
                                    opacity: 1 - e
                                }), 3 > l && (r.slogan.css({
                                    left: 250 + 250 * (1 - e),
                                    opacity: e
                                }), r.formItems.css({
                                    left: 100 * (1 - e) + "%",
                                    opacity: e
                                })), l >= 3 && (i.css("marginLeft", -236 * e), s.css({
                                    left: 50 * (1 - e) + "%",
                                    opacity: 1
                                }))
                            }, complete: function () {
                                n.css("display", "none"), c = !1, e.fireEvent("active", [l])
                            }
                        })
                    }
                }, n.on("click", ".J-next", function () {
                    e.next()
                }), n.on("click", ".J-close", function () {
                    e.hide(), l >= 3 && e.fireEvent("done")
                }), s.find(".J-helper").hover(function () {
                    s.find(".how-use-jrb").toggleClass("show")
                }), e
            }(), d = {}, v = a("#reservation-bar .form"), h = a("#reservation .form.step-1"),
            g = a("#reservation .form.step-2");
        c.on("show", function () {
            n.hide()
        }), c.on("active", function () {
            h.find("input[placeholder]").each(function () {
                a(this).placeholder()
            }), g.find("input[placeholder]").each(function () {
                a(this).placeholder()
            })
        }), c.on("hide", function () {
            n.show()
        }), c.on("done", function () {
            d = {}, window.location.href = l.data.get("url.studentCourseManagement")
        }), n.once("show", function () {
            v.find("input[placeholder]").placeholder()
        }), n.show(), a(document).on("click", ".J-trigger-reservation-form", function () {
            c.show(1)
        });
        var y = !1;
        v.oForm = h, h.oForm = v, u || m ? a.each([v, h], function (e, n) {
            function r(e) {
                function t(t) {
                    if (!t) {
                        e.html("发送中……");
                        var i = a("[name=name]", n).val(), o = a("[name=mobile]", n).val(),
                            r = a("[name=grade]", n).val();
                        if (0 == r.indexOf("新")) {
                            var s = r.length;
                            r = r.substring(1, s)
                        } else if (-1 == r.indexOf("新")) var r = r;
                        var c = a("[name=weakSubject]", n).val();
                        a.ajax({
                            url: "/api/student/send-sms-verifier",
                            type: "POST",
                            dataType: "json",
                            data: {name: i, mobile: o, grade: r, weakSubject: c}
                        }).done(function (t) {
                            0 === t.code ? (e.html("验证码已发送"), codeSubmit = !0, l()) : alert(t.message)
                        }).fail(function () {
                            e.html("验证码请求失败！再试一次吧"), alert("验证码请求失败！")
                        }).always(function () {
                        })
                    }
                }

                n.validate.query(w).execute(function (e) {
                    n.validate.query(k).execute(function (n) {
                        e || n || t()
                    })
                })
            }

            function l() {
                function e() {
                    r ? (s.html(r + "秒"), r--, o = setTimeout(e, 1e3), s.attr("disabled", "true")) : t()
                }

                function t() {
                    clearTimeout(o), r = 60, i()
                }

                function i() {
                    s.html("验证码"), s.removeAttr("disabled")
                }

                var o, r = 60, s = a(".verify-btn", n);
                e()
            }

            var u = n.validate = new s({
                    element: n, autoSubmit: !1, onFormValidated: function (e) {
                        if (!y) {
                            if (e) return void n.prop("dsp_valided", !1);
                            n.prop("dsp_valided", !0);
                            var r = n.find("button[type=submit]"), s = i.serializeNodes(n);
                            if (d.tempId && n !== g) return void(c.isShow() ? c.next() : c.show(1));
                            if (s.email && (s.email = o.string.trim(s.email)), n.find("[name=znum]").length) {
                                var l = s.znum;
                                delete s.znum, /^1\d{10}$/.test(l) ? s.referrerMobile = l : s.zCard = l
                            }
                            a.extend(d, s);
                            {
                                r.text()
                            }
                            r.html("提交中...").prop("disabled", !0), y = !0, tel_num = n.find("input[name=mobile]").val(), a.ajax({
                                url: "/api/student/register-and-book-by-valid-code-firststep",
                                type: "POST",
                                dataType: "json",
                                data: s
                            }).success(function (e) {
                                0 === e.code ? (window.location.pathname = "/") && ("小六" == s.grade || "小五" == s.grade || "小四" == s.grade || "小三" == s.grade || "小二" == s.grade || "小一" == s.grade || "学前班" == s.grade || "幼儿园大班" == s.grade || "幼儿园中班" == s.grade) && "钢琴陪练" != s.weakSubject ? a.ajax({
                                    url: "/api/student/has-register-peilian?mobile=" + s.mobile,
                                    type: "get",
                                    dataType: "json",
                                    success: function (e) {
                                        location.href = e.data.data.result ? "/appointment-success" : void 0 != t("channel_code") && void 0 != t("channel_keyword") ? "/appointment-success2?mobile=" + s.mobile + "&channel_code=" + t("channel_code") + "&channel_keyword=" + t("channel_keyword") : void 0 != t("channel_code") ? "/appointment-success2?mobile=" + s.mobile + "&channel_code=" + t("channel_code") : void 0 != t("channel_keyword") ? "/appointment-success2?mobile=" + s.mobile + "&channel_keyword=" + t("channel_keyword") : "/appointment-success2?mobile=" + s.mobile
                                    },
                                    error: function (e) {
                                        location.href = "/appointment-success"
                                    }
                                }) : location.href = "/appointment-success" : alert(e.msg)
                            }).fail(function () {
                                alert("提交失败了，再试一遍吧")
                            }).always(function () {
                                y = !1, r.html("预约免费试听").prop("disabled", !1)
                            })
                        }
                    }
                }), m = "8.0", p = navigator.userAgent.toLowerCase(), f = p.indexOf("msie") > -1,
                v = f ? p.match(/msie ([\d.]+)/)[1] : !1;
            if (f && m >= v) {
                var h = a(".verify-btn", n);
                h.on("click", function (e) {
                    function t(e) {
                        if (e) h.html("请输入正确手机号码……"); else {
                            h.html("发送中……");
                            var t = a("[name=name]", n).val(), i = a("[name=mobile]", n).val(),
                                o = a("[name=grade]", n).val();
                            if (0 == o.indexOf("新")) {
                                var r = o.length;
                                o = o.substring(1, r)
                            } else if (-1 == o.indexOf("新")) var o = o;
                            var s = a("[name=weakSubject]", n).val();
                            a.ajax({
                                url: "/api/student/send-sms-verifier",
                                type: "POST",
                                dataType: "json",
                                data: {name: t, mobile: i, grade: o, weakSubject: s}
                            }).done(function (e) {
                                0 === e.code ? (h.html("验证码已发送"), codeSubmit = !0, l()) : alert(e.message)
                            }).fail(function () {
                                h.html("验证码请求失败！再试一次吧"), alert("验证码请求失败！")
                            }).always(function () {
                            })
                        }
                    }

                    e.preventDefault();
                    var i = a("[name=name]", n), o = a("input[name=mobile]", n);
                    n.validate.query(i).execute(function (e) {
                        n.validate.query(o).execute(function (n) {
                            e || n || t()
                        })
                    })
                })
            } else {
                var b = a(".verify-btn", n);
                b.on("click", function (e) {
                    e.preventDefault(), r(b)
                })
            }
            var w = a("[name=name]", n), k = a("input[name=mobile]", n);
            n.find("select[data-v-label], input[data-v-label]").each(function () {
                $input = a(this);
                var e = {
                    element: "[name=" + $input.attr("name") + "]",
                    required: !!$input.attr("data-v-required"),
                    display: $input.attr("data-v-label")
                };
                $input.attr("data-v-errmsg") && (e.errormessage = $input.attr("data-v-errmsg")), $input.attr("data-v-rule") && (e.rule = $input.attr("data-v-rule")), u.addItem(e)
            }), n.oForm && n.find("input").on("change", function () {
                delete d.tempId, n.oForm.find("input[name=" + this.getAttribute("name") + "]").val(this.value)
            })
        }) : a.each([v, h, g], function (e, n) {
            var r = n.validate = new s({
                element: n, autoSubmit: !1, onFormValidated: function (e) {
                    if (!y) {
                        if (e) return void n.prop("dsp_valided", !1);
                        n.prop("dsp_valided", !0);
                        var r = n.find("button[type=submit]"), s = i.serializeNodes(n);
                        if (d.tempId && n !== g) return void(c.isShow() ? c.next() : c.show(1));
                        if (s.email && (s.email = o.string.trim(s.email)), n.find("[name=znum]").length) {
                            var l = s.znum;
                            delete s.znum, /^1\d{10}$/.test(l) ? s.referrerMobile = l : s.zCard = l
                        }
                        a.extend(d, s);
                        var u = r.text();
                        r.html("提交中...").prop("disabled", !0), y = !0, a.ajax({
                            url: "/Wap/api/register",
                            type: "POST",
                            dataType: "json",
                            data: d
                        }).success(function (e) {
                            // 0 === e.code ? (window.location.pathname = "/") && ("小六" == d.grade || "小五" == d.grade || "小四" == d.grade || "小三" == d.grade || "小二" == d.grade || "小一" == d.grade || "学前班" == d.grade || "幼儿园大班" == d.grade || "幼儿园中班" == d.grade) && "钢琴陪练" != d.weakSubject ? a.ajax({
                            //     url: "/api/student/has-register-peilian?mobile=" + d.mobile,
                            //     type: "get",
                            //     dataType: "json",
                            //     success: function (e) {
                            //         location.href = e.data.data.result ? "/appointment-success" : void 0 != t("channel_code") && void 0 != t("channel_keyword") ? "/appointment-success2?mobile=" + d.mobile + "&channel_code=" + t("channel_code") + "&channel_keyword=" + t("channel_keyword") : void 0 != t("channel_code") ? "/appointment-success2?mobile=" + d.mobile + "&channel_code=" + t("channel_code") : void 0 != t("channel_keyword") ? "/appointment-success2?mobile=" + d.mobile + "&channel_keyword=" + t("channel_keyword") : "/appointment-success2?mobile=" + d.mobile
                            //     },
                            //     error: function (e) {
                            //         location.href = "/appointment-success"
                            //     }
                            // }) : location.href = "/appointment-success" : alert(e.msg)
                            alert(e.msg)
                        }).fail(function () {
                            alert("提交失败了，再试一遍吧")
                        }).always(function (e) {
                            y = !1, e && 0 == e.code && n == g || r.html(u).prop("disabled", !1)
                        })
                    }
                }
            });
            n.find("select[data-v-label], input[data-v-label]").each(function () {
                $input = a(this);
                var e = {
                    element: "[name=" + $input.attr("name") + "]",
                    required: !!$input.attr("data-v-required"),
                    display: $input.attr("data-v-label")
                };
                $input.attr("data-v-errmsg") && (e.errormessage = $input.attr("data-v-errmsg")), $input.attr("data-v-rule") && (e.rule = $input.attr("data-v-rule")), r.addItem(e)
            }), n.oForm && n.find("input").on("change", function () {
                delete d.tempId, n.oForm.find("input[name=" + this.getAttribute("name") + "]").val(this.value)
            })
        }), a("body").hasClass("lt-ie9") ? a("input[name=freeTime]")[0].readOnly = !1 : '';
        //     e.async("common:widget/picker/picker.js", function () {
        //     var e = a.Deferred(), t = a.Deferred(), n = a("#freetime-date-helper").pickadate({
        //         container: "#reservation",
        //         min: new Date,
        //         format: "yyyy年mm月dd日",
        //         onClose: function () {
        //             var t = new Date,
        //                 t = t.getFullYear() + "/" + ("0" + (t.getMonth() + 1)).slice(-2) + "/" + ("0" + t.getDate()).slice(-2);
        //             i.set("min", t == n.get("highlight", "yyyy/mm/dd") ? new Date : ["00", "00", "00"]), e.resolve(n.get())
        //         }
        //     }).pickadate("picker"), i = a("#freetime-time-helper").pickatime({
        //         container: "#reservation",
        //         format: "H:i",
        //         onClose: function () {
        //             t.resolve(i.get())
        //         }
        //     }).pickatime("picker");
        //     n.set("select", new Date), a("input[name=freeTime]").on("click", function () {
        //         var o = a(this);
        //         e = a.Deferred(), t = a.Deferred(), a.when(e, t).then(function () {
        //             o.val(n.get() + " " + i.get()), g.validate.query("input[name=freeTime]").execute()
        //         }), e.then(function () {
        //             setTimeout(function () {
        //                 i.open()
        //             }, 300)
        //         }), setTimeout(function () {
        //             n.open()
        //         }, 100)
        //     })
        // })
    }()
});
;define("desktop:widget/footer-version-renew/footer-version-renew.js", function (e) {
    !function () {
        function a() {
            return ;
            o && t.ajax({type: "post", url: "/api/student/get-article-list-footer"}).success(function (e) {
                0 == e.code && e.data && (c[3] = e.data[1], c[0] = e.data[2], c[2] = e.data[3], c[1] = e.data[4], l(c))
            }).fail(function () {
            })
        }

        function l(e) {
            o = !1, t.each(e, function (e, a) {
                var l = t(".newsInfo").find(".newcon").eq(e);
                l.html(""), t.each(a, function (e, a) {
                    l.append('<li><a href ="/article-' + a.id + '.html">' + a.title + "</li>")
                })
            })
        }
        var t = e("common:widget/jquery/1.11.3/jquery.js");
        t(".contactWay .footHome").hover(function () {
            t(this).animate({width: "235px"}, 200)
        }, function () {
            t(this).animate({width: "32px"}, 200)
        }), t(".contactWay .footPosition").hover(function () {
            t(this).animate({width: "400px"}, 200)
        }, function () {
            t(this).animate({width: "32px"}, 200)
        });
        var w = !0;
        t(".firends-website2 .showLinks").click(function () {
            var e = t(this).siblings(".linkmap").height();
            w ? (t(this).removeClass("play1").addClass("play2"), t(this).parents(".copyright").animate({height: e}, 300), w = !1) : (t(this).removeClass("play2").addClass("play1"), t(this).parents(".copyright").animate({height: "22px"}, 300), w = !0)
        });
        var i = !0;
        t(".newsShowBtn #a-footer").click(function () {
            i ? (t(this).removeClass("play1").addClass("play2"), t(".newsInfo").animate({height: "195px"}, 300), i = !1) : (t(this).removeClass("play2").addClass("play1"), t(".newsInfo").animate({height: "0"}, 300), i = !0)
        });
        var o = !0, c = (t(".newsInfo ul"), []);
        t(".newsShowBtn #a-footer").click(a), a()
    }()
});
;define("desktop:widget/fixednav-new/fixednav-new.js", function (e) {
    var a = e("common:widget/jquery/1.11.3/jquery.js"),
        t = (e("common:widget/arale-tip/1.3.0/tip.js"), e("common:widget/zeroclipboard/2.0.0/ZeroClipboard.Core.js"), e("common:widget/wzcl/wzcl.js")),
        l = e("desktop:static/statis-evaluate/evaluate.js");
    a("body").on("click", ".zhiCustomBtn", function () {
        a("#usermobile").val() && l.send("consult", a("#usermobile").val())
    }), window.$ = a, a(function () {
        function e() {
            var e = o.scrollTop();
            e > 200 ? s.fadeIn() : s.fadeOut()
        }

        var o = a(window), n = (a(".fixed-nav-new"), a(".fixed-nav-online"), a(".fixed-nav-phone")),
            i = a(".fixed-nav-advice"), s = a(".fixed-nav-to-top"), c = a(".fixed-nav-phone-box"),
            d = a(".fixed-nav-phone-input"), r = a(".fixed-nav-phone-btn"), b = t.data.get("user"),
            u = t.data.get("stu"), p = getzhiSDKInstance();
        p.on("load", function () {
            p.initBtnDOM()
        }), p.set("customBtn", "true"), p.set("customMargin", 120), p.set("groupId", "e3fe37a9e7624a96ada7081e49afd3da"), p.set("userinfo", {partnerId: b && b.id ? b.id + ":" + b.mobile.substr(-4) : ""});
        a("#js-customer-invite");
        "object" == typeof u && a("<style>#js-customer-invite{display: none!important}</style>").appendTo("head"), e(), o.on("resize scroll", e), d.on("input propertychange", function () {
            r.removeClass("disable")
        }), n.click(function (e) {
            e.stopPropagation(), c.fadeToggle()
        }), c.click(function (e) {
            e.stopPropagation()
        }), a("body").click(function () {
            c.fadeOut()
        }), i.click(function () {
            window.open("https://issuetracker-out.wzcllearn.com/?userId=&clientType=pc")
        }), s.click(function () {
            a("html, body").animate({scrollTop: 0}, "slow")
        }), a(".callbubble-alert-close").click(function (e) {
            e.stopPropagation(), a("#callbubble-alert-bg").hide()
        }), a(".callbubble-alert-bt").click(function (e) {
            e.stopPropagation(), a("#callbubble-alert-bg").hide()
        }), a("form.fixed-nav-phone-content").submit(function (e) {
            if (e.preventDefault(), !r.hasClass("disable")) {
                var t = /^1\d{10}$/;
                return "" == d.val() ? (a("#callbubble-alert-bg").show(), a("#callbubble-alert-err").show(), void a("#callbubble-alert-success").hide()) : t.test(d.val()) ? void(r.hasClass("disable") || (l.send("consult", d.val()), r.addClass("disable"), a.ajax({
                    type: "POST",
                    url: "/api/call-center/make-direct-call",
                    data: {mobile: d.val()},
                    timeout: 3e3,
                    success: function (e) {
                        e && 0 == e.code ? (a("#callbubble-alert-bg").show(), a("#callbubble-alert-err").hide(), a("#callbubble-alert-success").show(), r.addClass("disable")) : r.removeClass("disable")
                    },
                    error: function () {
                        r.removeClass("disable")
                    }
                }))) : (a("#callbubble-alert-bg").show(), a("#callbubble-alert-err").show(), void a("#callbubble-alert-success").hide())
            }
        })
    })
});