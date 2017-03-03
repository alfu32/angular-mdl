
angular.module("mdl")
.directive("mdlFabDisabled",function FabDisabledDirective(){
	var stl=angular.element('<style id="mdlFabDisabled">\n\
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
<!-- Disabled FAB button -->\
<button class="mdl-button mdl-js-button mdl-button--fab" disabled>\
  <i class="material-icons">add</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FabDisabled-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabDisabled-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabDisabled-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})