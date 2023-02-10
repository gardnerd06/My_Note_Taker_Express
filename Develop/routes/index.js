const express = require('express');
const dn = require('./deleteNotes');
const pn = require('./postNotes');
const gn = require('./getNotes');

const app = express();

app.use('/getNodes', gn)
// app.use('./postNotes', pn)
// app.use('./deleteNotes', dn)

module.exports = app; 