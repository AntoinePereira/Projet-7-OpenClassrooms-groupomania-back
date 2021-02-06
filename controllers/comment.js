const db = require('../config/database');

exports.getAllComments = (req, res, next) => {
	 let sql = `SELECT * FROM comment ORDER BY date`
	 db.query(sql, (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}

exports.getOneComment = (req, res, next) => {
	 let sql = `SELECT * FROM comment WHERE post_id=?`;
	 let id = req.params.id;
	 db.query(sql, id, (err, result) => {
				if(err) throw(err);
				console.log(result);
				res.send(result);
			})
}

exports.createComment = (req, res, next) => {
	let postId = req.body.postId;
	let comment = req.body.comment;
	let userId = req.body.userId;
	let sql = `INSERT INTO comment ( post_id, comment, user_id, date ) VALUES (?,?,?,NOW())`;
	db.query(sql, [ postId, comment, userId], (err, result) => {
		if(err) throw(err);
			console.log(result);
		res.status(201).json({ message: "comment posted!" });
	});
}

exports.modifyComment = (req, res, next) => {
	let id = req.params.id;
	let	title = req.body.title;
	let	comment = req.body.comment;
	
	let sql = `UPDATE comment SET commentt=?, post_title=? WHERE id= ?`;
	 db.query(sql,[post, title, id], (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}


exports.deleteComment = (req, res, next) => {
	let id = req.params.id;
	let sql = `DELETE FROM comment WHERE id= ?`;
	 db.query(sql, id, (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}