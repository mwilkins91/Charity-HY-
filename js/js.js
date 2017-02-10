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
})