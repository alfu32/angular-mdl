
angular.module("mdl")
.directive("mdlRaisedDisabled",function RaisedDisabledDirective(){
	var stl=angular.element('<style id="mdlRaisedDisabled">\n\
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
<!-- Raised disabled button -->\
<button class="mdl-button mdl-js-button mdl-button--raised" disabled>\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RaisedDisabled-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedDisabled-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RaisedDisabled-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})