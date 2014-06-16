/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/

function hashing() {
/*
	if($('#horsepower-brainpower').css('display', 'block')) {
		window.location.hash = '#horsepower-brainpower' ;
	}
	else if($('#hindsight-foresight').css('display', 'block')) {
		window.location.hash = '#hindsight-foresight' ;
	}
	else if($('#computers-compassion').css('display', 'block')) {
		window.location.hash = 'computers-compassion' ;
	}
	*/


		var hash = $('.sl-trans-elems').attr('id');
		window.location.hash = hash ;

}

function scrollbar() {
	/*http://manos.malihu.gr/jquery-custom-content-scroller/*/
	$(".bg-1 .content-wrapper").mCustomScrollbar({scrollInertia:0});
	$(".bg-2 .content-wrapper").mCustomScrollbar({scrollInertia:0});
	$(".bg-3 .content-wrapper").mCustomScrollbar({scrollInertia:0});
	
	
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
		$('#mce-success-response').hide();
		$('.subscribe-input, .indicates-required, .subscribe-heading, .subscribe-text, .subscribe-submit').show();
		$('.subscribe-form-block').fadeToggle();

		$('.close').on('click', function (){
			$('.subscribe-form-block').fadeOut();
		});
		
		return false;
	});
	/*$('#leftList .active').click(function(){
		return false;
	});*/
}

function initalClick(){
	//var windowH = $(window).height();
	var windowW = $(window).width();
	if (windowW < 768) {
		$('.gate').click(function(){
			$('.ie8 .top-gate-wrapper').stop().css('top', '-70%');
			$('.ie8 .bottom-gate-wrapper').stop().css('top', '-80%');
			$('.bottom-gate-wrapper').transition({ y: '100%' });
			$('.top-gate-wrapper').transition({ y: '-100%' }, function(){
				$('.content-wrapper').delay(600).css('z-index', '2');
			});
			//$(this).find('.top-gate-wrapper').stop().animate({top: '-43%'}, 400, 'easeOutQuint');
			//$(this).find('.bottom-gate-wrapper').stop().animate({top: '42%'}, 400, 'easeOutQuint', function(){
				//
				
			//});
			$('.content').addClass('moveup');
		});
	}
	else if(window.innerHeight > window.innerWidth){
		$('.gate').click(function(){
			$('.ie8 .top-gate-wrapper').stop().css('top', '-70%');
			$('.ie8 .bottom-gate-wrapper').stop().css('top', '-80%');
			$('.bottom-gate-wrapper').transition({ y: '80%' });
			$('.top-gate-wrapper').transition({ y: '-80%' }, function(){
				$('.content-wrapper').delay(600).css('z-index', '2');
			});
			//$(this).find('.top-gate-wrapper').animate({top: '-40%'}, 400, 'easeOutQuint');
			//$(this).find('.bottom-gate-wrapper').animate({top: '35%'}, 400, 'easeOutQuint', function(){
				//$('.content-wrapper').delay(600).css('z-index', '2');

			//});
			$('.content').addClass('moveup');
		});
	}
	else {
		$('.gate').click(function(){
			$('.ie8 .top-gate-wrapper').stop().css('top', '-70%');
			$('.ie8 .bottom-gate-wrapper').stop().css('top', '-80%');

			$('.bottom-gate-wrapper').transition({ y: '75%' });
			$('.top-gate-wrapper').transition({ y: '-84%' }, function(){
				$('.content-wrapper').delay(600).css('z-index', '2');
			});
			//$(this).find('.top-gate-wrapper').animate({top: '-40%'}, 400, 'easeOutQuint');
			//$(this).find('.bottom-gate-wrapper').animate({top: '35%'}, 400, 'easeOutQuint', function(){
				//$('.content-wrapper').delay(600).css('z-index', '2');

			//});
			$('.content').addClass('moveup');
		});
	}
	
}
function stretch() {
	$('.bg-1 .sl-content-wrapper').anystretch("images/truck.jpg");
	$('.bg-2 .sl-content-wrapper').anystretch("images/tube.jpg");
	$('.bg-3 .sl-content-wrapper').anystretch("images/circut.jpg");
}

function zoomLight() {
	
	$('.zoomer').click(function(){
		$('.zoom-light').stop().fadeIn().css('display', 'table');
		$('.zoom-light').addClass('scale-up');
		$('.zoom-light').removeClass('scale-down');
		return false;
	});
	$('.zoom-light').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 100);
		setTimeout( function() {
			$('.zoom-light').removeClass('scale-up');
			$('.zoom-light').addClass('scale-down');
			$('.zoom-light').stop().delay(600).fadeOut();
		}, 1100 );
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
		all: function() {return (device.Android() || device.iOS() || device.Blackberry() || device.winPhone()); }
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


var slitslider;

function slitSlider(){
	var Page = (function() {
	var $navArrows = $( '#nav-arrows' ),
		$nav = $( '#nav-dots > span' ),
		$index = $( '#index > span' ),
		$pagiP = $( '.nav-arrow-prev > div' ),
		$pagiN = $( '.nav-arrow-next > div' ),
	
		slitslider =  $( '#slider' ).slitslider( {
			speed: 1200,
			
			onBeforeChange : function( slide, pos ) {
				$('.content-wrapper').removeAttr('style');
				//$('.bottom-gate-wrapper').transition({ y: '0%' }, 500, 'ease-out');
				//$('.top-gate-wrapper').transition({ y: '0%' }, 500, 'ease-out');
				$('.ie8 .top-gate-wrapper').stop().animate({top: '0',}, 300, 'linear');
				$('.ie8 .bottom-gate-wrapper').stop().animate({bottom: '0',}, 300, 'linear');
				//$('.sl-slide').hide();
				$('.more').show();
				$('.expand').slideUp();
				//$('.content-wrapper').css('z-index', '2');
				
				$('.content').removeClass('moveup');
				// destroy scroll bar after every pagination
				$(".bg-1 .content-wrapper").mCustomScrollbar('destroy');
				$(".bg-2 .content-wrapper").mCustomScrollbar('destroy');
				$(".bg-3 .content-wrapper").mCustomScrollbar('destroy');

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
				hashing();

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
				stretch();
				
			}

		}),
		init = function() {
			initEvents();
		},
		initEvents = function() {
			// add navigation events

			$navArrows.children( ':last' ).on( 'click', function() {
				slitslider.next();
				//hashing();
			});
			$navArrows.children( ':first' ).on( 'click', function() {
				slitslider.previous();
				//hashing();
			});
			$nav.each( function( i ) {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {
						$nav.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );
					}
					slitslider.jump( i + 1 );
					//hashing();
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
					//hashing();
				});
				
			});
			$pagiP.each( function() {
				$( this ).on( 'click', function() {
					var $dot = $( this );
					if( !slitslider.isActive() ) {
						$pagiP.removeClass( 'current' );
						$dot.addClass( 'current' );
					}
					//hashing();
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
					//hashing();
				});

			});

			console.log("sort change start");
			loadPage();
			
			
		};

		return { init : init };
	})();

	slitslider = $('#slider').data('slitslider');
	console.log(slitslider+" asdfsafsdf");

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

var jumpvar = 0;
var page = 'horsepower-brainpower';

function sortPage(e) {


    var $sections = e.value.split('/');

    var $page = $sections[1];
    var $id = $sections[2];
    var $loc = $sections[3];

   if ($page == null || $page == '') page = 'horsepower-brainpower';

	switch($page){
   		case "horsepower-brainpower":
   			jumpvar = 1;
   			break;
   		case "hindsight-foresight":
   			jumpvar = 2;
   			break;
   		case "computers-compassion":
   			jumpvar = 3;
   			break;
   	}
   	 
   	if(slitslider != null)  loadPage();

   

}

function loadPage(){
	

   	slitslider.jump( jumpvar );

}





/********************
** jQuery Window Load
********************/

jQuery(window).load(function(){
		// When ready...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);

	
	fastButtons.replace();
	initalClick();
	slitSlider();
	stretch();
	pagiLabel();
	scrollbar();
	orientation();
	

});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	fastButtons.replace();
	zoomIn();
	zoomLight();
	newsletter();
	orientation();
	$( window ).on( "orientationchange", function() {
		$('.anystretch').remove();
		setTimeout( function() {
			stretch();
		}, 100 );
	});
	$.address.change(sortPage);
	window.location.hash = '#horsepower-brainpower' ;
	
	
});

/********************
** jQuery Window resize
********************/

$(window).resize(function(){
	checkMode();
	orientation();
});