
// Config for Owl Library
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoWidth: true,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});