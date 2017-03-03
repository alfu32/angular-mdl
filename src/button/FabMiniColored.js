
angular.module("mdl")
.directive("mdlFabMiniColored",function FabMiniColoredDirective(){
	var stl=angular.element('<style id="mdlFabMiniColored">\n\
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
<!-- Colored mini FAB button -->\
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">\
  <i class="material-icons">add</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FabMiniColored-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabMiniColored-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabMiniColored-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})