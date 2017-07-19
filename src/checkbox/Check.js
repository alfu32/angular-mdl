
angular.module("mdl")
.directive("mdlCheck",function CheckOnDirective(){
	var stl=angular.element('<style id="mdlCheck">\n\
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
	console.debug("decl mdlCheck");
	var uid=0;
	return {
			priority: 1,
			restrict: 'E',
			transclude:true,
			scope:{
				"bindModel":"=ngModel"
			},
			template:'\
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-{{uid}}">\
  <input type="checkbox" id="checkbox-{{uid}}" class="mdl-checkbox__input" ng-model="bindModel">\
  <span class="mdl-checkbox__label" ng-transclude></span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("CheckOn-compile",tElm,tAttrs);
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	uid++;
				  	scope.uid=uid;
				  	console.debug("CheckOn-pre",scope, elm, attrs);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
					componentHandler.upgradeElement(elm[0]);
				  	console.debug("CheckOn-post",scope, elm, attrs,ctrl);
				
			  }
			}
		}
	}
})