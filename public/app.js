'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'angularSoundManager',
  'webApp.home',
  'webApp.register',
  'webApp.welcome',
  'webApp.uploadFile',
  'webApp.playlist',
  'webApp.addPost',
  'webApp.US',
  'webApp.CityOfNewOrlean',
  'webApp.SamStone',
  'webApp.MakingBelieve',
  'webApp.PH',
  'webApp.Anak',
  'webApp.Dandansoy',
  'webApp.ENGLAND',
  'webApp.ML',
  'webApp.LoveCherry',
  'webApp.SA',
  'webApp.Homeless',
  'webApp.TheClickSong',
  'webApp.French',
  'webApp.Alaclaire',
  'webApp.Angels',
  'webApp.CN',
  'webApp.Escarpments',
  'webApp.Wreck',
  'webApp.IRELAND',
  'webApp.Glass',
  'webApp.Cliffs',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
