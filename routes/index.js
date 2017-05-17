const routes = require('express').Router();
const clients = require('./clients');

routes.use('/clients', clients);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
