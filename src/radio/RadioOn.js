
angular.module("mdl")
.directive("mdlRadioOn",function RadioOnDirective(){
	var stl=angular.element('<style id="mdlRadioOn">\n\
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
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">\
  <input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>\
  <span class="mdl-radio__label">First</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RadioOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})