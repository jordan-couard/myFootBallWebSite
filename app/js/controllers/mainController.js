angular.module('app')
  .controller('MainController', function($scope) {
    /* Here is your main controller */
    $('.slider1').bxSlider({
      slideWidth: 200,
      minSlides: 2,
      maxSlides: 3,
      slideMargin: 10
    });
  });
