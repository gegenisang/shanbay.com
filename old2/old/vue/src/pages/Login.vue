<template>
  <div id='login-page'>

    <!-- <nav class="navbar navbar-nav">asdfasf</nav> -->
    <router-link to="/">
      <h1>Home</h1>
    </router-link>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">
            <img src="../assets/img/logo_v4.png" alt="logo">
          </a>
        </div>
        <div class="navbar-left">
          <ul class="nav navbar-nav">
            <li><a href="#">首页</a></li>
            <li><a href="#">单词</a></li>
            <li><a href="#">听力</a></li>
            <li><a href="#">口语</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">读书</a></li>
            <li><a href="#">炼句</a></li>
            <li><a href="#">课程</a></li>
            <li><a href="#">社区</a></li>
          </ul>
        </div>
        <div class="navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
          </ul>
        </div>
        <div class="navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="#">帮助</a></li>
          </ul>
        </div>
        <!-- <div class="login">
          <a href="#">登录</a>
          <span>.</span>
          <a href="#">注册</a>
        </div> -->
      </div>
    </nav>
    <div class="mian container">
      <div class="login-content clearfix">
        <div class="left">
          <div class="carousel slide" data-ride="carousel" id="myCarousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="item active">
                <img src="../assets/img/intro-client-checkin.png" alt="intro-client-checkin">
                <div class="carousel-caption">
                  <h3>坚持打卡</h3>
                  <p>享受学习的快乐</p>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/intro-client-community.png" alt="intro-client-community">
                <div class="carousel-caption">
                  <h3>学习社区</h3>
                  <p>加入小组，和小伙伴们一起坚持</p>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/intro-client-insurance.png" alt="intro-client-insurance">
                <div class="carousel-caption">
                  <h3>考试保险</h3>
                  <p>备考用扇贝，没过就赔钱</p>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/intro-client-academy.png" alt="intro-client-academy">
                <div class="carousel-caption">
                  <h3>扇贝课程</h3>
                  <p>更少的时间，更好的效果</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h3>欢迎来到扇贝</h3>
          <form class="login-form" name="login-form">
            <div class="input-wrap">
              <input type="text" class="name" placeholder="用户名 / 邮箱 / 手机号" name="username">
              <i class="user-icon"></i>
            </div>
            <div class="input-wrap" id="password">
              <input type="password" class="password" placeholder="密码" name="password">
              <i class="lock-icon"></i>
            </div>
            <div class="input-wrap hide" id="two">
              <input type="text" class="two-step-token-input" placeholder="两步验证密码" name="token" data-not-required="true">
              <i class="lock-icon"></i>
            </div>
            <div class="input-wrap captcha hide">
              <input type="text" class="captcha-input" placeholder="验证码(不区分大小写)" name="code" data-not-required="true">
              <i class="captcha-icon"></i>
              <!-- <img src="https://www.shanbay.com/captcha/image/d19b2bf3121b80b9e4eb5b087cbdb5b1ce179170/"> -->
            </div>
            <a href="/web/account/register" class="register-text">
              "还没有账号？"
              <span>去注册</span>
            </a>
            <a href="/web/account/reset" class="forget">
            忘记密码</a>
            <div class="clearfix"></div>
            <div class="submit-box">
              <button class="button login-button disable" type="submit">登录</button>
            </div>
            <p class="account-error-hint"></p>
          </form>
          <div class="third-title">
            OR
          </div>
          <div class="third-wrap" id="weixin">
            <a href="#">
              <i class="weixin-icon"></i>
            </a>
            <p>微信登录</p>
          </div>
          <div class="third-wrap" id="weibo">
            <a href="#">
              <i class="weibo-icon"></i>
            </a>
            <p>微博登录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login'
  }

</script>
<style>
  * {
    /* outline: 1px solid #ddd; */
    box-sizing: border-box;
  }

  body {
    background-color: #eee;
    color: #333;
  }

  div,
  a,
  img,
  p,
  h3 {
    padding: 0;
    margin: 0;
  }

  #login-page .navbar {
    background-color: #209e85;
    border-radius: 0;
  }

  #login-page .navbar a {
    color: #f5f5f5;
    transition: color 0.2s;
  }

  .nav>li>a:focus,
  .nav>li>a:hover {
    text-decoration: none;
    background-color: #209e85;
    color: #fff;
  }

  .navbar-brand,
  .navbar-brand img {
    width: 8.4rem;
    margin-right: 4rem;
    vertical-align: middle;
    margin-top: -5px;
    /* padding-top: 0.3rem; */
  }

  .login-content {
    width: 900px;
    height: 560px;
    margin: 100px auto;
    background-color: #fdfdfd;
    border-radius: 4px;
    box-shadow: 0 8px 8px 0 rgba(51, 51, 51, .05),
    0 0 8px 0 rgba(51, 51, 51, .15);
  }

  .left {
    float: left;
    width: 50%;
    height: 100%;
    overflow: hidden;
    display: inline-block;
    background-color: #f6f6f6;
  }

  .carousel-inner {
    width: 450px;
    height: 560px;
  }

  @media screen and (min-width: 768px) {
    .carousel-indicators {
      bottom: 20%;
    }
  }

  .carousel-indicators li {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #cacaca;
    border: 1px solid #cacaca;
    border-radius: 10px;
  }

  .carousel-indicators .active {
    width: 7px;
    height: 7px;
    margin: 1px;
    border: 1px solid #229e85;
    background-color: #229e85;
  }

  .carousel-inner>.item>a>img,
  .carousel-inner>.item>img,
  .img-responsive,
  .thumbnail a>img,
  .thumbnail>img {
    display: block;
    max-width: 225px;
    height: auto;
    margin: 50px auto;
  }


  .carousel-caption {
    position: relative;
    bottom: 0px;
    left: 0px;
    z-index: 10;
    text-align: center;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    margin: 0;
  }

  .carousel-inner .item .carousel-caption h3 {
    color: #333;
    font-size: 1.3em;
  }

  .carousel-inner .item .carousel-caption p {
    color: #666;
    font-size: 1em;
  }

  .right {
    width: 50%;
    padding: 0 70px;
    height: 560px;
    display: inline-block;
    float: right;
    vertical-align: top;
  }

  .right h3 {
    padding-top: 50px;
    color: #333;
    font-size: 28px;
  }

  .login-form {
    position: relative;
    margin: 0 auto;
  }

  .input-wrap {
    height: 46px;
    margin: 25px auto;
    color: #999;
  }

  .input-wrap input {
    width: 100%;
    height: 100%;
    padding-left: 40px;
    border: 1px solid #cacaca;
    border-radius: 4px;
  }

  .input-wrap .user-icon {
    position: absolute;
    top: 6px;
    display: inline-block;
    width: 30px;
    height: 30px;
    left: .3em;
    background-image: url(../assets/img/user.png);
    background-repeat: no-repeat;
    font-size: 22px;
    line-height: 46px;
  }
  /* .input-wrap:focus .user-icon {
    background-image: url(../assets/img/user-selected.png);
    background-repeat: no-repeat;
  } */

  input:focus {
    outline: none !important;
    border-color: #229e85;
  }

  input:focus+.user-icon {
    background-image: url(../assets/img/user-selected.png);
    background-repeat: no-repeat;
  }

  #password,
  #two {
    position: relative;
  }

  #password .lock-icon,
  #two .lock-icon {
    position: absolute;
    left: .4em;
    top: 6px;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(../assets/img/lock.png);
    background-repeat: no-repeat;
  }

  #password input:focus+.lock-icon,
  #two input:focus+.lock-icon {
    background-image: url(../assets/img/lock-selected.png);
    background-repeat: no-repeat;
  }

  .captcha {
    position: relative;
  }

  .captcha .captcha-icon {
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    top: 6px;
    left: .3em;
    background-image: url(../assets/img/secure.png);
    background-repeat: no-repeat;
  }

  .captcha input:focus+.captcha-icon {
    background-image: url(../assets/img/secure-success.png);
    background-repeat: no-repeat;
  }

  .captcha input {
    position: absolute;
    left: 0;
    height: 46px;
    width: 67%;
  }

  .captcha img {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 90px;
    height: 46px;
    cursor: pointer;
  }

  .register-text {
    float: left;
    color: #999;
    text-decoration: none;
    margin-top: -10px;
  }

  .register-text span {
    color: #229e85;
  }

  .forget {
    float: right;
    margin-top: -10px;
    color: #229e85;
  }

  .forget:hover,
  .register-text:hover span {
    color: #229e85;
    text-decoration: none;
  }

  .register-text:hover {
    color: #999;
    text-decoration: none
  }

  .submit-box {
    position: relative;
    margin: 20px 0 70px;
  }

  .button {
    width: 100%;
    line-height: 1.6;
    background: #23b598;
    box-shadow: 0 4px 15px 0 rgba(36, 181, 151, .3);
    padding: 5px 20px;
    display: inline-block;
    font-size: 14px;
    border-radius: 2px;
    border: 1px solid transparent;
    outline: 0;
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    background: #209e85;
  }

  .button.disable,
  .button.disable:hover,
  .button[disabled=disabled],
  .button[disabled=disabled]:hover {
    background: #eee;
    color: #bebebe;
    border: 1px solid transparent;
    cursor: not-allowed;
    box-shadow: none;
  }

  .third-title {
    position: relative;
    text-align: center;
    color: #cacaca;
  }

  .third-title:before {
    left: 0;
    right: 60%;
  }

  .third-title:after,
  .third-title:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 48%;
    border-top: 1px solid #cacaca;
  }

  .third-title:after {
    right: 0;
    left: 60%;
  }

  .third-wrap {
    width: 50%;
    margin-top: 15px;
    text-align: center;
    font-size: 12px;
    display: inline-block;
    float: left;
  }

  .third-wrap i {
    display: block;
    width: 34px;
    height: 34px;
    /* border-radius: 50px;
    background: #cacaca; */
    margin: 0 auto 10px;
  }

  #weixin .weixin-icon {
    background-image: url(../assets/img/weixin.png);
    background-repeat: no-repeat;
  }

  #weixin .weixin-icon:hover {
    background-image: url(../assets/img/weixin-selected.png);
    background-repeat: no-repeat;
  }

  #weibo .weibo-icon {
    background-image: url(../assets/img/weibo.png);
    background-repeat: no-repeat;
  }

  #weibo .weibo-icon:hover {
    background-image: url(../assets/img/weibo-selected.png);
    background-repeat: no-repeat;
  }

</style>
