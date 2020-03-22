const {
	getList,
	getDetail
} = require('../controller/blog.js')

const {
	SuccussModel,
	ErrorModel
} = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
	const method = req.method;

	const url = req.url;

	const path = url.split('?')[0];

	//获取博客列表
	if(method === 'GET' && path === '/api/blog/list') {
		const author = req.query.author ||''
		const keyword = req.query.keyword || ''
		const listData = getList(author, keyword)
		return new SuccussModel(listData)
	}

	//获取博客详情
	if (method === 'GET' && path === '/api/blog/detail') {
		const id = req.query.id
		const data = getDetail(id)
		return new SuccussModel(data)
	}

	//新建一篇博客
	if(method === 'POST' && path === '/api/blog/new') {
		return {
			msg: '这是新建的博客'
		}
	}

	//更新一篇博客
	if(method === 'POST' && path === '/api/blog/update') {
		return {
			msg: '这是更新的博客'
		}
	}

	//删除一篇博客
	if(method === 'POST' && path === '/api/blog/del') {
		return {
			msg: '这是删除的博客'
		}
	}

}

module.exports = handleBlogRouter;