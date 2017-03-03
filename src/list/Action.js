
angular.module("mdl")
.directive("mdlAction",function ActionDirective(){
	var stl=angular.element('<style id="mdlAction">\n\
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
<!-- List items with avatar and action -->\
<style>\
.demo-list-action {\
  width: 300px;\
}\
</style>\
\
<div class="demo-list-action mdl-list">\
  <div class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Bryan Cranston</span>\
    </span>\
    <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
  </div>\
  <div class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Aaron Paul</span>\
    </span>\
    <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
  </div>\
  <div class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Bob Odenkirk</span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
  </span>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Action-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Action-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Action-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})