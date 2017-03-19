
angular.module("mdl")
.directive("mdlBadge",function mdlBadge(mdl){
	var stl=angular.element('<style id="mdlBadge">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'A',
			transclude:false,
			//class="material-icons mdl-badge mdl-badge--overlap" data-badge="1"
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Badge-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Badge-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Badge-post",elm.attr("mdl-badge-overlap"));
				  	elm.addClass("mdl-badge");
				  	elm.attr("data-badge",elm.attr("mdl-badge"))
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
})