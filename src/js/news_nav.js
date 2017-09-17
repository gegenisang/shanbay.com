$(function () {
  $(".news-lists li").click(function () {
    $(".news-lists li").removeClass("active");
    $(this).addClass("active");
  });
});