(function(){
  
  var app = angular.module('Experience', []);

  app.config(function($httpProvider) {
  		$httpProvider.defaults.useXDomain = true;
  		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});

  app.controller('ExperienceController', ['$http',function($http){
    var Exp = this;
    Exp.stuff = [];
    $http.get('benjaminhuang.co/api/resume/experience/').success(function(data){
    	console.log(data.results);
      Exp.stuff = data.results;
      
        Reveal.initialize();
                       
    });
  }]);

  app.controller('BioController', ['$http',function($http){
    var Person = this;
    Person.things = [];
    $http.get('benjaminhuang.co/api/resume/bio/').success(function(data){
        console.log(data);
      Person.things = data.results;
      
        Reveal.initialize();
                       
    });
  }]);





})();
