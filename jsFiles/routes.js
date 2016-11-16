//Routing
weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
          templateUrl:'pages/home.htm',
          controller:'homeController'
          })
    .when('/forecast',{
          templateUrl:'pages/forecast.htm',
          controller:'forecastController'
          })
    .when('/forecast/:days',{           //here days value is taken as $routeParas
          templateUrl:'pages/forecast.htm',
          controller:'forecastController'
          })
});