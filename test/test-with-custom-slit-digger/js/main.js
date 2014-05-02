/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/


function initalClick(){
	$('.gate').click(function(){
		$(this).find('.top-gate-wrapper').animate({top: '-40%'}, 600, 'easeOutCubic');
		$(this).find('.bottom-gate-wrapper').animate({top: '40%'}, 600, 'easeOutCubic', function(){
			$('.content-wrapper').css('z-index', '99');
		}).dequeue();
	});
}
function moreContent(){
	$('.hide').hide();
	$('.show-more').each(function(){
		$(this).click(function(){
			$(this).siblings('.expand').slideDown();
		});
	});
}
function slitSlider(){



	var Page = (function() {
	var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			$index = $( '#index > span' ),
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function( slide, pos ) {
					$('.content-wrapper').removeAttr('style');
					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );
					$index.removeClass( 'nav-dot-current' );
					$index.eq( pos ).addClass( 'nav-dot-current' );
					$('.content').removeClass('moveup');
				},
				onAfterChange: function(){
					$('.sl-trans-elems .gate').find('.top-gate-wrapper').stop().animate({top: '-40%'}, 700, 'easeInOutQuad');
					$('.sl-trans-elems .gate').find('.bottom-gate-wrapper').stop().animate({top: '40%'}, 700,'easeInOutQuad');
					$('.sl-trans-elems .content-wrapper').delay(500).css('z-index', '9999999');
					$(".gate:not(.sl-trans-elems .gate)").find('.top-gate-wrapper').animate({top: '0'}, 600);
					$(".gate:not(.sl-trans-elems .gate)").find('.bottom-gate-wrapper').animate({top: '0'}, 600);
					$(".gate img").removeAttr('style');
					$('.content-wrapper').removeAttr('style');
					
					$('.expand').slideUp();
					$('.content').addClass('moveup');
				}

			}),
			init = function() {
				initEvents();
			},
			initEvents = function() {
				// add navigation events
				$navArrows.children( ':last' ).on( 'click', function() {
					slitslider.next();
					return false;
				});
				$navArrows.children( ':first' ).on( 'click', function() {
					slitslider.previous();
					return false;
				});
				$nav.each( function( i ) {
					$( this ).on( 'click', function() {
						var $dot = $( this );
						if( !slitslider.isActive() ) {
							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );
						}
						slitslider.jump( i + 1 );
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
						$('.zoom-light').toggleClass('scale-up');
						$('.zoom-light').toggleClass('scale-down');
						return false;
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
		return false;
	});
	$('.zoom-light').click(function(){
		$('.zoom-light').fadeOut();
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
	});
	
}

/*
function theIndex(){
	$('.cube a').click(function(){
		//$('.slider-wrapper').unslick();
		$('.slider-wrapper').addClass('indexed');
		$('.slider-wrapper').removeClass('slick-slider');
		
		$(this).addClass('slider', function(){
			$(this).on('click', function(){
				$('.slider-wrapper').removeClass('indexed');
				
			});
		});


		return false;
	});
}
*/
/********************
** jQuery Window resize
********************/

$(window).resize(function(){

});
/********************
** jQuery Window Load
********************/

jQuery(window).load(function(){
	initalClick();
	slitSlider();
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	//theIndex();
	moreContent();
	zoomLight();
});