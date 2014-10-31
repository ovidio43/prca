(function($) {
  var _win = $(window);
  var _doc = $(document);
  var _nsa = navigator.userAgent;
  var _mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(_nsa);
  var _dob = _win.width(); // Desktop Mobile (when you resize to 320px);

  // -- FUNCTIONS

  // On Resize windows
  $('#page-accordion > .panel').on('show.bs.collapse', function (e) {
    $(this).find('.panel-heading').addClass("panel-active");
  });
  $('#page-accordion > .panel').on('hide.bs.collapse', function (e) {
    $(this).find('.panel-heading').removeClass("panel-active");
  });

  $('#nav-accordion > .panel').on('show.bs.collapse', function (e) {
    $(this).find('> a').addClass("panel-active");
  });
  $('#nav-accordion > .panel').on('hide.bs.collapse', function (e) {
    $(this).find('> a').removeClass("panel-active");
  });
}(jQuery));
