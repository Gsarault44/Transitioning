/********************
** Global Variables
********************//********************
** Event Listeners
********************/function initalClick(){$(".gate").click(function(){$(this).find(".top-gate-wrapper").animate({top:"-40%"},600);$(this).find(".bottom-gate-wrapper").animate({top:"40%"},600,function(){$(".content-wrapper").css("z-index","9999999")}).dequeue()})}function moreContent(){$(".hide").hide();$(".show-more").each(function(){$(this).click(function(){$(this).siblings(".expand").slideDown()})})}function slitSlider(){var e=function(){var e=$("#nav-arrows"),t=$("#nav-dots > span"),n=$("#slider").slitslider({onBeforeChange:function(e,n){t.removeClass("nav-dot-current");t.eq(n).addClass("nav-dot-current")},onAfterChange:function(){$(".sl-trans-elems .gate").find(".top-gate-wrapper").animate({top:"-40%"},500).dequeue();$(".sl-trans-elems .gate").find(".bottom-gate-wrapper").animate({top:"40%"},500,function(){$(".sl-trans-elems .content-wrapper").delay(500).css("z-index","9999999")}).dequeue();$(".gate:not(.sl-trans-elems .gate)").find(".top-gate-wrapper").animate({top:"0"},400).dequeue();$(".gate:not(.sl-trans-elems .gate)").find(".bottom-gate-wrapper").animate({top:"0"},400).dequeue();$(".gate img").removeAttr("style");$(".content-wrapper").removeAttr("style");$(".expand").slideUp()}}),r=function(){i()},i=function(){e.children(":last").on("click",function(){n.next();return!1});e.children(":first").on("click",function(){n.previous();return!1});t.each(function(e){$(this).on("click",function(){var r=$(this);if(!n.isActive()){t.removeClass("nav-dot-current");r.addClass("nav-dot-current")}n.jump(e+1);return!1})})};return{init:r}}();e.init()}$(window).resize(function(){});jQuery(window).load(function(){initalClick();slitSlider()});jQuery(document).ready(function(){moreContent()});