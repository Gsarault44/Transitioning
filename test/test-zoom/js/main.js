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
		$('.subscribe-form-block').fadeIn();
		$('.close').on('click', function (){
			$('.subscribe-form-block').fadeOut();
		});
	});
}

function initalClick(){
	if ($(window).width() < 768) {
		if($('.slick-list').hasClass('zoom-zoom')) {
			$('.gate').click(function(){
				$(this).find('.top-gate-wrapper').stop(true, true).animate({top: '-43%'}, 300, 'linear');
				$(this).find('.bottom-gate-wrapper').stop(true, true).animate({top: '42%'}, 300, 'linear', function(){
					$('.content-wrapper').css('z-index', '99');
				});
				return false;
			});
		}
	}
	else {
		if($('.slick-list').hasClass('zoom-zoom')) {
			$('.gate').click(function(){
				$(this).find('.top-gate-wrapper').stop(true, true).animate({top: '-45%'}, 300, 'linear');
				$(this).find('.bottom-gate-wrapper').stop(true, true).animate({top: '30%'}, 300, 'linear', function(){
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
			$('.content-wrapper').addClass('b-border');
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
		speed: 1400,
		slidesToShow: 1,
		easing: 'easeInExpo',
		onBeforeChange : function() {
			$('.content-wrapper').removeAttr('style');
			$('.content').removeClass('moveup');
			$('.slick-list').removeClass('zoom-zoom-in');
			$('.slick-active .gate').find('.top-gate-wrapper').stop(true, true).animate({top: '0'}, 200);
			$('.slick-active .gate').find('.bottom-gate-wrapper').stop(true, true).animate({top: '0'}, 200);
			$('.content-wrapper').removeClass('b-border');
			if ($('.slick-track').hasClass('zoom-zoom')){
				
			}else{
				$('.slick-list').addClass('zoom');
			}
			$('.expand').slideUp();
			$('.more').show();

		},
		onAfterChange: function(){
			$('.slick-list').removeClass('zoom');
			var topGate = $('.slick-active .gate').find('.top-gate-wrapper');
			var bottomGate = $('.slick-active .gate').find('.bottom-gate-wrapper');
			var notTopGate = $(".gate:not(.slick-active .gate)").find('.top-gate-wrapper');
			var notBottomGate = $(".gate:not(.slick-active .gate)").find('.bottom-gate-wrapper');
		/*	$(topGate, bottomGate).each(function(){
				$(this).css("height", $(this).height());
				$(this).css("width", $(this).width());
			});*/


			if ($('.slick-list').hasClass('zoom-zoom')){
			}else{
				if (windowH > windowW) {
					$(topGate).stop().delay(600).animate({top: '-40%'}, 400, 'linear');
					$(bottomGate).stop().delay(600).animate({top: '35%'}, 400,'linear', function(){
						$('.slick-active .content-wrapper').css('z-index', '9999999');
					});
				}else {
					$(topGate).stop().delay(600).animate({top: '-45%'}, 400, 'linear');
					$(bottomGate).stop().delay(600).animate({top: '30%'}, 400,'linear', function(){
						$('.slick-active .content-wrapper').css('z-index', '9999999');
					});
				}
			}
			$(notTopGate).animate({top: '0'}, 300);
			$(notBottomGate).animate({top: '0'}, 300);
			
			$(".gate img").removeAttr('style');
			$('.content-wrapper').removeAttr('style');
			
			
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
		$('.content-wrapper').removeClass('b-border');
		$('.gate').find('.top-gate-wrapper').stop(true, true).animate({top: '0'}, 300, 'linear');
		$('.gate').find('.bottom-gate-wrapper').stop(true, true).animate({top: '0'}, 300,'linear');
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