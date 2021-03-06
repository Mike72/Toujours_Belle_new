belleApp.controller("loginCtrl" ,function ($scope, $http, $location,activeUser, User,){

 $scope.userName = "Mike";
 $scope.password = "Bubika";

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

      console.log(JSON.stringify($scope.users));

    });
    $scope.failedAttempt = false;
    
        $scope.login = function() {
            var user = getLoggedInUser();
            if (user != null) {
                activeUser.login(user);
                
                $location.path("/guest")
          /*  }else if (user != null && user.info === "Guest"){
                activeUser.login(user);
                $uibModalInstance.close("Logged-in");
                $location.path("/guest")*/
            }else{
                $scope.failedAttempt = true;
            }

    
            console.log(JSON.stringify($scope.userName + " " + $scope.password));
        }
        var getLoggedInUser = function() {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].userName === $scope.userName && 
                    $scope.users[i].password === $scope.password) {
                    return $scope.users[i];
                }
            }
            return null;
        }
        $scope.userType = function(){
            for(var i = 0; i < $scope.users.length; i++) {
                if($scope.users[i].info === "Admin") {
               $location.path("/admin")
            }else{
                $location.path("/guest");
            }
        }
    }

        var userType = function(){
            for (var i = 0; i < $scope.user.length; i++) {
                if ($scope.user[i].info === "Admin") {
                    console.log(JSON.stringify($scope.info));
                }else{
                    console.log("Guest");
                }
            }
        }
    
        $scope.dismiss = function () {
            $uibModalInstance.close("User dismissed");
        }

});