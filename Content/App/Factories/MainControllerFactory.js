cookieCardApp.factory('MainControllerFactory',
	function(){
		var cookies = [
			               {name:"ChocoBumba", url:"Ui/Images/cookie.gif"},
			               {name:"ChocoBu", url:"Ui/Images/cookie.gif"},
			               {name:"ChocoBum", url:"Ui/Images/cookie.gif"},
			               {name:"ChocoBumb", url:"Ui/Images/cookie.gif"},
			               {name:"ChocoBumbs", url:"Ui/Images/cookie.gif"}
		               ];
		var factory = {};
		factory.getCookies = function(){
			return cookies;
		};
		factory.insertCookie =function(n, u){
				cookies.push({name:n, url:u});
		};
		return factory;
	}
);