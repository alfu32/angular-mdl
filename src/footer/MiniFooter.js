
angular.module("mdl")
.directive("mdlMiniFooter",function MiniFooterDirective(){
	var stl=angular.element('<style id="mdlMiniFooter">\n\
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
<footer class="mdl-mini-footer">\
  <div class="mdl-mini-footer__left-section">\
    <div class="mdl-logo">Title</div>\
    <ul class="mdl-mini-footer__link-list">\
      <li><a href="#">Help</a></li>\
      <li><a href="#">Privacy & Terms</a></li>\
    </ul>\
  </div>\
</footer>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("MiniFooter-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MiniFooter-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MiniFooter-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})