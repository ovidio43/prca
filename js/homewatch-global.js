jQuery( document ).ready(function( $ ) {

  var body = $("body");
  $(".item-fontsize-widget").click(function(){
    $(this).toggleClass("reduce");
    if($(this).hasClass("reduce")){
      $("body").css("font-size", "18px");
    } else {
      $("body").css("font-size", "14px");
    }

  })
  // END OF DOC.READY
  
});
