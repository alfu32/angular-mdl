
angular.module("mdl")
.directive("mdlSnackbar",function SnackbarDirective(){
	var stl=angular.element('<style id="mdlSnackbar">\n\
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
<button id="demo-show-snackbar" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show Snackbar</button>\
<div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">\
  <div class="mdl-snackbar__text"></div>\
  <button class="mdl-snackbar__action" type="button"></button>\
</div>\
<script>\
(function() {\
  \'use strict\';\
  var snackbarContainer = document.querySelector(\'#demo-snackbar-example\');\
  var showSnackbarButton = document.querySelector(\'#demo-show-snackbar\');\
  var handler = function(event) {\
    showSnackbarButton.style.backgroundColor = \'\';\
  };\
  showSnackbarButton.addEventListener(\'click\', function() {\
    \'use strict\';\
    showSnackbarButton.style.backgroundColor = \'#\' +\
        Math.floor(Math.random() * 0xFFFFFF).toString(16);\
    var data = {\
      message: \'Button color changed.\',\
      timeout: 2000,\
      actionHandler: handler,\
      actionText: \'Undo\'\
    };\
    snackbarContainer.MaterialSnackbar.showSnackbar(data);\
  });\
}());\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Snackbar-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Snackbar-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Snackbar-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})