
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
})