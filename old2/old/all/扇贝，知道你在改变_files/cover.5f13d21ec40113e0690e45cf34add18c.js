function initAppsCarousel() {
  var $carousel = $('#carousel-apps');
  var $nav = $('.home-links');
  var updateCarousel = function (e) {
    e.preventDefault();
    var num = $(this).index();
    var $itemImg = $carousel.find('.item').eq(num).find('img');
    if (!$itemImg.attr('src')) {
      $itemImg.attr('src', $itemImg.data('src'));
    }
    $carousel.carousel(num);
  }
  $carousel.carousel({
    interval: 3000,
    pause: 'hover'
  });
  $carousel.on('slid', function (e) {
    var num = $(this).find('.item.active').index();
    var $nextItem = $(this).find('.item').eq(num + 1);
    var $prevItem = $(this).find('.item').eq(num - 1);
    var $nextItemImg;
    var $prevItemImg;
    if ($nextItem.length > 0) {
      $nextItemImg = $nextItem.find('img');
      if (!$nextItemImg.attr('src')) {
        $nextItemImg.attr('src', $nextItemImg.data('src'));
      }
    }
    if ($prevItem.length > 0) {
      $prevItemImg = $prevItem.find('img');
      if (!$prevItemImg.attr('src')) {
        $prevItemImg.attr('src', $prevItemImg.data('src'));
      }
    }
    $carousel.find('.carousel-indicators li').removeClass('active').eq(num).addClass('active');
    $nav.find('a').removeClass('active').eq(num).addClass('active');
  }).on('mouseenter', function () {
    $carousel.carousel('pause');
  }).on('mouseleave', function () {
    $carousel.carousel('cycle');
  }).on('click', '.item', function () {
    var $currentLink = $nav.find('a')[$(this).index()];
    var link = $currentLink && $currentLink.href;
    if (link) {
      window.location.href = link;
    }
  });
  $nav.on('click', 'a', updateCarousel)
  $carousel.find('.carousel-indicators').on('click', 'li', updateCarousel);
}

function append_add_on_icons() {
  var icon_map = {
    '#id_username': 'icon-user',
    '#id_password': 'icon-lock',
    '#id_password1': 'icon-lock',
    '#id_password2': 'icon-lock',
    '#id_email': 'icon-envelope'
  }
  _.each(icon_map, function (v, k) {
    var html = '<span class="add-on-icon visible-desktop"><i class="' + v + '"></i></span>';
    $(html).insertAfter($(k));
  });
  $('.account-form label[for="id_agree"]').css('display', 'inline');
}

function switch_reg_login_form(tmpl, box, hide_box, form, hide_form, href) {
  var html = $(tmpl).tmpl({
    href: href
  });
  $(box).html(html);
  $(hide_box).html('');
  $(form).show();
  $(hide_form).hide();
  $('#id_username').focus();
  init_captcha();
  user_validation();
  $('img.captcha').click();
  if ($('.social-login-box').eq(0).css('display') != 'none') {
    append_add_on_icons();
  }
}

function user_validation() {
  $('#id_email').attr("autocomplete", "off");
  $.fn.typeahead.Constructor.prototype.lookup = function (event) {
    var that = this,
      items, q
    this.query = this.$element.val()
    if (!this.query) {
      return this.shown ? this.hide() : this
    }
    var query = this.query;
    if (this.query.indexOf('@') == -1) {
      this.query += "@"
    } else {}
    items = $.grep(this.source(query), function (item) {
      return that.matcher(item)
    })
    items = this.sorter(items)
    if (!items.length) {
      return this.shown ? this.hide() : this
    }
    return this.render(items.slice(0, this.options.items)).show()
  }
  var mail_options = function (query) {
    var options = ['126.com', 'qq.com', 'sina.com', '163.com', 'foxmail.com', 'gmail.com', 'hotmail.com', '139.com', 'yahoo.cn', 'yahoo.com.cn'];
    $.each(options, function (index, option) {
      if (query.indexOf('@') == -1) {
        query += "@";
      } else {
        query = query.split('@')[0] + "@";
      }
      options[index] = query + option;
    });
    return options;
  };
  $('#id_email').typeahead({
    source: mail_options,
    minLength: 4
  });
  $('.regr-box p label').last().addClass('agree-label');
  if (!$('.reg-box #id_agree').is(':checked')) {
    $('.reg-box #button-submit').attr("disabled", 'on');
  }
  $('.reg-box #id_agree').click(function () {
    if ($('.reg-box #button-submit').attr("disabled")) {
      $('.reg-box #button-submit').removeAttr("disabled");
    } else {
      $('.reg-box #button-submit').attr("disabled", 'on');
    }
  });

  function validation_callback(res) {
    valid = res.valid;
    $('.error-hint').remove();
    $('input').removeClass('error-input');
    if (!valid) {
      errors = res.errors;
      _.each(errors, function (v, k) {
        if (k == "__all__") {
          var pass1 = $('#id_password1').val();
          var pass2 = $('#id_password2').val();
          if (pass1.length && pass2.length && pass1 != pass2) {
            $('#id_password2').addClass('error-input');
            e = '<span class="error-hint">' + v[0] + '</span>';
            $(e).insertAfter($('#id_password2').prev())
          }
        } else {
          var input = $('#' + k);
          var value = input.val();
          if (value != undefined && value.length != 0) {
            input.addClass('error-input');
            var e_h = input.parent().find('.error-hint');
            e_h.remove();
            e = '<span class="error-hint">' + v[0] + '</span>';
            $(e).insertAfter($('#' + k).prev())
          }
        }
      });
    } else {
      $('.error-hint').remove();
      $('input').removeClass('error-input');
    }
  }
  $(function () {
    $('#regform').validate('/accounts/validation/', {
      type: 'p',
      fields: ['username', 'email', 'password1', 'password2'],
      dom: $('.reg-box form input[type=text]'),
      event: 'blur',
      callback: validation_callback
    });
  });
}

function init_captcha() {
  var refresh_captcha = function () {
    $.get('/accounts/captcha/', {}, function (new_captcha) {
      var captcha_input = $('#id_captcha_0').prev();
      captcha_input.next().remove();
      captcha_input.next().remove();
      captcha_input.next().remove();
      captcha_input.next().remove();
      captcha_input.next().remove();
      captcha_input.after(new_captcha);
      $('<span class="hide icon-ok"></span><span class="hide icon-remove"></span>').insertAfter($('#id_captcha_1'));
      $('img.captcha').unbind('click').bind('click', refresh_captcha);
      $('#id_captcha_1').keyup(function (e) {
        var res = $('#id_captcha_1').val();
        if (res.length >= 4) {
          captcha_validation();
        }
      });
      if ($('.social-login-box').eq(0).css('display') == 'none') {
        $('.account-box').css({
          'border-right': 'none',
          'margin-right': '0px'
        });
        $('#reg-form').css('padding', '20px 20px');
        $('.text-input').css({
          'font-size': '12px',
          'width': '98%'
        });
        $('.text-input#id_captcha_1').css('width', '93%');
      }
      return false;
    });
    return false;
  }
  $('img.captcha').unbind('click').bind('click', refresh_captcha);
}
var captcha_validation = function () {
  var res = $('#id_captcha_1').val();
  var key = $('#id_captcha_0').val()
  var url = '/api/v1/common/captcha/?res=' + res + '&key=' + key;
  $.get(url, function (res) {
    $('#id_captcha_1').css('margin-right', '0px');
    if (res.status_code == 0) {
      $('.account-form .icon-ok').show()
      $('.account-form .icon-remove').hide()
      $('.account-form .icon-ok').css('margin-right', '10px');
      $('.account-form .icon-remove').css('margin-right', '0px');
    } else {
      $('.account-form .icon-ok').hide()
      $('.account-form .icon-remove').show()
      $('.account-form .icon-ok').css('margin-right', '0px');
      $('.account-form .icon-remove').css('margin-right', '10px');
    }
  });
}

function update_copyright_year() {
  var date = new Date();
  var year = date.getFullYear();
  if (year < 2013) {
    year = '2013';
  }
  $('#copyright-this-year').html(year);
}

function fillin_contact_info() {
  emails = {
    'email-business': 'contact@shanbay.com',
    'email-weekly': 'weekly@shanbay.com',
    'email-help': 'help@shanbay.com'
  }
  _.each(emails, function (v, k) {
    $('#' + k).text(v);
    $('#' + k).attr('href', 'mailto:' + v);
  });
}
$('.btn-login').click(function () {
  if ($(this).hasClass('need-redirect')) {
    location.href = '/accounts/login/';
    return false
  }
  if (location.pathname == '/' || location.pathname == '/accounts/login/') {
    if (location.pathname == '/') {
      href = '/accounts/login/';
    } else {
      href = location.href;
    }
    switch_reg_login_form('#login-form-tmpl', '.login-box', '.reg-box', '#login-form', '#reg-form', href);
    $('#id_username').blur(function () {
      var username = $('#id_username').val();
      $.get('/api/v1/g_auth/?username=' + username, function (res) {
        if (res.status_code == 0) {
          $('form p.token').show();
        } else {
          $('form p.token').hide();
        }
      })
    })
  }
});
$('.btn-reg').click(function () {
  if ($(this).hasClass('need-redirect')) {
    location.href = '/accounts/register/';
    return false
  }
  if (location.pathname == '/' || location.pathname == '/accounts/register/') {
    if (location.pathname == '/') {
      href = '/accounts/register/';
    } else {
      href = location.href;
    }
    switch_reg_login_form('#reg-form-tmpl', '.reg-box', '.login-box', '#reg-form', '#login-form', href);
  }
});
$('.social-login-div').click(function () {
  var url = $(this).attr('href');
  location.href = url;
});
$('.social-login-more').click(function () {
  $(this).addClass('clicked');
  $('#more-ways-div').show();
});
update_copyright_year();