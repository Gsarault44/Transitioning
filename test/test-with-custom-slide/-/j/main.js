/********************
** Global Variables
********************/


/********************
** Event Listeners
********************/

function slick() {
	$('.slider-wrapper').slick({
		draggable:false,
		dots: true,
		infinite: true,
		arrows:true,
		speed:800,
		onAfterChange: function(){
			$(".gate img").removeAttr('style');
			$('.content-wrapper').removeAttr('style');
			
			$('.slick-active .gate').find('.top-gate').transition({ y: '-55%' });
			$('.slick-active .gate').find('.bottom-gate').transition({ y: '55%' }, function(){
				$('.slick-active .content-wrapper').css('z-index', '9999999');
			}).dequeue();
			/*$(".gate:not(.slick-active .gate)").find('.top-gate').animate({top: '0'}, 500).dequeue();
			$(".gate:not(.slick-active .gate)").find('.bottom-gate').animate({top: '50%'}, 500).dequeue();
			$('.slick-active .gate').find('.top-gate').animate({top: '-30%'}, 500);
			$('.slick-active .gate').find('.bottom-gate').animate({top: '80%'}, 500, function(){
				$('.slick-active .content-wrapper').css('z-index', '9999999');
			}).dequeue();*/
			$('.expand').slideUp();
		}
	});
	$('.slick-next, .slick-prev').click(function(){
		$(".gate:not(.slick-active .gate)").find('.top-gate').transition({ y: '-100%' });
		$(".gate:not(.slick-active .gate)").find('.bottom-gate').transition({ y: '100%' });
	});
	
}
/*function openGates() {
	$('.content-wrapper').removeAttr('style');
	$(".gate:not(.slick-active .gate)").find('.top-gate').animate({top: '0'}, 800).dequeue();
	$(".gate:not(.slick-active .gate)").find('.bottom-gate').animate({top: '50%'}, 800).dequeue();
	$('.slick-active .gate').find('.top-gate').animate({top: '-30%'}, 800);
	$('.slick-active .gate').find('.bottom-gate').animate({top: '80%'}, 800, function(){
		$('.slick-active .content-wrapper').css('z-index', '9999999');
	}).dequeue();
	
	
}*/
function initalClick(){
	$('.gate').one('click', function(){
		$('.slick-active .gate').find('.top-gate').animate({top: '-30%'}, 800);
		$('.slick-active .gate').find('.bottom-gate').animate({top: '80%'}, 800, function(){
			$('.slick-active .content-wrapper').css('z-index', '9999999');
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

/********************
** jQuery Window resize
********************/

$(window).resize(function(){

});
/********************
** jQuery Window Load
********************/

jQuery(window).load(function(){
	slick();
	initalClick();
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	theIndex();
	moreContent();
});