/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/
function hashing() {
	/*if($('.slide:visible')) {
		var hash = $('.slick-active').attr('id');
		window.location.hash = hash ;
	}*/
}
function newsletter() {
	$('.subscribe-block').click(function(){
		$('.subscribe-form-block').fadeToggle();
		$('.close').on('click', function (){
			$('.subscribe-form-block').fadeOut();
		});
	});
}

function initalClick(){
	if ($(window).width() < 768) {
		if($('.slick-list').hasClass('zoom-zoom')) {
			$('.gate').click(function(){
				$(this).find('.top-gate-wrapper').animate({top: '-43%'}, 600, 'easeOutCubic');
				$(this).find('.bottom-gate-wrapper').animate({top: '42%'}, 600, 'easeOutCubic', function(){
					$('.content-wrapper').css('z-index', '99');
				});
				return false;
			});
		}
	}
	else {
		if($('.slick-list').hasClass('zoom-zoom')) {
			$('.gate').click(function(){
				$(this).find('.top-gate-wrapper').animate({top: '-45%'}, 600, 'easeOutCubic');
				$(this).find('.bottom-gate-wrapper').animate({top: '30%'}, 600, 'easeOutCubic', function(){
					$('.content-wrapper').css('z-index', '99');
				});
				return false;
			});
		}else{
			
		}
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
function slick() {
	
	var windowH = $(window).height();
	var windowW = $(window).width();
	
	$('.slider').slick({

		dots: true,
		infinite: false,
		touch: false,
		swipe: true,
		draggable: false,
		speed: 1800,
		slidesToShow: 1,
		easing: 'easeInExpo',
		onBeforeChange : function() {
			$('.content-wrapper').removeAttr('style');
			$('.content').removeClass('moveup');
			$('.slick-list').removeClass('zoom-zoom-in');
			$('.slick-active .gate').find('.top-gate-wrapper').animate({top: '0'}, 200);
			$('.slick-active .gate').find('.bottom-gate-wrapper').animate({top: '0'}, 200);
			if ($('.slick-track').hasClass('zoom-zoom')){
				
			}else{
				$('.slick-list').addClass('zoom');
			}
			$('.slick-track').delay(2000).animate();
			$('.expand').slideUp();
			$('.more').show();
		},
		onAfterChange: function(){
			$('.slick-list').removeClass('zoom');
			var topGate = $('.slick-active .gate').find('.top-gate-wrapper');
			var bottomGate = $('.slick-active .gate').find('.bottom-gate-wrapper');
			var notTopGate = $(".gate:not(.slick-active .gate)").find('.top-gate-wrapper');
			var notBottomGate = $(".gate:not(.slick-active .gate)").find('.bottom-gate-wrapper');
			if (windowH > windowW) {
				$(topGate).stop().delay(400).animate({top: '-40%'}, 700, 'easeInOutQuad');
				$(bottomGate).stop().delay(400).animate({top: '35%'}, 700,'easeInOutQuad', function(){
					$('.slick-active .content-wrapper').css('z-index', '9999999');
				});
			}else {
				$(topGate).stop().delay(400).animate({top: '-45%'}, 700, 'easeInOutQuad');
				$(bottomGate).stop().delay(400).animate({top: '30%'}, 700,'easeInOutQuad', function(){
					$('.slick-active .content-wrapper').css('z-index', '9999999');
				});
			}
			
			$(notTopGate).animate({top: '0'}, 600);
			$(notBottomGate).animate({top: '0'}, 600);
			
			$(".gate img").removeAttr('style');
			$('.content-wrapper').removeAttr('style');
			$('.content-wrapper').removeClass('b-border');
			
			if ($('#horsepower-brainpower').hasClass('slick-active')){
				$('.next-wrapper button p:first').html('Hindsight');
				$('.next-wrapper button p:last').html('Foresight');
				$('.prev-wrapper button p:first').html('Computers');
				$('.prev-wrapper button p:last').html('Compassion');
			}else if ($('#hindsight-foresight').hasClass('slick-active')){
				$('.prev-wrapper button p:first').html('Horsepower');
				$('.prev-wrapper button p:last').html('BrainPower');
				$('.next-wrapper button p:first').html('Computers');
				$('.next-wrapper button p:last').html('Compassion');
			}else if ($('#computers-compassion').hasClass('slick-active')){
				$('.next-wrapper button p:first').html('Horsepower');
				$('.next-wrapper button p:last').html('BrainPower');
				$('.prev-wrapper button p:first').html('Hindsight');
				$('.prev-wrapper button p:last').html('Foresight');
			}
			hashing();
		}

	});
	
}

function pagiText() {
	$('.next-wrapper button').html('<p>Hindsight</p><p>Foresight</p>');
	$('.prev-wrapper button').html('<p>Computers</p><p>Compassion</p>');
}
function zoomLight() {
	
	$('.zoomer').click(function(){
		$('.gate').find('.top-gate-wrapper').animate({top: '0'}, 700, 'easeInOutQuad');
		$('.gate').find('.bottom-gate-wrapper').animate({top: '0'}, 700,'easeInOutQuad');
		$('.slick-cloned').hide();
		$('.slick-list').addClass('zoom-zoom');
		$('.slick-track').addClass('slick-dots');
		$('.slick-list').removeClass('zoom-zoom-in');
		$('.zoom-zoom .slide').on('click', function(){
			$('.slick-track').removeClass('slick-dots');
			$('.slick-list').removeClass('zoom-zoom');
			$('.slick-list').addClass('zoom-zoom-in');
			$('.slick-cloned').show();
			return false;
		});
		return false;
	});
	$('.bg-1').on('click',function(){
		$('.slick-dots a.1').click();
		$('.slick-list').removeClass('zoom');
		$('.slick-track').removeClass('zoom-zoom');
		return false;
	});
	$('.bg-2').on('click',function(){
		$('.slick-dots a.2').click();
		$('.slick-list').removeClass('zoom');
		$('.slick-track').removeClass('zoom-zoom');
		return false;
	});
	$('.bg-3').on('click', function(){
		$('.slick-dots a.3').click();
		$('.slick-list').removeClass('zoom');
		$('.slick-track').removeClass('zoom-zoom');
		return false;
	});
}

function anyStretch() {
	$('.bg-1').anystretch("images/truck.jpg", {speed: 150});
	$('.bg-2').anystretch("images/tube.jpg", {speed: 150});
	$('.bg-3').anystretch("images/circut.jpg", {speed: 150});
}

/********************
** jQuery Window resize
********************/

$(window).resize(function(){
});
/********************
** jQuery Window Load
********************/

jQuery(window).load(function(){
	anyStretch();
	slick();
	pagiText();
	initalClick();
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	//theIndex();
	moreContent();
	zoomLight();
	newsletter();
});