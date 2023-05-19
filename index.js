


GitHubCalendar(".calendar", "surajbhan-3");
// or enable responsive functionality
GitHubCalendar(".calendar", "surajbhan-3", { responsive: true });




var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

console.log("Screen Resolution: " + screenWidth + "x" + screenHeight);
