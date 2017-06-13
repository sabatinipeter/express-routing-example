const ams_clients = require('express').Router();
const all = require('./all');

ams_clients.get('/', all);

module.exports = ams_clients;
