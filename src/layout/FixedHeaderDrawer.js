
angular.module("mdl")
.directive("mdlFixedHeaderDrawer",function FixedHeaderDrawerDirective(){
	var stl=angular.element('<style id="mdlFixedHeaderDrawer">\n\
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
<!-- The drawer is always open in large screens. The header is always shown,\
  even in small screens. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer\
            mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <div class="mdl-layout-spacer"></div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable\
                  mdl-textfield--floating-label mdl-textfield--align-right">\
        <label class="mdl-button mdl-js-button mdl-button--icon"\
               for="fixed-header-drawer-exp">\
          <i class="material-icons">search</i>\
        </label>\
        <div class="mdl-textfield__expandable-holder">\
          <input class="mdl-textfield__input" type="text" name="sample"\
                 id="fixed-header-drawer-exp">\
        </div>\
      </div>\
    </div>\
  </header>\
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
			  	console.debug("FixedHeaderDrawer-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedHeaderDrawer-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedHeaderDrawer-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})