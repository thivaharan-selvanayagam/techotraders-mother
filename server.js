const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const homeRouter = require('./routes/home');
const portfolioRouter = require('./routes/portfolio');
const aboutRouter = require('./routes/about');
const partnersRouter = require('./routes/partners');
const insightsRouter = require('./routes/insights');
const contactRouter = require('./routes/contact');

app.use('/', homeRouter);
app.use('/portfolio', portfolioRouter);
app.use('/about', aboutRouter);
app.use('/partners', partnersRouter);
app.use('/insights', insightsRouter);
app.use('/contact', contactRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: '404 – Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Techo Traders running at http://localhost:${PORT}`);
});

module.exports = app;
