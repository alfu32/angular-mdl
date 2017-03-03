
angular.module("mdl")
.directive("mdlTextfieldNumeric",function TextfieldNumericDirective(){
	var stl=angular.element('<style id="mdlTextfieldNumeric">\n\
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
<!-- Numeric Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2">\
    <label class="mdl-textfield__label" for="sample2">Number...</label>\
    <span class="mdl-textfield__error">Input is not a number!</span>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldNumeric-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldNumeric-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldNumeric-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})