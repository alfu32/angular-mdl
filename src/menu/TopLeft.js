
angular.module("mdl")
.directive("mdlTopLeft",function TopLeftDirective(){
	var stl=angular.element('<style id="mdlTopLeft">\n\
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
<!-- Left aligned menu on top of button  -->\
<button id="demo-menu-top-left"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"\
    data-mdl-for="demo-menu-top-left">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TopLeft-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopLeft-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopLeft-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})