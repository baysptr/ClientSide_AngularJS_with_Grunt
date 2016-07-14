'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('FrontEnd')
	.controller('LoginController', function($scope){
		$scope.test = 'login page';
		$scope.login = function (){
			console.log($scope.login.password);
		}
	})