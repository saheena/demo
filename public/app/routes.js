
angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider,$locationProvider){
   
   $routeProvider
   .when('/',{
    templateUrl:"/app/views/pages/home.html"
   })
     
           .when('/register',{
    templateUrl:"/app/views/pages/users/register.html",
    controller:'regCtrl',
    controllerAs:'register'
   })
            .when('/login',{
    templateUrl:"/app/views/pages/users/login.html"
   })
                 .when('/time',{
    templateUrl:"/app/views/pages/users/time.html",
    controller:'timeCtrl',
    controllerAs:'timeregister'
   })

          .otherwise({redirectTo: '/'} );
        
        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
        });
 
})