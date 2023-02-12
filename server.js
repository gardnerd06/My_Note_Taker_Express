const express = require('express');
const path = require('path');
const db = require('./Develop/db/db.json')
const fs = require('fs');
const uuid = require('./Develop/helpers/uuid');
const PORT = process.env.PORT || 3000;
const { readFromFile, readAndAppend } = require('./Develop/helpers/fsUtils');

const app = express();

app.use(express.static('Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// GET Route for notes main page
app.get('/notes', (req, res,) =>
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html')),

);

app.get('/api/notes', (req, res) => res.status(200).json(db));

app.post('/api/notes', (req, res) => {
    // Destructuring variable
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            review_id: uuid(),
        };

        const newResponse = JSON.stringify(newNote);
        readAndAppend(newNote, './Develop/db/db.json');

        console.log(newResponse);
        res.status(200).json(db);
    } else {
        res.status(500).json('Error in posting note');
    }
});



// // will return homepage if given different url from original
// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
// );




app.listen(PORT, () => console.log(`Your app is launched here: http://localhost:${PORT}`));

