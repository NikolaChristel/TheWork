$(function(){
  var pagetop = $('#pageTop');
  // ボタン非表示
  pagetop.hide();

  // 80px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
      //500は時間(0.5s)
     return false;
  });
});