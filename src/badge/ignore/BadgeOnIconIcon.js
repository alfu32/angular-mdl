
angular.module("mdl")
.directive("mdlBadgeOnIconIcon",function BadgeOnIconIconDirective(){
	var stl=angular.element('<style id="mdlBadgeOnIconIcon">\n\
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
<!-- Icon badge on icon -->\
<div class="material-icons mdl-badge mdl-badge--overlap" data-badge="♥">account_box</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("BadgeOnIconIcon-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnIconIcon-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnIconIcon-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})