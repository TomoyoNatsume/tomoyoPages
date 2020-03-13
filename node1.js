console.log("fuck");
const http=require('http');
var server=http.createServer(function(req,res){
console.log(req.url);
res.write("abc");
res.end();
});
server.listen(8080);
