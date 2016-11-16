//Service
weatherApp.service('cityService',function(){
   
    this.city='Bangalore'; 
});


weatherApp.service('weatherService',['$resource',function($resource){
    
    this.getWeather= function(city,days){ 
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
        callback: "JSON_CALLBACK"},{get: {method:"JSONP"}});//to get data from api
    
    return weatherAPI.get({ q: city , cnt : days ,appid:'30785600271d7932b285f836c6a19652'});
    
        }
}]);