$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true
  });
  $(".b-detail-brands-slider").slick({
    prevArrow: '<img src="assets/img/left-small.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/right-small.svg" class="arrow-left">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1

  });
});
