(function(){
  'use strict';
  var index = angular.module('jj', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);

  index.controller('IndexCtrl', ['$scope', function($scope){
    $scope.scroll = function(id){
      console.log('stuff');
     var $root = $('html, body');
       $root.animate({
       scrollTop: $('#' + id).offset().top
      }, 500);
    };

  }]);
})();
