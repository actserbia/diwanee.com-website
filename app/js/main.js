$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true,
    speed:2000,
    fade:true,
    autoplay:true,
    autoplaySpeed:2500,

    // easing:'easeInOut',
    responsive: [{
      breakpoint:640,
      settings: {
        speed:400
      }
    }]
  });
  $(".b-detail-brands-slider").slick({
    prevArrow: '<img src="assets/img/left-small.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/right-small.svg" class="arrow-left">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint:1024,
      settings: {
        slidesToShow: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000
      }
    }]

  });
  var nav_opened = false,
  	  nav_animating = false,
  $mask = $(".white-mask");
  $(".menu-ico").click(function(){
	  if (!nav_animating){
		  if (!nav_opened){
			  nav_opened = true;
			  nav_animating = true;
			//   $("body, html").toggleClass("no-scroll");
				if ($(window).width() > 1024){
				disableScroll();
				}
			  $(".header__nav").css({display:"block"});
			//   $.Velocity.hook($mask, "rotateZ", "48deg");
			  $mask.velocity({ height:["400%","10px"]},899, function(){

			  });
			  setTimeout(function(){
				  $(".header__nav").toggleClass("active");
				  $("body").toggleClass("nav-active");
				  $(".menu-ico").toggleClass("active");
				  nav_animating = false;
			  },400);
		  } else {
			  nav_opened = false;
			  nav_animating = true;
			  setTimeout(function(){
				  $(".header__nav").toggleClass("active");
				  $("body").toggleClass("nav-active");

				  $(".menu-ico").toggleClass("active");
			  }, 350);
			  $mask.velocity({height:["10px","400%"]}, 899, function(){
				  enableScroll();
				  $(".header__nav").css({display:"none"});
				   nav_animating = false;
			  });
		  }
	  }
  });
  $(".bck-to-top").click(function(){
    $("html, body").animate({"scrollTop":0},500);
  });
  if($(window).width()<1024){
    $('.header__nav__menu-parent').click(function(){
      $(".header__submenu").toggleClass("active");
      $(".submenu-arrow").toggleClass("active");
    });
  }

//======= Header slider leave viewport events ====== //
  var $header = $(".header");
  $('#heading-slider').on('horizons',{offset:{b:-56}}, function(e, extra){
    console.log("heading -----------");
    console.log(extra.b);
    if (extra.b === 'north'){
      $header.addClass('dark');
    } else if (extra.b === true){
      $header.removeClass("dark");
    }
  });
  var atyab= $(".b-header-slider__item.atyab"),
      yasmina= $(".b-header-slider__item.yasmina"),
      alati= $(".b-header-slider__item.alati"),
      warrini= $(".b-header-slider__item.warrini"),
      mazyun= $(".b-header-slider__item.mazyun"),
      mashaheeri= $(".b-header-slider__item.mashaheeri"),

      atyab_circle = $(".b-header-slider__item.atyab .b-header-slider__item__circle"),
      yasmina_circle = $(".b-header-slider__item.yasmina .b-header-slider__item__circle"),
      alati_circle = $(".b-header-slider__item.alati .b-header-slider__item__circle"),
      warrini_circle = $(".b-header-slider__item.warrini .b-header-slider__item__circle"),
      mazyun_circle = $(".b-header-slider__item.mazyun .b-header-slider__item__circle"),
      mashaheeri_circle = $(".b-header-slider__item.mashaheeri .b-header-slider__item__circle");


      $(".b-header-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide, slideCount){
        // console.log(slideCount);
        var _this = $(".b-header-slider__item")[currentSlide];
        var _next = $(".b-header-slider__item")[nextSlide];
        // console.log("current slide: " + currentSlide);
        $(_this).find(".mask-circle").velocity({translateZ:0, rotateZ:["-=360deg", '0deg']}, 2000, 'easeInOutQuint');
        $(_next).find(".mask-circle").velocity({translateZ:0, rotateZ:["+=360deg", '0deg']}, 2000, 'easeInOutQuint');
      });
      gridInit();
});

var resize_timeout;
$( window ).resize(function() {
  clearTimeout(resize_timeout);
  resize_timeout = setTimeout(function(){
    gridRelocate();
  },300)
});

function gridRelocate(){
  var width = $(window).width(),
      grid_width = 2800,
      left = (width - grid_width) /2;
  $(".b-grid__holder").animate({left:left+'px'},400);
}
function gridInit(){
  var width = $(window).width(),
      grid_width = 2800,
      left = (width - grid_width) /2;
      console.log(left);
  $(".b-grid__holder").css({"left":left+'px'});
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
