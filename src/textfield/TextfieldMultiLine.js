
angular.module("mdl")
.directive("mdlTextfieldMultiLine",function TextfieldMultiLineDirective(){
	var stl=angular.element('<style id="mdlTextfieldMultiLine">\n\
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
<!-- Floating Multiline Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <textarea class="mdl-textfield__input" type="text" rows= "3" id="sample5" ></textarea>\
    <label class="mdl-textfield__label" for="sample5">Text lines...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldMultiLine-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldMultiLine-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldMultiLine-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})