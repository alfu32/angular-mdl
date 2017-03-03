doc=require("./extract.json");
fs=require("fs");

function mkdirs(path){
	try{
		fs.statSync(path);
	}catch(err){
		fs.mkdirSync(path);
	}
}
var directiveCache=[];
mkdirs('./src');
doc=fs.readdirSync('./src')
.forEach(function(dir){
	fs.readdirSync('./src/'+dir)
	.forEach(function(f){
		var fcontent=fs.readFileSync('./src/'+dir+'/'+f);
		console.log('./src/'+dir+'/'+f)
		directiveCache.push(fcontent)
	})
},{});

mkdirs('./build');
fs.writeFileSync("build/ngmdl.js","angular.module('mdl',[]);\n"+directiveCache.join(";\n") )