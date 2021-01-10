const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
    	.then(hash => {
    		req.body.password = hash;
    		let sql = `INSERT INTO user SET ????`;
    		let user = [ req.body.nom, req.body.prenom, req.body.email, hash]
			db.query(sql, user, (err, result) => {
				if(err) throw(err);
				console.log(result);
				res.send(result);
			})
		})
};
	
	
	
exports.login = (req, res, next) => {}



///////////////////////////////////////TEST//////////////////////////////////////////
exports.getAllUsers = (req, res) => {
	let sql = 'SELECT * FROM user';
	db.query(sql, (err, result) => {
		if(err) throw(err);
		console.log(result);
		res.send(result);
	})
}
exports.getUser = (req, res, next) => {
	console.log('haha');
	res.json('results');
};
// {nom : 'value', prenom : 'value', email : 'value', password : 'value'}
// {nom : req.body.nom, prenom : req.body.prenom, email : req.body.email, password : req.body.password}