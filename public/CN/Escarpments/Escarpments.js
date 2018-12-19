angular.module('webApp.Escarpments', ['ngRoute', 'firebase'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/CN/Escarpments', {
			templateUrl: 'CN/Escarpments/Escarpments.html',
			controller: 'EscarpmentsCtrl'
		});
	}])

	.controller('EscarpmentsCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function ($scope, CommonProp, $firebaseArray, $firebaseObject, $location) {
		

		var ref = firebase.database().ref().child('Escarpments');
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