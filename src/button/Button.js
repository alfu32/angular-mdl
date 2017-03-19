
angular.module("mdl")
.directive("mdlButton",function FlatDirective(mdl){
	var stl=angular.element('<style id="mdlButton">\n\
mdl-button{\n\
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
<!-- Flat button -->\
<button class="mdl-button mdl-js-button" \
ng-class="{ \'mdl-button--raised\': raised , \'mdl-js-ripple-effect\': ripple ,\'mdl-button--colored\': colored ,\'mdl-button--primary\': primary ,\'mdl-button--accent\': accent }"\
{{disabled?\'disabled\':\'\'}}" ng-transclude>\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Button-compile",tAttrs)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	scope.raised=("raised" in attrs);
				  	scope.ripple=("ripple" in attrs);
					scope.colored=("colored" in attrs);
					scope.disabled=(attrs["disabled"]=="true");
					scope.primary=attrs.colored=="primary";
					scope.accent=attrs.colored=="accent";
				  	//console.debug("Button-pre",attrs,scope);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Button-post",elm);
					componentHandler.upgradeElement(elm[0]);
				
			  }
			}
		}
	}
})