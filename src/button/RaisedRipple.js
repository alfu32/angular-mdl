
angular.module("mdl")
.directive("mdlRaisedRipple",function RaisedRippleDirective(){
	var stl=angular.element('<style id="mdlRaisedRipple">\n\
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
<!-- Raised button with ripple -->\
<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RaisedRipple-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedRipple-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedRipple-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})