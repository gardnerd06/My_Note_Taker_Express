const express = require('express');
const path = require('path');
const db = require('./Develop/db/db.json');
const fs = require('fs');
const uuid = require('./Develop/helpers/uuid');
const PORT = process.env.PORT || 3000;
const { readFromFile, readAndAppend, writeToFile } = require('./Develop/helpers/fsUtils');

const app = express();

app.use(express.static('Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// GET Route for notes main page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/Develop/public/notes.html'),));

app.get('/api/notes', (req, res) => readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data))))

app.post('/api/notes', (req, res) => {
    // Destructuring variable
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        const newResponse = JSON.stringify(newNote);
        readAndAppend(newNote, './Develop/db/db.json');

        res.status(200).json(newResponse);
    } else {
        res.status(500).json('Error in posting note');
    }
});


// will return homepage if given different url from original
app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.delete('/api/notes/:id', (req, res) => {
    if (res.status(200)) {
        fs.readFile('./Develop/db.db.json', (err, data) => (data));
        const id = req.params.id;
        const array = db;
        const findNote = array => array.id === id;
        const foundNote = array.findIndex(findNote);
        delete array[foundNote];
        const arr = array.filter((_, i) => i in array);
        writeToFile('./Develop/db/db.json', arr);
        res.status(200).json(array);
    } else {
        res.status(404).json("No Note Found!")
    }
}
);


app.listen(PORT, () => console.log(`Your app is launched here: http://localhost:${PORT}`));

