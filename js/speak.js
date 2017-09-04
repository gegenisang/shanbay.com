$(document).ready(function () {
  var oInp = $(".search-form input").val();
  $(".search-form input").focus(function () {
    $(this).parent().addClass("focus");
    $(".clear-btn").addClass("focus").removeClass("hide");
  });
  $(".clear-btn").click(function (e) {
    console.log('e1', e);
    $(".search-form input").val(oInp);
    $(".search-form input").focus();
  });
  $(".search-form input").blur(function (e) {
    console.log('e2', e);
    $(this).parent().removeClass("focus");
    $(".clear-btn").removeClass("focus").addClass("hide");
  });


});