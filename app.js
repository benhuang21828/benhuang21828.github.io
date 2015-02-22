(function(){
  
  var app = angular.module('Experience', []);

  app.config(function($httpProvider) {
  		$httpProvider.defaults.useXDomain = true;
  		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});

  app.controller('ExperienceController', ['$http',function($http){
    var Exp = this;
    Exp.stuff = [];
    $http.get('http://ec2-52-10-163-61.us-west-2.compute.amazonaws.com/api/resume/experience/').success(function(data){
    	console.log(data.results);
      Exp.stuff = data.results;
      // setTimeout(function() {
        Reveal.initialize();
                       // }, .1 * 1000);
    });
  }]);

  app.controller('BioController', ['$http',function($http){
    var Person = this;
    Person.things = [];
    $http.get('http://ec2-52-10-163-61.us-west-2.compute.amazonaws.com/api/resume/bio/').success(function(data){
        console.log(data);
      Person.things = data.results;
      // setTimeout(function() {
        Reveal.initialize();
                       // }, .1 * 1000);
    });
  }]);





})();
