$(function () {
  $(".navbar-nav li").click(function () {
    $(".navbar-nav li").removeClass("active");
    $(this).addClass("active");
  });
});