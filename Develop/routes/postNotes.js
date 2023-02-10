pn = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// pn.post('', (req, res) => {
//     console.info(req);
//     console.info(res);
//     res.send((`${req.method} request received to submit feedback`));

// })

// pn.post('/', (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to submit feedback`);

// });