belleApp.controller("guestCtrl", function ($scope, $location, $http, activeUser, User) {
  function Guest(fname, lname, telephone, userName, password) {
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

     console.log(JSON.stringify($scope.guests));


   // alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })

  function Order(day, hour, type, name) {
    this.day = day;
    this.hour = hour;
    this.type = type;
    this.name = name;
  }

  $scope.orders = [];

  $http.get("app/data/orders.json").then(function mySuccess(response) {
    for (var k = 0; k < response.data.length; k++) {
      $scope.orders.push(response.data[k])
    }

    console.log(JSON.stringify($scope.orders));

   // alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })

  function Week(day) {
    this.day = day;
  }
  $scope.weeks = [];

  $http.get("app/data/treatmentDays.json").then(function mySuccess(response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.weeks.push(response.data[i])
    }

     console.log(JSON.stringify($scope.weeks));

   //alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })

  function Hour(hour) {
    this.hour = hour;
  }
  $scope.hours = [];

  $http.get("app/data/appointments.json").then(function mySuccess(response) {
    for (var j = 0; j < response.data.length; j++) {
      $scope.hours.push(response.data[j])
    }

    //  console.log(JSON.stringify($scope.hours));

  //  alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })

  $scope.makeAppt = function (day, hour) {
   /* alert(day + " " + hour);*/
   var message = day + " " + hour;
   $('#myModal').find('.modal-body p').text(message);
   $('#myModal').modal('show')
  }

  $scope.apptData = function (day, hour) {
    for(var i = 0; i < $scope.orders.length; i++) {
      if ($scope.orders[i].day === day && $scope.orders[i].hour === hour) {
        return $scope.orders[i].type + ": " + $scope.orders[i].name;
      }
    }

    return "free";
    
    /*
    if ($scope.day[i] === orders[k].day &&
      hours[j] === orders[k].hour) {
      return (order[k]);
    } else {
      return "free";
    }*/
  }
    /*  for (var i = 0; i < response.data.length; i++);
      for(var j = 0; j < response.data.length; j++);
      for (var k = 0; k < response.data.length; k++){
        if (weeks[i] === orders[k].day &&
       hours[j] === orders[k].hour){
         return (order[k]);
       }else{
         return "free";
       }
      }*/
    $scope.orderData = function (order) {
      return (type + " " + name);
    }

    $scope.fromDate = new Date();


    $http.get("app/data/orders.json")

  });