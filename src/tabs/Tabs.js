
angular.module("mdl")
.directive("mdlTabs",function TabsDirective(){
	var stl=angular.element('<style id="mdlTabs">\n\
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
<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">\
  <div class="mdl-tabs__tab-bar">\
      <a href="#starks-panel" class="mdl-tabs__tab is-active">Starks</a>\
      <a href="#lannisters-panel" class="mdl-tabs__tab">Lannisters</a>\
      <a href="#targaryens-panel" class="mdl-tabs__tab">Targaryens</a>\
  </div>\
\
  <div class="mdl-tabs__panel is-active" id="starks-panel">\
    <ul>\
      <li>Eddard</li>\
      <li>Catelyn</li>\
      <li>Robb</li>\
      <li>Sansa</li>\
      <li>Brandon</li>\
      <li>Arya</li>\
      <li>Rickon</li>\
    </ul>\
  </div>\
  <div class="mdl-tabs__panel" id="lannisters-panel">\
    <ul>\
      <li>Tywin</li>\
      <li>Cersei</li>\
      <li>Jamie</li>\
      <li>Tyrion</li>\
    </ul>\
  </div>\
  <div class="mdl-tabs__panel" id="targaryens-panel">\
    <ul>\
      <li>Viserys</li>\
      <li>Daenerys</li>\
    </ul>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Tabs-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Tabs-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Tabs-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})