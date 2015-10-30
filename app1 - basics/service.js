angular.module('app1')
	.service('mainService', function(){

	var anArray = ['banana 1', 'banana 2', 'banana 3', 'chimpanzee'];

	this.returnDataOrSomething = function() {
		return anArray;
	}

	

});

