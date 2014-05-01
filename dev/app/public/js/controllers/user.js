'use strict'

app.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {
    var getUserURL = 'https://api.soundcloud.com/me.json?oauth_token=' + window.scAccessToken;

    $scope.name = '';
    $scope.userThumb = '';
    $scope.userThumbWidth = '50px';
    $scope.userThumbHeight = '50px';

    $http({method: 'GET', url: getUserURL})
        .success(function(data, status, headers, config) {
            console.log('user', data.username)
            $scope.name = data.username;
            $scope.userThumb = data.avatar_url;
        })
        .error(function(data, status, headers, config) {
            console.log('Error getting user', status)
        });

    $scope.logOut = function() {
        scAPI.disconnect();
        console.log( scAPI.isConnected() );
    }
    
}]);