'use strict'
// Declare app level module which depends on views, and components
angular.module('moviecat',[
	'moviecat.Ctrl'

	]).config(['$routeProvider',function($routeProvider){
		$routeProvider.otherwise({
			redirecTo:'/inhot'
		})
	}]).controller('navController',['$scope','$location',function($scope,$location){
		$scope.$location=$location;
		$scope.$watch("$location.path()",function(now,old){
			$scope.index=now;
		})


		// console.log($scope.index);
	}])




