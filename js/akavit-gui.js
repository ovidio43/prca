
jQuery( document ).ready(function( $ ) {

  // TOOLTIP PLUGIN INITIALIZES SEPARATELY - CAN BE APPLIED TO BODY OR A SPECIFIC CONTAINER ELEMENT
  $('body').tooltip({
    selector: "a[data-toggle=tooltip]"
  });



if( isBreakpoint('sm') ) {

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    $('#nav-collapse-search').removeClass('in');
    $('.m-dropdown-menu .dropdown-menu').hide();
    $('.secondlevel-menu').hide();
    $('.dropdown').removeClass('open').removeClass('m-open');
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
     $('.nav-sidebar-container').animate({ "left": "0" }, { duration: 200, queue: false });
     $(this).closest('.dropdown-menu').animate({ "left": "-100%" }, { duration: 200, queue: false });

  });

  $('.active .navbar-toggle').click(function(evt){
      $('.dropdown-menu').hide();
     $('.nav-sidebar-container').animate({ "left": "0" }, 0 );
  });


  $('.open .dropdown-menu a').click(function(evt){
    console.log('clicked');
  });


  mobileSubmenu();
  $(window).resize(function() {
    mobileSubmenu();
  });

  // isBreakpoint is detecting for invisible divs at the bottom of <body> tag
  // to determine responsive size mode.  Use like:
      //  if( isBreakpoint('xs') ) {
      //    $('.someClass').css('property', 'value');
      //   }

}

  function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
  }

// RE-CLASSING THIRD LEVEL MENU IN CASE OF MOBILE, TO PREVENT BOOTSTRAP DEFAULT HOVER BEHAVIOR
  function mobileSubmenu(){
    if( isBreakpoint('sm') ) {
      $('li.dropdown-submenu').removeClass('dropdown-submenu').addClass('m-dropdown-submenu');
    } else {
      $('li.m-dropdown-submenu').removeClass('m-dropdown-submenu').addClass('dropdown-submenu');
    }
  }


  // ENABLING MOBILE TOUCH SUPPORT FOR BOOTSTRAP CAROUSEL
   $("#akavit-carousel").swiperight(function() {
      $(this).carousel('prev');
   });
   $("#akavit-carousel").swipeleft(function() {
      $(this).carousel('next');
   });


});
