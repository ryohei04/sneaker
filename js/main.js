'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mask = document.querySelector('.mask');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    mask.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    mask.classList.remove('show');
    open.classList.remove('hide');
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('.mask').on('click', function () {
    overlay.classList.remove('show');
    mask.classList.remove('show');
    open.classList.remove('hide');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#transition a').on('click', function () {
    overlay.classList.remove('show');
    mask.classList.remove('show');
    open.classList.remove('hide');
  });

  // transition.addEventListener('click', () => {
  //   overlay.classList.remove('show');
  //   open.classList.remove('hide');
  // });

  /*スライダーアニメーション*/
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 2,//スライドを画面に2枚見せる
          slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
        }
      },
      {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1,//スライドを画面に1枚見せる
          slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
      }
    ]
  });

  /*画像フェードイン*/
  $(function () {
    $(window).on('load scroll', function () {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".showimg").each(function () {
        if ($(this).offset().top < scrollPos) {
          $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
        }
      });
    });
  });
}