const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv').config()

const userRoutes = require('./routes/user');

const db = mysql.createConnection({
	host :  process.env.DB_HOST,
	user :  process.env.DB_USER,
	password :  process.env.DB_PASSWORD,
	database : process.env.DATABASE,
});
db.connect((error) => {
	if(error) {
		console.log(error)
	} else {
		console.log('Mysql connected');
	}
})

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.get('/api/test', (req,res) => {
	let sql = 'SELECT * FROM user';
	db.query(sql, (err, result) => {
		if(err) throw(err);
		console.log(result);
		res.send(result);
	})

});
app.use('/api/auth', userRoutes);

module.exports = app;