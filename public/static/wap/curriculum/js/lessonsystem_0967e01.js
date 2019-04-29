define("desktop:widget/zm-lessons/lessonSystem.js", function (e) {
    window.$ = window.jQuery = e("common:widget/jquery/1.11.3/jquery.js");
    var s = e("common:widget/tool/utils.js"), c = e("common:widget/tool/env.js"), n = s.listenerScrollInView();
    $(function () {
        $.ajax({url: '/wap/index/object',type: 'POST',dataType: 'json',contentType: 'application/json',data: {},success(s,d,g,e){
                if(s.code)
                {
                    var e = s.data
                    !function () {
                        function s(e) {
                            e instanceof $ && (this.box = e, this.gradeIndex = 0, this.subjectIndex = 0, this.init())
                        }

                        s.prototype.init = function () {
                            var s = "";
                            $.each(e, function (e, c) {
                                s += "<li>" + c.name + "</li>"
                            }), this.box.find(".gradeList").html(s), this.box.find(".gradeList li").eq(e.length - 1).addClass("last"), this.bindEvent(), this.box.find(".gradeList li").eq(0).trigger("mouseover")
                        }, s.prototype.bindEvent = function () {
                            var s = this;
                            this.box.find(".gradeList li").on("mouseover", function () {
                                var c = "";
                                s.gradeIndex = $(this).index(), $(this).addClass("active").siblings().removeClass("active");
                                for (var n = 0; n < e[s.gradeIndex].subjects.length; n++) {
                                    var r = e[s.gradeIndex].subjects[n];
                                    r && (c += "<li >" + e[s.gradeIndex].subjects[n].name + "</li>")
                                }
                                s.box.find(".subjects").css("opacity", 0), s.box.find(".subjects").html(c), s.box.find(".subjects").animate({opacity: "1"}, 500), s.box.find(".subjects li").on("mouseover", function () {
                                    s.subjectIndex = $(this).index(), $(this).addClass("active").siblings().removeClass("active"), s.fillContents()
                                }), s.box.find(".subjects li").eq(0).trigger("mouseover")
                            })
                        }, s.prototype.getGradeIndex = function () {
                            return this.gradeIndex
                        }, s.prototype.getSubejectIndex = function () {
                            return this.subjectIndex
                        }, s.prototype.fillContents = function () {
                            var s = this, c = this.getGradeIndex(), n = this.getSubejectIndex(), r = e[c].subjects[n].contents;
                            $.each(r, function (e, c) {
                                var n = s.box.find(".lv").eq(e), r = "";
                                $.each(c.describe, function (e, s) {
                                    r += "<p>" + s + "</p>"
                                }), r += '<div class="triangle"></div>', n.find(".score").html(c.score), n.find(".content").html($(r)), n.find(".content p").css("opacity", 0), n.find(".content p").animate({opacity: "1"}, 1e3)
                            })
                        }, new s($("#lessonSystem"))
                    }(), function () {
                        function e() {
                            c.CSS_SUPPORT.ANIMATE && c.CSS_SUPPORT.TRANSFORM ? ($("#lessonSystem .lv.lv1").find(".content").css("height", "185px"), $("#lessonSystem .lv.lv2").find(".content").css("height", "222px"), $("#lessonSystem .lv.lv3").find(".content").css("height", "272px"), $("#lessonSystem .lv.lv4").find(".content").css("height", "321px"), $("#lessonSystem .lv.lv5").find(".content").css("height", "370px"), $("#lessonSystem .lv").find("h3.level").css("top", "0"), $("#lessonSystem .lv").find(".score").css("top", "0")) : ($("#lessonSystem .lv.lv1").find(".content").animate({height: "185px"}, 300), $("#lessonSystem .lv.lv2").find(".content").animate({height: "222px"}, 300), $("#lessonSystem .lv.lv3").find(".content").animate({height: "272px"}, 300), $("#lessonSystem .lv.lv4").find(".content").animate({height: "321px"}, 300), $("#lessonSystem .lv.lv5").find(".content").animate({height: "370px"}, 300), $("#lessonSystem .lv").find("h3.level").animate({top: "0"}, 300), $("#lessonSystem .lv").find(".score").animate({top: "0"}, 300))
                        }

                        var s = "lessonSystem", r = $("#lessonSystem .poshelper");
                        n.add({
                            key: s, $el: r, margin: 0, callback: function () {
                                e(), n.remove(s)
                            }
                        })
                    }()
                }

            },
        });


    })
});