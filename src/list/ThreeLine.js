
angular.module("mdl")
.directive("mdlThreeLine",function ThreeLineDirective(){
	var stl=angular.element('<style id="mdlThreeLine">\n\
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
<!-- Three Line List with secondary info and action -->\
<style>\
.demo-list-three {\
  width: 650px;\
}\
</style>\
\
<ul class="demo-list-three mdl-list">\
  <li class="mdl-list__item mdl-list__item--three-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons mdl-list__item-avatar">person</i>\
      <span>Bryan Cranston</span>\
      <span class="mdl-list__item-text-body">\
        Bryan Cranston played the role of Walter in Breaking Bad. He is also known\
        for playing Hal in Malcom in the Middle.\
      </span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
  <li class="mdl-list__item mdl-list__item--three-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons  mdl-list__item-avatar">person</i>\
      <span>Aaron Paul</span>\
      <span class="mdl-list__item-text-body">\
        Aaron Paul played the role of Jesse in Breaking Bad. He also featured in\
        the "Need For Speed" Movie.\
      </span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
  <li class="mdl-list__item mdl-list__item--three-line">\
    <span class="mdl-list__item-primary-content">\
      <i class="material-icons  mdl-list__item-avatar">person</i>\
      <span>Bob Odenkirk</span>\
      <span class="mdl-list__item-text-body">\
        Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the\
        character, Bob stars in his own show now, called "Better Call Saul".\
      </span>\
    </span>\
    <span class="mdl-list__item-secondary-content">\
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>\
    </span>\
  </li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ThreeLine-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ThreeLine-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ThreeLine-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})