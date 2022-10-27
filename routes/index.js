const index = require('express').Router();
const path = require('path');
const fs = require('fs');
const note = require('../db/db.json');
const { v4: uuid } = require('uuid');

index.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

index.get('/api/notes', (req, res) => {
    res.json(note)
});

index.get('/api/notes:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            res.json(note[i]);
        }
    }
});

index.post('/api/notes', (req, res) => {
    const newNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuid()
    }
    note.push(newNote)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(note, null, 2))
    res.json(note);
});

index.delete('/notes/:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            note.splice(i, 1);
        }
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(note, null, 2))
    res.json(note);
})

index.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = index;