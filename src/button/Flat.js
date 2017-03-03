
angular.module("mdl")
.directive("mdlFlat",function FlatDirective(){
	var stl=angular.element('<style id="mdlFlat">\n\
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
<!-- Flat button -->\
<button class="mdl-button mdl-js-button">\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Flat-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Flat-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Flat-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})