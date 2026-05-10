const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('portfolio', { title: 'Our Portfolio — Techo Traders', page: 'portfolio' });
});

module.exports = router;
