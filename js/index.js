function showDiv(obj) {
  obj.show(0).css('opacity',1);
}
/**
 * 
 * @param {*} obj 对象
 * @param {*} isDelay 是否延迟隐藏 
 */
function hideDiv(obj, isDelay) {
  if (isDelay) {
    obj.delay(500).hide(0).css('opacity',0);
    
  } else {
    obj.hide(0).css('opacity',0);
  }

  
}

$().ready(function(e) {
  /*轮播图控制*/
  var unslider04 = $('.banner').unslider({
          dots: true,
          fluid: true  
      }),
      data04 = unslider04.data('unslider');

  $('.unslider-arrow04').click(function () {
      var fn = this.className.split(' ')[1];
      data04[fn]();
  });

  //动态调整rem
  // document.documentElement.style.fontSize =
  //   document.documentElement.clientWidth / 32 + "px";

  //导航栏控制

  $(".nav_item").mouseenter(function() {
    $(".item_content").hide(0);
    showDiv($(this).children(".item_content"));
  });
  $(".nav_item").mouseleave(function() {
    hideDiv($(this).children(".item_content"), true);
  });

  $(".item_content").mouseleave(function() {
    hideDiv($(this), false);
  });
});
