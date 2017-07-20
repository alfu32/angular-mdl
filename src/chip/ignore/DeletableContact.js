
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
})