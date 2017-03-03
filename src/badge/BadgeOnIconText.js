
angular.module("mdl")
.directive("mdlBadgeOnIconText",function BadgeOnIconTextDirective(){
	var stl=angular.element('<style id="mdlBadgeOnIconText">\n\
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
<!-- Number badge on icon -->\
<div class="material-icons mdl-badge mdl-badge--overlap" data-badge="1">account_box</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("BadgeOnIconText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnIconText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnIconText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})