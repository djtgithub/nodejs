//模块定义
var util={
	sayHello:function(){
		return "hello NodeJs"
	},
	add:function(x,y){
		return x+y;
	}
};
//模块接口暴露
//module.exports=util;
exports.sayHello=util.sayHello;
exports.add=util.add;