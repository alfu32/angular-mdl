
angular.module("mdl")
.directive("mdlCardEvent",function EventCardDirective(mdl){
	var stl=angular.element('<style id="mdlCardEvent">\n\
mdl-card-event,card-title,card-actions{\n\
	display:inline-block;\n\
}\n\
.card-event.mdl-card {\n\
}\n\
.card-event > .mdl-card__actions {\n\
  border-color: rgba(255, 255, 255, 0.2);\n\
}\n\
.card-event > .mdl-card__title {\n\
  align-items: flex-start;\n\
}\n\
.card-event > .mdl-card__title > h4 {\n\
  margin-top: 0;\n\
}\n\
.card-event > .mdl-card__actions {\n\
  display: flex;\n\
  box-sizing:border-box;\n\
  align-items: center;\n\
}\n\
.card-event > .mdl-card__actions > .material-icons {\n\
  padding-right: 10px;\n\
}\n\
.card-event > .mdl-card__title,\n\
.card-event > .mdl-card__actions,\n\
.card-event > .mdl-card__actions > .mdl-button {\n\
  color: #fff;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				cardTitle:"cardTitle",
				cardActions:"?cardActions"
			},
			template:'\
<!-- Event card -->\
<div class="card-event mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand">\
    <h4 ng-transclude="cardTitle">\
      Featured event:<br>\
      May 24, 2016<br>\
      7-11pm\
    </h4>\
  </div>\
  <div class="mdl-card__actions mdl-card--border" ng-transclude="cardActions">\
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
      Add to Calendar\
    </a>\
    <div class="mdl-layout-spacer"></div>\
    <i class="material-icons">{{icon}}</i>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Event-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Event-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Event-post",elm.children());
				  	var background=attrs["background"]||"#3E4EB8";
				  	var width=attrs["width"]||"256px";
				  	var height=attrs["height"]||"256px";
				  	angular.element(elm.children()[0]).css({
				  		background:background,
						width:width,
						height:height
				  	})
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
})