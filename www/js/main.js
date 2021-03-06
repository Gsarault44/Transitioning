/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/
function scrollbar() {
	/*http://manos.malihu.gr/jquery-custom-content-scroller/*/
	$(".bg-1 .content-wrapper").mCustomScrollbar();
	$(".bg-2 .content-wrapper").mCustomScrollbar();
	$(".bg-3 .content-wrapper").mCustomScrollbar();
	
	
	//demo fn
	$(".show-more").click(function(e){
		e.preventDefault();
		$(".bg-1 .content-wrapper").addClass("b-border");
		$(".expand").slideDown(500, function(){
			
			$(".bg-1 .content-wrapper").mCustomScrollbar("update");
			$('.more').hide();
		});
	});
	$(".show-more").click(function(e){
		e.preventDefault();
		$(".bg-2 .content-wrapper").addClass("b-border");
		$(".expand").slideDown(500, function(){
			
			$(".bg-2 .content-wrapper").mCustomScrollbar("update");
			$('.more').hide();
		});
	});
	$(".show-more").click(function(e){
		e.preventDefault();
		$(".bg-3 .content-wrapper").addClass("b-border");
		$(".expand").slideDown(500, function(){
			
			$(".bg-3 .content-wrapper").mCustomScrollbar("update");
			$('.more').hide();
		});
	});
}
function pagiLabel() {
	$('.next-title').each(function(){
		if($('.next-title:last-of-type').hasClass('current')){
			$('.next-title:first-of-type').addClass('next-current');
		}
	});
	$('.prev-title').each(function(){
		if($('.prev-title:first-of-type').hasClass('current')){
			$('.prev-title:last-of-type').addClass('prev-current');
		}
	});
}
function newsletter() {
	$('.subscribe-block').click(function(){
		$('.subscribe-form-block').fadeToggle();
		$('.close').on('click', function (){
			$('.subscribe-form-block').fadeOut();
		});
		
			$('.subscribe-submit').on('click', function(){
				if($('#mce-EMAIL').hasClass('mce_inline_error')) {
					$('.subscribe-form-block').delay(900).fadeOut();
				}else {
					
				}

			});
		
		return false;
	});
	$('#leftList .active').click(function(){
		return false;
	});
}

function initalClick(){
	if ($(window).width() < 768) {
		$('.gate').click(function(){
			$(this).find('.top-gate-wrapper').stop().animate({top: '-43%'}, 700, 'easeOutQuint');
			$(this).find('.bottom-gate-wrapper').stop().animate({bottom: '-42%'}, 700, 'easeOutQuint', function(){
				$('.content-wrapper').delay(600).css('z-index', '2');
				
			});
			$('.content').addClass('moveup');
		});
	}
	else {
		$('.gate').click(function(){
			$(this).find('.top-gate-wrapper').animate({top: '-40%'}, 700, 'easeOutQuint');
			$(this).find('.bottom-gate-wrapper').animate({bottom: '-35%'}, 700, 'easeOutQuint', function(){
				$('.content-wrapper').delay(600).css('z-index', '2');

			});
			$('.content').addClass('moveup');
		});
	}
	
}
function anystretch() {
	$('.bg-1 .sl-content-wrapper').anystretch("images/truck.jpg");
	$('.bg-2 .sl-content-wrapper').anystretch("images/tube.jpg", {speed: 150});
	$('.bg-3 .sl-content-wrapper').anystretch("images/circut.jpg", {speed: 150});
}

function zoomLight() {
	
	$('.zoomer').click(function(){
		$('.zoom-light').stop().fadeIn().css('display', 'table');
		$('.zoom-light').addClass('scale-up');
		$('.zoom-light').removeClass('scale-down');
		return false;
	});
	$('.zoom-light').click(function(){
		//$('.zoom-light').stop().delay(500).fadeOut();
		setTimeout( function() {
			$('.zoom-light').removeClass('scale-up');
			$('.zoom-light').addClass('scale-down');
			$('.zoom-light').stop().delay(900).fadeOut();
		}, 700 );
		return false;
	});
	
}


function zoomIn() {
	$('.sl-slider').addClass('scale-up');
}


var agent = navigator.userAgent,
	device = {
		Android: function() {return agent.match(/Android/i) ? true : false; },
		iOS: function() {return agent.match(/iPod|iPad|iPhone/i) ? true : false;},
		Blackberry: function() {return agent.match(/BlackBerry/i) ? true : false;},
		winPhone: function() {return agent.match(/IEMobile/i) ? true : false;},
		all: function() {return (device.Android() || device.iOS() || device.Blackberry() || device.winPhone());}
	};
function checkMode() {
	var o = window.orientation;

	if (o !== 90 && o !== -90) {
		$(".sl-slide").attr("data-orientation","vertical");
	} else {
		$(".sl-slide").attr("data-orientation","horizontal");
	}
}
	if (device.iOS()) {
	

	// dom onload check
	checkMode();

	// listen to changes
	$(window).bind('orientationchange', function() {
		checkMode();
	});
}
function orientation(){
	var windowH = $(window).height();
	var windowW = $(window).width();
	if (windowH > windowW) {
		$(".sl-slide").attr("data-orientation","vertical");
	}else {
		$(".sl-slide").attr("data-orientation","horizontal");
	}
}
function scaleing() {
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
			document.body.addEventListener('gesturestart', function () {
				viewportmeta.content = 'width=device-width, initial-scale=0.5';
			}, false);
		}
	}
}
var fastButtons = {

	replace: function() {
		// copy the current click events on document
		var clickEvents = jQuery.hasData( document ) && jQuery._data( document ).events.click;
		clickEvents = jQuery.extend(true, {}, clickEvents);

		// remove these click events
		$(document).off('click');

		// reset them as vclick events
		for (var i in clickEvents) {
			$(document).on('vclick', clickEvents[i].handler);
		}
	}
};


function slitSlider(){
	var Page = (function() {
	var $navArrows = $( '#nav-arrows' ),
		$nav = $( '#nav-dots > span' ),
		$index = $( '#index > span' ),
		$pagiP = $( '.nav-arrow-prev > div' ),
		$pagiN = $( '.nav-arrow-next > div' ),
	
		slitslider = $( '#slider' ).slitslider( {
			speed: 800,
			onBeforeChange : function( slide, pos ) {
				//$('.sl-slide').hide();
				$('.more').show();
				$('.expand').slideUp();
				//$('.content-wrapper').css('z-index', '2');
				$('.content-wrapper').removeAttr('style');
				$('.content').removeClass('moveup');
				// destroy scroll bar after every pagination
				$(".bg-1 .content-wrapper").mCustomScrollbar('destroy');
				$(".bg-2 .content-wrapper").mCustomScrollbar('destroy');
				$(".bg-3 .content-wrapper").mCustomScrollbar('destroy');

				

				
				$('.top-gate-wrapper').stop().animate({top: '0',}, 700, 'linear');
				$('.bottom-gate-wrapper').stop().animate({bottom: '0',}, 700, 'linear');
				

				

				// Status bar 
				$nav.removeClass( 'nav-dot-current' );
				$nav.eq( pos ).addClass( 'nav-dot-current' );
				// Index page 
				$index.removeClass( 'nav-dot-current' );
				$index.eq( pos ).addClass( 'nav-dot-current' );

				// Arrows Pagi Previous
				$pagiP.removeClass( 'current' );
				$pagiP.removeClass( 'prev-current' );
				$pagiP.eq( pos ).addClass( 'current' );
				$pagiP.eq( pos ).prev().addClass( 'prev-current' );

				// Arrows Pagi Next
				$pagiN.removeClass( 'current' );
				$pagiN.removeClass( 'next-current' );
				$pagiN.eq( pos ).addClass( 'current' );
				$pagiN.eq( pos ).next().addClass( 'next-current' );

				$('.sl-slider').removeClass('scale-up');
			},
			onAfterChange: function(){
				/* AUTO OPEN AFTER PAGINATION */

				//$('.gate .top-gate-wrapper').stop().delay(900).animate({top: '-40%'}, 700, 'easeOutQuint');
				//$('.gate .bottom-gate-wrapper').stop().delay(900).animate({top: '35%'}, 700,'easeOutQuint');

				/* CLOSE ALL NON-ACTIVE GATES AFTER PAGINATIONS */

				/*$(".gate:not(.sl-trans-elems .gate)").find('.top-gate-wrapper').stop(true, true).animate({top: '0'}, 300).dequeue();
				$(".gate:not(.sl-trans-elems .gate)").find('.bottom-gate-wrapper').stop(true, true).animate({top: '0'}, 300).dequeue();*/
				//$('.content-wrapper').css('z-index', '5');
				//$(".gate img").removeAttr('style');
				$('.content-wrapper').removeAttr('style');
				$('.content-wrapper').removeClass('b-border');
				
				
				pagiLabel();
				scrollbar();
				anystretch();
			}

		}),
		init = function() {
			initEvents();

		},
		initEvents = function() {
			// add navigation events
			$navArrows.children( ':last' ).on( 'click', function() {
				slitslider.next();
				
			});
			$navArrows.children( ':first' ).on( 'click', function() {
				slitslider.previous();
			});
			$nav.each( function( i ) {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {
						$nav.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );
					}
					slitslider.jump( i + 1 );
					//window.location.hash = $(this).attr("id");
				});
			});
			$index.each( function( i ) {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {
						$index.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );
					}
					
						slitslider.jump( i + 1 );
					//$('.zoom-light').delay(800).fadeOut();
				});
			});
			$pagiP.each( function() {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {
						$pagiP.removeClass( 'current' );
						$dot.addClass( 'current' );
					}
				});
				$('.prev-title:first-of-type').click(function(){
					$('.prev-title:last-of-type').addClass('current');
				});
			});
			$pagiN.each( function() {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {

						$pagiN.removeClass( 'current' );
						$dot.addClass( 'current' );
					}
				});
			});
			
		};

		return { init : init };
	})();

	
	Page.init();

	/**
	 * Notes: 
	 * 
	 * example how to add items:
	 */

	
	
	//var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
	
	// call the plugin's add method
	//ss.add($items);
}


/********************
** jQuery Window resize
********************/

$(window).resize(function(){
	orientation();
});
/********************
** jQuery Window Load
********************/

jQuery(window).load(function(){
	scaleing();
	slitSlider();
	anystretch();
	pagiLabel();
	initalClick();
	scrollbar();
	
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	fastButtons.replace();
	zoomIn();
	zoomLight();
	orientation();
	newsletter();
});