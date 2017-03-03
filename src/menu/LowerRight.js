
angular.module("mdl")
.directive("mdlLowerRight",function LowerRightDirective(){
	var stl=angular.element('<style id="mdlLowerRight">\n\
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
<!-- Right aligned menu below button -->\
<button id="demo-menu-lower-right"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"\
    for="demo-menu-lower-right">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("LowerRight-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerRight-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerRight-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})