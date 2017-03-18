fs=require("fs");
compiler=require("./make.js");




function compile(dir,eventType,file){
	return function(eventType,file){
		console.log(eventType,dir+"/"+file);
		compiler.compile();
	}
}

doc=fs.readdirSync('./src')
.forEach(function(dir){
	console.log("watching ./src/"+dir);
	fs.watch('./src/'+dir,compile("./src/"+dir));
});