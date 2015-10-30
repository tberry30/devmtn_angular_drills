angular.module('apiApp').controller('apiController', function($scope, apiService) {

	apiService.getVehicles().then(function(results){
		$scope.vehicles = results;
	});

});