angular.module('apiApp').service('apiService', function($http){


	this.test = function() {
		return 'test';
	}


	this.getVehicles = function() {

		return $http({
			method: 'GET',
			url: 'http://swapi.co/api/vehicles/'
		}).then(function(response){
			return response.data.results;
		});

	}

});