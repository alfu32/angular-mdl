
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
})