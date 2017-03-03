
angular.module("mdl")
.directive("mdlBadgeOnTextText",function BadgeOnTextTextDirective(){
	var stl=angular.element('<style id="mdlBadgeOnTextText">\n\
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
<!-- Number badge -->\
<span class="mdl-badge" data-badge="4">Inbox</span>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("BadgeOnTextText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnTextText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnTextText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})