
angular.module("mdl")
.directive("mdlFixedHeader",function FixedHeaderDirective(mdl){
	var stl=angular.element('<style id="mdlFixedHeader">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				mNav:"?mNav",
				mLinks:"?mLinks",
				mContent:"?mContent",
				mTitle:"?mTitle"
			},
			template:'\
<!-- Always shows a header, even in smaller screens. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation. We hide it in small screens. -->\
      <nav class="mdl-navigation mdl-layout--large-screen-only" ng-transclude="mLinks">\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    <nav class="mdl-navigation" ng-transclude="mNav">\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content" ng-transclude="mContent"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("FixedHeader-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeader-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeader-post",elm);
				  	componentHandler.upgradeAllRegistered()
			  }
			}
		}
	}
})