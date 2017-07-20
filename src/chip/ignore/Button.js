
angular.module("mdl")
.directive("mdlButton",function ButtonDirective(){
	var stl=angular.element('<style id="mdlButton">\n\
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
<!-- Button Chip -->\
<button type="button" class="mdl-chip">\
    <span class="mdl-chip__text">Button Chip</span>\
</button>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Button-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Button-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Button-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})