/**
* @category directive
* @memberof mdlAngular.layout
* @name mdl-fixed-drawer
* @description

* @usage

* @example

**/
angular.module("mdl")
.directive("mdlFixedDrawer",function FixedDrawerDirective(mdl){
	var stl=angular.element('<style id="mdlFixedDrawer">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				mNav:"?mNav",
				mContent:"?mContent",
				mTitle:"?mTitle"
			},
			template:'\
<!-- No header, and the drawer stays open on larger screens (fixed drawer). -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    <nav class="mdl-navigation" ng-transclude="mNav">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
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
			  	//console.debug("FixedDrawer-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedDrawer-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedDrawer-post",elm);
				
			  }
			}
		}
	}
})