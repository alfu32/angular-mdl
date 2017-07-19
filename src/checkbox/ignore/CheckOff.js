
angular.module("mdl")
.directive("mdlCheckOff",function CheckOffDirective(){
	var stl=angular.element('<style id="mdlCheckOff">\n\
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
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">\
  <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input">\
  <span class="mdl-checkbox__label">Checkbox</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("CheckOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})