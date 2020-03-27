const { loginCheck } = require('../controller/user')
const {
	SuccussModel,
	ErrorModel
} = require('../model/resModel.js')

const handleUserRouter = (req, res) => {
	const method = req.method;

	const url = req.url;

	const path = url.split('?')[0];

	//登入
	if(method === 'POST' && path === '/api/user/login') {
		const { username, password } = req.body;
		const result = loginCheck(username, password);
		return result.then(data => {
			if (data.username) {
				return new SuccussModel()
			}
			return new ErrorModel('登入失败');
		})
	}

}

module.exports = handleUserRouter