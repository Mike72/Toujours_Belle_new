belleApp.controller("registerCtrl", function($scope, $http, activeUser, $location,Guest){

  /*  if(!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }*/

$scope.guest = new Guest({});

$scope.cancel = function(){
    $location.path("/login");
}

/*$scope.create = function(){
    guests.add($scope.guest);
    $location.path("/guest");
}*/

});

/*recipeApp.controller("NewRecipeCtrl", function ($scope, $location, recipes, activeUser, Recipe) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.recipe = new Recipe({});

    $scope.cancel = function () {
        $location.path("/recipes");
    }

    $scope.create = function () {
        recipes.add($scope.recipe);
        $location.path("/recipes");
    }
});*/