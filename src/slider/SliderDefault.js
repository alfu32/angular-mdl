
angular.module("mdl")
.directive("mdlSliderDefault",function SliderDefaultDirective(){
	var stl=angular.element('<style id="mdlSliderDefault">\n\
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
<!-- Default Slider -->\
<input class="mdl-slider mdl-js-slider" type="range"\
  min="0" max="100" value="0" tabindex="0">\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SliderDefault-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderDefault-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderDefault-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})