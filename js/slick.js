$(function () {
  $(".q-q-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-q-gallery-list-left",
    nextArrow: ".q-q-gallery-list-right",
  });
});

$(function () {
  $(".q-q-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-q-features-list-left",
    nextArrow: ".q-q-features-list-right",
  });
});
