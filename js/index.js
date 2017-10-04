

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

  


});
