$(document).ready(function () {
  var $input = $(".search-form input");
  var $clear = $(".clear-btn");


  $input.on("click", function (e) {
    $input.parent().addClass("focus");
  });
  $clear.on("click", function (e) {
    $input.val("").focus();
  })

  $input.on("blur", function () {
    if ($input.val().trim() === "") {
      $input.parent().removeClass("focus")
    }
  });
});