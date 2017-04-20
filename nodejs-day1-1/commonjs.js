
 var http=require('http');
 var util=require('./util.js') //.js可以省略  模块引用
 http.createServer(function(request,response){ //创建一个服务
 			//response 从服务器端往浏览器端输出内容
 			//request 接收浏览器端来的信息
 			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
 			if(request.url !='/favicon.ico'){
 				
 				//模块调用
 				response.write(util.sayHello().toString());
 				response.write('<br />')
 				response.write(util.add(3,4).toString());
	 			response.end();
 			}
 			
 }).listen(3000);
 console.log('Server running at http://127.0.0.1:3000/');
 