const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('partners', { title: 'Investor & Partner Relations — Techo Traders', page: 'partners' });
});

module.exports = router;
