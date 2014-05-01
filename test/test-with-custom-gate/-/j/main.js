/********************
** Global Variables
********************/

/********************
** Event Listeners
********************/

function openGates() {

	$('.gate').each(function(){
		$(this).click(function(){
			$(this).find('.top-gate').animate({top: '-100%'}, 1100);
			$(this).find('.bottom-gate').animate({top: '100%'}, 1100, function(){
				$('.content').css('z-index', '9999');
				$(this).parent('.gate').fadeOut();
			});
			return false;
		});
	});
}
function nextGates() {
			$("#gate1 .next").click(function(){
				$("#gate1").fadeOut();
				$("#gate2, #gate2 .gate").fadeIn();
				$("#gate2").find('.top-gate').css('top', '-100%');
				$("#gate2").find('.bottom-gate').css('top','100%');
				$("#gate2").find('.top-gate').animate({top: '0'}, 1100);
				$("#gate2").find('.bottom-gate').animate({top: '50%'}, 1100, function(){
					$("#gate2").find('.top-gate').delay(300).animate({top: '-100%'}, 1100);
					$("#gate2").find('.bottom-gate').delay(300).animate({top: '100%'}, 1100, function(){
						$('.content').css('z-index', '9999');
						$(this).parent('.gate').fadeOut();
					});
				});
				return false;
			});
			$("#gate2 .next").click(function(){
				$("#gate2").fadeOut();
				$("#gate3, #gate3 .gate").fadeIn();
				$("#gate3").find('.top-gate').css('top', '-100%');
				$("#gate3").find('.bottom-gate').css('top','100%');
				$("#gate3").find('.top-gate').animate({top: '0'}, 1100);
				$("#gate3").find('.bottom-gate').animate({top: '50%'}, 1100, function(){
					$("#gate3").find('.top-gate').delay(300).animate({top: '-100%'}, 1100);
					$("#gate3").find('.bottom-gate').delay(300).animate({top: '100%'}, 1100, function(){
						$('.content').css('z-index', '9999');
						$(this).parent('.gate').fadeOut();
					});
				});
				return false;
			});
			$("#gate3 .next").click(function(){
				$("#gate3").fadeOut();
				$("#gate1 , #gate1 .gate").fadeIn();
				$("#gate1").find('.top-gate').css('top', '-100%');
				$("#gate1").find('.bottom-gate').css('top','100%');
				$("#gate1").find('.top-gate').animate({top: '0'}, 1100);
				$("#gate1").find('.bottom-gate').animate({top: '50%'}, 1100, function(){
					$("#gate1").find('.top-gate').delay(300).animate({top: '-100%'}, 1100);
					$("#gate1").find('.bottom-gate').delay(300).animate({top: '100%'}, 1100, function(){
						$('.content').css('z-index', '9999');
						$(this).parent('.gate').fadeOut();
					});
				});
				return false;
			});




			/*$(this).parents('.slide').next().siblings('.slide').fadeIn();
			$(this).parent('.slide').next().find('.gate').fadeIn();
			$('.content').css('z-index', '0');
			$(this).parent('.slide').next().find('.top-gate').animate({top: 0}, 1100);
			$(this).parent('.slide').next().find('.bottom-gate').animate({top: '50%'}, 1100);*/
	
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

});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function(){
	openGates();
	nextGates();

});