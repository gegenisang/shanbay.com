$(document).ready(function () {
  var clear = false;
  var oInp = $(".search-form input").val();
  $(".search-form input").focus(function () {
    $(this).parent().addClass("focus");
    $(".clear-btn").addClass("focus").removeClass("hide");
  });

  function clearClass(obj) {
    $(obj).parent().removeClass("focus");
    $(".clear-btn").removeClass("focus").addClass("hide");
  }
  $(".clear-btn").click(function () {
    var value = $(".search-form input").val();
    clear = true;
    if (clear && value !== oInp) {
      $(".search-form input").val(oInp);
      $(".search-form input").focus();
    } else if (clear && value === oInp) {
      clearClass(this);
      $(".search-form input").val(oInp);
      clear = false;
    }
  });
  $(".search-form input").blur(function () {
    var value = $(".search-form input").val();
    if (!clear && value === oInp) {
      clearClass(this);
    } else if (clear && value === oInp) {
      clearClass(this);
    }
  });
});