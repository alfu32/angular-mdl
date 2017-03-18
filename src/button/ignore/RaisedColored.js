
angular.module("mdl")
.directive("mdlRaisedColored",function RaisedColoredDirective(){
	var stl=angular.element('<style id="mdlRaisedColored">\n\
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
<!-- Colored raised button -->\
<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RaisedColored-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedColored-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedColored-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})