
angular.module("mdl")
.directive("mdlFlatDisabled",function FlatDisabledDirective(){
	var stl=angular.element('<style id="mdlFlatDisabled">\n\
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
<!-- Disabled flat button -->\
<button class="mdl-button mdl-js-button" disabled>\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FlatDisabled-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FlatDisabled-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FlatDisabled-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})