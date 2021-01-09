const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
	host :  process.env.DB_HOST,
	user :  process.env.DB_USER,
	password :  process.env.DB_PASSWORD,
	database : process.env.DATABASE,
});

exports.signup = (req, res, next) => {
	let form = {id: 3, nom:'nom3', prenom:'prenom3', email:'email3@gmail.com', password:'password3'};
	let sql = 'INSERT INTO user SET ?';
	let query = db.query(sql, form, (err, result) => {
		if(err) throw(err);
		console.log(result);
		res.send(result);
	})

}	
	
 
exports.getAllUsers = (req,res) => {
	let sql = 'SELECT * FROM user';
	db.query(sql, (err, result) => {
		if(err) throw(err);
		console.log(result);
		res.send(result);
	})

}

exports.getUser = (req, res, next) => {
	console.log('ha');
	res.json('results');
};