doc=require("./extract.json");
fs=require("fs")
function attrCaseToCamelCase(text){
	return text.split('-')
		.map(function(v,i){
			return v.substr(0,1).toUpperCase()+v.substr(1)
		})
		.join('');
}
function directive(name,text){
return '\n\
angular.module("mdl")\n\
.directive("mdl'+name+'",function '+name+'Directive(){\n\
	var stl=angular.element(\'<style id="mdl'+name+'">\\n\\\n\
		</style>\\n\\\n\
	\');\n\
\n\
	function applyStyle(_style){\n\
		var style=document.querySelectorAll("style#"+_style.id);\n\
		if(style.length==0){\n\
			try{\n\
				document.body.appendChild(_style);\n\
			}catch(err){\n\
				setTimeout(function(){applyStyle(_style)},1000);\n\
			}\n\
		}\n\
	}\n\
	applyStyle(stl[0]);\n\
\n\
	return {\n\
			priority: 1,\n\
			restrict: \'E\',\n\
			transclude: {\n\
			},\n\
			template:\'\\\n'+text.replace(/\'/gi,"\\'").replace(/\n/gi,"\\\n")+'\\\n\',\n\
			compile:function(tElm,tAttrs,transclude){\n\
			  	console.debug("'+name+'-compile",tElm.html())\n\
				return {\n\
				  pre:function(scope, elm, attrs,ctrl,transcludeFn){\n\
				  	console.debug("'+name+'-pre",elm.html(),(transcludeFn(scope)));\n\
				  },\n\
				  post:function(scope, elm, attrs,ctrl,transcludeFn){\n\
				  	console.debug("'+name+'-post",elm.html(),(transcludeFn(scope)));\n\
				\n\
			  }\n\
			}\n\
		}\n\
	}\n\
})';
}
function mkdirs(path){
	try{
		fs.statSync(path);
	}catch(err){
		fs.mkdirSync(path);
	}
}
var directiveCache=[];
mkdirs('./src');
for(var folder in doc){
	for(var name in doc[folder]){
		var filename=name.split('.')[0];
		var directiveName=attrCaseToCamelCase(filename);
		var _directiveText=directive(directiveName,doc[folder][name])
		directiveCache.push(_directiveText);
		mkdirs('./src/'+folder);
		fs.writeFileSync("./src/"+folder+"/"+directiveName+".js",_directiveText)
		console.log(directiveName);
	}
}
