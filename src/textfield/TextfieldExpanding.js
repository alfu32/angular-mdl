
angular.module("mdl")
.directive("mdlTextfieldExpanding",function TextfieldExpandingDirective(){
	var stl=angular.element('<style id="mdlTextfieldExpanding">\n\
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
<!-- Expandable Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">\
    <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">\
      <i class="material-icons">search</i>\
    </label>\
    <div class="mdl-textfield__expandable-holder">\
      <input class="mdl-textfield__input" type="text" id="sample6">\
      <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>\
    </div>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldExpanding-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldExpanding-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldExpanding-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})