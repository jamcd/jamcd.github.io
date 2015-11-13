$(document).ready(function() {

  $(".animsition").animsition({

    inClass               :   'fade-in-down-sm',
    outClass              :   'fade-out-up-sm',
    inDuration            :    200,
    outDuration           :    200,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'main', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
    '-webkit-animation-duration',
    '-o-animation-duration'
    ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

    overlay               :   false,

    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });






  // (EXPAND ANY) ACCORDION
  // Event delegation approach
  // Attaching the event to the container is better for performance
  // It means attaching less events (one container vs multiple accordion items)
  // Also means you avoid the need to remove and attach event handlers to each item if they get added or removed.
  // Safer because you know there will be one container, but not sure how many accordion items.
  $('.accordion-holder').on('click', '.acc-title', function(e) {
  	e.preventDefault();
  	$(this)
  	.toggleClass('opened')
  	.next('.acc-content')
  	// jQuery - :animated
  	.not(':animated')
  	.slideToggle();

  });


  // ALTERNATIVE ACCORDION
  var accContentPanels = $('.alt-accordion-holder > div.accordion-content');
  var accTitles = $('.alt-accordion-holder > div.accordion-title');

  // Hide content panels
  accContentPanels
  .not('.active')
  .hide();

  $('.alt-accordion-holder').on('click', 'div.accordion-title', function() {
  	$this = $(this);
  	$accContentPanels =  $this.next();

  	if(!$accContentPanels.hasClass('active')){
  		accContentPanels.removeClass('active').slideUp();
  		accTitles.removeClass('active');
  		$accContentPanels.addClass('active').slideDown();
  		$this.addClass('active')
  	}

  	// Prevent the default event from firing
  	return false;
  });


  // TABBED CONTENT

  $('.tab-list').each(function() {
  	var $this 	= $(this);
  	var $tab 		= $this.find('h2.active');
  	var $link 	= $tab.find('a');
  	var $panel	= $($link.attr('href'));

  	$this.on('click', '.tab-control', function(e) {
  		e.preventDefault;
  		var $link = $(this);
  		var id		= this.hash;

  		if (id && !$link.is('.active')) {
  			$panel.removeClass('active');
  			$tab.removeClass('active');

  			$panel	= $(id).addClass('active');
  			$tab		= $link.parent().addClass('active');
  		}
  	});
  });



  // PARALLAX

  var parallax = $('.parallax-container');
  var parallaxTitle = $('.parallax-container h2');


  var animateScroll = function() {
  	var scroll = $(window).scrollTop();
  	if (scroll > 200 && scroll < 1000) {
  		parallax.css('background-position','0 ' + -(scroll - 200)+'px');
  		parallaxTitle.css('top', (50 + ((scroll - 200)*0.5))+'px');
  	} else {
  		parallax.css('background-position','0 0');
  		parallaxTitle.css('top', '50px');
  	}
  };

  $(window).on("scroll", function() {
  	animateScroll();
  });


  // FULL WIDTH CONTAINER

  var fullContainer = $('.jm-container-full');
  var containerWidth, windowWidth;

  var fitFullContainer = function() {
  	containerWidth = $('.jm-row').width();
  	windowWidth = $(window).width();

  	if(containerWidth < windowWidth) {
  		fullContainer
  		.css( 'padding', '0 ' + ((windowWidth - containerWidth) / 2)+'px')
  		// .css('width', windowWidth+'px')
  		.css('margin-left', -((windowWidth - containerWidth) / 2)+'px');
  	}
  }

  fitFullContainer();

  $(window).resize(function() {

  	fitFullContainer();
  });


});
