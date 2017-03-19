
angular.module("mdl")
.directive("mdlCardImage",function ImageCardDirective(){
	var stl=angular.element('<style id="mdlCardImage">\n\
mdl-card-image,card-title,card-actions{\n\
	display:inline-block;\n\
}\n\
.card-image.mdl-card {\n\
}\n\
.card-image > .mdl-card__actions {\n\
  height: 52px;\n\
  padding: 16px;\n\
  background: rgba(0, 0, 0, 0.2);\n\
}\n\
.card-image__filename {\n\
  color: #fff;\n\
  font-size: 14px;\n\
  font-weight: 500;\n\
}\n\
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
				cardTitle:"cardTitle",
				cardActions:"?cardActions"
			},
			template:'\
<!-- Image card -->\
<div class="card-image mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand" ng-transclude="cardTitle"></div>\
  <div class="mdl-card__actions" ng-transclude="cardActions">\
    <span class="card-image__filename">Image.jpg</span>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("CardImage-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("CardImage-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("CardImage-post",elm);
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