
angular.module("mdl")
.directive("mdlSwitchOn",function SwitchOnDirective(){
	var stl=angular.element('<style id="mdlSwitchOn">\n\
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
<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">\
  <input type="checkbox" id="switch-1" class="mdl-switch__input" checked>\
  <span class="mdl-switch__label"></span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SwitchOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})