/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/
function hashing() {
	if($('.sl-slide:visible')) {
		var hash = $('.sl-slide:visible').attr('id');
		window.location.hash = hash ;
	}
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
		$('.subscribe-form-block:not(.subscribe-form-wrapper').on('click', function (){
			$('.subscribe-form-block').fadeToggle();
		});
	});
}

function initalClick(){
	if ($(window).width() < 768) {
		$('.gate').click(function(){
			$(this).find('.top-gate-wrapper').animate({top: '-43%'}, 600, 'easeOutCubic');
			$(this).find('.bottom-gate-wrapper').animate({top: '42%'}, 600, 'easeOutCubic', function(){
				$('.content-wrapper').css('z-index', '99');
			});
		});
	}
	else {
		$('.gate').click(function(){
			$(this).find('.top-gate-wrapper').animate({top: '-40%'}, 600, 'easeOutCubic');
			$(this).find('.bottom-gate-wrapper').animate({top: '35%'}, 600, 'easeOutCubic', function(){
				$('.content-wrapper').css('z-index', '99');
			});
		});
	}
	
}
function moreContent(){
	$('.hide').hide();
	$('.show-more').each(function(){
		$(this).click(function(){
			$(this).parent().parent().find('.expand').slideDown();
			$(this).parent('.more').hide();
			$(this).parents('.content-wrapper').addClass('b-border');
			return false;
		});
	});
}
function slitSlider(){
	var Page = (function() {
	var $navArrows = $( '#nav-arrows' ),
		$nav = $( '#nav-dots > span' ),
		$index = $( '#index > span' ),
		$pagiP = $( '.nav-arrow-prev > div' ),
		$pagiN = $( '.nav-arrow-next > div' ),

		slitslider = $( '#slider' ).slitslider( {

			onBeforeChange : function( slide, pos ) {
				$('.content-wrapper').removeAttr('style');
				$('.content').removeClass('moveup');
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

				
			},
			onAfterChange: function(){
				var topGate = $('.sl-trans-elems .gate').find('.top-gate-wrapper');
				var bottomGate = $('.sl-trans-elems .gate').find('.bottom-gate-wrapper');
				var notTopGate = $(".gate:not(.sl-trans-elems .gate)").find('.top-gate-wrapper');
				var notBottomGate = $(".gate:not(.sl-trans-elems .gate)").find('.bottom-gate-wrapper');

				$(topGate).stop().animate({top: '-40%'}, 700, 'easeInOutQuad');
				$(bottomGate).stop().animate({top: '35%'}, 700,'easeInOutQuad', function(){
					$('.sl-trans-elems .content-wrapper').css('z-index', '9999999');
				});
				$(notTopGate).animate({top: '0'}, 600);
				$(notBottomGate).animate({top: '0'}, 600);
				
				$(".gate img").removeAttr('style');
				$('.content-wrapper').removeAttr('style');
				$('.content-wrapper').removeClass('b-border');
				$('.more').show();
				$('.expand').slideUp();
				$('.content').addClass('moveup');
				
				hashing();
				pagiLabel();

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
					window.location.hash = $(this).attr("id");
					return false;
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

					$('.zoom-light').fadeOut();
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

function zoomLight() {
	
	$('.zoomer').click(function(){
		$('.zoom-light').fadeToggle().css('display', 'table');
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
	});
	$('.zoom-light').click(function(){
		$('.zoom-light').fadeOut();
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
	});
	
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
	slitSlider();
	pagiLabel();
	initalClick();
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	//theIndex();
	moreContent();
	zoomLight();
	orientation();
	newsletter();
});