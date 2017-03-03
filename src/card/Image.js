
angular.module("mdl")
.directive("mdlImage",function ImageDirective(){
	var stl=angular.element('<style id="mdlImage">\n\
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
<!-- Image card -->\
<style>\
.demo-card-image.mdl-card {\
  width: 256px;\
  height: 256px;\
  background: url(\'../assets/demos/image_card.jpg\') center / cover;\
}\
.demo-card-image > .mdl-card__actions {\
  height: 52px;\
  padding: 16px;\
  background: rgba(0, 0, 0, 0.2);\
}\
.demo-card-image__filename {\
  color: #fff;\
  font-size: 14px;\
  font-weight: 500;\
}\
</style>\
\
<div class="demo-card-image mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand"></div>\
  <div class="mdl-card__actions">\
    <span class="demo-card-image__filename">Image.jpg</span>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Image-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Image-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Image-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})