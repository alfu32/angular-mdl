
angular.module("mdl")
.directive("mdlCard",function SquareCardDirective(){
	var stl=angular.element('<style id="mdlCard">\n\
mdl-card{\n\
	vertical-align:top;\n\
	margin: 4px 0px 0px 4px;\n\
	box-sizing:border-box;\n\
}\n\
mdl-card,card-title,card-actions,card-text{\n\
	display:inline-block;\n\
}\n\
mdl-card,card-title,card-actions,card-text,card-menu{\n\
	display:inline-block;\n\
}\n\
.card-square.mdl-card {\n\
}\n\
.card-square > .mdl-card__title {\n\
  color: #fff;\n\
}\n\
.card-square > .mdl-card__supporting-text {\n\
  width: 97%;\n\
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
				cardTitle:"?cardTitle",
				cardActions:"?cardActions",
				cardText:"?cardText",
				cardMenu:"?cardMenu"
			},
			template:'\
<!-- Square card -->\
<div class="card-square mdl-card mdl-shadow--2dp">\
  <div class="mdl-card__title mdl-card--expand" ng-transclude="cardTitle"></div>\
  <div class="mdl-card__supporting-text" ng-transclude="cardText"></div>\
  <div class="mdl-card__actions mdl-card--border" ng-transclude="cardActions"></div>\
  <div class="mdl-card__menu" ng-transclude="cardMenu"></div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SquareCard-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SquareCard-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){

				  	var ct=elm.find("card-title");
				  	var cx=elm.find("card-text");
				  	var ca=elm.find("card-actions");
				  	var cm=elm.find("card-menu");

				  	var cardBackground=attrs["background"]||"#3E4EB8";
				  	var titleBackground=ct.attr("background")||"transparent";
				  	var textBackground=cx.attr("background")||"white";
				  	var actionsBackground=ca.attr("background")||"white";
				  	var menuColor=cm.attr("color")||"white";
				  	
				  	//console.log(cardBackground,titleBackground,textBackground,actionsBackground,menuColor);

				  	var width=attrs["width"]||"256px";
				  	var height=attrs["height"]||"256px";

				  	var card=elm[0].children[0];

				  	console.log(ct,ca,cx,cm)
				  	//console.debug("SquareCard-post",attrs,card.children,cardBackground,actionsBackground);
				  	angular.element(card).css({
						width:width,
						height:height
				  	})
				  	angular.element(card).css({
				  		background:cardBackground
				  	})
				  	angular.element(card.children[0]).css({
				  		background:titleBackground
				  	})
				  	angular.element(card.children[1]).css({
				  		background:textBackground
				  	})
				  	angular.element(card.children[2]).css({
				  		background:actionsBackground
				  	})
				  	angular.element(card.children[3]).css({
				  		color:menuColor
				  	})
				  	//if(ct.length==0)card.children[0].style.display="none"
				  	if(cx.length==0)card.children[1].style.display="none"
				  	if(ca.length==0)card.children[2].style.display="none"
				  	if(cm.length==0)card.children[3].style.display="none"
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
})