belleApp.controller('logoutController', function($scope,$location){
    $scope.logout = function(){
        $location.path('/home');
    }
  })