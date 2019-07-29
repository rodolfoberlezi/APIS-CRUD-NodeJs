import mongoose from 'mongoose';

import alunos from '../models/alunoModel.js';

exports.getAllAlunos = (req, res) => {
    alunos.find({}, (err, alunos) => {
        if (err) {
            res.send(err);
        }
        res.json(alunos);
    })
}

exports.createAluno = (req, res) => {
    const novoAluno = new alunos(req.body);

    novoAluno.save((err, alunos) => {
        if (err) {
            res.send(err);
        }       
        res.json(alunos);        
    });    
}