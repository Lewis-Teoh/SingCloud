angular.module('webApp.SA', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/SOUTH AFRICA',{
		templateUrl: 'SOUTH AFRICA/SA.html',
		controller: 'SACtrl'
	});
}])

.controller('SACtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])