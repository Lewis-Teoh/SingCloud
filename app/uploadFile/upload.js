'use strict';

angular.module('webApp.uploadFile', ['ngRoute', 'firebase' ])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/uploadFile', {
            templateUrl: 'uploadFile/upload.html',
            controller: 'UploadCtrl'
    });
}])

.controller('UploadCtrl', ['$scope', '$firebaseStorage', '$firebaseObject', function ($scope, $firebaseStorage, $firebaseObject) {

    let fileToUpload = null;
    $scope.onChange = function onChange(fileList) {
        fileToUpload = fileList[0];
    };
    $scope.upload = function () {
        if (fileToUpload) {
          
            let storageRef = firebase.storage().ref(fileToUpload.name);
            var fileName = (fileToUpload.name).toString(); 
            let storage = $firebaseStorage(storageRef);
            let uploadTask = storage.$put(fileToUpload);
         
            uploadTask.$progress( 
                function(snapshot){
                var progress = ((snapshot.bytesTransferred/snapshot.totalBytes) * 100).toFixed(2);
                console.log('Upload is '+ progress + 'done');
                $scope.value = progress;
                switch (snapshot.state){
                    case firebase.storage.TaskEvent.PAUSED:
                    console.log('Upload is paused');
                    break;
                    case firebase.storage.TaskEvent.RUNNING:
                    console.log('Upload is running');
                    break;
                };
            });
            
            uploadTask.$complete((snapshot) => {
                $scope.success = true;
                window.setTimeout(function() {
                    $scope.$apply(function(){
                        $scope.success = false;
                    });
                }, 4000);
                var ref = firebase.database().ref("Files");
                var pushKey = ref.push().key;
                var formData = $firebaseObject(ref.child(pushKey));
                // console.log(pushKey);
                var pathReference = firebase.storage().ref(fileToUpload.name);
                pathReference.getDownloadURL().then(function(url) {
                ref.push().set({
                audioURL: url,
                fileName : fileToUpload.name,
                timeStamp: firebase.database.ServerValue.TIMESTAMP,
                fileSize : (snapshot.totalBytes/1000000).toFixed(2) +'MB'
                });
            })
                formData.$save().then(() => {
                    angular.forEach(
                        angular.element("input[type='file']"),
                        function(inputElem) {
                          angular.element(inputElem).val(null);
                        });
                })
            });
            
        }
    }
    
}])
.controller('TableCtrl' , ['$scope', '$firebaseStorage', '$firebaseObject',function ($scope, $firebaseStorage, $firebaseObject){
	let fileRef = firebase.database().ref('Files');
    $scope.files = $firebaseObject(fileRef);
    $scope.delete = (key, fileName) => {
        let storageRef = firebase.storage().ref(fileName);
        let storage = $firebaseStorage(storageRef);
        storage.$delete().then(() => {
            delete $scope.files[key];
            $scope.files.$save();
        })
    }
}]);
