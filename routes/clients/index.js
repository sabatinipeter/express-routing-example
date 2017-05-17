const clients = require('express').Router();
const all = require('./all');

clients.get('/', all);

module.exports = clients;
