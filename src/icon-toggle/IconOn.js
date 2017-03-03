
angular.module("mdl")
.directive("mdlIconOn",function IconOnDirective(){
	var stl=angular.element('<style id="mdlIconOn">\n\
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
<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-1">\
  <input type="checkbox" id="icon-toggle-1" class="mdl-icon-toggle__input" checked>\
  <i class="mdl-icon-toggle__label material-icons">format_bold</i>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("IconOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})