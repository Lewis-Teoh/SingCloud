angular.module('webApp.IRELAND', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/IRELAND',{
		templateUrl: 'IRELAND/IR.html',
		controller: 'IRELANDCtrl'
	});
}])

.controller('IRELANDCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
}])