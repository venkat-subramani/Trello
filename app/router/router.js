(function(){
    angular.module("appRoute",["ngRoute","dndLists"])//adding the ngRoute dependency
    .config(['$routeProvider',function($routeProvider){
    $routeProvider	
    	/* Loads the view and controller for the corresponding route */
    	.when("/", {
            controller : "myController",
            templateUrl : "app/view/view.html"
     });
    }])
})();//Self-invoking function