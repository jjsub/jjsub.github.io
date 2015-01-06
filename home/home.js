(function(){
  'use strict';

  var home = angular.module('jj');

  home.controller('HomeCtrl', ['$scope', function($scope){
    //$scope.title = 'Home jjsub';
    $('.navbar-brand, .name p ').hide().fadeIn(2000);
    $('#content2').waypoint(function(direction){
      $('.projects p');

    },{offset:'20%'});
  }]);
})();
