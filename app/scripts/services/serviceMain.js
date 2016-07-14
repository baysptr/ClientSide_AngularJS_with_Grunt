'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
	.factory('MainService', function($http){
		return $http.get('http://localhost/APIServer/notes');
	});