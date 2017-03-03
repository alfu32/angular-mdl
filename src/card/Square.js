
angular.module("mdl")
.directive("mdlSquare",function SquareDirective(){
	var stl=angular.element('<style id="mdlSquare">\n\
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
<!-- Square card -->\
<style>\
.demo-card-square.mdl-card {\
  width: 320px;\
  height: 320px;\
}\
.demo-card-square > .mdl-card__title {\
  color: #fff;\
  background:\
    url(\'../assets/demos/dog.png\') bottom right 15% no-repeat #46B6AC;\
}\
</style>\
\
<div class="demo-card-square mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand">\
    <h2 class="mdl-card__title-text">Update</h2>\
  </div>\
  <div class="mdl-card__supporting-text">\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
    Aenan convallis.\
  </div>\
  <div class="mdl-card__actions mdl-card--border">\
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
      View Updates\
    </a>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Square-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Square-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Square-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
})