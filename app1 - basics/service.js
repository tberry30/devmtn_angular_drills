angular.module('basicApp').service('basicService', function(){

	var basicData = 'Hello, World!';

	this.getData = function() {
		return basicData;
	}

});
