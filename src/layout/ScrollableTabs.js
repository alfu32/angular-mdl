
angular.module("mdl")
.directive("mdlScrollableTabs",function ScrollableTabsDirective(){
	var stl=angular.element('<style id="mdlScrollableTabs">\n\
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
<!-- Simple header with scrollable tabs. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
    </div>\
    <!-- Tabs -->\
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">\
      <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>\
      <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>\
      <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>\
      <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>\
      <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>\
      <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
  </div>\
  <main class="mdl-layout__content">\
    <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-2">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-3">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-4">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-5">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-6">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ScrollableTabs-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollableTabs-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollableTabs-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})