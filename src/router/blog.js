const {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
} = require('../controller/blog.js')

const {
	SuccussModel,
	ErrorModel
} = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
	const method = req.method;

	const url = req.url;

	const path = url.split('?')[0];

	const id = req.query.id

	//获取博客列表
	if(method === 'GET' && path === '/api/blog/list') {
		const author = req.query.author ||''
		const keyword = req.query.keyword || ''
		// const listData = getList(author, keyword)
		// return new SuccussModel(listData)
		const result = getList(author, keyword);
		result.then(listData => {
			return new SuccussModel(listData)
		})
	}

	//获取博客详情
	if (method === 'GET' && path === '/api/blog/detail') {
		
		const data = getDetail(id)
		return new SuccussModel(data)
	}

	//新建一篇博客
	if(method === 'POST' && path === '/api/blog/new') {
		const data = newBlog(req.body)
		return new SuccussModel(data)
	}

	//更新一篇博客
	if(method === 'POST' && path === '/api/blog/update') {
		const result = updateBlog(id, req.body)
		if(result) {
			return new SuccussModel()
		} else {
			return new ErrorModel('更新博客失败')
		}
	}

	//删除一篇博客
	if(method === 'POST' && path === '/api/blog/del') {
		//传入 要删除的id
		const result = delBlog(id)
		if(result) {
			return new SuccussModel()
		} else {
			return new ErrorModel('更新博客失败')
		}
	}

}

module.exports = handleBlogRouter;