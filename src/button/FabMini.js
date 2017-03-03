
angular.module("mdl")
.directive("mdlFabMini",function FabMiniDirective(){
	var stl=angular.element('<style id="mdlFabMini">\n\
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
<!-- Mini FAB button -->\
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">\
  <i class="material-icons">add</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FabMini-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabMini-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FabMini-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})