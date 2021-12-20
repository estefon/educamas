const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));
route.get('/matematica', (req, res) => res.render("matematica"));
route.get('/portugues', (req, res) => res.render("portugues"));

module.exports = route