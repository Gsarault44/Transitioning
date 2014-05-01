/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/


function initalClick(){
	$('.gate').click(function(){
		$('.gate').find('.top-gate-wrapper').animate({top: '-45%'}, 800);
		$('.gate').find('.bottom-gate-wrapper').animate({top: '50%'}, 800, function(){
			$('.content-wrapper').css('z-index', '9999999');
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
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function( slide, pos ) {
					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );
				},
				onAfterChange: function(){
					$(".gate img").removeAttr('style');
					$('.content-wrapper').removeAttr('style');
					$(".gate:not(.sl-trans-elems .gate)").find('.top-gate-wrapper').animate({top: '0'}, 500).dequeue();
					$(".gate:not(.sl-trans-elems .gate)").find('.bottom-gate-wrapper').animate({top: '0'}, 500).dequeue();
					$('.sl-trans-elems .gate').find('.top-gate-wrapper').animate({top: '-45%'}, 500);
					$('.sl-trans-elems .gate').find('.bottom-gate-wrapper').animate({top: '50%'}, 500, function(){
						$('.sl-trans-elems .content-wrapper').delay(500).css('z-index', '9999999');
					}).dequeue();
					$('.expand').slideUp();
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
});