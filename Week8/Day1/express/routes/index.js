// routes/index.js
const express = require('express');
const routes = require('./routes');

// const router = express.Router();

const app = express();

// routes
app.use('/', routes);

/*router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});*/

router.get('/about', (req, res) => {
  res.send('About-Us page');
});

module.exports = router;
