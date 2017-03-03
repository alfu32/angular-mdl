
angular.module("mdl")
.directive("mdlIcon",function IconDirective(){
	var stl=angular.element('<style id="mdlIcon">\n\
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
<!-- Icon button -->\
<button class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">mood</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Icon-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Icon-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Icon-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})