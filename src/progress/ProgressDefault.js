
angular.module("mdl")
.directive("mdlProgressDefault",function ProgressDefaultDirective(){
	var stl=angular.element('<style id="mdlProgressDefault">\n\
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
<!-- Simple MDL Progress Bar -->\
<div id="p1" class="mdl-progress mdl-js-progress"></div>\
<script>\
  document.querySelector(\'#p1\').addEventListener(\'mdl-componentupgraded\', function() {\
    this.MaterialProgress.setProgress(44);\
  });\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressDefault-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressDefault-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressDefault-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})