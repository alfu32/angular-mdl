
angular.module("mdl")
.directive("mdlTransparent",function TransparentDirective(){
	var stl=angular.element('<style id="mdlTransparent">\n\
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
<!-- Uses a transparent header that draws on top of the layout\'s background -->\
<style>\
.demo-layout-transparent {\
  background: url(\'../assets/demos/transparent.jpg\') center / cover;\
}\
.demo-layout-transparent .mdl-layout__header,\
.demo-layout-transparent .mdl-layout__drawer-button {\
  /* This background is dark, so we set text to white. Use 87% black instead if\
     your background is light. */\
  color: white;\
}\
</style>\
\
<div class="demo-layout-transparent mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--transparent">\
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
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Transparent-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Transparent-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Transparent-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})