!function () {
    function e() {
        m.eq(p).fadeIn(300).siblings(".slider-item").fadeOut(300), $(".switch-btn").eq(p).removeClass("active").siblings().addClass("active"), p++, p >= v && (p = 0)
    }

    function t(e, t) {
        if (t) var a = t; else var a = q();
        i(a, e, !1)
    }

    function i(e, t, i) {
        parseInt(e.css("top"));
        t ? e.animate({top: "-=8"}, 150, "bounceBoth").animate({top: "+=8"}, 150, "bounceBoth").animate({top: "-=8"}, 150, "bounceBoth").animate({top: "+=8"}, 150, "bounceBoth", function () {
            var t = e.data("index");
            a(t, i)
        }) : e.animate({top: "-=8"}, 150, "bounceBoth").animate({top: "+=8"}, 150, "bounceBoth").animate({top: "-=8"}, 150, "bounceBoth").animate({top: "+=8"}, 150, "bounceBoth", function () {
        })
    }

    function a(e, t) {
        var i = b[e];
        i.num = i.num || 60 + Math.floor(140 * Math.random());
        var a = "";
        a += "<div class='show-con'><div class='lyh'><img class='avator' src='" + i.avator + "' alt=''><p class='name'>" + i.name + "</p><ul><li>" + i.school + "</li><li>" + i.rate_2 + "</li></ul><div class='achievements'><p>" + i.rate_1 + "</p></div></div><div class='bottom'><span class='left'><b>辅导学生 / </b>" + i.num + "人</span><span class='feature'><b>特点 / </b>" + i.spe + "</span></div></div>", g[0].innerHTML = a, g.fadeIn(), t && setTimeout(function () {
            clearInterval(f), n(), g.fadeOut(), y = !1, j = !0
        }, 2e3)
    }

    function n() {
        f = setInterval(function () {
            t(!1)
        }, 1800)
    }

    function s(e) {
        var t = e;
        z = setInterval(function () {
            t++, 4 == t && (t = 0), $($animationInteractionLi[t]).addClass("active").siblings().removeClass("active"), $(".dot-list span").eq(t).addClass("active").siblings().removeClass("active"), r.isIE8 ? $(".TV-intro img").attr("src", B[t]) : (P.trigger("pause"), P.eq(t).show().siblings().hide(), P[t].currentTime = 0, P[t].play()), $("#animationInteraction .prompt").html($stepLi[t])
        }, 3e3)
    }

    window.$ = window.jQuery = require("common:widget/jquery/1.11.3/jquery.js");
    {
        var o = require("desktop:widget/zm-player/zm-player.js"),
            r = (require("common:widget/swiper/3.0.4/swiper.jquery.js"), require("common:widget/tool/env.js")),
            c = require("common:widget/tool/utils.js"), l = require("common:widget/zm/zm.js");
        require("common:widget/tool/slider/slider.js")
    }
    require("common:widget/jquery/mousewheel/mousewheel.js");
    {
        var d = c.listenerScrollInView();
        require("desktop:widget/zm-lessons/lessonSystem.js").lessonSystem, require("common:widget/arale-easing/1.1.0/index.js"), !!l.data.get("stu")
    }
    require("common:widget/jquery/mousewheel/mousewheel.js"), require("common:widget/jquery/super-slide/jquery.SuperSlide.2.1.1.js"), $(window).scroll(function () {
        var e = window.scrollY;
        $(window).height() < 740 ? e > 180 ? $("#doubole-activity").show() : $("#doubole-activity").hide() : $("#doubole-activity").show()
    }), jQuery(".slideBox").slide({
        mainCell: ".bd ul",
        autoPlay: !0,
        interTime: 3e3
    }), $(".activity-rule-btn").click(function () {
        $("#activity-rule").addClass("show")
    });
    var u, m = $("#banner .slider-item"), p = 0, v = m.length;
    arrsPrev = $(".prev"), arrsNext = $(".next"), clearInterval(u), $(arrsPrev).click(function () {
        clearInterval(u), m.eq(0).fadeOut(300).siblings(".slider-item").fadeIn(300), $(this).addClass("active").siblings().removeClass("active")
    }), $(arrsNext).click(function () {
        clearInterval(u), m.eq(1).fadeOut(300).siblings(".slider-item").fadeIn(300), $(this).addClass("active").siblings().removeClass("active")
    }), $(arrsPrev).on("mouseover", function () {
        clearInterval(u), m.eq(0).fadeOut(300).siblings(".slider-item").fadeIn(300), $(this).addClass("active").siblings().removeClass("active")
    }), $(arrsNext).on("mouseover", function () {
        m.eq(1).fadeOut(300).siblings(".slider-item").fadeIn(300), $(this).addClass("active").siblings().removeClass("active")
    }), u = setInterval(e, 3e3), $("#banner").on("mouseover", function () {
        clearInterval(u)
    }), $("#banner").on("mouseout", function () {
        u = setInterval(e, 3e3)
    }), $("#video .videoContainer, #starRecommend img,#starRecommend .dot,#starVc").each(function () {
        $(this).click(function () {
            h.show($(this).data("src"), $(this).data("title"))
        })
    });
    var h = {
        init: function () {
            var e = this;
            this.player = new o($("#zmStuPlayerPopup .stu-player")), this.$el = $("#zmStuPlayerPopup"), this.$el.find(".popup-foot .btn-close").click(function () {
                e.player.pause(), e.$el.hide(), $("html, body").css("overflow", "visible")
            })
        }, show: function (e, t) {
            this.source != e && (this.source = e, this.player.load(e)), $("html, body").css("overflow", "hidden"), this.$el.find(".popup-foot .title").text(t), this.$el.show(), this.player.resize(), this.player.play()
        }
    };
    h.init(), $("#starRecommend ul li img,#starRecommend ul li .dot,#video .videoContainer img,#video .videoContainer .dot,#starVc .dot").hover(function () {
        $(this).siblings(".playCircle").addClass("play-circle")
    }, function () {
        $(this).siblings(".playCircle").removeClass("play-circle")
    }), $("#CCTV ul li a").hover(function () {
        $(this).find("span").fadeIn(100)
    }, function () {
        $(this).find("span").fadeOut(100)
    }), $("#starRecommend ul li").hover(function () {
        $(this).children(".overlay").fadeOut(300)
    }, function () {
        $(this).children(".overlay").fadeIn(300)
    });
    var f, g = $("#teachPosition .teach-map-container"), y = !0, b = [{
            name: "刘少军",
            school: "毕业于清华大学",
            exper: "5",
            rate_1: "辅导多名学生考入省重点中学；重解题技巧，擅长经典例题举一反三",
            rate_2: "擅长初/高中数学",
            avator: "/static/desktop/static/index/img/liusj_ea8505e.png",
            spe: "应试技巧点拨"
        }, {
            name: "何奇峰",
            school: "毕业于北京大学",
            exper: "4",
            rate_1: "高考化学单科省前10,培养多名学生理综提分超过30分",
            rate_2: "擅长化学/生物",
            avator: "/static/desktop/static/index/img/heqf_328cde9.png",
            spe: "总结归纳题型"
        }, {
            name: "孔舒凡",
            school: "毕业于伦敦大学",
            exper: "6",
            rate_1: "辅导学生英语提分超过30%，学生英语听力、口语有显著提高",
            rate_2: "擅长小初高英语",
            avator: "/static/desktop/static/index/img/kongsf_4d38d7b.png",
            spe: "提高英语学习动力"
        }, {
            name: "杨帆",
            school: "毕业于中国人民大学",
            exper: "4",
            rate_1: "辅导多名学生全国奥数大赛中获奖，学员最高提分62分",
            rate_2: "擅长数学/英语",
            avator: "/static/desktop/static/index/img/yangf_b106b23.png",
            spe: "合理安排学习计划"
        }, {
            name: "王侃",
            school: "毕业于上海交通大学",
            exper: "5",
            rate_1: "辅导学员成为省单科数学状元，多名学员提分超过15分",
            rate_2: "擅长数学",
            avator: "/static/desktop/static/index/img/wangk_681868f.png",
            spe: "应试技巧指导"
        }, {
            name: "郭雅楠",
            school: "毕业于人民大学",
            exper: "3",
            rate_1: "辅导学员考入北大、人大等985学校，教学经验丰富",
            rate_2: "擅长历史",
            avator: "/static/desktop/static/index/img/guoyn_5f799a9.png",
            spe: "课程延展性"
        }, {
            name: "朱莎",
            school: "毕业于南京大学",
            exper: "4",
            rate_1: "家长好评的“耐心好老师”，带出多位学生考入985学校",
            rate_2: "擅长化学",
            avator: "/static/desktop/static/index/img/zhus_443e360.png",
            spe: "教学耐心细心"
        }, {
            name: "陈鹏泽",
            school: "毕业于中山大学",
            exper: "3",
            rate_1: "辅导多名学生单科提高超过15分，选择正确率提高60%",
            rate_2: "擅长物理",
            avator: "/static/desktop/static/index/img/chenpz_5dbe00b.png",
            spe: "技巧解析到位"
        }, {
            name: "卜梦然",
            school: "毕业国际关系学院",
            exper: "5",
            rate_1: "辅导学员从0基础到英语名列班级前5，技巧备受肯定",
            rate_2: "擅长 英语",
            avator: "/static/desktop/static/index/img/pumr_f92d6d7.png",
            spe: "英语应试技巧"
        }, {
            name: "叶宗腾",
            school: "毕业哈尔滨工业大学",
            exper: "4",
            rate_1: "辅导学生数学从112分提高到132分，受学生肯定",
            rate_2: "擅长理科数学 ",
            avator: "/static/desktop/static/index/img/yezt_2c89022.png",
            spe: "教学态度认真"
        }], w = $(".person-3,.person-5,.person-10,.person-6"), C = $(".person-2,.person-4,.person-8,.person-11"),
        x = $(".person-1,.person-9,.person-7"), I = [360, 370, 450, 413, 417, 454, 475, 523, 520, 525, 489],
        _ = $(".person"), q = function () {
            var e = Math.floor(Math.random() * I.length);
            return $(_[e])
        }, k = !0, y = !1, j = !0;
    d.add({
        key: "teachPosition", $el: $(".teach-what-container").find(".what"), margin: 100, callback: function () {
            return k ? (k = !1, w.each(function (e, t) {
                var i = $(t).data("index");
                $(t).animate({top: I[i], opacity: 1}, 800, "easeOut")
            }), setTimeout(function () {
                C.each(function (e, t) {
                    var i = $(t).data("index");
                    $(t).animate({top: I[i], opacity: 1}, 800, "easeOut")
                })
            }, 200), setTimeout(function () {
                x.each(function (e, t) {
                    var i = $(t).data("index");
                    $(t).animate({top: I[i], opacity: 1}, 800, "easeOut")
                })
            }, 400), void setTimeout(function () {
                var e = q();
                i(e, !0, !0)
            }, 1e3)) : !1
        }
    }), _.hover(function () {
        if (y || !j) return !1;
        j = !1, y = !0, clearInterval(f), _.stop(!0, !0);
        {
            var e = $(this);
            $(this).data("index")
        }
        t(!0, e)
    }, function () {
    }), g.hover(function () {
    }, function () {
        clearInterval(f), n(), g.fadeOut(), y = !1, j = !0
    });
    var T = $("#video .videoIconContainer ul li");
    d.add({
        key: "videoIconContainerLi", $el: $("#video"), margin: 100, callback: function () {
            setTimeout(function () {
                $.each(T, function (e, t) {
                    $(t).animate({left: "-150", opacity: "1"}, 500 * (3 - e))
                })
            }, 600), d.remove("videoIconContainerLi")
        }
    });
    var O = $("#exClusiveSystem .loading"), S = $("#exClusiveSystem .flyin ul"),
        L = ($("#exClusiveSystem .flyin ul li"), 0);
    d.add({
        key: "exClusiveSystem", $el: $("#facilitiesAllCan"), margin: 100, callback: function () {
            function e() {
                O.find("li").eq(L).addClass("active"), L++
            }

            for (var t = 0; t < O.find("li").length; t++) setTimeout(function () {
                e(), O.find("li").eq(6).hasClass("active") && (r.isIE8 || r.isIE9 ? (O.fadeOut(300), $("#exClusiveSystem .flyin .in-top").show().addClass("animated bounceInLeft"), S.show().addClass("animated bounceInRight")) : (O.addClass("animated fadeOut"), $("#exClusiveSystem .flyin .in-top").show().addClass("animated bounceInLeft"), S.show().addClass("animated bounceInRight")))
            }, 100 * t);
            d.remove("exClusiveSystem")
        }
    });
    // var z, P = $(".TV-intro video"),
    //     B = ["/static/desktop/static/index/img/11_9c2650b.gif", "/static/desktop/static/index/img/22_0adcad8.gif", "/static/desktop/static/index/img/33_3e0db96.gif", "/static/desktop/static/index/img/44_1fd989d.gif"];
    // $animationInteractionLi = $(" #animationInteraction .list-intro .steps ul li"), r.isIE8 ? $(".TV-intro img").show().attr("src", B[0]) : (P[0].currentTime = 0, P[0].play()), $stepLi = $(" #animationInteraction .list-intro .promptcon p"), s(0), $("#animationInteraction .prompt").html($stepLi[0]), $.each($animationInteractionLi, function (e, t) {
    //     $(t).hover(function () {
    //         clearInterval(z), $(this).addClass("active").siblings().removeClass("active"), $(".dot-list span").eq(e).addClass("active").siblings().removeClass("active"), r.isIE8 ? $(".TV-intro img").attr("src", B[e]) : (P.trigger("pause"), P.eq(e).show().siblings().hide(), P[e].currentTime = 0, P[e].play()), $("#animationInteraction .prompt").html($stepLi[e])
    //     }, function () {
    //         s(e)
    //     })
    // })
}();