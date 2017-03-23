$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true,
    speed:2000,
    fade:true,
    autoplay:true,
    autoplaySpeed:2500,

    easing:'easeInOut',
    responsive: [{
      breakpoint:1024,
      settings: {
        fade:false,
        speed:400
      }
    }]
  });
  $(".b-detail-brands-slider").slick({
    prevArrow: '<img src="assets/img/left-small.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/right-small.svg" class="arrow-left">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1

  });
  $(".menu-ico").click(function(){
    $(".header__nav").toggleClass("active");
    $(".menu-ico").toggleClass("active");
  });
  $(".bck-to-top").click(function(){
    $("html, body").animate({"scrollTop":0},500);
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
        console.log(slideCount);
        var _this = $(".b-header-slider__item")[currentSlide];
        var _next = $(".b-header-slider__item")[nextSlide];
        console.log("current slide: " + currentSlide);
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
