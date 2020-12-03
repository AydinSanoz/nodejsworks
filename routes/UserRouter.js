const express = require('express');
const router = express.Router();

const data = require("../models/data")

// path : /user

router.get('/', (req, res) => {
	res.render('user', {users : data.userList});
});
router.get('/add', (req, res) => {
	res.send('User Page Add');
});
router.get('/add/:id', (req, res) => {
	res.send('User Page Add id');
});

module.exports = router;
