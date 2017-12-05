belleApp.controller("guestCtrl", function($scope,$location, $http, activeUser, User){
    function Guest(fname,lname,telephone,userName,password){
        this.fname = fname;
        this.lname = lname; 
        this.telephone = telephone;
        this.userName = userName;
        this.password = password; 
    }

    $scope.activeUser = activeUser.get();
    $scope.guests = [];
    
      $http.get("app/data/guests-data.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.guests.push(new Guest(response.data[i]))  
        }

       // console.log(JSON.stringify($scope.guests));
        

       alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })

      function Order(day,hour,type,name){
        this.day = day;
        this.hour = hour;
        this.type = type;
        this.name = name;
      }

      $scope.orders = [];

      $http.get("app/data/orders.json").then(function mySuccess(response){
        for(var i = 0; i < response.data.length; i++){
          $scope.orders.push(response.data[i])
        }

        console.log(JSON.stringify($scope.orders));

        alert("success" + JSON.stringify(response.status));
      }, function myError(response) {
          alert("error" + JSON.stringify(response.status));
        })

      function Week(day){
        this.day = day;
      }
      $scope.weeks =[];

      $http.get("app/data/treatmentDays.json").then(function mySuccess(response){
        for (var i = 0; i<response.data.length; i++){
          $scope.weeks.push(response.data[i])
        }

        // console.log(JSON.stringify($scope.weeks));
      })

      function Hour(hour){
        this.hour = hour;
      }
      $scope.hours =[];

      $http.get("app/data/appointments.json").then(function mySuccess(response){
        for (var i = 0; i<response.data.length; i++){
          $scope.hours.push(response.data[i])
        }

      //  console.log(JSON.stringify($scope.hours));
      })
      
      $scope.makeAppt = function(day, hour) {
        alert(day + " " + hour);
      } 

      $scope.apptData = function(day, hour) {
        return "test";
      } 
     $scope.orderData = function (order){
        return (type + " " + name);
      }

      $scope.fromDate = new Date();



      
});