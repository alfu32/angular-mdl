
angular.module("mdl")
.directive("mdlTextfieldFloatingNumeric",function TextfieldFloatingNumericDirective(){
	var stl=angular.element('<style id="mdlTextfieldFloatingNumeric">\n\
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
<!-- Numeric Textfield with Floating Label -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">\
    <label class="mdl-textfield__label" for="sample4">Number...</label>\
    <span class="mdl-textfield__error">Input is not a number!</span>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldFloatingNumeric-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingNumeric-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingNumeric-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})