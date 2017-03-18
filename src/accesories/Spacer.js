
angular.module("mdl")
.directive("mdlSpacer",function Spacer(mdl){
	var stl=angular.element('<style id="mdlSpacer">\n\
		</style>\n\
	');

	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: false,
			template:'<div class="mdl-layout-spacer"></div>',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("mdlSpacer-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("mdlSpacer-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("mdlSpacer-post",elm);
				
			  }
			}
		}
	}
});
