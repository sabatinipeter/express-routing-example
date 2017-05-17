const data = require('../../data.json');

module.exports = (req, res) => {
  const clients = data.clients;

  res.status(200).json({ clients });
};
