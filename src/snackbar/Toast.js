
angular.module("mdl")
.directive("mdlToast",function ToastDirective(){
	var stl=angular.element('<style id="mdlToast">\n\
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
<button id="demo-show-toast" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show Toast</button>\
<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">\
  <div class="mdl-snackbar__text"></div>\
  <button class="mdl-snackbar__action" type="button"></button>\
</div>\
<script>\
(function() {\
  \'use strict\';\
  window[\'counter\'] = 0;\
  var snackbarContainer = document.querySelector(\'#demo-toast-example\');\
  var showToastButton = document.querySelector(\'#demo-show-toast\');\
  showToastButton.addEventListener(\'click\', function() {\
    \'use strict\';\
    var data = {message: \'Example Message # \' + ++counter};\
    snackbarContainer.MaterialSnackbar.showSnackbar(data);\
  });\
}());\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Toast-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Toast-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Toast-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})