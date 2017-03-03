
angular.module("mdl")
.directive("mdlEvent",function EventDirective(){
	var stl=angular.element('<style id="mdlEvent">\n\
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
<!-- Event card -->\
<style>\
.demo-card-event.mdl-card {\
  width: 256px;\
  height: 256px;\
  background: #3E4EB8;\
}\
.demo-card-event > .mdl-card__actions {\
  border-color: rgba(255, 255, 255, 0.2);\
}\
.demo-card-event > .mdl-card__title {\
  align-items: flex-start;\
}\
.demo-card-event > .mdl-card__title > h4 {\
  margin-top: 0;\
}\
.demo-card-event > .mdl-card__actions {\
  display: flex;\
  box-sizing:border-box;\
  align-items: center;\
}\
.demo-card-event > .mdl-card__actions > .material-icons {\
  padding-right: 10px;\
}\
.demo-card-event > .mdl-card__title,\
.demo-card-event > .mdl-card__actions,\
.demo-card-event > .mdl-card__actions > .mdl-button {\
  color: #fff;\
}\
</style>\
\
<div class="demo-card-event mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand">\
    <h4>\
      Featured event:<br>\
      May 24, 2016<br>\
      7-11pm\
    </h4>\
  </div>\
  <div class="mdl-card__actions mdl-card--border">\
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
      Add to Calendar\
    </a>\
    <div class="mdl-layout-spacer"></div>\
    <i class="material-icons">event</i>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Event-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Event-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Event-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})