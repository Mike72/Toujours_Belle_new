belleApp.factory("User", function(){
    function User(plainObject) {
        this.fname = plainObject.fname;
        this.lname = plainObject.lname;
        this.telephone = plainObject.telephone;
        this.userName = plainObject.userName;
        this.password = plainObject.password;
        this.info = plainObject.info;
    };

    return User;
});

// Service that manges the active user
belleApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});