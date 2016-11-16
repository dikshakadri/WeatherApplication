//Controllers
weatherApp.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
    
    $scope.city=cityService.city;
    
    $scope.$watch('city',function(){
       cityService.city=$scope.city; 
    });
    
    $scope.submit = function(){
      $location.path('/forecast');  
    };
    
}]);



weatherApp.controller('forecastController',['$scope','$resource','$routeParams', 'cityService', 'weatherService', function ($scope, $resource, $routeParams, cityService,weatherService){
    
    $scope.city= cityService.city;
    $scope.days= $routeParams.days || '3' ;        //here 3 is default value and its string
    
   
    
    $scope.weatherResult = weatherService.getWeather($scope.city,$scope.days);

    
    
    $scope.convertToFahrenheit = function(degree){
        return Math.round((1.8 * (degree - 273)) + 32);   
    } 
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
    
}]);
