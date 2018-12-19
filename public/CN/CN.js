angular.module('webApp.CN', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/CN',{
		templateUrl: 'CN/CN.html',
		controller: 'CNCtrl'
	});
}])

.controller('CNCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])