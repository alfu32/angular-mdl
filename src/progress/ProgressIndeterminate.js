
angular.module("mdl")
.directive("mdlProgressIndeterminate",function ProgressIndeterminateDirective(){
	var stl=angular.element('<style id="mdlProgressIndeterminate">\n\
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
<!-- MDL Progress Bar with Indeterminate Progress -->\
<div id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressIndeterminate-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressIndeterminate-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressIndeterminate-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})