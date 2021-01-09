const express = require('express');
const mysql = require('mysql');
const db = require('../config/database');

exports.signup = (req, res, next) => {
	let form = { nom:'nom3', prenom:'prenom3', email:'email3@gmail.com', password:'password3'};
	let sql = 'INSERT INTO user SET ?';
	let query = db.query(sql, form, (err, result) => {
		if(err) throw(err);
		console.log(result);
		res.send(result);
	})
}
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