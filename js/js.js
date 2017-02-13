$(function(){
	$('.menuToggle').click(function(event) {
		$('.navHamburger ul').toggleClass('hidden');
	});

	$('.main-carousel').flickity({
		wrapAround: true,
		autoPlay: 2000,
		pageDots: false,
		cellAlign: 'left',
		contain: true
	});

	$('.accordianButton').click(function(event) {
		if($(this).siblings('p').is(":visible")) {
		$('.accordianButton').siblings('p').slideUp('slow');
		$('.accordianButton').children('.accordianIcon').children('i').css('transform', 'initial');
		}
		else {
			$('.accordianButton').siblings('p').slideUp('slow');
			$('.accordianButton').children('.accordianIcon').children('i').css('transform', 'initial');
			$(this).siblings('p').slideToggle('slow');
			$(this).children('.accordianIcon').children('i').css('transform', 'rotate(90deg)');

		}
	});

		var options = {
			watchCSS: true,
			initialIndex: 1,
			wrapAround: true
		};
		$('.carousel').flickity(options);
		
})