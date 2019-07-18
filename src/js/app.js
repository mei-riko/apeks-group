import $ from 'jquery'
$(document).ready(() =>{
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