
angular.module("mdl")
.directive("mdlBasic",function BasicDirective(){
	var stl=angular.element('<style id="mdlBasic">\n\
		</style>\n\
	');

	function applyStyle(_style){
		var style=document.querySelectorAll("style#"+_style.id);
		if(style.length==0){
			try{
				document.body.appendChild(_style);
			}catch(err){
				setTimeout(function(){applyStyle(_style)},1000);
			}
		}
	}
	applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
			},
			template:'\
<!-- Basic Chip -->\
<span class="mdl-chip">\
    <span class="mdl-chip__text">Basic Chip</span>\
</span>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Basic-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Basic-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Basic-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})