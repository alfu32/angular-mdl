
angular.module("mdl")
.directive("mdlProgressBuffering",function ProgressBufferingDirective(){
	var stl=angular.element('<style id="mdlProgressBuffering">\n\
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
<!-- MDL Progress Bar with Buffering -->\
<div id="p3" class="mdl-progress mdl-js-progress"></div>\
<script>\
  document.querySelector(\'#p3\').addEventListener(\'mdl-componentupgraded\', function() {\
    this.MaterialProgress.setProgress(33);\
    this.MaterialProgress.setBuffer(87);\
  });\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressBuffering-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressBuffering-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressBuffering-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})