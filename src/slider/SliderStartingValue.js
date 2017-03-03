
angular.module("mdl")
.directive("mdlSliderStartingValue",function SliderStartingValueDirective(){
	var stl=angular.element('<style id="mdlSliderStartingValue">\n\
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
<!-- Slider with Starting Value -->\
<input class="mdl-slider mdl-js-slider" type="range"\
  min="0" max="100" value="25" tabindex="0">\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SliderStartingValue-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderStartingValue-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderStartingValue-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})