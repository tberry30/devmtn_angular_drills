angular.module('filterApp').controller('filterController', function($scope, filterService){

	$scope.employees = filterService.getEmployees();

});