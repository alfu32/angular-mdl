
angular.module("mdl")
.directive("mdlFixedHeader",function FixedHeaderDirective(){
	var stl=angular.element('<style id="mdlFixedHeader">\n\
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
<!-- Always shows a header, even in smaller screens. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation. We hide it in small screens. -->\
      <nav class="mdl-navigation mdl-layout--large-screen-only">\
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
			  	console.debug("FixedHeader-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedHeader-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("FixedHeader-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})