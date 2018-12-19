angular.module('webApp.French', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/French',{
		templateUrl: 'French/FR.html',
		controller: 'FRCtrl'
	});
}])

.controller('FRCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])