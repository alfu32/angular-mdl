function $a(a){return Array.prototype.slice.call(a)}
code=$a($$(".language-markup"))
.map(function(n){
	return {
		id:n.id,
		folder:n.id.split('/')[0],
		file:n.id.split('/')[1],
		code:n.innerText
	}
})
.reduce(function(acc,v){
	if(!acc[v.folder])acc[v.folder]={};
	acc[v.folder][v.file]=v.code;
	return acc;
},{});
JSON.stringify(code);