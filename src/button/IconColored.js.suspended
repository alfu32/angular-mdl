
angular.module("mdl")
.directive("mdlIconColored",function IconColoredDirective(){
	var stl=angular.element('<style id="mdlIconColored">\n\
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
<!-- Colored icon button -->\
<button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">\
  <i class="material-icons">mood</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("IconColored-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconColored-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconColored-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})