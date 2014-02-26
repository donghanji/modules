/*
 * @name Angular Module
 * @desc 
		angular.js as a module.
   @notice
		1.by this way,like this:
		no ng-app attribute setting
		
		2.get angular object,like this
		var angular=require('angular.module');
		
		3.create a app object
		var app=angular.module('myApp',[]);
		
		4.create a controller object
		app.controller('TextController',function($scope){
						
			$scope.someText='Hello Angular Test!';
		});
		5.call element ready method
		angular.element(document).ready(function(){
						
			angular.bootstrap(document,['myApp']);
		});
 */
(function(global,undefined){
	if(module.declare === undefined){
		throw 'There is no global module.declare method!';
	}
	module.files({
		'angular':'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js'
	});
	//define angular.module module
	module.declare('angular.module',['angular'],function(require){
		
		return global.angular||require('angular')||{};
	});
})(window);