const express = require('express');
const path = require('path');
const db = require('./Develop/db/db.json')
const api = require('./Develop/routes/index');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('Develop/public'));
// app.use(express.urlencoded({ extended: true }));

// GET Route for notes main page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html')),

);


// // will return homepage if given different url from original
// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
// );




app.listen(PORT, () => console.log(`Your app is launched here: http://localhost:${PORT}`));

