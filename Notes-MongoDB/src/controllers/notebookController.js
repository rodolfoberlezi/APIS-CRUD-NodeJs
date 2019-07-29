import mongoose from 'mongoose';
//const mongoose = require('mongoose');
import note from '../models/notebookModel.js';

exports.getNote = (req, res) => {
    note.findById(req.params.noteId, (err, note) => {
        if (err) { //já ta tratando o erro
            res.send(err);
        }
        res.json(note);
    });
};

//arrow functions são tipo funções lambdas em Python, usadas em callbacks aqui
exports.updateNote = (req, res) => {
    note.findOneAndUpdate(
        {
            _id: req.params.noteId
        },
        req.body,
        { 'new': true },
        (err, note) => {
            if (err) {
                res.send(err);
            }

            res.json(note);
        });
};

exports.deleteNote = (req, res) => {
    note.deleteOne(
        {
            _id: req.params.noteId
        },
        (err) => {
            if (err) {
                res.send(err);
            }

            res.json({
                message: `note ${req.params.noteId} successfully deleted`
            });
        });
};

exports.getAllNotes = (req, res) => {
    note.find({}, (err, notes) => {
        if (err) {
            res.send(err);
        }
        res.json(notes);
    });
};

exports.createNote = (req, res) => {
    const newNote = new note(req.body);

    newNote.save((err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};