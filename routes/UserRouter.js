const express = require('express');
const router = express.Router();

// path : /user

router.get('/', (req, res) => {
	res.send('User Page');
});
router.get('/add', (req, res) => {
	res.send('User Page Add');
});
router.get('/add/:id', (req, res) => {
	res.send('User Page Add id');
});

module.exports = router;
