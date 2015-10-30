angular.module('basicApp').controller('basicController', function($scope, basicService){

	$scope.basicData = basicService.getData();

});