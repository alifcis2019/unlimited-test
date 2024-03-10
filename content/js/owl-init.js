const lang = $("html").attr("dir");


$(".owl-carousel__home").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  items: 4,
  rtl: lang === "rtl" ? true : false,
});
