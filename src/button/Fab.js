
angular.module("mdl")
.directive("mdlFab",function FabDirective(mdl){
	var stl=angular.element('<style id="mdlFab">\n\
mdl-fab{\n\
	display:inline-block;\n\
}\n\
</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'EA',
			scope:{},
			transclude: true,
			template:'\
<!-- FAB button -->\
<button class="mdl-button mdl-js-button mdl-button--fab" \
ng-class="{ \'mdl-button--mini-fab\' : miniFab ,\'mdl-js-ripple-effect\': ripple ,\'mdl-button--colored\': colored ,\'mdl-button--primary\': primary ,\'mdl-button--accent\': accent }"\
{{disabled?\'disabled\':\'\'}}">\
  <i class="material-icons" ng-transclude>add</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Fab-compile",tAttrs)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	scope.miniFab=("mini" in attrs);
				  	scope.raised=("raised" in attrs);
				  	scope.ripple=("ripple" in attrs);
					scope.colored=("colored" in attrs);
					scope.disabled=(attrs["disabled"]=="true");
					scope.primary=attrs.colored=="primary";
					scope.accent=attrs.colored=="accent";
				  	//console.debug("Fab-pre",attrs,scope);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Fab-post",elm);
					componentHandler.upgradeElement(elm[0]);
				
			  }
			}
		}
	}
})