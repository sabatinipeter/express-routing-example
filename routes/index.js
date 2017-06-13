const routes = require('express').Router();
const clients = require('./clients');
const ams_clients = require('./ams_clients');

routes.use('/clients', clients);
routes.use('/ams_clients', ams_clients);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
