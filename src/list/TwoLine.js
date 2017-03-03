
angular.module("mdl")
.directive("mdlTwoLine",function TwoLineDirective(){
	var stl=angular.element('<style id="mdlTwoLine">\n\
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
<!-- Two Line List with secondary info and action -->\
<style>\
.demo-list-two {\
  width: 300px;\
}\
</style>\
\
<ul class="demo-list-two mdl-list">\
  <li class="mdl-list__item mdl-list__item--two-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Bryan Cranston</span>\
      <span class="mdl-list__item-sub-title">62 Episodes</span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <span class="mdl-list__item-secondary-info">Actor</span>\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
  <li class="mdl-list__item mdl-list__item--two-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Aaron Paul</span>\
      <span class="mdl-list__item-sub-title">62 Episodes</span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
  <li class="mdl-list__item mdl-list__item--two-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Bob Odenkirk</span>\
      <span class="mdl-list__item-sub-title">62 Episodes</span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TwoLine-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TwoLine-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TwoLine-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})