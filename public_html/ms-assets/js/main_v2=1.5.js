(function($) {
	'use strict';

	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	
	// Header Sticky, Go To Top JS JS
	$(window).on('scroll', function() {
		
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');

	});
	$('.home-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// Testimonials Slider JS
	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});
	$('.services-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});
	$('.main-service-slider').owlCarousel({
		items: 4,
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 3000,
        autoplayHoverPause: false,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 4,
			},
			1200:{
				items: 4,
			}
		}
	});

	// Partner Slider JS
	$('.partner-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>",
		],
		responsive:{
			0:{
				items: 2,
			},
			576:{
				items: 4,
			},
			768:{
				items: 5,
			},
			1200:{
				items: 7,
			}
		}
	});

	// Related Product JS
	$('.related-product').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 3,
			},
			1200:{
				items: 3,
			}
		}
	});
	
	$('.page-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
	});

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// FAQ Accordion JS
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

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2021 17:00:00 PDT");			
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
	setInterval(function() { makeTimer(); }, 300);

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	})


	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
	}

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

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// WOW JS
	/*if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}*/



	// Product View Slider JS
	var bigimage = $("#big");
	var thumbs = $("#thumbs");
	// Var Totalslides = 10;
	var syncedSecondary = true;
	
	bigimage
		.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: true,
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		]
	})
	.on("changed.owl.carousel", syncPosition);
	
	thumbs
		.on("initialized.owl.carousel", function() {
		thumbs
		.find(".owl-item")
		.eq(0)
		.addClass("current");
	})
	.owlCarousel({
		items: 5,
		dots: false,
		nav: false,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
		smartSpeed: 200,
		slideSpeed: 500,
		slideBy: 4,
		responsiveRefreshRate: 100
	})
	.on("changed.owl.carousel", syncPosition2);
	
	function syncPosition(el) {
		//if loop is set to false, then you have to uncomment the next line
		//var current = el.item.index;
	
		//to disable loop, comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
	
		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//to this
		thumbs
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
		var onscreen = thumbs.find(".owl-item.active").length - 1;
		var start = thumbs
		.find(".owl-item.active")
		.first()
		.index();
		var end = thumbs
		.find(".owl-item.active")
		.last()
		.index();
	
		if (current > end) {
			thumbs.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
			thumbs.data("owl.carousel").to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			bigimage.data("owl.carousel").to(number, 100, true);
		}
	}
	thumbs.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		bigimage.data("owl.carousel").to(number, 300, true);
	});
	
	// Counter
	if ($(".count-box").length) {
	$(".count-box").appear(
	  function () {
		var $t = $(this),
		  n = $t.find(".count-text").attr("data-stop"),
		  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
	
		if (!$t.hasClass("counted")) {
		  $t.addClass("counted");
		  $({
			countNum: $t.find(".count-text").text()
		  }).animate({
			countNum: n
		  }, {
			duration: r,
			easing: "linear",
			step: function () {
			  $t.find(".count-text").text(Math.floor(this.countNum));
			},
			complete: function () {
			  $t.find(".count-text").text(this.countNum);
			}
		  });
		}
	  }, {
		accY: 0
	  }
	);
	}
	// End Counter

})(jQuery);

$(".expand_service").click(function(){
	$(".more-services").fadeIn();
	$(".service-show-more").fadeOut();
}); 

// Contact action
$('#contact_form').on('submit', function(event) {	
	event.preventDefault();
	$('#contact_form .hide_submit').hide();
	$("#contact_form .submitting_form").show();
	var form_data	=	new FormData(this);
	$.ajax({
		url: "ms-includes/contact_action.php",
		type: "POST",
		data : form_data,
		contentType: false,
		cache: false,
		processData:false,
		success: function(data) {
			if (data == 1) { // Done
				window.location	=	"thank-you.php";
			} else {
				
			}
		}
	});

}); // End form on submit

// Careers Action
$('#career_submit').on('click', function(event) {
	
	event.preventDefault();

	$('.careers-form .form_error').hide();
	
	var isSubmit	=	1;
	
	var e_name			=	$("#e_name").val();
	var e_lname			=	$("#e_lname").val();
	var e_email			=	$("#e_email").val();
	var e_phone			=	$("#e_phone").val();
	var e_gender		=	$("#e_gender").val();
	var e_nationality	=	$("#e_nationality").val();
	var e_visa_status	=	$("#e_visa_status").val();
	var e_resume		=	$("#e_resume").val();
	
	if (e_name == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Enter First Name.");
	}
	else
	if (e_lname == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Enter Last Name.");
	}
	else
	if (e_email == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Enter Email ID.");
	}
	else
	if (e_phone == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Enter Phone Number.");
	}
	else
	if (e_gender == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Select Gender.");
	}
	else
	if (e_nationality == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Select Nationality.");
	}
	else
	if (typeof $("input[name='e_live']:checked").val() === "undefined") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Do you currently live in the UAE?");
	}
	else
	if (e_visa_status == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Select UAE Visa Status.");
	}
	else
	if (e_resume == "") {
		isSubmit	=	0;
		$('.careers-form .form_error').show();
		$('.careers-form .form_error').html("Upload Resume in PDF Format.");
	}

	if (isSubmit == 1) { // OK
	
		$('#career_form').submit();
		$('#career_submit').hide();
		$('.careers-form .hide_submit span').show();
		$('.careers-form .hide_submit img').show();
	
	}

}); // End form on submit