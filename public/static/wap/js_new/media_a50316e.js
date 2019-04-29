define("desktop:widget/wzcl-player/media/media.js", function (e, t) {
    function o(e, t) {
        u.call(this), this.option = i.extend({}, t, r(e)), this.sources = this.option.sources || [], this.option.src && (this.sources.push({
            type: s(this.option.src),
            url: this.option.src
        }), delete this.option.src)
    }

    function r(e) {
        var t = {};
        if (!e || !e.is("video"))return t;
        if (i.each(["autoplay", "loop", "poster", "preload"], function (o, r) {
                t[r] = e[0].hasAttribute(r) && "none" !== e.attr(r)
            }), t.sources = [], e.attr("src")) {
            var o = e.attr("src");
            t.sources.push({type: s(o) || p.mp4, url: o})
        }
        return e.find("source").each(function (e, o) {
            var r = i(o), n = r.attr("src");
            t.sources.push({type: r.attr("type") || s(n) || p.mp4, url: n})
        }), t
    }

    function s(e) {
        var t = ((e || "").toString().match(/(\.[^.]+?)?(?:\?[^?]*?)?(?:#[^#]*)?$/)[1] || "").slice(1).toLowerCase();
        return a.call(p, t) ? p[t] : "video/" + t
    }

    var i = e("common:widget/jquery/1.11.3/jquery.js"), n = e("common:widget/tool/utils.js"), u = e("common:widget/tool/event.js"), a = Object.prototype.hasOwnProperty, p = {
        mp4: "video/mp4",
        ogg: "video/ogg",
        webm: "video/webm",
        flv: "video/flash"
    };
    t.MediaType = p;
    var c = o.prototype = n.create(u.prototype, o);
    c.load = function (e) {
        var t = this.sources, e = e || t;
        "string" == typeof e ? t = [{
            url: e,
            type: s(e)
        }] : e instanceof Array && e !== t ? t = e : e.url && e.type && (t = [{
            url: e.url,
            type: e.type
        }]), this.sources = t, this.fireEvent("loadBefore")
    };
    var l = function () {
    };
    c.play = l, c.replay = l, c.pause = l, c.mute = l, c.isPlaying = l, c.getCurrentTime = l, c.seek = l, c.getVolume = l, c.setVolume = l, c.getDuration = l, c.speed = l, c.exitFullScreen = l, c.exitFullScreen = l, c.destroy = l, c.resize = l, c.getPlayer = l, t.Media = o
});