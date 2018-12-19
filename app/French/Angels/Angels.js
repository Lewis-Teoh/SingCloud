angular.module('webApp.Angels', ['ngRoute', 'firebase'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/French/Angels', {
			templateUrl: 'French/Angels/Angels.html',
			controller: 'AngelsCtrl'
		});
	}])

	.controller('AngelsCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function ($scope, CommonProp, $firebaseArray, $firebaseObject, $location) {
		

		var ref = firebase.database().ref().child('Angels');
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