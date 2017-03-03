
angular.module("mdl")
.directive("mdlSpinnerSingleColor",function SpinnerSingleColorDirective(){
	var stl=angular.element('<style id="mdlSpinnerSingleColor">\n\
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
<!-- MDL Spinner Component with Single Color -->\
<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SpinnerSingleColor-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerSingleColor-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerSingleColor-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})