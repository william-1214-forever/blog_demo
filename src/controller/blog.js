const getList = (author, keyword) => {
	//先返回假数据（格式是对的）
	return [
		{
			id: 1,
			title: '标题1',
			content:'内容A',
			createTime: 1584883714726,
			author: 'zhangsan'
		},
		{
			id: 2,
			title: '标题2',
			content: '内容B',
			createTime: 1584883826509,
			author: 'lisi'
		}
	]
}

const getDetail = id => {
	//先返回假数据
	return 	[{
		id: 1,
		title: '标题1',
		content:'内容A',
		createTime: 1584883714726,
		author: 'zhangsan'
	},
	{
		id: 2,
		title: '标题2', 	
		content: '内容B',
		createTime: 1584883826509,
		author: 'lisi'
	}]
}

module.exports = {
	getList,
	getDetail
}