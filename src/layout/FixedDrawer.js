
angular.module("mdl")
.directive("mdlFixedDrawer",function FixedDrawerDirective(){
	var stl=angular.element('<style id="mdlFixedDrawer">\n\
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
<!-- No header, and the drawer stays open on larger screens (fixed drawer). -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
    <nav class="mdl-navigation">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("FixedDrawer-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedDrawer-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedDrawer-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})