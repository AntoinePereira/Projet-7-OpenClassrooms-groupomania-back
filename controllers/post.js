const db = require('../config/database');

exports.getAllPosts = (req, res, next) => {
	 let sql = `SELECT * FROM post ORDER BY date`
	 db.query(sql, (err, result) => {
	 	if(err) throw err;
	 	res.send(result);
	 })
}

//exports.getOnePost = (req, res, next) => {}

exports.createPost = (req, res, next) => {
	let title = req.body.title;
	let post = req.body.post;
	let userId = req.body.userId;
	//let date = NOW();
	let sql = `INSERT INTO post (post_title, post, user_id, date ) VALUES (?,?,?,NOW())`;
	db.query(sql, [title, post, userId], (err, result) => {
		if(err) throw(err);
			console.log(result);
		res.status(201).json({ message: "post posted!" });
	});
}

//exports.modifyPost = (req, res, next) => {}


//exports.deletePost = (req, res, next) => {}
