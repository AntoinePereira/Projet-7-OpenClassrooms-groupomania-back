const db = require('../config/database');

exports.getAllUsers = (req, res, next) => {
	 let sql = `SELECT * FROM user ORDER BY id`
	 db.query(sql, (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}

exports.getOneUser = (req, res, next) => {
	 let sql = `SELECT * FROM user WHERE id=?`;
	 let id = req.params.id;
	 db.query(sql, id, (err, result) => {
				if(err) throw(err);
				console.log(result);
				res.send(result);
			})
}

