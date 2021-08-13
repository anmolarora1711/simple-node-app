const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('form', {title: 'Registration form'});
});

router.post('/', (req, res) => {
    res.render('form', {title: 'Registration fomr'});
})

module.exports = router;