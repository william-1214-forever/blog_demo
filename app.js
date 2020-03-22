const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');


const serverHandle = (req, res) => {
	//设置返回格式 JSON
	res.setHeader('content-type', 'application/json');

	const url = req.url;

	req.path = url.split('?')[0];
	
	//解析query

	req.query = querystring.parse(url.split('?')[0]);

	//处理 blog 路由
	const blogData = handleBlogRouter(req, res)
	if (blogData) {
		res.end(
			JSON.stringify(blogData)
		)
		return
	}

	//处理 user 路由
	const userData = handleUserRouter(req, res)
	if (userData) {
		res.end(
			JSON.stringify(userData)
		)
		return
	}


	//未命中路由 ， 返回404
	res.writeHead(404, {'Content-type': 'text/plain'});
	res.write('404 Not Found\n');
	res.end()
};

//导出
module.exports = serverHandle