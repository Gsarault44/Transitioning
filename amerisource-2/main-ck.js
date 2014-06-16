/********************
** Global Variables
********************//********************
** Event Listeners
********************/function scrollbar(){$(".bg-1 .content-wrapper").mCustomScrollbar({scrollInertia:0});$(".bg-2 .content-wrapper").mCustomScrollbar({scrollInertia:0});$(".bg-3 .content-wrapper").mCustomScrollbar({scrollInertia:0});$(".show-more").click(function(e){e.preventDefault();$(".bg-1 .content-wrapper").addClass("b-border");$(".expand").slideDown(500,function(){$(".bg-1 .content-wrapper").mCustomScrollbar("update");$(".more").hide()})});$(".show-more").click(function(e){e.preventDefault();$(".bg-2 .content-wrapper").addClass("b-border");$(".expand").slideDown(500,function(){$(".bg-2 .content-wrapper").mCustomScrollbar("update");$(".more").hide()})});$(".show-more").click(function(e){e.preventDefault();$(".bg-3 .content-wrapper").addClass("b-border");$(".expand").slideDown(500,function(){$(".bg-3 .content-wrapper").mCustomScrollbar("update");$(".more").hide()})})}function pagiLabel(){$(".next-title").each(function(){$(".next-title:last-of-type").hasClass("current")&&$(".next-title:first-of-type").addClass("next-current")});$(".prev-title").each(function(){$(".prev-title:first-of-type").hasClass("current")&&$(".prev-title:last-of-type").addClass("prev-current")})}function newsletter(){$(".subscribe-block").click(function(){$("#mce-success-response").hide();$(".subscribe-input, .indicates-required, .subscribe-heading, .subscribe-text, .subscribe-submit").show();$(".subscribe-form-block").fadeToggle();$(".close").on("click",function(){$(".subscribe-form-block").fadeOut()});return!1})}function initalClick(){var e=$(window).width();e<768?$(".gate").click(function(){$(".ie8 .top-gate-wrapper").stop().css("top","-70%");$(".ie8 .bottom-gate-wrapper").stop().css("top","-80%");$(".bottom-gate-wrapper").transition({y:"100%"});$(".top-gate-wrapper").transition({y:"-100%"},function(){$(".content-wrapper").delay(600).css("z-index","2")});$(".content").addClass("moveup")}):window.innerHeight>window.innerWidth?$(".gate").click(function(){$(".ie8 .top-gate-wrapper").stop().css("top","-70%");$(".ie8 .bottom-gate-wrapper").stop().css("top","-80%");$(".bottom-gate-wrapper").transition({y:"80%"});$(".top-gate-wrapper").transition({y:"-80%"},function(){$(".content-wrapper").delay(600).css("z-index","2")});$(".content").addClass("moveup")}):$(".gate").click(function(){$(".ie8 .top-gate-wrapper").stop().css("top","-70%");$(".ie8 .bottom-gate-wrapper").stop().css("top","-80%");$(".bottom-gate-wrapper").transition({y:"75%"});$(".top-gate-wrapper").transition({y:"-84%"},function(){$(".content-wrapper").delay(600).css("z-index","2")});$(".content").addClass("moveup")})}function stretch(){$(".bg-1 .sl-content-wrapper").anystretch("images/truck.jpg");$(".bg-2 .sl-content-wrapper").anystretch("images/tube.jpg");$(".bg-3 .sl-content-wrapper").anystretch("images/circut.jpg")}function zoomLight(){$(".zoomer").click(function(){$(".zoom-light").stop().fadeIn().css("display","table");$(".zoom-light").addClass("scale-up");$(".zoom-light").removeClass("scale-down");return!1});$(".zoom-light").click(function(){$("html, body").animate({scrollTop:0},100);setTimeout(function(){$(".zoom-light").removeClass("scale-up");$(".zoom-light").addClass("scale-down");$(".zoom-light").stop().delay(600).fadeOut()},1100);return!1})}function zoomIn(){$(".sl-slider").addClass("scale-up")}function checkMode(){var e=window.orientation;e!==90&&e!==-90?$(".sl-slide").attr("data-orientation","vertical"):$(".sl-slide").attr("data-orientation","horizontal")}function orientation(){var e=$(window).height(),t=$(window).width();e>t?$(".sl-slide").attr("data-orientation","vertical"):$(".sl-slide").attr("data-orientation","horizontal")}function slitSlider(){var e=function(){var e=$("#nav-arrows"),t=$("#nav-dots > span"),n=$("#index > span"),r=$(".nav-arrow-prev > div"),i=$(".nav-arrow-next > div"),s=$("#slider").slitslider({speed:1200,onBeforeChange:function(e,s){$(".content-wrapper").removeAttr("style");$(".ie8 .top-gate-wrapper").stop().animate({top:"0"},300,"linear");$(".ie8 .bottom-gate-wrapper").stop().animate({bottom:"0"},300,"linear");$(".more").show();$(".expand").slideUp();$(".content").removeClass("moveup");$(".bg-1 .content-wrapper").mCustomScrollbar("destroy");$(".bg-2 .content-wrapper").mCustomScrollbar("destroy");$(".bg-3 .content-wrapper").mCustomScrollbar("destroy");t.removeClass("nav-dot-current");t.eq(s).addClass("nav-dot-current");n.removeClass("nav-dot-current");n.eq(s).addClass("nav-dot-current");r.removeClass("current");r.removeClass("prev-current");r.eq(s).addClass("current");r.eq(s).prev().addClass("prev-current");i.removeClass("current");i.removeClass("next-current");i.eq(s).addClass("current");i.eq(s).next().addClass("next-current");$(".sl-slider").removeClass("scale-up")},onAfterChange:function(){$(".content-wrapper").removeAttr("style");$(".content-wrapper").removeClass("b-border");pagiLabel();scrollbar();stretch()}}),o=function(){u()},u=function(){e.children(":last").on("click",function(){s.next()});e.children(":first").on("click",function(){s.previous()});t.each(function(e){$(this).on("click",function(){var n=$(this);if(!s.isActive()){t.removeClass("nav-dot-current");n.addClass("nav-dot-current")}s.jump(e+1)})});n.each(function(e){$(this).on("click",function(){var t=$(this);if(!s.isActive()){n.removeClass("nav-dot-current");t.addClass("nav-dot-current")}s.jump(e+1)})});r.each(function(){$(this).on("click",function(){var e=$(this);if(!s.isActive()){r.removeClass("current");e.addClass("current")}});$(".prev-title:first-of-type").click(function(){$(".prev-title:last-of-type").addClass("current")})});i.each(function(){$(this).on("click",function(){var e=$(this);if(!s.isActive()){i.removeClass("current");e.addClass("current")}})})};return{init:o}}();e.init()}var agent=navigator.userAgent,device={Android:function(){return agent.match(/Android/i)?!0:!1},iOS:function(){return agent.match(/iPod|iPad|iPhone/i)?!0:!1},Blackberry:function(){return agent.match(/BlackBerry/i)?!0:!1},winPhone:function(){return agent.match(/IEMobile/i)?!0:!1},all:function(){return device.Android()||device.iOS()||device.Blackberry()||device.winPhone()}};if(device.iOS()){checkMode();$(window).bind("orientationchange",function(){checkMode()})}var fastButtons={replace:function(){var e=jQuery.hasData(document)&&jQuery._data(document).events.click;e=jQuery.extend(!0,{},e);$(document).off("click");for(var t in e)$(document).on("vclick",e[t].handler)}};jQuery(window).load(function(){fastButtons.replace();initalClick();slitSlider();stretch();pagiLabel();scrollbar();orientation()});jQuery(document).ready(function(){fastButtons.replace();zoomIn();zoomLight();newsletter();orientation();$(window).on("orientationchange",function(e){$(".anystretch").remove();setTimeout(function(){stretch()},100)})});$(window).resize(function(){checkMode();orientation()});