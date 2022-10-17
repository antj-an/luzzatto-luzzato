$(function() {

	var mob = 992;
	window.addEventListener('touchmove', Scroll);
	window.addEventListener('scroll', Scroll);
	var is_ready = false;

	// Toogle menu
		$('.menu-expand').on('click', function() {
			$(this).toggleClass('on');
			$('.menu-for-mob').toggleClass('showMenu');
		});

		$(".header-nav ul, .header-social").clone().appendTo('.menu-for-mob');
		$(".header-phone").clone().appendTo('.menu-for-mob .header-social');
		// Toggle submenu
		$("#nav li.menu-item-has-children > a").on("click", function (e) {
		     if (window.innerWidth < mob) {
		        if (!$(this).hasClass("clicked")) {
		            e.preventDefault();
		            $(this).next("ul").slideToggle("fast");
		            $(this).addClass("clicked");
		        }
		    }
		});


	
		function Scroll() {
			if ( window.innerWidth < 1440 ) {
				stickyHeader();
			}
		} 

	

	function stickyHeader() {
		var $header = $('.header'),
			$logoImg = $('.header-logo a img'),
			logoTotalHeight = $('body').hasClass('home') ? 117 : 90,
			logoCustomHeight;
		
		if ($header.length) {
			if ($(window).scrollTop() > 0) {
				$header.addClass('scrolled');
				logoCustomHeight = logoTotalHeight - $(window).scrollTop();
				if (logoCustomHeight < 50) {
					logoCustomHeight = 50;
					$logoImg.css('width', 'auto');
				}
			} else {
				$header.removeClass('scrolled');
				$logoImg.css('width', '');
			}
			
			if ($logoImg.length && logoCustomHeight && window.innerWidth > 768) {
				$logoImg.height(logoCustomHeight);
				$logoImg.css('width', 'auto');
			} else {
				$logoImg.css('height', '');
				$logoImg.css('width', '');
			}
		}
	}

	// Search toogle
	$( '.js-btn-header-search' ).on( 'click', function( e ) {
		var form = $( this ).closest( 'form' ),
			input = form.find( '.input' );

		if ( !input.val() ) {
			e.preventDefault();
			form.toggleClass( 'expanded' );
		}
		if ( form.hasClass( 'expanded' ) ) {
			input.trigger( 'focus' );
		}
	} );

	// Search autoclose
	$( '.header-form-search .input' ).on( 'focusout', function() {
		if ( !$( this ).val() ) {
			$( this ).closest( 'form' ).removeClass( 'expanded' )
		}
	} );


	//Tabs

	  $(document).on('click', '.tabs li', function(e) {
  		if (window.innerWidth >= 480){
		     $('.tab-content').hide();
		     $('.tabs li.tab-current').removeClass('tab-current');
		     $(this).addClass('tab-current');
		   
		     var tab_id = $(this).find('a').attr('data-tab');
		     $("#"+tab_id).stop().fadeIn(500);
		     
		    return false;
	    }
	    
	  }); 

	  $('.tabs li:first').click();

	  
	 // Custom select

	$('.select').SumoSelect({
			csvDispCount: 0,
			floatWidth: 0
	});

	// Sliders

	var breakpoint = window.matchMedia('(min-width:992px)');
	var mySwiper;

	var breakpointChecker = function() {
		if ( breakpoint.matches === true ) {
			if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
	};

	var enableSwiper = function() {


		mySwiper = new Swiper('.personel-slider', {
			//slidesPerView: 5,
			slidesPerView: 'auto',
			spaceBetween: 0,
			//watchOverflow: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true
			}
		});
	};

	breakpoint.addListener(breakpointChecker);
	breakpointChecker();

	new Swiper('.partners-slider', {
		navigation:{
			nextEl: '.next',
			prevEl: '.prev'
		},
		slidesPerView: 5,
		spaceBetween: 0,
		loop: true,
		breakpoints:{
			1220: {
				slidesPerView: 5
			},
			992: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 2
			}
		}
	});

	// Aside form

	$( 'body' ).on( 'click', '.js-cf-toggler', function() {
		var $cf = $( '.aside-cf-block' );
		    $cf.toggleClass( 'active' );
		    
	});


	$( 'body' ).on( 'click', '*', function( e ) {
			var $this = $( e.target );
			
			if ( $this.is( '.aside-cf-block' ) &&
				!$this.closest( '.aside-cf-body' ).length &&
				!$this.is( '.js-cf-toggler' ) &&
				!$this.closest( '.js-cf-toggler' ).length ) {
				$( '.aside-cf-block' ).removeClass( 'active' );
			}
		} );

	// Mobile accordions
		$(document).on('click', '.footer-menu-title', function(e) {
			if ( window.innerWidth < mob ) {
				if ( !$( this ).closest( '.footer-menu-wrap' ).hasClass( 'activeItem' ) ) {
					$( '.footer-menu-wrap' ).removeClass( 'activeItem' );
					$( '.footer-menu-list' ).slideUp( 'fastItem' );
				}

				$( this ).closest( '.footer-menu-wrap' ).toggleClass( 'activeItem' );
				$( this ).next( '.footer-menu-list' ).slideToggle( 'fastItem' );
			}
		} );



		$(document).on('click', '.tab-mob-title', function(e) {
			if ( window.innerWidth < 480 ) {
				if ( !$( this ).closest( '.tab-content' ).hasClass( 'activeItem' ) ) {
					$( '.tab-content' ).removeClass( 'activeItem' );
					$( '.tab-content-column' ).slideUp( 'fastItem' );
				}

				$( this ).closest( '.tab-content' ).toggleClass( 'activeItem' );
				$( this ).next( '.tab-content-column' ).slideToggle( 'fastItem' );
			}
		} );


		$(document).on('click', '.filter-block-title', function(e) {
			if ( window.innerWidth < mob ) {
				if ( !$( this ).closest( '.filter-block' ).hasClass( 'activeItem' ) ) {
					$( '.filter-block' ).removeClass( 'activeItem' );
					$( '.filter-links' ).slideUp( 'fastItem' );
				}

				$( this ).closest( '.filter-block' ).toggleClass( 'activeItem' );
				$( this ).next( '.filter-links' ).slideToggle( 'fastItem' );
			}
		} );


		$(document).on('click', '.p-aside-content-title', function(e) {
				if ( window.innerWidth < mob ) {
				if ( !$( this ).closest( '.p-aside-content' ).hasClass( 'activeItem' ) ) {
					$( '.p-aside-content' ).removeClass( 'activeItem' );
					$( '.p-aside-content ul' ).slideUp( 'fastItem' );
				}

				$( this ).closest( '.p-aside-content' ).toggleClass( 'activeItem' );
				$( this ).next( '.p-aside-content ul' ).slideToggle( 'fastItem' );
			}
		} );

	// Scroll to sections

	$(".internal-menu").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        
	        $('body,html').animate({scrollTop: top}, 800);

	        if (window.innerWidth <= 1440) {
	        	$('body,html').animate({scrollTop: top - 45}, 800);
	        }
	});



	var ShowHideMore = $('.filter-links');

	ShowHideMore.each(function(){
		var li = $(this).children('.li');
		if (window.innerWidth >= 768){
			if (li.length > 3) {
				ShowHideMore.children(':nth-of-type(n+4)').addClass('moreShown').hide();
				//$(this).find('.btn-more').addClass('mt').html('Show more');
			}else{
				ShowHideMore.children(':nth-of-type(n+4)').removeClass('moreShown');
			}
		}
	})

	$(document).on('click', '.js-show-more', function(e) {
		var $this = $(this);
		var thisParent = $this.closest('.filter-links');
		var more = $this.attr('data-more-text');
		var less = $this.attr('data-less-text');

		

		if (window.innerWidth >= 768){
			if ($this.hasClass('mt')) {
				thisParent.find('.moreShown').show();
				$this.toggleClass('mt', 'lt').html(less);
			}else{
				thisParent.find('.moreShown').hide();
				$this.toggleClass('mt', 'lt').html(more);
			}

			return false;
		}
	})		


	
	$(document).on('click', '.accordion-item .a-heading', function(e) {
	    e.preventDefault();

	    // Add the correct active class
	    if($(this).closest('.accordion-item').hasClass('active')) {
	        // Remove active classes
	        $('.accordion-item').removeClass('active');
	    } else {
	        // Remove active classes
	        $('.accordion-item').removeClass('active');

	        // Add the active class
	        $(this).closest('.accordion-item').addClass('active');
	    }

	    // Show the content
	    var $content = $(this).next();
	    $content.slideToggle(100);
	    $('.accordion-item .a-content').not($content).slideUp('fast');
	});


	var menu = document.getElementById('mn');
	var li = menu.getElementsByTagName('li');
	var dot = document.getElementById('crl');

	for (var i = 0; i < li.length; i++) {
	    li[i].addEventListener("mouseover", function () {
	        setAnimation(this);
	    });

	    li[i].addEventListener("mouseout", function () {
	        dot.setAttribute('style', '');
	    });
	    
	}

	function setAnimation(el) {
	    var pos = el.offsetTop;
	    var h = el.offsetHeight;
	    dot.setAttribute('style', 'top:' + (pos + h / 2.2) + 'px;');
	}


});

