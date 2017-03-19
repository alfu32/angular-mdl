angular.module('mdl',[]);

angular.module("mdl")
.directive("mdlSpacer",function Spacer(mdl){
	var stl=angular.element('<style id="mdlSpacer">\n\
		</style>\n\
	');

	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'EA',
			transclude: false,
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("mdlSpacer-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	elm.addClass("mdl-layout-spacer");
				  	//console.debug("mdlSpacer-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("mdlSpacer-post",elm);
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
});
;

angular.module("mdl")
.directive("mdlBadge",function mdlBadge(mdl){
	var stl=angular.element('<style id="mdlBadge">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'A',
			transclude:false,
			//class="material-icons mdl-badge mdl-badge--overlap" data-badge="1"
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Badge-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Badge-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Badge-post",elm.attr("mdl-badge-overlap"));
				  	elm.addClass("mdl-badge");
				  	elm.attr("data-badge",elm.attr("mdl-badge"))
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlBadgeOverlap",function mdlBadgeOverlap(mdl){
	var stl=angular.element('<style id="mdlBadgeOverlap">\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'A',
			transclude:false,
			//class="material-icons mdl-badge mdl-badge--overlap" data-badge="1"
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("BadgeOverlap-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("BadgeOverlap-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("BadgeOverlap-post",elm.attr("mdl-badge-overlap"));
				  	elm.addClass("mdl-badge");
				  	elm.addClass("mdl-badge--overlap");
				  	elm.attr("data-badge",elm.attr("mdl-badge-overlap"))
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlButton",function FlatDirective(mdl){
	var stl=angular.element('<style id="mdlButton">\n\
mdl-button{\n\
	display:inline-block;\n\
}\n\
</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'EA',
			scope:{},
			transclude: true,
			template:'\
<!-- Flat button -->\
<button class="mdl-button mdl-js-button" \
ng-class="{ \'mdl-button--raised\': raised , \'mdl-js-ripple-effect\': ripple ,\'mdl-button--colored\': colored ,\'mdl-button--primary\': primary ,\'mdl-button--accent\': accent }"\
{{disabled?\'disabled\':\'\'}}" ng-transclude>\
  Button\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Button-compile",tAttrs)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	scope.raised=("raised" in attrs);
				  	scope.ripple=("ripple" in attrs);
					scope.colored=("colored" in attrs);
					scope.disabled=(attrs["disabled"]=="true");
					scope.primary=attrs.colored=="primary";
					scope.accent=attrs.colored=="accent";
				  	//console.debug("Button-pre",attrs,scope);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Button-post",elm);
					componentHandler.upgradeElement(elm[0]);
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlFab",function FabDirective(mdl){
	var stl=angular.element('<style id="mdlFab">\n\
mdl-fab{\n\
	display:inline-block;\n\
}\n\
</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'EA',
			scope:{},
			transclude: true,
			template:'\
<!-- FAB button -->\
<button class="mdl-button mdl-js-button mdl-button--fab" \
ng-class="{ \'mdl-button--mini-fab\' : miniFab ,\'mdl-js-ripple-effect\': ripple ,\'mdl-button--colored\': colored ,\'mdl-button--primary\': primary ,\'mdl-button--accent\': accent }"\
{{disabled?\'disabled\':\'\'}}">\
  <i class="material-icons" ng-transclude>add</i>\
</button>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Fab-compile",tAttrs)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	scope.miniFab=("mini" in attrs);
				  	scope.raised=("raised" in attrs);
				  	scope.ripple=("ripple" in attrs);
					scope.colored=("colored" in attrs);
					scope.disabled=(attrs["disabled"]=="true");
					scope.primary=attrs.colored=="primary";
					scope.accent=attrs.colored=="accent";
				  	//console.debug("Fab-pre",attrs,scope);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("Fab-post",elm);
					componentHandler.upgradeElement(elm[0]);
				
			  }
			}
		}
	}
});

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
});

angular.module("mdl")
.directive("mdlCheckOff",function CheckOffDirective(){
	var stl=angular.element('<style id="mdlCheckOff">\n\
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
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">\
  <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input">\
  <span class="mdl-checkbox__label">Checkbox</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("CheckOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlCheckOn",function CheckOnDirective(){
	var stl=angular.element('<style id="mdlCheckOn">\n\
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
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">\
  <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked>\
  <span class="mdl-checkbox__label">Checkbox</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("CheckOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("CheckOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlBasic",function BasicDirective(){
	var stl=angular.element('<style id="mdlBasic">\n\
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
<!-- Basic Chip -->\
<span class="mdl-chip">\
    <span class="mdl-chip__text">Basic Chip</span>\
</span>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Basic-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Basic-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Basic-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlButton",function ButtonDirective(){
	var stl=angular.element('<style id="mdlButton">\n\
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
<!-- Button Chip -->\
<button type="button" class="mdl-chip">\
    <span class="mdl-chip__text">Button Chip</span>\
</button>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Button-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Button-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Button-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlContact",function ContactDirective(){
	var stl=angular.element('<style id="mdlContact">\n\
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
<!-- Contact Chip -->\
<span class="mdl-chip mdl-chip--contact">\
    <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>\
    <span class="mdl-chip__text">Contact Chip</span>\
</span>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Contact-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Contact-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Contact-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlDeletable",function DeletableDirective(){
	var stl=angular.element('<style id="mdlDeletable">\n\
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
<!-- Deletable Chip -->\
<span class="mdl-chip mdl-chip--deletable">\
    <span class="mdl-chip__text">Deletable Chip</span>\
    <button type="button" class="mdl-chip__action"><i class="material-icons">cancel</i></button>\
</span>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Deletable-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Deletable-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Deletable-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlDeletableContact",function DeletableContactDirective(){
	var stl=angular.element('<style id="mdlDeletableContact">\n\
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
<!-- Deletable Contact Chip -->\
<span class="mdl-chip mdl-chip--contact mdl-chip--deletable">\
    <img class="mdl-chip__contact" src="/templates/dashboard/images/user.jpg"></img>\
    <span class="mdl-chip__text">Deletable Contact Chip</span>\
    <a href="#" class="mdl-chip__action"><i class="material-icons">cancel</i></a>\
</span>\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("DeletableContact-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("DeletableContact-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("DeletableContact-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlDataTable",function DataTableDirective(){
	var stl=angular.element('<style id="mdlDataTable">\n\
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
<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">\
  <thead>\
    <tr>\
      <th class="mdl-data-table__cell--non-numeric">Material</th>\
      <th>Quantity</th>\
      <th>Unit price</th>\
    </tr>\
  </thead>\
  <tbody>\
    <tr>\
      <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>\
      <td>25</td>\
      <td>$2.90</td>\
    </tr>\
    <tr>\
      <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>\
      <td>50</td>\
      <td>$1.25</td>\
    </tr>\
    <tr>\
      <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>\
      <td>10</td>\
      <td>$2.35</td>\
    </tr>\
  </tbody>\
</table>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("DataTable-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("DataTable-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("DataTable-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlMegaFooter",function MegaFooterDirective(){
	var stl=angular.element('<style id="mdlMegaFooter">\n\
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
<footer class="mdl-mega-footer">\
  <div class="mdl-mega-footer__middle-section">\
\
    <div class="mdl-mega-footer__drop-down-section">\
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>\
      <h1 class="mdl-mega-footer__heading">Features</h1>\
      <ul class="mdl-mega-footer__link-list">\
        <li><a href="#">About</a></li>\
        <li><a href="#">Terms</a></li>\
        <li><a href="#">Partners</a></li>\
        <li><a href="#">Updates</a></li>\
      </ul>\
    </div>\
\
    <div class="mdl-mega-footer__drop-down-section">\
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>\
      <h1 class="mdl-mega-footer__heading">Details</h1>\
      <ul class="mdl-mega-footer__link-list">\
        <li><a href="#">Specs</a></li>\
        <li><a href="#">Tools</a></li>\
        <li><a href="#">Resources</a></li>\
      </ul>\
    </div>\
\
    <div class="mdl-mega-footer__drop-down-section">\
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>\
      <h1 class="mdl-mega-footer__heading">Technology</h1>\
      <ul class="mdl-mega-footer__link-list">\
        <li><a href="#">How it works</a></li>\
        <li><a href="#">Patterns</a></li>\
        <li><a href="#">Usage</a></li>\
        <li><a href="#">Products</a></li>\
        <li><a href="#">Contracts</a></li>\
      </ul>\
    </div>\
\
    <div class="mdl-mega-footer__drop-down-section">\
      <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>\
      <h1 class="mdl-mega-footer__heading">FAQ</h1>\
      <ul class="mdl-mega-footer__link-list">\
        <li><a href="#">Questions</a></li>\
        <li><a href="#">Answers</a></li>\
        <li><a href="#">Contact us</a></li>\
      </ul>\
    </div>\
\
  </div>\
\
  <div class="mdl-mega-footer__bottom-section">\
    <div class="mdl-logo">Title</div>\
    <ul class="mdl-mega-footer__link-list">\
      <li><a href="#">Help</a></li>\
      <li><a href="#">Privacy & Terms</a></li>\
    </ul>\
  </div>\
\
</footer>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("MegaFooter-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MegaFooter-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MegaFooter-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlMiniFooter",function MiniFooterDirective(){
	var stl=angular.element('<style id="mdlMiniFooter">\n\
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
<footer class="mdl-mini-footer">\
  <div class="mdl-mini-footer__left-section">\
    <div class="mdl-logo">Title</div>\
    <ul class="mdl-mini-footer__link-list">\
      <li><a href="#">Help</a></li>\
      <li><a href="#">Privacy & Terms</a></li>\
    </ul>\
  </div>\
</footer>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("MiniFooter-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MiniFooter-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("MiniFooter-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlGrid",function GridDirective(){
	var stl=angular.element('<style id="mdlGrid">\n\
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
<div class="mdl-grid">\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
  <div class="mdl-cell mdl-cell--1-col">1</div>\
</div>\
<div class="mdl-grid">\
  <div class="mdl-cell mdl-cell--4-col">4</div>\
  <div class="mdl-cell mdl-cell--4-col">4</div>\
  <div class="mdl-cell mdl-cell--4-col">4</div>\
</div>\
<div class="mdl-grid">\
  <div class="mdl-cell mdl-cell--6-col">6</div>\
  <div class="mdl-cell mdl-cell--4-col">4</div>\
  <div class="mdl-cell mdl-cell--2-col">2</div>\
</div>\
<div class="mdl-grid">\
  <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">6 (8 tablet)</div>\
  <div class="mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>\
  <div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Grid-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Grid-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Grid-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlIconOff",function IconOffDirective(){
	var stl=angular.element('<style id="mdlIconOff">\n\
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
<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-2">\
  <input type="checkbox" id="icon-toggle-2" class="mdl-icon-toggle__input">\
  <i class="mdl-icon-toggle__label material-icons">format_italic</i>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("IconOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlIconOn",function IconOnDirective(){
	var stl=angular.element('<style id="mdlIconOn">\n\
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
<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-1">\
  <input type="checkbox" id="icon-toggle-1" class="mdl-icon-toggle__input" checked>\
  <i class="mdl-icon-toggle__label material-icons">format_bold</i>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("IconOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("IconOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});
/**
* @category directive
* @memberof mdlAngular.layout
* @name mdl-fixed-drawer
* @description

* @usage

* @example

**/
angular.module("mdl")
.directive("mdlFixedDrawer",function FixedDrawerDirective(mdl){
	var stl=angular.element('<style id="mdlFixedDrawer">\n\
m-nav,m-title,m-content{\n\
	display:inline-block;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				mNav:"?mNav",
				mContent:"?mContent",
				mTitle:"?mTitle"
			},
			template:'\
<!-- No header, and the drawer stays open on larger screens (fixed drawer). -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    <nav class="mdl-navigation" ng-transclude="mNav">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content" ng-transclude="mContent"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("FixedDrawer-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedDrawer-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
					componentHandler.upgradeElement(elm[0]);
				  	//console.debug("FixedDrawer-post",elm);
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlFixedHeader",function FixedHeaderDirective(mdl){
	var stl=angular.element('<style id="mdlFixedHeader">\n\
m-nav,m-title,m-content,m-links{\n\
	display:inline-block;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				mNav:"?mNav",
				mLinks:"?mLinks",
				mContent:"?mContent",
				mTitle:"?mTitle"
			},
			template:'\
<!-- Always shows a header, even in smaller screens. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation. We hide it in small screens. -->\
      <nav class="mdl-navigation mdl-layout--large-screen-only" ng-transclude="mLinks">\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    <nav class="mdl-navigation" ng-transclude="mNav">\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content" ng-transclude="mContent"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("FixedHeader-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeader-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeader-post",elm);
					componentHandler.upgradeElement(elm[0]);
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlFixedHeaderDrawer",function FixedHeaderDrawerDirective(mdl){
	var stl=angular.element('<style id="mdlFixedHeaderDrawer">\n\
m-nav,m-title,m-content{\n\
	display:inline-block;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			transclude: {
				mNav:"?mNav",
				mContent:"?mContent",
				mTitle:"?mTitle"
			},
			template:'\
<!-- The drawer is always open in large screens. The header is always shown,\
  even in small screens. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer\
            mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <div class="mdl-layout-spacer"></div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable\
                  mdl-textfield--floating-label mdl-textfield--align-right">\
        <label class="mdl-button mdl-js-button mdl-button--icon"\
               for="fixed-header-drawer-exp">\
          <i class="material-icons">search</i>\
        </label>\
        <div class="mdl-textfield__expandable-holder">\
          <input class="mdl-textfield__input" type="text" name="sample"\
                 id="fixed-header-drawer-exp">\
        </div>\
      </div>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    <nav class="mdl-navigation" ng-transclude="mNav">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content" ng-transclude="mContent"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("FixedHeaderDrawer-compile",tElm)
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeaderDrawer-pre",elm);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	//console.debug("FixedHeaderDrawer-post",elm);
					componentHandler.upgradeElement(elm[0]);
				
			  }
			}
		}
	}
});
/**
* @category directive
* @memberof mdlAngular.layout
* @name mdl-fixed-tabs
* @description

* @usage

* @example

**/
angular.module("mdl")
.directive("mdlFixedTabs",function FixedTabsDirective($timeout,$sce,mdl){
	var stl=angular.element('<style id="mdlFixedTabs">\n\
m-tabs,m-title,m-caption,m-content{\n\
	display:inline-block;\n\
}\n\
		</style>\n\
	');
	mdl.applyStyle(stl[0]);

	return {
			priority: 1,
			restrict: 'E',
			scope:{},
			transclude: {
				mTitle:"?mTitle",
				mTabs:"mTabs"
			},
			template:'\
<!-- Simple header with fixed tabs. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header\
            mdl-layout--fixed-tabs">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title" ng-transclude="mTitle">Title</span>\
    </div>\
    <!-- Tabs -->\
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">\
      <a ng-click="$.$selected=$index" href="" \
      ng-repeat="tab in tabs" \
      class="mdl-layout__tab" \
      ng-class="{\'is-active\':($.$selected==$index) }" ng-bind-html="tab.title | trustAsHtml"></a>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
  </div>\
  <template ng-transclude="mTabs"></template>\
  <main class="mdl-layout__content">\
    <section class="mdl-layout__tab-panel" ng-repeat="tab in tabs" ng-class="{\'is-active\':($.$selected==$index) }">\
      <div class="page-content" ng-bind-html="tab.content | trustAsHtml"></div>\
    </section>\
  </main>\
</div>\
\
',
		compile:function(tElm,tAttrs,transclude){
		  	//console.debug("FixedTabs-compile",tElm,tElm.find("m-tabs").children())
		  	function $array(al){
		  		return Array.prototype.slice.call(al,0)
		  	}
			return {
				pre:function(scope, elm, attrs,ctrl,transcludeFn){
					scope.$={}
					//console.debug("FixedTabs-pre",scope, elm, attrs,ctrl,transcludeFn);
					$timeout(function(){
						//console.debug("FixedTabs-pre",elm,elm[0].querySelectorAll("m-tabs"));
						//console.debug("FixedTabs-pre",tElm,tElm.find("m-tabs").children())
						scope.tabs=$array(elm.find("m-tab"))
						.reduce(function(acc,v,i){
							//console.debug(acc,v,i,v.querySelectorAll("m-caption"),v.querySelectorAll("m-content"))
							var t=v.querySelectorAll("m-caption");
							var c=v.querySelectorAll("m-content");
							acc.push({
								title:t[0]?t[0].innerHTML:"TAB "+i,
								content:c[0]?c[0].innerHTML:"TAB content "+i
							});
							if(v.hasAttribute("active"))scope.$.$selected=i;
							return acc;
						},[]);
						//$timeout(function(){ scope.$apply() })
					},100)
				},
				post:function(scope, elm, attrs,ctrl,transcludeFn){
					//console.debug("FixedTabs-post",elm);
					componentHandler.upgradeElement(elm[0]);
				}
			}
		}
	}
});

angular.module("mdl")
.directive("mdlScrollableTabs",function ScrollableTabsDirective(){
	var stl=angular.element('<style id="mdlScrollableTabs">\n\
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
<!-- Simple header with scrollable tabs. -->\
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\
  <header class="mdl-layout__header">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
    </div>\
    <!-- Tabs -->\
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">\
      <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>\
      <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>\
      <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>\
      <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>\
      <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>\
      <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
  </div>\
  <main class="mdl-layout__content">\
    <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-2">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-3">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-4">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-5">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
    <section class="mdl-layout__tab-panel" id="scroll-tab-6">\
      <div class="page-content"><!-- Your content goes here --></div>\
    </section>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ScrollableTabs-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollableTabs-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollableTabs-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlScrollingHeader",function ScrollingHeaderDirective(){
	var stl=angular.element('<style id="mdlScrollingHeader">\n\
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
<!-- Uses a header that scrolls with the text, rather than staying\
  locked at the top -->\
<div class="mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--scroll">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation -->\
      <nav class="mdl-navigation">\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
    <nav class="mdl-navigation">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ScrollingHeader-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollingHeader-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ScrollingHeader-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTransparent",function TransparentDirective(){
	var stl=angular.element('<style id="mdlTransparent">\n\
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
<!-- Uses a transparent header that draws on top of the layout\'s background -->\
<style>\
.demo-layout-transparent {\
  background: url(\'../assets/demos/transparent.jpg\') center / cover;\
}\
.demo-layout-transparent .mdl-layout__header,\
.demo-layout-transparent .mdl-layout__drawer-button {\
  /* This background is dark, so we set text to white. Use 87% black instead if\
     your background is light. */\
  color: white;\
}\
</style>\
\
<div class="demo-layout-transparent mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--transparent">\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
      <!-- Add spacer, to align navigation to the right -->\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation -->\
      <nav class="mdl-navigation">\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
    <nav class="mdl-navigation">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Transparent-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Transparent-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Transparent-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlWaterfallHeader",function WaterfallHeaderDirective(){
	var stl=angular.element('<style id="mdlWaterfallHeader">\n\
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
<!-- Uses a header that contracts as the page scrolls down. -->\
<style>\
.demo-layout-waterfall .mdl-layout__header-row .mdl-navigation__link:last-of-type  {\
  padding-right: 0;\
}\
</style>\
\
<div class="demo-layout-waterfall mdl-layout mdl-js-layout">\
  <header class="mdl-layout__header mdl-layout__header--waterfall">\
    <!-- Top row, always visible -->\
    <div class="mdl-layout__header-row">\
      <!-- Title -->\
      <span class="mdl-layout-title">Title</span>\
      <div class="mdl-layout-spacer"></div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable\
                  mdl-textfield--floating-label mdl-textfield--align-right">\
        <label class="mdl-button mdl-js-button mdl-button--icon"\
               for="waterfall-exp">\
          <i class="material-icons">search</i>\
        </label>\
        <div class="mdl-textfield__expandable-holder">\
          <input class="mdl-textfield__input" type="text" name="sample"\
                 id="waterfall-exp">\
        </div>\
      </div>\
    </div>\
    <!-- Bottom row, not visible on scroll -->\
    <div class="mdl-layout__header-row">\
      <div class="mdl-layout-spacer"></div>\
      <!-- Navigation -->\
      <nav class="mdl-navigation">\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
        <a class="mdl-navigation__link" href="">Link</a>\
      </nav>\
    </div>\
  </header>\
  <div class="mdl-layout__drawer">\
    <span class="mdl-layout-title">Title</span>\
    <nav class="mdl-navigation">\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
      <a class="mdl-navigation__link" href="">Link</a>\
    </nav>\
  </div>\
  <main class="mdl-layout__content">\
    <div class="page-content"><!-- Your content goes here --></div>\
  </main>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("WaterfallHeader-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("WaterfallHeader-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("WaterfallHeader-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

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
});

angular.module("mdl")
.directive("mdlIcon",function IconDirective(){
	var stl=angular.element('<style id="mdlIcon">\n\
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
<!-- Icon List -->\
<style>\
.demo-list-icon {\
  width: 300px;\
}\
</style>\
\
<ul class="demo-list-icon mdl-list">\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
    <i class="material-icons mdl-list__item-icon">person</i>\
    Bryan Cranston\
</span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
    <i class="material-icons mdl-list__item-icon">person</i>\
    Aaron Paul\
  </span>\
  </li>\
  <li class="mdl-list__item">\
    <span class="mdl-list__item-primary-content">\
    <i class="material-icons mdl-list__item-icon">person</i>\
    Bob Odenkirk\
  </span>\
  </li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Icon-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Icon-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Icon-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

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
});

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
});

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
});

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
});

angular.module("mdl")
.directive("mdlLowerLeft",function LowerLeftDirective(){
	var stl=angular.element('<style id="mdlLowerLeft">\n\
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
<!-- Left aligned menu below button -->\
<button id="demo-menu-lower-left"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"\
    for="demo-menu-lower-left">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("LowerLeft-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerLeft-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerLeft-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlLowerRight",function LowerRightDirective(){
	var stl=angular.element('<style id="mdlLowerRight">\n\
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
<!-- Right aligned menu below button -->\
<button id="demo-menu-lower-right"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"\
    for="demo-menu-lower-right">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("LowerRight-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerRight-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("LowerRight-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTopLeft",function TopLeftDirective(){
	var stl=angular.element('<style id="mdlTopLeft">\n\
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
<!-- Left aligned menu on top of button  -->\
<button id="demo-menu-top-left"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"\
    data-mdl-for="demo-menu-top-left">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TopLeft-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopLeft-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopLeft-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTopRight",function TopRightDirective(){
	var stl=angular.element('<style id="mdlTopRight">\n\
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
<!-- Right aligned menu on top of button  -->\
<button id="demo-menu-top-right"\
        class="mdl-button mdl-js-button mdl-button--icon">\
  <i class="material-icons">more_vert</i>\
</button>\
\
<ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect"\
    data-mdl-for="demo-menu-top-right">\
  <li class="mdl-menu__item">Some Action</li>\
  <li class="mdl-menu__item">Another Action</li>\
  <li disabled class="mdl-menu__item">Disabled Action</li>\
  <li class="mdl-menu__item">Yet Another Action</li>\
</ul>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TopRight-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopRight-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TopRight-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlProgressBuffering",function ProgressBufferingDirective(){
	var stl=angular.element('<style id="mdlProgressBuffering">\n\
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
<!-- MDL Progress Bar with Buffering -->\
<div id="p3" class="mdl-progress mdl-js-progress"></div>\
<script>\
  document.querySelector(\'#p3\').addEventListener(\'mdl-componentupgraded\', function() {\
    this.MaterialProgress.setProgress(33);\
    this.MaterialProgress.setBuffer(87);\
  });\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressBuffering-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressBuffering-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressBuffering-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlProgressDefault",function ProgressDefaultDirective(){
	var stl=angular.element('<style id="mdlProgressDefault">\n\
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
<!-- Simple MDL Progress Bar -->\
<div id="p1" class="mdl-progress mdl-js-progress"></div>\
<script>\
  document.querySelector(\'#p1\').addEventListener(\'mdl-componentupgraded\', function() {\
    this.MaterialProgress.setProgress(44);\
  });\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressDefault-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressDefault-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressDefault-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlProgressIndeterminate",function ProgressIndeterminateDirective(){
	var stl=angular.element('<style id="mdlProgressIndeterminate">\n\
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
<!-- MDL Progress Bar with Indeterminate Progress -->\
<div id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("ProgressIndeterminate-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressIndeterminate-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("ProgressIndeterminate-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlRadioOff",function RadioOffDirective(){
	var stl=angular.element('<style id="mdlRadioOff">\n\
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
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">\
  <input type="radio" id="option-2" class="mdl-radio__button" name="options" value="2">\
  <span class="mdl-radio__label">Second</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RadioOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlRadioOn",function RadioOnDirective(){
	var stl=angular.element('<style id="mdlRadioOn">\n\
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
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">\
  <input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>\
  <span class="mdl-radio__label">First</span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("RadioOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("RadioOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSliderDefault",function SliderDefaultDirective(){
	var stl=angular.element('<style id="mdlSliderDefault">\n\
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
<!-- Default Slider -->\
<input class="mdl-slider mdl-js-slider" type="range"\
  min="0" max="100" value="0" tabindex="0">\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SliderDefault-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderDefault-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderDefault-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSliderStartingValue",function SliderStartingValueDirective(){
	var stl=angular.element('<style id="mdlSliderStartingValue">\n\
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
<!-- Slider with Starting Value -->\
<input class="mdl-slider mdl-js-slider" type="range"\
  min="0" max="100" value="25" tabindex="0">\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SliderStartingValue-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderStartingValue-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SliderStartingValue-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSnackbar",function SnackbarDirective(){
	var stl=angular.element('<style id="mdlSnackbar">\n\
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
<button id="demo-show-snackbar" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show Snackbar</button>\
<div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">\
  <div class="mdl-snackbar__text"></div>\
  <button class="mdl-snackbar__action" type="button"></button>\
</div>\
<script>\
(function() {\
  \'use strict\';\
  var snackbarContainer = document.querySelector(\'#demo-snackbar-example\');\
  var showSnackbarButton = document.querySelector(\'#demo-show-snackbar\');\
  var handler = function(event) {\
    showSnackbarButton.style.backgroundColor = \'\';\
  };\
  showSnackbarButton.addEventListener(\'click\', function() {\
    \'use strict\';\
    showSnackbarButton.style.backgroundColor = \'#\' +\
        Math.floor(Math.random() * 0xFFFFFF).toString(16);\
    var data = {\
      message: \'Button color changed.\',\
      timeout: 2000,\
      actionHandler: handler,\
      actionText: \'Undo\'\
    };\
    snackbarContainer.MaterialSnackbar.showSnackbar(data);\
  });\
}());\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Snackbar-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Snackbar-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Snackbar-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlToast",function ToastDirective(){
	var stl=angular.element('<style id="mdlToast">\n\
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
<button id="demo-show-toast" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show Toast</button>\
<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">\
  <div class="mdl-snackbar__text"></div>\
  <button class="mdl-snackbar__action" type="button"></button>\
</div>\
<script>\
(function() {\
  \'use strict\';\
  window[\'counter\'] = 0;\
  var snackbarContainer = document.querySelector(\'#demo-toast-example\');\
  var showToastButton = document.querySelector(\'#demo-show-toast\');\
  showToastButton.addEventListener(\'click\', function() {\
    \'use strict\';\
    var data = {message: \'Example Message # \' + ++counter};\
    snackbarContainer.MaterialSnackbar.showSnackbar(data);\
  });\
}());\
</script>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Toast-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Toast-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Toast-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSpinnerDefault",function SpinnerDefaultDirective(){
	var stl=angular.element('<style id="mdlSpinnerDefault">\n\
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
<!-- MDL Spinner Component -->\
<div class="mdl-spinner mdl-js-spinner is-active"></div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SpinnerDefault-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerDefault-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerDefault-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSpinnerSingleColor",function SpinnerSingleColorDirective(){
	var stl=angular.element('<style id="mdlSpinnerSingleColor">\n\
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
<!-- MDL Spinner Component with Single Color -->\
<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SpinnerSingleColor-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerSingleColor-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SpinnerSingleColor-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSwitchOff",function SwitchOffDirective(){
	var stl=angular.element('<style id="mdlSwitchOff">\n\
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
<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-2">\
  <input type="checkbox" id="switch-2" class="mdl-switch__input">\
  <span class="mdl-switch__label"></span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SwitchOff-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOff-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOff-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlSwitchOn",function SwitchOnDirective(){
	var stl=angular.element('<style id="mdlSwitchOn">\n\
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
<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">\
  <input type="checkbox" id="switch-1" class="mdl-switch__input" checked>\
  <span class="mdl-switch__label"></span>\
</label>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("SwitchOn-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOn-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("SwitchOn-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTabs",function TabsDirective(){
	var stl=angular.element('<style id="mdlTabs">\n\
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
<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">\
  <div class="mdl-tabs__tab-bar">\
      <a href="#starks-panel" class="mdl-tabs__tab is-active">Starks</a>\
      <a href="#lannisters-panel" class="mdl-tabs__tab">Lannisters</a>\
      <a href="#targaryens-panel" class="mdl-tabs__tab">Targaryens</a>\
  </div>\
\
  <div class="mdl-tabs__panel is-active" id="starks-panel">\
    <ul>\
      <li>Eddard</li>\
      <li>Catelyn</li>\
      <li>Robb</li>\
      <li>Sansa</li>\
      <li>Brandon</li>\
      <li>Arya</li>\
      <li>Rickon</li>\
    </ul>\
  </div>\
  <div class="mdl-tabs__panel" id="lannisters-panel">\
    <ul>\
      <li>Tywin</li>\
      <li>Cersei</li>\
      <li>Jamie</li>\
      <li>Tyrion</li>\
    </ul>\
  </div>\
  <div class="mdl-tabs__panel" id="targaryens-panel">\
    <ul>\
      <li>Viserys</li>\
      <li>Daenerys</li>\
    </ul>\
  </div>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("Tabs-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Tabs-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("Tabs-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldExpanding",function TextfieldExpandingDirective(){
	var stl=angular.element('<style id="mdlTextfieldExpanding">\n\
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
<!-- Expandable Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">\
    <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">\
      <i class="material-icons">search</i>\
    </label>\
    <div class="mdl-textfield__expandable-holder">\
      <input class="mdl-textfield__input" type="text" id="sample6">\
      <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>\
    </div>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldExpanding-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldExpanding-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldExpanding-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldFloatingNumeric",function TextfieldFloatingNumericDirective(){
	var stl=angular.element('<style id="mdlTextfieldFloatingNumeric">\n\
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
<!-- Numeric Textfield with Floating Label -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">\
    <label class="mdl-textfield__label" for="sample4">Number...</label>\
    <span class="mdl-textfield__error">Input is not a number!</span>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldFloatingNumeric-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingNumeric-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingNumeric-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldFloatingText",function TextfieldFloatingTextDirective(){
	var stl=angular.element('<style id="mdlTextfieldFloatingText">\n\
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
<!-- Textfield with Floating Label -->\
\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\
    <input class="mdl-textfield__input" type="text" id="sample3">\
    <label class="mdl-textfield__label" for="sample3">Text...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldFloatingText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldFloatingText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldMultiLine",function TextfieldMultiLineDirective(){
	var stl=angular.element('<style id="mdlTextfieldMultiLine">\n\
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
<!-- Floating Multiline Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <textarea class="mdl-textfield__input" type="text" rows= "3" id="sample5" ></textarea>\
    <label class="mdl-textfield__label" for="sample5">Text lines...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldMultiLine-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldMultiLine-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldMultiLine-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldNumeric",function TextfieldNumericDirective(){
	var stl=angular.element('<style id="mdlTextfieldNumeric">\n\
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
<!-- Numeric Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2">\
    <label class="mdl-textfield__label" for="sample2">Number...</label>\
    <span class="mdl-textfield__error">Input is not a number!</span>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldNumeric-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldNumeric-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldNumeric-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTextfieldText",function TextfieldTextDirective(){
	var stl=angular.element('<style id="mdlTextfieldText">\n\
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
<!-- Simple Textfield -->\
<form action="#">\
  <div class="mdl-textfield mdl-js-textfield">\
    <input class="mdl-textfield__input" type="text" id="sample1">\
    <label class="mdl-textfield__label" for="sample1">Text...</label>\
  </div>\
</form>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TextfieldText-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldText-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TextfieldText-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTooltipLarge",function TooltipLargeDirective(){
	var stl=angular.element('<style id="mdlTooltipLarge">\n\
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
<!-- Large Tooltip -->\
<div id="tt2" class="icon material-icons">print</div>\
<div class="mdl-tooltip mdl-tooltip--large" for="tt2">\
Print\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipLarge-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipLarge-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipLarge-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTooltipMultiline",function TooltipMultilineDirective(){
	var stl=angular.element('<style id="mdlTooltipMultiline">\n\
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
<!-- Multiline Tooltip -->\
<div id="tt4" class="icon material-icons">share</div>\
<div class="mdl-tooltip" for="tt4">\
Share your content<br>via social media\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipMultiline-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipMultiline-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipMultiline-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTooltipRich",function TooltipRichDirective(){
	var stl=angular.element('<style id="mdlTooltipRich">\n\
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
<!-- Rich Tooltip -->\
<div id="tt3" class="icon material-icons">cloud_upload</div>\
<div class="mdl-tooltip" data-mdl-for="tt3">\
Upload <strong>file.zip</strong>\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipRich-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipRich-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipRich-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});

angular.module("mdl")
.directive("mdlTooltipSimple",function TooltipSimpleDirective(){
	var stl=angular.element('<style id="mdlTooltipSimple">\n\
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
<!-- Simple Tooltip -->\
<div id="tt1" class="icon material-icons">add</div>\
<div class="mdl-tooltip" data-mdl-for="tt1">\
Follow\
</div>\
\
',
			compile:function(tElm,tAttrs,transclude){
			  	console.debug("TooltipSimple-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipSimple-pre",elm.html(),(transcludeFn(scope)));
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("TooltipSimple-post",elm.html(),(transcludeFn(scope)));
				
			  }
			}
		}
	}
});
angular.module("mdl")
.factory("mdl",function mdl($http){
	var cache={length:0}

	return {
		applyStyle:applyStyle,
		loadStyle:loadStyle
	}

	function applyStyle(_style){
		var style=document.querySelectorAll("style#"+_style.id);
		if(style.length==0){
			try{
				document.body.appendChild(_style);
				console.debug("apply style","style#"+_style.id)
			}catch(err){
				setTimeout(function(){applyStyle(_style)},1000);
			}
		}
	}

	function loadStyle(url){
		if(!(url in cache)){
			$http.get(url)
			.then(function(response){
				var stl=angular.element('<style id="style_'+cache.length+'">'+response.data+'</style>');
				applyStyle(stl[0]);
				cache[url]=url;
				cache.length=Object.keys(cache).length;
			});
		}
	}

});