import $ from 'jquery'
$(document).ready(() =>{
  $("a.scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
 });
  /*
		Customized layout Project
  */
  var option = {
    baseClass: "fancybox-custom-layout",
    infobar: false,
    touch: {
      vertical: false
    },
    buttons: ["close", "thumbs"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    // Customize caption area
    caption : function( instance, item ) {
      return $(this).find('figcaption').html();
    }
  };

  $('[data-fancybox="project-1"]').fancybox( option );

  // Services Demo
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  $(".content_service__link").on("click", function(){
    if( !$(this).hasClass("content_service__link--active") ){
        $(".content_service__link.content_service__link--active").removeClass("content_service__link--active");
        $(this).addClass("content_service__link--active");
        let item = $(this).data("item") - 1;
        console.log(item);
        $(".slider-item[data-slick-index=" + item + "]").click()
    }
  });
  // Open Nav
  $(".header .header__navbar-toggler").on("click", function(){
    if( !$('.header').hasClass('header_fixed') ){
      $('body,html').animate({scrollTop: 0}, 400); 
    }
    $("nav.navbar").slideToggle();
  });
  
  // Fixed Nav
  if( $('body').hasClass('index') ){
    $('.header').addClass('header_index');
  }

  if( $("body").scrollTop() > 400 ){
    if( $('body').hasClass('index') ){
      $('.header').removeClass('header_index');
    }

    $('.header').addClass('header_fixed');
    $('.header_fixed').addClass('header_fixed--active');

    $('main').addClass('padding-top');
  }

  $(window).scroll(function(){
    if( $('.header').hasClass('header_fixed') ){
      $("nav.navbar").slideUp();
    }
    var scroll=$(document).scrollTop();
    if( scroll>200 ){
      $('.header').addClass('header_fixed');
      if( !$('body').hasClass('index') ){
        $('main').addClass('padding-top');
      }
    }
    else{
      $('.header').removeClass('header_fixed');
      $('main').removeClass('padding-top');
    }
    
    if( scroll>400 ){
      if( $('body').hasClass('index') ){
        $('.header').removeClass('header_index');
      }
      $('.header_fixed').addClass('header_fixed--active');
    }
    else{
      if( $('body').hasClass('index') ){
        $('.header').addClass('header_index');
      }
      $('.header_fixed').removeClass('header_fixed--active');
    }
  });

  // YA Maps
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
    }),

    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
      // Свойства.
      // Содержимое иконки, балуна и хинта.
      iconContent: '',
      balloonContent: 'Адрес',
      hintContent: 'Стандартный значок метки',
      iconCaption: 'Офис группы Апекс'
    }, {
      // Опции.
      // Стандартная фиолетовая иконка.
      preset: 'islands#greenDotIconWithCaption',
      iconColor: '#329b48',
    });
    //myMap.controls.add('smallZoomControl');
    // Добавляем метки на карту.
    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable('scrollZoom');

  }
});