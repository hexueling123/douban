/*
* @Author: Administrator
* @Date:   2018-01-20 23:38:22
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-21 17:58:39
*/
	var module=angular.module('moviecat.Ctrl',[
		'ngRoute'
		] 
	);

	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:cate',{
			templateUrl:'views/inhot.html',
			controller:'hotController'
		});
	}]);


	 

	module.controller('hotController',[
		'$scope',
		'$http',
		'$route',
		'$routeParams',
		function($scope,$http,$route,$routeParams){
	
		
		$scope.loading=true;
		
		$http({
			method:'GET',
			url:'datas/'+$routeParams.cate+'.json'
		}).success(function(movies){
			$scope.title=movies.title;
			$scope.subjects=movies.subjects;
			$scope.totalCount=movies.total;
			$scope.loading=false;
			$scope.$apply();
		},function(err){

		});

	}]);

	
