var belleApp = angular.module("belleApp",["ngRoute"]);

belleApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/admin", {
        templateUrl: "app/admin/admin.html",
        controller: "adminCtrl"
    })
    .when("/register", {
        templateUrl: "app/register/register.html",
        controller: "registerCtrl"
    })
    .when("/contact", {
        templateUrl: "app/contactUs/contact.html",
        controller: "contactCtrl"
    })
    .when("/guest", {
        templateUrl: "app/guest/guest.html",
        controller: "guestCtrl"
    })
});