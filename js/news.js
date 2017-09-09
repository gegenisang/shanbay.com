$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $("#uptoTopBtn").fadeIn(200);
  } else {
    $("#uptoTopBtn").fadeOut(200);
  }
});

$("#uptoTopBtn").click(function () {
  $("body, html").animate({
    scrollTop: 0
  }, 0);
});



$(".nav li").click(function () {
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});