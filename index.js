


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





  let drive = document
  .querySelector(".Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1BbBp0dkaFIUSmR-HUUaGasa3KRr_YMli/view?usp=sharing")
  );
}

let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", openDrive2);

function openDrive2() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1BbBp0dkaFIUSmR-HUUaGasa3KRr_YMli/view?usp=sharing")
  );
}








  var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

console.log("Screen Resolution: " + screenWidth + "x" + screenHeight);
