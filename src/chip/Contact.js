
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
})