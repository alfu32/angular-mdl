
angular.module("mdl")
.directive("mdlSwitchOff",function SwitchOffDirective(){
	var stl=angular.element('<style id="mdlSwitchOff">\n\
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
<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-2">\
  <input type="checkbox" id="switch-2" class="mdl-switch__input">\
  <span class="mdl-switch__label"></span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SwitchOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})