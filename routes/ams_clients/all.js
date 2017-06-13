const data = require('../../data-revisited.json');

module.exports = (req, res) => {
  const ams_clients = data.clients;

  res.status(200).json({ ams_clients });
};
