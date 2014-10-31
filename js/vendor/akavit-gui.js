(function($) {

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    $('.m-dropdown-menu .dropdown-menu').hide();
    $('.secondlevel-menu').hide();
    $('.dropdown').removeClass('open').removeClass('m-open');
    $('.nav-sidebar-container').animate({ "left": "0" }, { duration: 400, queue: false });
    $('.dropdown-label').closest('.dropdown-menu').animate({ "left": "-100%" }, { duration: 400, queue: false });
  });

  $('[data-toggle=dropdown]').click(function(){
    if ($(this).closest('.dropdown').hasClass('m-open')){

      $('.dropdown').removeClass('m-open');
      $('.secondlevel-menu').hide();

    } else {

      $('.dropdown').removeClass('m-open');

      $('.secondlevel-menu').hide();
      $(this).closest('.dropdown').addClass('m-open');
      $(this).closest('.dropdown').find('.secondlevel-menu').show();
    }
  });

  $('.thirdlevel-toggle').hover(function(evt){
    evt.preventDefault();
    console.log('ásd');
  });

  $('.thirdlevel-toggle').click(function(evt){
    var thisToggle = $(this);
    evt.preventDefault();
    $(thisToggle).closest('.dropdown-menu').show();
    $(thisToggle).closest('.m-dropdown-submenu').find('.dropdown-menu').show().css("left", "-100%").animate({ "left": "0%" }, { duration: 400, queue: false } );
    $('.nav-sidebar-container').animate({ "left": "100%" }, { duration: 400, queue: false });
  });

  $('.dropdown-label').click(function(evt){
    evt.preventDefault();

    $('.nav-sidebar-container').animate({ "left": "0" }, { duration: 400, queue: false });
    $(this).closest('.dropdown-menu').animate({ "left": "-100%" }, { duration: 400, queue: false });

  });

  $('.active .navbar-toggle').click(function(evt){
    $('.dropdown-menu').hide();
    $('.nav-sidebar-container').animate({ "left": "0" }, 0 );
  });


  $('.open .dropdown-menu a').click(function(evt){
    console.log('clicked');
  });

}(jQuery));
