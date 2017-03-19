
angular.module("mdl")
.directive("mdlWide",function WideDirective(){
	var stl=angular.element('<style id="mdlWide">\n\
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
<!-- Wide card with share menu button -->\
<style>\
.demo-card-wide.mdl-card {\
  width: 512px;\
}\
.demo-card-wide > .mdl-card__title {\
  color: #fff;\
  height: 176px;\
  background: url(\'../assets/demos/welcome_card.jpg\') center / cover;\
}\
.demo-card-wide > .mdl-card__menu {\
  color: #fff;\
}\
</style>\
\
<div class="demo-card-wide mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title">\
    <h2 class="mdl-card__title-text">Welcome</h2>\
  </div>\
  <div class="mdl-card__supporting-text">\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
    Mauris sagittis pellentesque lacus eleifend lacinia...\
  </div>\
  <div class="mdl-card__actions mdl-card--border">\
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
      Get Started\
    </a>\
  </div>\
  <div class="mdl-card__menu">\
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">\
      <i class="material-icons">share</i>\
    </button>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Wide-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Wide-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Wide-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})