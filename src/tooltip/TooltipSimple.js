
angular.module("mdl")
.directive("mdlTooltipSimple",function TooltipSimpleDirective(){
	var stl=angular.element('<style id="mdlTooltipSimple">\n\
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
<!-- Simple Tooltip -->\
<div id="tt1" class="icon material-icons">add</div>\
<div class="mdl-tooltip" data-mdl-for="tt1">\
Follow\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipSimple-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipSimple-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipSimple-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})