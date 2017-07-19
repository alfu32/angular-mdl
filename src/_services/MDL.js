angular.module("mdl")
.factory("mdl",function mdl($http){
	var cache={length:0}

	return {
		applyStyle:applyStyle,
		loadStyle:loadStyle
	}

	function applyStyle(_style){
		var style=document.querySelectorAll("style#"+_style.id);
		if(style.length==0){
			try{
				document.body.appendChild(_style);
				console.debug("apply style","style#"+_style.id)
			}catch(err){
				setTimeout(function(){applyStyle(_style)},1000);
			}
		}
	}

	function loadStyle(url){
		if(!(url in cache)){
			$http.get(url)
			.then(function(response){
				var stl=angular.element('<style id="style_'+cache.length+'">'+response.data+'</style>');
				applyStyle(stl[0]);
				cache[url]=url;
				cache.length=Object.keys(cache).length;
			});
		}
	}

});