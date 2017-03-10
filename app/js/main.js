$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true,
    speed:1200,
    fade:true
  });
  $(".b-detail-brands-slider").slick({
    prevArrow: '<img src="assets/img/left-small.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/right-small.svg" class="arrow-left">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1

  });
  $(".close-ico").click(function(){
    $(".header__nav").toggleClass("active");
    $(".close-ico").toggleClass("active");
  });
  $(".bck-to-top").click(function(){
    $("html, body").animate({"scrollTop":0},500);
  });
  $('.b-header-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".b-header-slider__item__circle").velocity("reverse");
    $(".slick-active").find('.b-header-slider__item__circle').velocity({"scale": "1.58", "translateX": "0%", "translateY": "0%"}, 1200,[200,20]);

  });
});
