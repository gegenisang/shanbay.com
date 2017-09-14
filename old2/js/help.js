$(".list>a").click(function () {
  $(this).next().show().parent(".list").addClass("active1")
    .siblings().removeClass("active1").children("a").next().hide();
  return false;
});

$(".list ul li").click(function () {
  $(".list ul li").removeClass("active");
  $(this).addClass("active");
});