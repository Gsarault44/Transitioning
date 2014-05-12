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
function pagiappend() {
	if ($('#horsepower-brainpower').hasClass('slick-active')){
		$('.next-wrapper').prepend('<p>Hindsight</p><p>Foresight</p>');
		$('.prev-wrapper').prepend('<p>Computers</p><p>Compassion</p>');
	}
	if ($('#hindsight-foresite').hasClass('slick-active')){
		$('.next-wrapper').prepend('<p>Horsepower</p><p>BrainPower</p>');
		$('.prev-wrapper').prepend('<p>Computers</p><p>Compassion</p>');
	}
	if ($('#computers-compassion').hasClass('slick-active')){
		$('.next-wrapper').prepend('<p>Horsepower</p><p>BrainPower</p>');
		$('.prev-wrapper').prepend('<p>Hindsight</p><p>Foresight</p>');
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
		$('.close').on('click', function (){
			$('.subscribe-form-block').fadeOut();
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
			$(this).find('.top-gate-wrapper').animate({top: '-45%'}, 600, 'easeOutCubic');
			$(this).find('.bottom-gate-wrapper').animate({top: '30%'}, 600, 'easeOutCubic', function(){
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
function slick() {

	$('.slider').slick({

		dots: true,
		infinite: true,
		speed: 1800,
		slidesToShow: 1,
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
			
			// Status bar 
		},
		onAfterChange: function(){
			$('.slick-list').removeClass('zoom');
			var topGate = $('.slick-active .gate').find('.top-gate-wrapper');
			var bottomGate = $('.slick-active .gate').find('.bottom-gate-wrapper');
			var notTopGate = $(".gate:not(.slick-active .gate)").find('.top-gate-wrapper');
			var notBottomGate = $(".gate:not(.slick-active .gate)").find('.bottom-gate-wrapper');

			$(topGate).stop().delay(400).animate({top: '-45%'}, 700, 'easeInOutQuad');
			$(bottomGate).stop().delay(400).animate({top: '30%'}, 700,'easeInOutQuad', function(){
				$('.slick-active .content-wrapper').css('z-index', '9999999');
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
			pagiappend();
		}

	});
	
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

	/*$('.zoomer').click(function(){
		$('.zoom-light').fadeToggle().css('display', 'table');
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
		return false;
	});
	$('.zoom-light').click(function(){
		$('.zoom-light').fadeOut();
		$('.zoom-light').toggleClass('scale-up');
		$('.zoom-light').toggleClass('scale-down');
		return false;
	});
	*/

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
	
	slick();
	pagiappend();
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