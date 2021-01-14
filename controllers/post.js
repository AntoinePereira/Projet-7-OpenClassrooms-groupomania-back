const db = require('../config/database');

exports.getAllPosts = (req, res, next) => {
	 let sql = `SELECT * FROM post ORDER BY date`
	 db.query(sql, (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}

//exports.getOnePost = (req, res, next) => {}

//exports.createPost = (req, res, next) => {}

//exports.modifyPost = (req, res, next) => {}


//exports.deletePost = (req, res, next) => {}
