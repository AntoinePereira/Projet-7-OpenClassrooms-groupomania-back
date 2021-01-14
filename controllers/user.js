const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
//const User = require("../models/user.js");

exports.signup = (req, res, next) => {

	bcrypt.hash(req.body.password, 10)
    	.then(hash => {
    		req.body.password = hash;
    		let sql = `INSERT INTO user SET ?`;
    		let user = req.body;
			db.query(sql, user, (err, result) => {
				if(err) throw(err);
				console.log(result);
				res.status(201).json({ message: "User created" });
			})
		})
		.catch(error => res.status(500).json({ error }));
};
	

exports.login = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	let sql = `SELECT * FROM user WHERE email= ?`
	if (email && password) {
		db.query(sql, email, (err, result) => {
		if (result.length > 0) {
       	 	bcrypt.compare(password, result[0].password)
        	.then(valid => {
          		if (!valid) {
            		return res.status(401).json({ error: 'Mot de passe incorrect !' });
          		}else {
          			console.log('User connected');
          			res.status(200).json({
            			userId: result[0].id,
            			nom: result[0].nom,
            			prenom: result[0].prenom,
            			token: jwt.sign(
              				{ userId: result[0].id },
              				'RANDOM_TOKEN_SECRET',
              				{ expiresIn: '24h' }
            			)
          			});
          		}
        	})
        	.catch(error => res.status(500).json({ error }));
   	 	}})
   	}
};
   	 	



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
exports.test = (req, res) => {
	let sql = 'SELECT * FROM user';
	db.query(sql, (err, result) => {
		if(err) {
            return res.status(401).json({ error: "User not found." });
        };
		console.log(result);
		res.send(result);
	})
}
	

// {nom : 'value', prenom : 'value', email : 'value', password : 'value'}
// {nom : req.body.nom, prenom : req.body.prenom, email : req.body.email, password : req.body.password}
//{ "nom": "value", "prenom" : "value", "email" : "value", "password" : "value"}
//let user = [ req.body.nom, req.body.prenom, req.body.email, hash]
//{ "nom": "testnom", "prenom" : "testprenom", "email" : "test@email.com", "password" : "test"}