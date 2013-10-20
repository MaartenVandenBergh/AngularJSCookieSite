cookieCardApp.controller("MainController", 
	function($scope, MainControllerFactory){
		$scope.cookies = [];
		$scope.newCookie = {};
		init();
		function init(){
			$scope.cookies = MainControllerFactory.getCookies();
			$scope.newCookie.name = "name";
			$scope.newCookie.url ="imageUrl";
		}
		
		$scope.addCookie = function(){
			var name = $scope.newCookie.name;
			var url = $scope.newCookie.url;
			
			MainControllerFactory.insertCookie(name, url);
			
			$scope.newCookie.name = "";
			$scope.newCookie.url="";
		};
	}
);