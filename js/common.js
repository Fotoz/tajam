$(function() {

// smooth-scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		var sectionId = $(this).data('scroll'),
				sectionOffset = $(sectionId).offset().top;

		$('#desktop_nav a').removeClass('is-active');
		$('#mobile_nav a').removeClass('is-active');
		$(this).addClass('is-active');

		$('html, body').animate({
			scrollTop: sectionOffset - 79
		}, 700);
	});


// fixed-navigation
	var header = $('#header'),
			introH = $('#intro').innerHeight(),
			scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on('scroll load resize', function() {
		introH = $('#intro').innerHeight() - 80;
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if ( scrollPos >= introH ) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	};


// hamburger-toggle
	$('#hamburger').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('#mobile_nav').fadeToggle();
	});


// hide the menu and return the standard view of the hamburger
	$('#mobile_nav a').on('click', function(event) {
		event.preventDefault();

		$('#mobile_nav').fadeToggle();
		$('#hamburger').removeClass('is-active');
	});


// owl-carousel for section: intro
	$('.intro-carousel').owlCarousel({
		items: 1,
		smartSpeed: 700
	});


// iframe for section: v-Story
	$('#iframe_poster').on('click', function() {
	  var poster = $(this),
	  		wrapper = poster.closest('#v_story');

	  videoPlay(wrapper);
	});

	function videoPlay(wrapper) {
	  var iframe = wrapper.find('#iframe'),
	  		src = iframe.data('src');

	  wrapper.addClass('hide-poster');
	  iframe.attr('src', src);
	};

});
