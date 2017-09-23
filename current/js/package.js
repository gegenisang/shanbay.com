$(document).ready(
  function () {
    var $input = $('#search-input')
    var $clear = $('#clear-btn')


    $input.on('focus', function () {
      $input.parent().addClass('focus')
    })

    $input.on('blur', function () {
      if ($input.val().trim() === "") {
        $input.parent().removeClass('focus')
      }
    })

    $clear.on('click', function () {
      $input.val('').focus()
    })
  }
);