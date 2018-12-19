'use strict';

angular.module('webApp.playlist', ['ngRoute', 'angularSoundManager'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/playlist', {
            templateUrl: 'playlist/playlist.html',
            controller: 'PlaylistCtrl'
        });
    }])
    .controller('PlaylistCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Joget Pahang',
                artist: 'Siti Nurhaliza',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Siti%20Nurhaliza%20-%20Joget%20Pahang%20(Official%20Video%20-%20HD).mp3?alt=media&token=da697959-1837-4395-8ecc-97c9f2640475'
            },
            {
                id: 'two',
                title: 'Bersama-sama',
                artist: 'Medley',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Bersama-sama%20(A%20Malay%20Folk-song%20Medley).mp3?alt=media&token=66e9deb3-15fc-4d93-aaaf-265b50f24934'
            },
            {
                id: 'three',
                title: 'Do the Rise',
                artist: 'Ian Randall Thornton',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Ian%20Randall%20Thornton%20-%20Do%20You%20Rise.mp3?alt=media&token=a7a3c50c-57c0-4070-9d55-b4d2316a7cf2'
            },
            {
                id: 'four',
                title: 'By The River',
                artist: 'Stu Larsen',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Stu%20Larsen%20-%20By%20The%20River%20(Official%20Video).mp3?alt=media&token=04f117cd-f52e-4cd6-90ec-df6943a63ea6'
            },
            {
                id: 'five',
                title: 'Fletcher Bay',
                artist: 'Harry Pane',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Harry%20Pane%20-%20Fletcher%20Bay.mp3?alt=media&token=8ad03a67-8977-41e5-a358-b2ea94e65ace'
            },
            {
                id: 'six',
                title: 'Willow Tree',
                artist: 'Tom Speight',
                url: 'https://firebasestorage.googleapis.com/v0/b/project-management-10eca.appspot.com/o/Tom%20Speight%20-%20Willow%20Tree.mp3?alt=media&token=fdb68362-58fb-4966-a9cb-45316ac19a05'
            },

        ];
    }]);