
angular.module("mdl")
.directive("mdlTooltipRich",function TooltipRichDirective(){
	var stl=angular.element('<style id="mdlTooltipRich">\n\
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
<!-- Rich Tooltip -->\
<div id="tt3" class="icon material-icons">cloud_upload</div>\
<div class="mdl-tooltip" data-mdl-for="tt3">\
Upload <strong>file.zip</strong>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipRich-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipRich-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipRich-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})