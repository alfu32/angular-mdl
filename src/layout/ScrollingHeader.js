
angular.module("mdl")
.directive("mdlScrollingHeader",function ScrollingHeaderDirective(){
	var stl=angular.element('<style id="mdlScrollingHeader">\n\
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
<!-- Uses a header that scrolls with the text, rather than staying\
  locked at the top -->\
<div class="mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--scroll">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation -->\
      <nav class="mdl-navigation">\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
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
			  	console.debug("ScrollingHeader-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollingHeader-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollingHeader-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})