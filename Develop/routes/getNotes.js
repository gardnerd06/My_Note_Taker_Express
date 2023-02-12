gn = require('express').Router();
db = require('../db/db.json');

gn.get('/notes', (req, res) => res.sendFile(res.json(db))

);
gn.get('/', (req, res) => {
    res.json(`${req.method} request received`);
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
    // Log our request to the terminal
    console.info(`${req.method} request received`);
});

gn.get('/', (req, res) => res.json(db));

module.exports = gn;