angular.module('webApp.Cliffs', ['ngRoute', 'firebase'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/IRELAND/Cliffs', {
			templateUrl: 'IRELAND/Cliffs/Cliffs.html',
			controller: 'CliffsCtrl'
		});
	}])

	.controller('CliffsCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function ($scope, CommonProp, $firebaseArray, $firebaseObject, $location) {
		

		var ref = firebase.database().ref().child('Cliffs');
		$scope.articles = $firebaseArray(ref);

		$scope.createPost = function () {
			var username = $scope.article.usernameTxt;
			var comment = $scope.article.commentTxt;
			$scope.articles.$add({
				username: username,
				comment: comment
			}).then(function (ref) {
				console.log(ref);
				$scope.success = true;
				window.setTimeout(function () {
					$scope.$apply(function () {
						$scope.success = false;
					});
				}, 2000);
			}, function (error) {
				console.log(error);
			});
		};
	}])