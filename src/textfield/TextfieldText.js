
angular.module("mdl")
.directive("mdlTextfieldText",function TextfieldTextDirective(){
	var stl=angular.element('<style id="mdlTextfieldText">\n\
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
<!-- Simple Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <input class="mdl-textfield__input" type="text" id="sample1">\
    <label class="mdl-textfield__label" for="sample1">Text...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})