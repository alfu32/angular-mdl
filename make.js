doc=require("./extract.json");
fs=require("fs");
var UglifyJS = require("uglify-js");

function mkdirs(path){
	try{
		fs.statSync(path);
	}catch(err){
		fs.mkdirSync(path);
	}
}

function compile(){
	var directiveCache=[];
	mkdirs('./src');
	doc=fs.readdirSync('./src')
	.forEach(function(dir){
		fs.readdirSync('./src/'+dir)
		.forEach(function(f){
			if(f=="ignore")return;
			if(f.split('.')[f.split('.').length-1]!="js")return;
			var fcontent=fs.readFileSync('./src/'+dir+'/'+f);
			console.log('./src/'+dir+'/'+f)
			directiveCache.push(fcontent)
		})
	},{});

	mkdirs('./build');
	fs.writeFileSync("build/ngmdl.js","angular.module('mdl',[]);\n"+directiveCache.join(";\n") )
	fs.writeFileSync("build/ngmdl.min.js",UglifyJS.minify("build/ngmdl.js",{
		outSourceMap: "build/ngmdl.min.js.map",
  		outFileName: "build/ngmdl.min.js",
	}).code);
}

module.exports.compile=compile;

compile();