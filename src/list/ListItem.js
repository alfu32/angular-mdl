
angular.module("mdl")
.directive("mdlListItem",function ListItemDirective(){
	var stl=angular.element('<style id="mdlListItem">\n\
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
<!-- Simple list -->\
<style>\
.demo-list-item {\
  width: 300px;\
}\
</style>\
\
<ul class="demo-list-item mdl-list">\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      Bryan Cranston\
    </span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      Aaron Paul\
    </span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
      Bob Odenkirk\
    </span>\
  </li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ListItem-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ListItem-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ListItem-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})