
angular.module("mdl")
.directive("mdlFlatPrimary",function FlatPrimaryDirective(){
	var stl=angular.element('<style id="mdlFlatPrimary">\n\
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
<!-- Primary-colored flat button -->\
<button class="mdl-button mdl-js-button mdl-button--primary">\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FlatPrimary-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FlatPrimary-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FlatPrimary-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})