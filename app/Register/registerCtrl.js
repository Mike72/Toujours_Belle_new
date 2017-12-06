belleApp.controller("registerCtrl", function($scope, $http, activeUser, $location,User){

  /*  if(!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }*/

$scope.guest = new Guest({});

$scope.cancel = function(){
    $location.path("/login");
}

$scope.create = function(){
    users.add($scope.user);
    $location.path("/guest");
}

});