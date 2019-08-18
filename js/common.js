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
		$('body').toggleClass('overflow-hidden');

	// resetting scroll for menu
		$('.mobile-nav-inner').delay(400).queue(function(reset_scroll) {
			$(this).scrollTop(0);
			reset_scroll();
		});
	});


// hide the menu and return the standard view of the hamburger
	$('#mobile_nav a').on('click', function(event) {
		event.preventDefault();

		$('#hamburger').removeClass('is-active');
		$('#mobile_nav').fadeToggle();
		$('body').removeClass('overflow-hidden');
	});


// removing classes for menu if window resize
	$(window).on('resize', function() {
		var width = $(document).width();

		if ( width > 991 ) {
			$('body').removeClass('overflow-hidden');
			$('#hamburger').removeClass('is-active');
			$('#mobile_nav').attr('style', 'display: none');
		}
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


// owl-carousel for section: reviews
	$('.reviews-carousel').owlCarousel({
		items: 1,
		smartSpeed: 700,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoHeight: true
	});


// wow-js
	wow = new WOW({
		offset: 200
	});
	wow.init();


// downloading video fons
	$(document).ready(function() {
		var width = $(document).width();

		if ( width > 991 ) {
			$('.v-intro').append('<source src="videos/v_intro-bg.mp4" type="video/mp4">');
			$('.v-team').append('<source src="videos/v_team-bg.mp4" type="video/mp4">');
			$('.v-reviews').append('<source src="videos/v_reviews-bg.mp4" type="video/mp4">');
			$('.v-footer').append('<source src="videos/v_footer-bg.mp4" type="video/mp4">');
		}
	});

});
