const { exec } = require('../db/mysql');

const loginCheck = (username, password) => {
	const sql = `
		select username, realname from userss 
		where username='${username}' and password = '${password}'
	`
	return exec(sql).then(rows => {
		return data[0] || {};
	})
}

module.exports = { loginCheck }