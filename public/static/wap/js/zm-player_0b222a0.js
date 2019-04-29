define("desktop:widget/zm-player/zm-player.js", function (e, i, t) {
    function n(e, i) {
        var t = this, i = r.extend({}, i, _);
        l.call(this);
        var n = r(h);
        e.is("video") ? (n.insertBefore(e), n.find(".player").append(e)) : (r.each(["src", "loop", "autoplay", "preload", "ratio"], function (t, n) {
            if (!p.call(i, n) && e.data(n)) {
                var s = e.data(n);
                i[n] = /^(?:0|false|none)$/i.test(s) ? !1 : /^(?:1|true|)$/i.test(s) ? !0 : s
            }
        }), e.append(n.find(".zm-player-container").unwrap()).addClass("zm-player"), n = e, e = n.find(".player")), this._$container = n, this._media = new (c.supportVideo ? u : d)(e, i), this._ratio = m[i.ratio] || m["16:9"], this._waiting = !1, this._paused = !0, this._ready = !1, this._load = !1, this._fullscreen = !1, this._hideBarTimer = !1, this._darging = !1, this._error = !1;
        var s = n.find(".player-ui"), o = s.find(".control-bar"), v = o.find(".progress-bar .buffer"),
            w = o.find(".progress-bar .progress"), y = o.find(".time.duration"), S = o.find(".time.current-time");
        this._switchState("is-paused"), this._media.on("load", function () {
            t._load = !0, t._ready = !1, t._draging = !1, t._error = !1, t._switchState("", "is-error is-ready is-paused is-waiting"), y.text(a(0)), S.text(a(0)), v.css("width", 0), w.css("width", 0)
        }), this._media.on("ready", function () {
            y.text(a(t.getDuration())), t._switchState("is-ready"), t._ready = !0
        }), this._media.on("waiting", function () {
            t._waiting = !0, t._error || t._paused && !t._media.option.autoplay || t._switchState("is-waiting", "is-paused is-hide-control-bar")
        }), this._media.on("canplay", function () {
            t._waiting = !1, t._switchState("", "is-waiting")
        }), this._media.on("ended", function () {
            t.pause(), t._switchState("is-paused", "is-waiting is-hide-control-bar")
        }), this._media.on("volumeChange", function () {
            t._ready && (t._media.isMuted() ? t._switchState("is-muted") : t._switchState("", "is-muted"))
        }), this._media.on("error", function () {
            t._ready = !1, t._error = !0, t._switchState("is-error", "is-paused is-ready is-waiting")
        }), this._media.on("buffer", function (e, i) {
            v.css("width", 100 * Math.min(1, Math.max(0, e / i)) + "%")
        }), this._media.on("progress", function (e, i) {
            S.text(a(e)), t._draging || w.css("width", 100 * Math.min(1, Math.max(0, e / i)) + "%")
        }), r.each(f, function (e, i) {
            t._media.on(i, function () {
                t.fireEvent(i, arguments)
            })
        }), n.on("click", ".J-trigger-reload", function (e) {
            t.load(), t.play(), e.stopPropagation()
        }), n.on("click", ".J-trigger-play", function () {
            t._error || (t._paused ? t.play() : t.pause())
        }), n.on("click", ".J-trigger-mute", function () {
            t._ready && t.mute(!t._media.isMuted())
        }), n.on("click", ".J-trigger-fullscreen", function () {
            t._fullscreen ? t.exitFullScreen() : t.enterFullScreen()
        }), n.on("mousemove", function (e) {
            clearTimeout(t._hideBarTimer), t._switchState("", "is-hide-control-bar"), r(e.target).closest(".control-bar").length || (t._hideBarTimer = setTimeout(function () {
                t._waiting || t._paused || t._switchState("is-hide-control-bar")
            }, 4e3))
        }), n.on("mouseleave", function () {
            clearTimeout(t._hideBarTimer), t._hideBarTimer = setTimeout(function () {
                t._waiting || t._paused || t._switchState("is-hide-control-bar")
            }, 800)
        });
        {
            var z = o.find(".progress-bar"), k = z.find(".time-flag"), x = z.find(".progress");
            x.find("b")
        }
        k.textEl = k.find("span")[0], z.on("mousemove", function (e) {
            if (t._ready) {
                k.addClass("show");
                var i = e.clientX - z.offset().left;
                k.textEl.innerHTML = a(i / z.innerWidth() * t._media.getDuration()), k.css("left", i - k.outerWidth() / 2)
            }
        }), z.on("click", function (e) {
            if (t._ready) {
                var i = e.clientX - z.offset().left;
                t.seek(i / z.innerWidth() * t._media.getDuration())
            }
        }), z.on("mouseleave", function () {
            k.removeClass("show")
        });
        var F = 0, T = null;
        z.on("mousedown", function (e) {
            if (t._ready) {
                var i = e.clientX - z.offset().left;
                clearTimeout(T), t.seek(i / z.innerWidth() * t._media.getDuration()), F = e.clientX - i, t._draging = !0, t._switchState("is-seeking")
            }
        }), b.on("mousemove", function (e) {
            t._draging && (x.css("width", e.clientX - z.offset().left), T = T || setTimeout(function () {
                var i = e.clientX - z.offset().left;
                t.seek(i / z.innerWidth() * t._media.getDuration()), T = null
            }, 100))
        }), b.on("mouseup", function (e) {
            if (t._draging) {
                t._draging = !1;
                var i = e.clientX - z.offset().left;
                clearTimeout(T), t.seek(i / z.innerWidth() * t._media.getDuration()), t._switchState("", "is-seeking")
            }
        }), g.on("resize", function () {
            t._fullscreen && t.resize()
        }), b.on("fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function () {
            var e = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement;
            e && t._fullscreen || t.exitFullScreen()
        }), this.resize()
    }

    function s(e) {
        return ("0" + e).slice(-2)
    }

    function a(e) {
        e = Math.floor(e) || 0;
        var i = e % 60;
        e = Math.floor(e / 60);
        var t = e % 60, n = Math.floor(e / 60);
        return s(n) + ":" + s(t) + ":" + s(i)
    }

    var r = e("common:widget/jquery/1.11.3/jquery.js"), o = e("common:widget/tool/utils.js"),
        c = e("common:widget/tool/env.js"),
        l = (e("common:widget/tool/event.js"), e("desktop:widget/zm-player/media/media.js").Media),
        d = e("desktop:widget/zm-player/media/flash-media.js"), u = e("desktop:widget/zm-player/media/html5-media.js"),
        h = '<div class="zm-player">\n    <div class="zm-player-container">\n        <div class="player"></div>\n        <div class="player-ui">\n            <div class="state J-trigger-play">\n                <i class="icon pause">&#xe606;</i>\n                <img src="" alt="" class="cover-img" style="width: 100%;height: 100%"/>\n                <div class="loading-spinner">\n                    <b class="spinner-container container1">\n                        <b class="circle1"></b>\n                        <b class="circle2"></b>\n                        <b class="circle3"></b>\n                        <b class="circle4"></b>\n                    </b>\n                    <b class="spinner-container container2">\n                        <b class="circle1"></b>\n                        <b class="circle2"></b>\n                        <b class="circle3"></b>\n                        <b class="circle4"></b>\n                    </b>\n                    <b class="spinner-container container3">\n                        <b class="circle1"></b>\n                        <b class="circle2"></b>\n                        <b class="circle3"></b>\n                        <b class="circle4"></b>\n                    </b>\n                </div>\n                <div class="error">\n                    <div class="wrap">\n                        <div class="inner-wrap">\n                            <b class="logo"></b>\n                            <div class="text">\n                                <h2 class="title">播放出错了哦！</h2>\n                                <span class="message">你可以点击 "重新加载" 尝试解决!</span>\n                                <div class="button-wrap">\n                                    <a href="javascript:;" class="button J-trigger-reload">重新加载</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="control-bar">\n                <button class="control button play J-trigger-play" title="播放/暂停">\n                    <i class="icon"></i>\n                </button>\n                <span class="control time current-time">00:00</span>\n                <div class="control progress-bar">\n                    <b class="time-flag"><span>20:30</span><i class="arrow"></i></b>\n                    <div class="progress">\n                        <b></b>\n                    </div>\n                    <div class="buffer"></div>\n                </div>\n                <span class="control time duration">00:00</span>\n                <button class="control button volume J-trigger-mute">\n                    <i class="icon"></i>\n                </button>\n                <button class="control button full-screen J-trigger-fullscreen">\n                    <i class="icon"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>',
        f = ["load", "play", "pause", "ready", "waiting", "canplay", "volumeChange", "progress", "buffer", "seek", "ended"],
        m = {"16:9": 9 / 16, "4:3": .75}, _ = {ratio: "16:9"},
        p = (/(safari)[ \/]([\w.]+)/.exec(c.UA) && !/(chrome)[ \/]([\w.]+)/.exec(c.UA), Object.prototype.hasOwnProperty),
        g = r(window), b = r(document), v = n.prototype = o.create(l.prototype, n);
    v.load = function (e) {
        this._media.load(e)
    }, v.play = function () {
        this._paused = !1, this._load || this.load(), this._waiting ? this._switchState("is-waiting", "is-paused is-hide-control-bar") : this._switchState("", "is-waiting is-paused"), this._media.play()
    }, v.replay = function () {
        this._media.replay()
    }, v.pause = function () {
        this._paused = !0, this._switchState("is-paused", "is-waiting is-hide-control-bar"), this._media.pause()
    }, v.mute = function (e) {
        this._media.mute(e)
    }, v.seek = function (e) {
        this._paused = !1, this._switchState("", "is-paused"), this._media.seek(e)
    }, v.getCurrentTime = function () {
        return this._media.getCurrentTime()
    }, v.getDuration = function () {
        return this._media.getDuration()
    }, v.enterFullScreen = function () {
        var e = this._$container;
        this._fullscreen || (c.supportFullScreen && r.each(["requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"], function (i, t) {
            return e[0][t] ? (e[0][t](), !1) : void 0
        }), e.css({
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "99999"
        }), this._fullscreen = !0, this._switchState("is-fullscreen"), this.resize(), this.fireEvent("enterFullScreen"))
    }, v.exitFullScreen = function () {
        var e = this, i = this._$container;
        this._fullscreen && (c.supportFullScreen && r.each(["exitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"], function (e, i) {
            document[i] && document[i]()
        }), i.css({position: "static"}), this._fullscreen = !1, this._switchState("", "is-fullscreen"), setTimeout(function () {
            e.resize()
        }, 100), this.fireEvent("exitFullScreen"))
    }, v.resize = function () {
        var e = this._$container.innerWidth(), i = this._$container.innerHeight();
        if (this._media instanceof u) {
            var t = this._media.getPlayer();
            this._media.resize(e, this._ratio * e), t.css("marginTop", (i - t.outerHeight()) / 2)
        } else this._media.resize(e, i);
        this.fireEvent("resize")
    }, v._switchState = function (e, i) {
        this._$container.removeClass(i), this._$container.addClass(e)
    }, t.exports = n
});