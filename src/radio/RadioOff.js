
angular.module("mdl")
.directive("mdlRadioOff",function RadioOffDirective(){
	var stl=angular.element('<style id="mdlRadioOff">\n\
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
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">\
  <input type="radio" id="option-2" class="mdl-radio__button" name="options" value="2">\
  <span class="mdl-radio__label">Second</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RadioOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})