belleApp.controller("adminCtrl", function ($scope, $http,$location){

    function Guest(fname, lname, telephone, userName, password) {
        this.fname = fname;
        this.lname = lname;
        this.telephone = telephone;
        this.userName = userName;
        this.password = password;
    }
   /* var guest = null;
     $scope.guests = [new Guest("Dora", "Hajdu","0525239029", "Dorika1", "123456")];

     console.log(JSON.stringify($scope.guests));*/



    $http.get("app/data/guests-data.json").then(function (response) {
        $scope.guests = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.guests.push(new Guest(response.data[i].fname, response.data[i].lname,
                 response.data[i].telephone, response.data[i].userName, response.data[i].password));
        }

       // console.log(JSON.stringify($scope.guests));

    });
    $scope.addGuest = function(){
        $scope.guests.push(new Guest("Miri","Jackson","052-5252525","Mirus","56565"));
        
    }
});