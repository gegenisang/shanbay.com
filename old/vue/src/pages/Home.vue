<template>
  <div id="content">
    <router-link to="login">
      <h1>Login</h1>
    </router-link>

    <nav class="navbar">
      <div class="container">
        <div class="nav navbar-nav navbar-right">
          <a href="javascript:;">登录</a>
          <span>|</span>
          <a href="javascript:;">注册</a>
        </div>
      </div>
    </nav>
    <div class="section0">
      <div class="container">
        <div class="row text-center">
          <img src="../assets/img/logo_v5.png" alt="logo" id="logo">
        </div>
      </div>
    </div>
    <div class="section1">
      <div class="container">
        <div class="row">
          <div class="home-link text-center">
            <a href="javascript:;" data-target="#myCarousel" data-slide-to="0" class="active">单词</a>
            <a href="javascript:;" data-target="#myCarousel" data-slide-to="1">听力</a>
            <a href="javascript:;" data-target="#myCarousel" data-slide-to="2">口语</a>
            <a href="javascript:;" data-target="#myCarousel" data-slide-to="3">阅读</a>
            <a href="javascript:;" data-target="#myCarousel" data-slide-to="4">炼句</a>
          </div>
        </div>
        <div class="row">

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

              <div class="item active">
                <img src="../assets/img/1.png" alt="words" style="width:100%;">
                <div class="carousel-caption word-bdc">
                  <h4>扇贝单词</h4>
                  <p>智慧词根，派生词，权威英文字典</p>
                  <p>精选英文例句真人发音</p>
                  <p>启发式提示抗遗忘</p>
                  <p>单词记住啦</p>
                  <a class="download-btn" href="javascript:;">下载 APP</a>
                </div>
              </div>

              <div class="item">
                <img src="../assets/img/7.png" alt="listen" style="width:100%;">
                <div class="carousel-caption listen">
                  <h4>扇贝听力</h4>
                  <p>一句一句听，听懂为止</p>
                  <p>听不懂，刮开刮刮卡</p>
                  <p>写不出，提示来帮忙</p>
                  <p>没有听不出的文章</p>
                  <a class="download-btn" href="javascript:;">下载 APP</a>
                </div>
              </div>

              <div class="item">
                <img src="../assets/img/3.png" alt="speak" style="width:100%;">
                <div class="carousel-caption speak">
                  <h4>扇贝口语</h4>
                  <p>雅思口语，和考官聊High</p>
                  <p>地道美语，带你玩遍全球</p>
                  <p>边听边读说出口</p>
                  <p>说过不会忘</p>
                  <a class="download-btn" href="javascript:;">下载 APP</a>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/8.png" alt="news" style="width:100%;">
                <div class="carousel-caption news">
                  <h4>扇贝阅读</h4>
                  <p>精选每日新闻，用英语看世界</p>
                  <p>点击查词，扫清单词障碍</p>
                  <p>阅读笔记，帮你看懂英文</p>
                  <p>读后感，让你看懂人生</p>
                  <a class="download-btn" href="javascript:;">下载 APP</a>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/2.png" alt="sentence" style="width:100%;">
                <div class="carousel-caption sentence">
                  <h4>扇贝炼句</h4>
                  <p>精选短语和句型，句句较真</p>
                  <p>专业外教真人配音</p>
                  <p>炼听力，炼拼写，炼表达</p>
                  <p>炼到你掌握</p>
                  <a class="download-btn" href="javascript:;">下载 APP</a>
                </div>
              </div>

            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <!-- <span class="sr-only">Previous</span> -->
    </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <!-- <span class="sr-only">Next</span> -->
    </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="col-sm-4 text-center">
              <a href="javascript:;">
                <div class="first">
                  <img src="../assets/img/6.png" alt="单词量">
                </div>
              </a>
              <div class="text">
                <a href="javascript:;">
                  <h4>测试词量</h4>
                </a>
                <p>不知道自己的词汇量</p>
                <p>还怎么学英语</p>
                <p>赶快来试一试</p>
              </div>
            </div>
            <div class="col-sm-4 text-center">
              <a href="javascript:;">
                <div class="second">
                  <img src="../assets/img/5.png" alt="保险">
                </div>
              </a>
              <div class="text">
                <a href="javascript:;">
                  <h4>考试保险</h4>
                </a>
                <p>相信扇贝，更相信自己</p>
                <p>一份努力一分收获</p>
                <p>考试不过找扇贝</p>
              </div>
            </div>
            <div class="col-sm-4 text-center">
              <a href="javascript:;">
                <div class="third">
                  <img src="../assets/img/4.png" alt="社区">
                </div>
              </a>

              <div class="text">
                <a href="javascript:;">
                  <h4>扇贝社区</h4>
                </a>
                <p>学习路上，你不孤单</p>
                <p>小组长"骚扰"你，关怀你</p>
                <p>就是要让你一起坚持</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container footer-bg">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="row">
              <div class="col-sm-3">
                <h4>如何使用</h4>
                <ul>
                  <li> <a href="javascript:;">帮助</a></li>
                  <li> <a href="javascript:;">小组</a></li>
                  <li> <a href="javascript:;">博客</a></li>
                  <li> <a href="javascript:;">论坛</a></li>
                  <li> <a href="javascript:;">你问我答</a></li>
                </ul>

              </div>
              <div class="col-sm-3">
                <h4>关于扇贝</h4>
                <ul>
                  <li><a href="javascript:;">关注我们</a></li>
                  <li><a href="javascript:;">加入我们</a></li>
                  <li> <a href="javascript:;">关于我们</a></li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h4>开发者</h4>
                <ul>
                  <li> <a href="javascript:;">wiki</a></li>
                </ul>

              </div>
              <div class="col-sm-3">
                <h4>合作伙伴</h4>
                <ul>
                  <li>
                    <a href="javascript:;">
                   <img src="../assets/img/Collins.jpg" alt="Collins" class="collins">
                 </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="row text-center footer-bottom">
          <p>Copyright © 2009-2017 版权所有：南京贝湾教育科技有限公司</p>
          <p>苏ICP备13045540号-2 公安备案号：32010202010034</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jQuery'

  export default {
    components: {},
    data() {
      return {
        v1: ''
      }
    },
    methods: {
      m1: function () {}
    },
    mounted: function () {
      // $('body').on('click', function () {
      //   alert('123')
      // })

    }
  }

</script>

<style>
  div,
  p,
  a,
  h3,
  h4,
  h5,
  img,
  ul,
  li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    text-align: left;
  }

  * {
    /* outline: 1px solid #ddd; */
  }

  .navbar {
    background: #fff;
    border-bottom: none;
    margin-bottom: 0;
    min-height: 3rem;
    word-spacing: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .navbar span {
    font-size: 1rem;
  }

  .navbar-right a {
    line-height: 3rem;
    font-size: 1rem;
    color: #333;
  }

  .navbar-right {
    margin-right: 1.5rem;
  }

  .navbar-right a:hover {
    text-decoration: none;
  }

  #logo {
    width: 11rem;
    height: auto;
    margin: 2rem 0rem;
  }

  .first {
    background-image: url(../assets/img/danciliang.png);
    background-repeat: no-repeat;
  }

  .home-link a {
    color: #666;
    width: 5rem;
    line-height: 3rem;
    display: inline-block;
    transition: font-size 0.2s;
    font-size: 1.5rem;
    vertical-align: middle;
  }

  .home-link a:hover,
  .home-link a.active {
    font-size: 2rem;
  }

  .carousel-control.right {
    background-image: url(../assets/img/right.png);
    background-repeat: no-repeat;
    right: -1rem;
  }

  .carousel-control.left {
    background-image: url(../assets/img/left.png);
    background-repeat: no-repeat;
    left: -1rem;
  }

  .carousel-control {
    background: none;
    background-repeat: no-repeat;
    position: absolute;
    background-size: 100% 100%;
    border: none;
    width: 1.5rem;
    height: 4.125rem;
    opacity: 1;
    top: 50%;
    margin-top: -2.0625rem;
  }

  .carousel-inner {
    width: 96%;
    margin-left: 2%;
  }

  .glyphicon-chevron-left:before {
    content: "";
  }

  .glyphicon-chevron-right:before {
    content: none;
  }


  .carousel-caption {
    position: absolute;
    margin: auto auto auto 10rem;
    top: 0;
    bottom: 0;
    height: 20rem;
    left: 6.25rem;
    text-align: left;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  }

  .carousel-caption p {
    margin: 0 0 0.5rem;
    font-size: 2rem;
    line-height: 1.1;
  }

  .carousel-caption a {
    padding: 0.6rem 2.5rem;
    position: absolute;
    font-size: 1.5rem;
    bottom: -4.5rem;
  }

  .word-bdc,
  .word-bdc a {
    color: #145f57;
  }

  .word-bdc a {
    border: 1px solid #145f57;
    border-radius: 0.2rem;
  }

  .listen,
  .listen a {
    color: #804500;
  }

  .listen a {
    border: 1px solid #804500;
    border-radius: 0.2rem;
  }

  .speak,
  .speak a {
    color: #fff;
  }

  .speak a {
    border: 1px solid #fff;
    border-radius: 0.2rem;
  }

  .news,
  .news a {
    color: #0078a5;
  }

  .news a {
    border: 1px solid #0078a5;
    border-radius: 0.2rem;
  }

  .sentence,
  .sentence a {
    color: #165c5f;
  }

  .sentence a {
    border: 1px solid #165c5f;
    border-radius: 0.2rem;
  }

  .carousel-caption h4 {
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 1.56rem;
  }

  .second {
    background-image: url(../assets/img/baoxian.png);
    background-repeat: no-repeat;
  }

  .third {
    background-image: url(../assets/img/shequ.png);
    background-repeat: no-repeat;
  }

  .first,
  .second,
  .third {
    width: 8rem;
    height: 8rem;
    position: relative;
    margin: 0 auto;
    background-size: contain;
  }

  .first img {
    width: 5.8rem;
    height: auto;
    left: 1.5rem;
    top: 0;
    position: absolute;
    transition: top 0.2s;
  }

  .first:hover img {
    top: -0.17rem;
  }

  .text h4 {
    margin: 2rem 0;
  }

  .text p {
    color: #666;
    margin: 0 0 0.3rem;
  }

  .second img {
    position: absolute;
    width: 7.6rem;
    top: -0.7rem;
    left: -0.4rem;
    transition: top 0.2s;
  }

  .second:hover img {
    top: -0.9rem;
  }

  .third img {
    width: 4.3rem;
    position: absolute;
    top: 0rem;
    left: 1.1rem;
    transition: top 0.2s;
  }

  .third:hover img {
    top: -0.3rem;
  }

  .section2 {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  .footer-bg {
    padding-top: 3rem;
    background-color: #f4f4f4;
    color: #333;
    padding-bottom: 3rem;
  }

  .footer-bg h4 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .footer-bg li {
    line-height: 2.5rem;
    color: #333;
  }

  .footer-bg .collins {
    width: 8rem;
    height: auto;
  }

  .footer-bottom {
    margin-top: 6rem;
  }

  .footer-bottom p {
    line-height: 2rem;
  }

</style>
