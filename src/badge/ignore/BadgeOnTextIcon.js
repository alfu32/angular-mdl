
angular.module("mdl")
.directive("mdlBadgeOnTextIcon",function BadgeOnTextIconDirective(){
	var stl=angular.element('<style id="mdlBadgeOnTextIcon">\n\
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
<!-- Icon badge -->\
<span class="mdl-badge" data-badge="♥">Mood</span>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("BadgeOnTextIcon-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnTextIcon-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("BadgeOnTextIcon-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})