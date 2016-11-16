
//Directive
weatherApp.directive("weatherReport",function(){
   return {
       templateUrl: 'directives/weather.htm',
       restrict: 'E',
       replace: true,
       scope : {
           weatherDay: '=',
           convertToStd: '&',
           convertToDate: '&',
           dateFormat: '@'
           
       }
       
   } 
});