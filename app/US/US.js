'use strict';

angular.module('webApp.US', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/US',{
		templateUrl: 'US/US.html',
		controller: 'USCtrl'
	});
}])

.controller('USCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])