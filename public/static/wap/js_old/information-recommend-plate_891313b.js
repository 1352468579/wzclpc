define("desktop:widget/information-recommend-plate/information-recommend-plate.js",function(t){{var o=t("common:widget/jquery/1.11.3/jquery.js");t("common:widget/moment/2.8.4/moment.js")}t("desktop:widget/dotdotdot/jquery.dotdotdot.min.js"),function(){var t=o(".articleinnerBox").find(".articleList");
t.on("click","img",function()
{var t=o(this).parents("li").attr("data-tid");
location.href="/Wap/News/newArticle/id/"+t})
}()});