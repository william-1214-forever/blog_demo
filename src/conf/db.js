//环境变量
const env = process.NODE_ENV

//配置
let MYSQL_CONF
//开发环境
if (env === 'dev') {
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: '123456',
		port: '3306',
		database: 'myblog'
	}
}
//线上环境
if (env === 'production') {
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: '123456',
		port: '3306',
		database: 'myblog'
	}
}

module.exports = {
	MYSQL_CONF
}
