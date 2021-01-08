const express = require('express');
const db = require('../db');

exports.signup = async (req, res, next) => {
	try {
		let results = await db.all();
		res.json(results);
	} catch(e) {
		console.log(e);
		res.sendStatus(500);
	}
  };

