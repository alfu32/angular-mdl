
angular.module("mdl")
.directive("mdlWaterfallHeader",function WaterfallHeaderDirective(mdl){
	var stl=angular.element('<style id="mdlWaterfallHeader">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
      scope:{
        layoutTitle:"@layoutTitle"
      },
			transclude: {
        "layoutHeaderRow":"?layoutHeaderRow",
        "layoutWaterfallHeaderRow":"?layoutWaterfallHeaderRow",
        "layoutDrawer":"?layoutDrawer",
        "layoutContent":"layoutContent"
			},
			template:'\
<!-- Uses a header that contracts as the page scrolls down. -->\
<style>\
.mlayout .mdl-layout__header-row .mdl-navigation__link:last-of-type  {\
  padding-right: 0;\
}\
</style>\
\
<div class="mlayout mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--waterfall">\
    <!-- Top row, always visible -->\
    <div class="mdl-layout__header-row" ng-transclude="layoutHeader">\
      <!-- Title -->\
      <span class="mdl-layout-title">{{layoutTitle}}</span>\
      <div class="mdl-layout-spacer"></div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable\
                  mdl-textfield--floating-label mdl-textfield--align-right">\
        <label class="mdl-button mdl-js-button mdl-button--icon"\
               for="waterfall-exp">\
          <i class="material-icons">search</i>\
        </label>\
        <div class="mdl-textfield__expandable-holder">\
          <input class="mdl-textfield__input" type="text" name="sample"\
                 id="waterfall-exp">\
        </div>\
      </div>\
    </div>\
    <!-- Bottom row, not visible on scroll -->\
    <div class="mdl-layout__header-row">\
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
  <div class="mdl-layout__drawer" ng-transclude="layoutDrawer"></div>\
  <main class="mdl-layout__content" ng-transclude="layoutContent"></main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("WaterfallHeader-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("WaterfallHeader-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("WaterfallHeader-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})