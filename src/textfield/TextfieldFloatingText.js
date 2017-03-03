
angular.module("mdl")
.directive("mdlTextfieldFloatingText",function TextfieldFloatingTextDirective(){
	var stl=angular.element('<style id="mdlTextfieldFloatingText">\n\
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
<!-- Textfield with Floating Label -->\
\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\
    <input class="mdl-textfield__input" type="text" id="sample3">\
    <label class="mdl-textfield__label" for="sample3">Text...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldFloatingText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})