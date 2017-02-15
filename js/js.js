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
		$('.accordianButton').children('.accordianIcon').children('span').css('transform', 'initial');
		}
		else {
			$('.accordianButton').siblings('p').slideUp('slow');
			$('.accordianButton').children('.accordianIcon').children('span').css('transform', 'initial');
			$(this).siblings('p').slideToggle('slow');
			$(this).children('.accordianIcon').children('span').css('transform', 'rotate(90deg)');

		}
	});

		var options = {
			watchCSS: true,
			initialIndex: 1,
			wrapAround: true
		};
		$('.carousel').flickity(options);
	

	//from stackoverflow 
	function isElementInViewport(elem) {
	    var $elem = $(elem);

	    // Get the scroll position of the page.
	    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	    var viewportTop = $(scrollElem).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();

	    // Get the position of the element on the page.
	    var elemTop = Math.round( $elem.offset().top );
	    var elemBottom = elemTop + $elem.height();

	    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	}

	// Check if it's time to start the animation.
	function checkAnimation() {
	    var $elem = $('.causeInfo .loadingBar svg');

	    // If the animation has already been started
	    if ($elem.hasClass('start')) return;

	    if (isElementInViewport($elem)) {
	        // Start the animation
	        $elem.addClass('start');
	    }
	}

	// Capture scroll events
	$(window).scroll(function(){
	    checkAnimation();
	});	
})