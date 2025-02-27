(function($){
	"use strict";

	// Feather Icon Js
	feather.replace();

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	
	// Magnific Popup
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('#header').addClass("is-sticky");
		}
		else{
			$('#header').removeClass("is-sticky");
		}
	});

	// Popup Gallery
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	// Others Option Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Works Slides
	$('.works-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin:30,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1500: {
				items: 4
			}
		}
	});

	// Boxes Slides
	$('.boxes-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});

	// Testimonials Slides
	$('.testimonials-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1500: {
				items: 5
			}
		}
	});

	// Feedback Carousel
	var $imagesSlider = $(".feedback-slides .client-feedback>div"),
	$thumbnailsSlider = $(".client-thumbnails>div");
	// images options
	$imagesSlider.slick({
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		fade: true,
		autoplay: true,
		draggable: true,
		asNavFor: ".client-thumbnails>div",
		prevArrow: '.client-feedback .prev-arrow',
		nextArrow: '.client-feedback .next-arrow'
	});
	// Thumbnails options
	$thumbnailsSlider.slick({
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: true,
		centerMode: true,
		draggable: false,
		focusOnSelect: true,
		asNavFor: ".feedback-slides .client-feedback>div",
		prevArrow: '.client-thumbnails .prev-arrow',
		nextArrow: '.client-thumbnails .next-arrow',
	});
	
	// Go to Top
	$(function(){
		//Scroll event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').fadeIn('slow');
			if (scrolled < 300) $('.go-top').fadeOut('slow');
		});  
		//Click event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  0);
		});
	});
	
	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});

	// Tabs
	$("#tabs li").on("click", function(){
		var tab = $(this).attr("id");
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
			$(this).addClass("active");
			$(this).siblings().removeClass("active").addClass("inactive");
			$("#" + tab + "_content").addClass("show");
			$("#" + tab + "_content").siblings("div").removeClass("show");
		}
	});
	
	// Count Time 
	function makeTimer() {
		var endTime = new Date("August 19, 2026 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 1000);

	// Products Details Image Slides
	var owl = $(".products-details-image-slides");
	owl.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplay: true,
		items: 1,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
	});

	// Tabs JS
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);
	
	// ML Feedback Slides
	$('.ml-feedback-slides').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true,
		items: 1
	});

	// ML Projects Slides
	$('.ml-projects-slides').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	// Agency Portfolio Home Slides
	$('.agency-portfolio-home-slides').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: false,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
	
	// imagesLoaded
	$('.grid').imagesLoaded(function() {
		// filter items on button click
		$('.shorting-menu').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
	});

	// Shorting Menu
	$('.shorting-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// Agency Portfolio Feedback Slides
	$('.agency-portfolio-feedback-slides').owlCarousel({
		loop: false,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1
	});

	// Isotop Js
	var $grid = $('.projects-items').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-item'
		}
	});

	// Agency Portfolio-Partner Slides
	$('.agency-portfolio-partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
	});
	
	// WOW.js
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});

	
	// Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));


// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}
// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
		document.getElementById('slider').checked = false;
	} else {
		setTheme('theme-light');
	  document.getElementById('slider').checked = true;
	}
})();