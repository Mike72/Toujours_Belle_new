belleApp.controller("loginCtrl" ,function ($scope, $uibModalInstance, $http, $location, User){

/*$scope.userName = "Mike";
$scope.password = "Bubika";*/

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        console.log(JSON.stringify($scope.users));

    });


});