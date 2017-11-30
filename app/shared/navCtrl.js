belleApp.controller("navCtrl",function($scope){

   $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

});