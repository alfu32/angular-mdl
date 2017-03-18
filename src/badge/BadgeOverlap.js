
angular.module("mdl")
.directive("mdlBadgeOverlap",function mdlBadgeOverlap(mdl){
	var stl=angular.element('<style id="mdlBadgeOverlap">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'A',
			transclude:false,
			//class="material-icons mdl-badge mdl-badge--overlap" data-badge="1"
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("BadgeOverlap-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("BadgeOverlap-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("BadgeOverlap-post",elm.attr("mdl-badge-overlap"));
				  	elm.addClass("mdl-badge");
				  	elm.addClass("mdl-badge--overlap");
				  	elm.attr("data-badge",elm.attr("mdl-badge-overlap"))
			  }
			}
		}
	}
})