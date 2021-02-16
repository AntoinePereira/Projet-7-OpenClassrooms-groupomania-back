const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		const isAdmin = decodedToken.isAdmin;
		const userId = decodedToken.userId;
		const id = req.params.id;

		if ((isAdmin !== 1) && (userId != id)){
			throw 'Réservé aux admins ou proprietaires';
		} else {
			next();
		}
	} catch {
		res.status(401).json({
			error: new Error('Invalid request!')
		});
	}
};