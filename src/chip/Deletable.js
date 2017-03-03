
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
})