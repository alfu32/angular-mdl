
angular.module("mdl")
.directive("mdlListControl",function ListControlDirective(){
	var stl=angular.element('<style id="mdlListControl">\n\
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
<!-- List with avatar and controls -->\
<style>\
.demo-list-control {\
  width: 300px;\
}\
\
.demo-list-radio {\
  display: inline;\
}\
</style>\
\
<ul class="demo-list-control mdl-list">\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons  mdl-list__item-avatar">person</i>\
      Bryan Cranston\
    </span>\
    <span class="mdl-list__item-secondary-action">\
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">\
        <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />\
      </label>\
    </span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons  mdl-list__item-avatar">person</i>\
      Aaron Paul\
    </span>\
    <span class="mdl-list__item-secondary-action">\
      <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-1">\
        <input type="radio" id="list-option-1" class="mdl-radio__button" name="options" value="1" checked />\
      </label>\
    </span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons  mdl-list__item-avatar">person</i>\
      Bob Odenkirk\
    </span>\
    <span class="mdl-list__item-secondary-action">\
      <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">\
        <input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked />\
      </label>\
    </span>\
  </li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ListControl-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ListControl-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ListControl-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})