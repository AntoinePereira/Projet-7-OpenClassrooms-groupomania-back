const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');


exports.signup = (req, res, _next) => {
	bcrypt.hash(req.body.password, 10)
    .then(hash => {
    	req.body.password = hash;
    	let sql = `INSERT INTO user SET ?`;
    	let user = req.body;
		db.query(sql, user, (err, result) => {
			if(err) throw(err);
			res.status(201).json({ message: "User created" });
		})
	})
	.catch(error => res.status(500).json({ error }));
};
	

exports.login = (req, res, _next) => {
	const email = req.body.email;
	const password = req.body.password;
	if (!email || !password) { throw 'no email or no password'}
	let sql = `SELECT * FROM user WHERE email= ?`

	db.query(sql, email, (err, result) => {
		if (result.length > 0) {
    	    bcrypt.compare(password, result[0].password)
    	   	.then(valid => {
    	     	if (!valid) {
    	       		return res.status(401).json({ error: 'Mot de passe incorrect !' });
    	     	}else {
    	     		//console.log('User connected');
    	     		res.status(200).json({
    	     			user: {
    	     				userId: result[0].id,
    	       				nom: result[0].nom,
    	       				prenom: result[0].prenom,
                            isAdmin: result[0].isAdmin
    	     			},
    	       			token: jwt.sign(
    	        				{ userId: result[0].id, isAdmin: result[0].id },
    	        				process.env.JWT_SECRET,
    	        				{ expiresIn: '24h' }
    	       			)
    	     		});
    	     	}
    	   	})
    	   	.catch(error => res.status(500).json({ error }));
   		}
   	})
};
   	 	