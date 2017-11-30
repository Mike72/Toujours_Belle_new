belleApp.controller("guestCtrl", function($scope,$location, $http, activeUser, User){
    function Guest(fname,lname,telephone,userName,password){
        this.fname = fname;
        this.lname = lname; 
        this.telephone = telephone;
        this.userName = userName;
        this.password = password; 
    }
    $scope.guests = [];
    
      $http.get("app/data/guests-data.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.guests.push(new Guest(response.data[i]))  
        }

        console.log(JSON.stringify($scope.guests));
        

       alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
});