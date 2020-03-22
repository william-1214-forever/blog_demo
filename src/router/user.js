const handleUserRouter = (req, res) => {
	const method = req.method;

	const url = req.url;

	const path = url.split('?')[0];

	//登入
	if(method === 'POST' && path === '/api/user/login') {
		return {
			msg: '这是登入的接口'
		}
	}

}

module.exports = handleUserRouter