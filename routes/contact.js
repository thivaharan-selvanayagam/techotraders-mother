const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact — Techo Traders', page: 'contact', success: false, error: false });
});

router.post('/', (req, res) => {
  const { name, email, company, department, message } = req.body;
  if (!name || !email || !message || !department) {
    return res.render('contact', {
      title: 'Contact — Techo Traders',
      page: 'contact',
      success: false,
      error: 'Please fill in all required fields.'
    });
  }
  // In production, connect to nodemailer or an email API here
  console.log('Contact form submission:', { name, email, company, department, message });
  res.render('contact', {
    title: 'Contact — Techo Traders',
    page: 'contact',
    success: true,
    error: false
  });
});

module.exports = router;
