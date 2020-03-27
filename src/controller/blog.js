const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
	//返回数据 当没有值传入时 where 1=1 就会占位并且连接 不会报错
	let sql = `select * from blogs where 1=1 `
	if (author) {
		sql += `and author='${author}'`
	}

	if (keyword) {
		sql += `and title like '%${keyword}%'`
	}

	sql += `order by createtime desc;`

	// 返回 promise
	return exec(sql);
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

const newBlog = (blogData = {}) => {
	//blogData 是一个博客对象 包含 title contnet属性

	// console.log('newBlog blogData' , blogData);

	return {
		id: 3 // 表示新建博客 插入到数据表里的 id
	}
}

const updateBlog = (id, blogData = {}) => {
	//id 就是要更新博客的 id
	//blogData 是一个博客对象 包含 title contnet属性
	// console.log('updae blog', id, blogData);

	return true;

}

const delBlog = id => {
	return true;
}

module.exports = {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
}