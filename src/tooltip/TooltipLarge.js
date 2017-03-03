
angular.module("mdl")
.directive("mdlTooltipLarge",function TooltipLargeDirective(){
	var stl=angular.element('<style id="mdlTooltipLarge">\n\
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
<!-- Large Tooltip -->\
<div id="tt2" class="icon material-icons">print</div>\
<div class="mdl-tooltip mdl-tooltip--large" for="tt2">\
Print\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipLarge-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipLarge-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipLarge-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})