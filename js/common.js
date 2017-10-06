function showDiv(obj) {
  obj.show(0).css("display", "block");
}

function hideDiv(obj) {
  obj.hide(0).css("display", "none");
}

$().ready(function(e) {
  $(".nav_item").mouseenter(function() {
    $(".item_content").hide(0);
    showDiv($(this).children(".item_content"));
  });
  $(".nav_item").mouseleave(function() {
    hideDiv($(this).children(".item_content"), true);
  });
});
