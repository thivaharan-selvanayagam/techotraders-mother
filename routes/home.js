const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Techo Traders — Empowering Progress', page: 'home' });
});

module.exports = router;
