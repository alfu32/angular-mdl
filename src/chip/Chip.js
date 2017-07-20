angular.module("mdl")
.directive("mdlChip",function BasicDirective(){
	var stl=angular.element('<style id="mdlChip">\n\
		mdl-chip{box-sizing: border-box;}\n\
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
// image text action
	return {
			priority: 1,
			restrict: 'E',
			scope:{},
			transclude: {
				"mdlChipAction":"?mdlChipAction"
			},
			template:'\
<!-- Chip -->\
<span class="mdl-chip {{chipType}}">\
    <img ng-if="mIcon" class="mdl-chip__contact" src="{{mIcon}}"></img>\
    <span ng-if="mContact && !mIcon" class="mdl-chip__contact mdl-color--teal mdl-color-text--white">{{mContact}}</span>\
    <span class="mdl-chip__text">{{mText}}</span>\
    <span ng-if="hasAction" class="mdl-chip__action" ng-transclude="mdlChipAction"></span>\
</span>\
',
			compile:function(tElm,tAttrs,transclude){
			  	//console.debug("Basic-compile",tElm.html())
				return {
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){
				  	console.debug("mdlChip-pre",elm[0].children[0].children);
				  },
				  post:function(scope, elm, attrs,ctrl,transcludeFn){
				  	scope.mIcon=attrs["mdlChipIcon"]||false;
				  	scope.mText=attrs["mdlChipText"]||"default";
				  	scope.mContact=attrs["mdlChipContact"]||false;

				  	console.debug("mdlChip-post",attrs,elm,transcludeFn());
				
			  }
			}
		}
	}
})