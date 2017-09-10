$(".list>a").click(function () {
  $(this).addClass("active1")
    .next().show()
    .parent().siblings().children("a").removeClass("active1")
    .next().hide();
  return false;
});