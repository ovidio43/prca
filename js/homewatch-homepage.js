(function($) {
  var _win = $(window);
  var _doc = $(document);
  var _nsa = navigator.userAgent;
  var _mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(_nsa);
  var _dob = _win.width(); // Desktop Mobile (when you resize to 320px);
  // -- FUNCTIONS
  var myDiv = $('.swiper-container');

  if(myDiv.length > 0){
    var mySwiper = $('.swiper-container').swiper({
      //Your options here:
      mode:'horizontal',
      roundLengths:true,
      grabCursor:true,
      onInit: function() {
        if(_win.width() < 760){
          mySwiper.params.slidesPerView=1;
        }else{
          mySwiper.params.slidesPerView=3;
        }
      }
      //etc..
    });

    mySwiper.reInit();
  }
  // On Resize windows
  var _wResize = function () {
    _dob = _win.width();
    _isdob = _win.width() < 790;

    if(myDiv.length > 0){
      if(_win.width() < 760){
        console.log('one');
        mySwiper.params.slidesPerView=1;
      }else{
        console.log('trhee');
        mySwiper.params.slidesPerView=3;
      }
      mySwiper.reInit();
    }

    $.each( $(".navbar-nav li a[data-short-title]"), function( i, l ){
      var caret = '<i class="fa fa-home fa-fw visible-xs"></i>';
      if (_win.width() > "767" && _win.width() < "992") {
        var title = $( this ).attr( "data-short-title" );
      }else{
        var title = $( this ).attr( "data-long-title" );
      }
      $(this).contents().first()[0].textContent=title;
    });

    if(_isdob){

      $(".wrapper-footer-menu").insertAfter(".wrapper-footer-aux");
      if($('body').hasClass('overflowhidden')){
        $('body').removeClass('overflowhidden');
      }
    }else{

      $(".wrapper-footer-aux").insertAfter(".wrapper-footer-menu");

    }
  }

  // Hero Collapse Two Lines Wrapper Title
  var _pAddingTwoLines = function(){
    var wrapper_hero, panel_title, panel_title_w, panel_span_w,panel_small_w,panel_btn;
    wrapper_hero = $(".wrapper-homepage-hero-collapse");
    panel_title = wrapper_hero.find(".panel-title");
    panel_title_w = panel_title.width();
    panel_span_w =  panel_title.find("span").width();
    panel_small_w = panel_title.find("small").width();
    panel_btn = wrapper_hero.find(".btn-group");
    if(panel_title_w < (panel_span_w + panel_small_w)){
      panel_title.find("small").before('<br>');
      panel_btn.addClass("twolines");
    }
  }

  // Toggle OverflowHidde Body Class
  var _toggleOverflowHiddenBodyClass = function(){
    if(!_isdob){
      $('html').toggleClass('overflowhidden');
      $('.secondlevel-menu').toggle();
    }
  }

  // -- EVENTS
  // On Resize
  _win.resize(function() {

    _wResize();

  });

  // On Ready
  _doc.ready(function() {
    _pAddingTwoLines();
    $('.navbar-mega .dropdown').on('show.bs.dropdown', function () {
      _toggleOverflowHiddenBodyClass();
      if(!_isdob){
        $('.secondlevel-menu').hide();
        $(this).find('.secondlevel-menu').show();
      }

    });
    $('.navbar-mega .dropdown').on('hide.bs.dropdown', function () {
      _toggleOverflowHiddenBodyClass();
      if(!_isdob){
        $('.secondlevel-menu').hide();
      }
    });
    // if(_win.width() < 760){
    //   mySwiper = $('.swiper-container').swiper({
    //     //Your options here:
    //     mode:'horizontal',
    //     slidesPerView:1,
    //     grabCursor:true,
    //     autoResize:false,
    //     loop: false
    //     //etc..
    //   });
    // }else{
    //
    //   mySwiper = $('.swiper-container').swiper({
    //     //Your options here:
    //     mode:'horizontal',
    //     slidesPerView:3,
    //     autoResize:false,
    //     loop: false
    //     //etc..
    //   });
    // }
  });

  // On Init
  _wResize();


  // Megamenu Actions

  $('[data-toggle=offcanvas]').click(function () {
    //console.log('Click on [data-toggle=offcanvas]');
    if(_isdob){
      console.log('Click on [data-toggle=offcanvas] Mobile');
      $('.row-offcanvas').toggleClass('active');
      $('.m-dropdown-menu .dropdown-menu').hide();
      $('.secondlevel-menu').hide();
      $('.dropdown').removeClass('open').removeClass('m-open');
      $('.nav-sidebar-container').animate({ "left": "0" }, { duration: 400, queue: false });
      $('.dropdown-label').closest('.dropdown-menu').animate({ "left": "-100%" }, { duration: 400, queue: false });
    }
  });
  $('[data-toggle=dropdown]').click(function(){
    if(_isdob){
      if ($(this).closest('.dropdown').hasClass('m-open')){
        $('.dropdown').removeClass('m-open');
        $('.secondlevel-menu').hide();

      } else {
        $('.dropdown').removeClass('m-open');
        $('.secondlevel-menu').hide();
        $(this).closest('.dropdown').addClass('m-open');
        $(this).closest('.dropdown').find('.secondlevel-menu').show();
      }
    }
    else {
      evt.preventDefault();
    }
  });
  $('.thirdlevel-toggle').hover(function(evt){
    if(_isdob){
      evt.preventDefault();
      console.log('ásd');
    }
  });

  $('.thirdlevel-toggle').click(function(evt){
    if(_isdob){
      var thisToggle = $(this);
      evt.preventDefault();
      $(thisToggle).closest('.dropdown-menu').show();
      $(thisToggle).closest('.m-dropdown-submenu').find('.dropdown-menu').show().css("left", "-100%").animate({ "left": "0%" }, { duration: 400, queue: false } );
      $('.nav-sidebar-container').animate({ "left": "100%" }, { duration: 400, queue: false });
    }
  });

  $('.back-label').click(function(evt){
    evt.preventDefault();

    $('.nav-sidebar-container').animate({ "left": "0" }, { duration: 400, queue: false });
    $(this).closest('.dropdown-menu').animate({ "left": "-100%" }, { duration: 400, queue: false });

  });

  $('.active .navbar-toggle').click(function(evt){
    $('.dropdown-menu').hide();
    $('.nav-sidebar-container').animate({ "left": "0" }, 0 );
  });



  $('.contactbar .dropdown').hover(
    function(evt){
      $('.contactbar .dropdown-toggle').dropdown('toggle');
    },function(evt) {
      if($('.contactbar .dropdown').hasClass("open")){
        $('.contactbar .dropdown-toggle').dropdown('toggle');
      }
    });

    $('#nav-sidebar-main .dropdown').hover(function(evt)
    {
      if(!_isdob){
        $(this).find('.dropdown-toggle').dropdown('toggle');
      }
    },
    function(evt) {
      if(!_isdob){
        if($('#nav-sidebar-main .dropdown').hasClass("open")){
          $(this).find('.dropdown-toggle').dropdown('toggle');
        }
      }
    });

    $( ".label-input-group input[type=radio]").each(function(index) {
      console.log($(this) + "clicked");
      $(this).on("click", function(){
        $( ".label-input-group label > input").addClass("hidden");
        $(this).parent().find('label > input').removeClass("hidden");
      });
    });



  }(jQuery));
