
angular.module("mdl")
.directive("mdlTooltipMultiline",function TooltipMultilineDirective(){
	var stl=angular.element('<style id="mdlTooltipMultiline">\n\
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
<!-- Multiline Tooltip -->\
<div id="tt4" class="icon material-icons">share</div>\
<div class="mdl-tooltip" for="tt4">\
Share your content<br>via social media\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipMultiline-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipMultiline-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipMultiline-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})