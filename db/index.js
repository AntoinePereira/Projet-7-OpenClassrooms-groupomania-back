const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: 'flrnf34r7f43b34qo934q9eLCEbx',
	user: 'adminGroupo',
	database: 'groupomania',
	host: 'localhost',
	port: '3000'
	
});

let groupoDb = {};

groupoDb.all = () => {
	return new Promise((resolve, reject) => {
		pool.query(`SELECT * FROM user`, (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		})
	})

}

module.exports = groupoDb;