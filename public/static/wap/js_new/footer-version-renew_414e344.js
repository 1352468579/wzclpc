define("desktop:widget/footer-version-download/footer-version-renew.js", function (e) {
    !function () {
        function a() {
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

        for (var t = e("common:widget/jquery/1.11.3/jquery.js"), n = [{
            hotLabels: {
                name: "热门标签",
                contents: [{id: "1", labelName: "在线辅导", labelHref: ""}, {
                    id: "2",
                    labelName: "在线辅导班",
                    labelHref: ""
                }, {id: "3", labelName: "中小学教育网校",
                    labelHref: ""
                }, {
                    id: "4",
                    labelName: "补习机构",
                    labelHref: ""
                }, {id: "5", labelName: "一对一辅导",
                    labelHref: ""}, {
                    id: "6",
                    labelName: "英语一对一家教",
                    labelHref: ""
                }, {id: "7", labelName: "初中数学辅导", labelHref: ""}, {id: "8", labelName: "化学辅导", labelHref: ""}, {
                    id: "9",
                    labelName: "作文辅导",
                    labelHref: ""
                }, {id: "10", labelName: "初中英语补习", labelHref: ""}, {
                    id: "11",
                    labelName: "高中英语辅导",
                    labelHref: ""
                }, {id: "12", labelName: "高中生物补习", labelHref: ""}, {
                    id: "13",
                    labelName: "八年级物理辅导",
                    labelHref: ""
                }, {id: "14", labelName: "初一上册数学辅导",
                    labelHref: ""}, {
                    id: "15",
                    labelName: "高中物理辅导班",
                    labelHref: ""
                }, {id: "16", labelName: "八年级物理补习",
                    labelHref: ""}, {
                    id: "17",
                    labelName: "初中生作文辅导",
                    labelHref: ""
                }, {id: "18", labelName: "初中一年级作文",
                    labelHref: ""}, {
                    id: "19",
                    labelName: "初中语文辅导班",
                    labelHref: ""
                }, {id: "20", labelName: "初中作文辅导",
                    labelHref: ""}, {
                    id: "21",
                    labelName: "高中语文辅导",
                    labelHref: ""
                }, {id: "22", labelName: "初二英语辅导",
                    labelHref: ""}, {
                    id: "23",
                    labelName: "初一英语辅导班",
                    labelHref: ""
                }, {id: "24", labelName: "初三辅导班",
                    labelHref: ""}]
            },
            hotLessons: {
                name: "热门课程",
                contents: [{
                    id: "1",
                    labelName: "初二补习班",
                    labelHref: ""
                }, {
                    id: "2",
                    labelName: "初二辅导班",
                    labelHref: ""
                }, {
                    id: "3",
                    labelName: "初三补习班",
                    labelHref: ""
                }, {
                    id: "4",
                    labelName: "初一补习班",
                    labelHref: ""
                }, {
                    id: "5",
                    labelName: "初二数学辅导",
                    labelHref: ""
                }, {
                    id: "6",
                    labelName: "初三数学一对一辅导",
                    labelHref: ""
                }, {
                    id: "7",
                    labelName: "初一数学辅导",
                    labelHref: ""
                }, {
                    id: "8",
                    labelName: "初三物理辅导",
                    labelHref: ""
                }, {
                    id: "9",
                    labelName: "高一物理辅导",
                    labelHref: ""
                }, {
                    id: "10",
                    labelName: "七年级语文补习",
                    labelHref: ""
                }, {
                    id: "11",
                    labelName: "初二英语辅导班",
                    labelHref: ""
                }, {
                    id: "12",
                    labelName: "初三英语补习",
                    labelHref: ""
                }, {
                    id: "13",
                    labelName: "八年级数学1对1",
                    labelHref: ""
                }, {
                    id: "14",
                    labelName: "初一数学补习班",
                    labelHref: ""
                }, {
                    id: "15",
                    labelName: "初一数学培训",
                    labelHref: ""
                }, {
                    id: "16",
                    labelName: "初二作文",
                    labelHref: ""
                }, {
                    id: "17",
                    labelName: "初二英语辅导",
                    labelHref: ""
                }]
            }
        }], m = t(".linkmap1"), h = t(".linkmap2"), s = 0; s < n[0].hotLabels.contents.length; s++) m.append('<a class="im" href="' + n[0].hotLabels.contents[s].labelHref + '" target="_blank">' + n[0].hotLabels.contents[s].labelName + "</a>");
        for (var s = 0; s < n[0].hotLessons.contents.length; s++) h.append('<a class="im" href="' + n[0].hotLessons.contents[s].labelHref + '" target="_blank">' + n[0].hotLessons.contents[s].labelName + "</a>");
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
            w ? (t(this).removeClass("play2").addClass("play1"), t(this).parents(".copyright").animate({height: e}, 300), w = !1) : (t(this).removeClass("play1").addClass("play2"), t(this).parents(".copyright").animate({height: "22px"}, 300), w = !0)
        });
        var i = !0;
        t(".newsShowBtn #a-footer").click(function () {
            i ? (t(this).removeClass("play2").addClass("play1"), t(".newsInfo").animate({height: "195px"}, 300), i = !1) : (t(this).removeClass("play1").addClass("play2"), t(".newsInfo").animate({height: "0"}, 300), i = !0)
        });
        var o = !0, c = (t(".newsInfo ul"), []);
        t(".newsShowBtn #a-footer").click(a), a();
        var r = getzhiSDKInstance();
        r.on("load", function () {
            r.initBtnDOM()
        }), r.set("customBtn", "true"), r.set("customMargin", 120)
    }()
});