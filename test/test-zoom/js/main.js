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
<<<<<<< HEAD
		slide: '.slide',

=======
		easing: 'easeInExpo',
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
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
	
<<<<<<< HEAD
	/*$('.zoomer').click(function(){
=======
	$('.zoomer').click(function(){
		$('.content-wrapper').removeClass('b-border');
		$('.gate').find('.top-gate-wrapper').stop(true, true).animate({top: '0'}, 300, 'linear');
		$('.gate').find('.bottom-gate-wrapper').stop(true, true).animate({top: '0'}, 300,'linear');
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
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
<<<<<<< HEAD
	});*/
	
	$('.zoomer').click(function(){
		$('.zoom-light').fadeToggle().css('display', 'table');
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
=======
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
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
	});
	$('.bg-3').on('click', function(){
		$('.slick-dots a.3').click();
		$('.slick-list').removeClass('zoom');
		$('.slick-track').removeClass('zoom-zoom');
		return false;
	});
<<<<<<< HEAD
	
	/*$('.zoom-layout li:first').click(function(){
		$('.slick-list').removeClass('zoom-zoom-in');
		var bt1 = $(".slick-dots").find('button').text('1');
		$(bt1).click();
	});
	$('.zoom-layout li + li  a').click(function(){
		$('.slick-list').removeClass('zoom-zoom-in');
		var bt2 = $(".slick-dots").find('button').text('2');
		$(bt2).click();
	});*/
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
=======
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
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
<<<<<<< HEAD
	zoomLight();
=======
	anyStretch();
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
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
<<<<<<< HEAD
	
	orientation();
=======
	zoomLight();
>>>>>>> e8cd354a67f9e23c0db75eb0430c370d0bc3de03
	newsletter();
});