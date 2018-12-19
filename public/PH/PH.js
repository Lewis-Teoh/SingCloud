
angular.module('webApp.PH', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/PH',{
		templateUrl: 'PH/PH.html',
		controller: 'PHCtrl'
	});
}])

.controller('PHCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])