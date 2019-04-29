!function () {
    require("common:widget/jquery/easing/easing.js"), require("common:widget/jquery/mousewheel/mousewheel.js");
    var e = require("common:widget/jquery/1.11.3/jquery.js"), n = require("common:widget/tool/utils.js"), t = n.listenerScrollInView();
    !function () {
        function n() {
            function n() {
                t()
            }

            function t(n) {
                function t(e, n) {
                    function t() {
                        var n;
                        return o += u, o >= i ? void e.text(r(i)) : (n = r(o), e.text(n), void setTimeout(function () {
                            t()
                        }, a))
                    }

                    function r(e) {
                        if (999 > e)return e;
                        e = parseInt(e);
                        var n = "";
                        return n = e.toString()
                    }

                    var i = parseFloat(e.attr("number")) || 0, u = parseInt(i / ((n - 300) / a)), o = 0;
                    t()
                }

                var r = i.find(".dataNum"), a = 60, n = n || 1e3;
                r.each(function (r, i) {
                    var a = e(i);
                    t(a.find(".number"), n)
                })
            }

            return {play: n}
        }

        var r = "animateBigData", i = e("#dataService"), a = n();
        t.add({
            key: r, $el: i.find(".dataNum"), margin: 100, callback: function () {
                a.play(), t.remove(r)
            }
        })
    }()
}();