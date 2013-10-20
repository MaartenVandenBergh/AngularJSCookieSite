var cookieCardApp = angular.module('cookieCardApp',[]);

cookieCardApp.config(
		function($routeProvider){
			$routeProvider
			.when('/',
					{
						controller: "MainController",
						templateUrl:"App/Partials/blockView.html"
					}
			)
			.when('/lineView',
					{
						controller: "MainController",
						templateUrl:"App/Partials/listView.html"
					}
			);
		}
);