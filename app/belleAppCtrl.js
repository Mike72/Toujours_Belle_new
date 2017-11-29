belleApp.controller("belleAppCtrl", function($scope,$location){
    function User(fname,lname,telephone,userName,password){
        this.fname = fname;
        this.lname = lname; 
        this.telephone = telephone;
        this.userName = userName;
        this.password = password; 
    }
var user = null;
 $scope.users = [new User("Dora", "Hajdu","0525239029", "Dorika1", "123456")];

 console.log(JSON.stringify($scope.users));
});