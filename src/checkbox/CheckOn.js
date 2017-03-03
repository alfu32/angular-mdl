
angular.module("mdl")
.directive("mdlCheckOn",function CheckOnDirective(){
	var stl=angular.element('<style id="mdlCheckOn">\n\
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
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">\
  <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked>\
  <span class="mdl-checkbox__label">Checkbox</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("CheckOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})