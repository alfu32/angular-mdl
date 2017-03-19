/**
* @category directive
* @memberof mdlAngular.layout
* @name mdl-fixed-tabs
* @description

* @usage

* @example

**/
angular.module("mdl")
.directive("mdlFixedTabs",function FixedTabsDirective($timeout,$sce,mdl){
	var stl=angular.element('<style id="mdlFixedTabs">\n\
m-tabs,m-title,m-caption,m-content{\n\
	display:inline-block;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			scope:{},
			transclude: {
				mTitle:"?mTitle",
				mTabs:"mTabs"
			},
			template:'\
<!-- Simple header with fixed tabs. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header\
            mdl-layout--fixed-tabs">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    </div>\
    <!-- Tabs -->\
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">\
      <a ng-click="$.$selected=$index" href="" \
      ng-repeat="tab in tabs" \
      class="mdl-layout__tab" \
      ng-class="{\'is-active\':($.$selected==$index) }" ng-bind-html="tab.title | trustAsHtml"></a>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
  </div>\
  <template ng-transclude="mTabs"></template>\
  <main class="mdl-layout__content">\
    <section class="mdl-layout__tab-panel" ng-repeat="tab in tabs" ng-class="{\'is-active\':($.$selected==$index) }">\
      <div class="page-content" ng-bind-html="tab.content | trustAsHtml"></div>\
    </section>\
  </main>\
</div>\
\
',
		compile:function(tElm,tAttrs,transclude){
		  	//console.debug("FixedTabs-compile",tElm,tElm.find("m-tabs").children())
		  	function $array(al){
		  		return Array.prototype.slice.call(al,0)
		  	}
			return {
				pre:function(scope, elm, attrs,ctrl,transcludeFn){
					scope.$={}
					//console.debug("FixedTabs-pre",scope, elm, attrs,ctrl,transcludeFn);
					$timeout(function(){
						//console.debug("FixedTabs-pre",elm,elm[0].querySelectorAll("m-tabs"));
						//console.debug("FixedTabs-pre",tElm,tElm.find("m-tabs").children())
						scope.tabs=$array(elm.find("m-tab"))
						.reduce(function(acc,v,i){
							//console.debug(acc,v,i,v.querySelectorAll("m-caption"),v.querySelectorAll("m-content"))
							var t=v.querySelectorAll("m-caption");
							var c=v.querySelectorAll("m-content");
							acc.push({
								title:t[0]?t[0].innerHTML:"TAB "+i,
								content:c[0]?c[0].innerHTML:"TAB content "+i
							});
							if(v.hasAttribute("active"))scope.$.$selected=i;
							return acc;
						},[]);
						//$timeout(function(){ scope.$apply() })
					},100)
				},
				post:function(scope, elm, attrs,ctrl,transcludeFn){
					//console.debug("FixedTabs-post",elm);
					componentHandler.upgradeElement(elm[0]);
				}
			}
		}
	}
})