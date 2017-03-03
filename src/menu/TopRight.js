
angular.module("mdl")
.directive("mdlTopRight",function TopRightDirective(){
	var stl=angular.element('<style id="mdlTopRight">\n\
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
<!-- Right aligned menu on top of button  -->\
<button id="demo-menu-top-right"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect"\
    data-mdl-for="demo-menu-top-right">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TopRight-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopRight-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopRight-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})