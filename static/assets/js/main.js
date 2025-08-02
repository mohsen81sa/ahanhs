(function($){
	"use strict";
	jQuery(document).on('ready', function () {
        // Mean Menu
	    jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.induxtro-nav').addClass("is-sticky");
            }
            else{
                $('.induxtro-nav').removeClass("is-sticky");
            }
		});

		// Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			rtl: true,
			items: 1,
			smartSpeed: 2000,
			animateOut: 'slideOutUp',
			autoplayHoverPause: true,
    		animateIn: 'fadeInUp',
			autoplay: true,
		});
		$(".home-slides").on("translate.owl.carousel", function(){
            $(".main-banner h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner p").removeClass("animated zoomIn").css("opacity", "0");
            $(".main-banner .learn-more-btn").removeClass("animated fadeInDown").css("opacity", "0");
            $(".main-banner .banner-image").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-banner h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner p").addClass("animated zoomIn").css("opacity", "1");
            $(".main-banner .learn-more-btn").addClass("animated fadeInDown").css("opacity", "1");
            $(".main-banner .banner-image").addClass("animated fadeInUp").css("opacity", "1");
		});

		// Search Popup JS
		$(".search-popup-icon").on('click',  function() {
			$('.searchBoxTop').toggleClass('active');
		});
		$(".searchClose").on('click',  function() {
			$('.searchBoxTop').removeClass('active');
		});

		// Testimonials Slides
		$('.testimonials-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-right-arrow'></i>",
                "<i class='flaticon-back'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1024: {
					items: 2
				},
				1200: {
					items:2
				}
			}
		});

		// Testimonials Slides Two
		$('.testimonials-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-right-arrow'></i>",
                "<i class='flaticon-back'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1200: {
					items:2
				}
			}
		});

		// Video Popup
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Projects Slides
		$('.projects-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
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
				1200: {
					items: 4
				}
			}
		});

		// Team Slides Two
		$('.team-slider').owlCarousel({
			loop: true,
			nav: false,
			rtl: true,
			dots: false,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
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
				1024: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});

		// Popup Gallery
		$('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            }
		});

		// Partner Slides
		$('.partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 2
				},
				475: {
					items: 3
				},
				576: {
					items: 4
				},
				1024: {
					items:5
				}
			}
		});

		// Team Slides
		$('.team-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
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
				1200: {
					items: 3
				}
			}
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
		
		// Blog Slides
		$('.blog-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			rtl: true,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
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
				1200: {
					items: 4
				}
			}
		});

		// Services Details Slides
		$('.services-image-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			rtl: true,
			items: 1,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			autoplay: true,
		});

		//Progress Bar
		if($('.progress-line').length){
			$('.progress-line').appear(function(){
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width',percent+'%');
			},{accY: 0});
		}
		if($('.count-box').length){
			$('.count-box').appear(function(){
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
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			},{accY: 0});
		}

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
		
		// Product Details Image SLides
        $(".product-img-slides").owlCarousel({
            items: 1,
            nav: false,
			rtl: true,
            dots: true,
            touchDrag: false,
            mouseDrag: true,
            autoplay: true,
            smartSpeed: 500,
            loop: true,
            autoplayHoverPause:true,
            navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
        });

		// Nice Select
        $('select').niceSelect();

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
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});

		// MixItUp Shorting
		$(function(){
            $('.shorting').mixItUp();
		});
		
		// Count Time 
        function makeTimer() {
            var endTime = new Date("July 29, 2019 17:00:00 PDT");			
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
            $("#days").html(days + "<span>روز</span>");
            $("#hours").html(hours + "<span>ساعت</span>");
            $("#minutes").html(minutes + "<span>دقیقه</span>");
            $("#seconds").html(seconds + "<span>ثانیه</span>");		
        }
		setInterval(function() { makeTimer(); }, 1000);
		
		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "لطفا آدرس ایمیل خود را به درستی وارد کنید.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
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
			submitMSGSub(true, "پیام شما ارسال شد!");
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
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});
	});

	// Odometer JS
	jQuery(document).on('ready', function() {
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	});

	// Preloader Area
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});
}(jQuery));
function openModal() {
	let modal = document.getElementById("videoModal");
	let video = document.getElementById("videoPlayer");

	modal.style.display = "block"; // نمایش مدال
	video.play(); // پخش ویدیو
}

function closeModal() {
	let modal = document.getElementById("videoModal");
	let video = document.getElementById("videoPlayer");

	modal.style.display = "none"; // بستن مدال
	video.pause(); // متوقف کردن ویدیو
	video.currentTime = 0; // بازنشانی ویدیو
}

// بستن مدال با کلیک بیرون از ویدیو
window.onclick = function(event) {
	let modal = document.getElementById("videoModal");
	if (event.target === modal) {
		closeModal();
	}
}