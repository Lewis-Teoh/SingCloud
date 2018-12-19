angular.module('webApp.ENGLAND', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/ENGLAND',{
		templateUrl: 'ENGLAND/England.html',
		controller: 'ENGCtrl'
	});
}])

.controller('ENGCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])