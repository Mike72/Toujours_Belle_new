belleApp.controller("loginCtrl" ,function ($scope, $uibModalInstance, $http, $location, User){

$scope.userName = "Mike";
$scope.password = "Bubika";

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

      //  console.log(JSON.stringify($scope.users));

    });
    $scope.failedAttempt = false;
    
        $scope.login = function() {
            var user = getLoggedInUser();
            if (user != null && user.info === "Admin") {
                activeUser.login(user);
                $uibModalInstance.close("Logged-in");
                $location.path("/admin")
            }else if (user != null && user.info === "Guest"){
                activeUser.login(user);
                $uibModalInstance.close("Logged-in");
                $location.path("/admin")
            }else{
                $scope.failedAttempt = true;
            }
    
    
    
    
            console.log($scope.userName + " " + $scope.password)
        }


});