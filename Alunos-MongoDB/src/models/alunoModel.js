import mongoose, { Schema } from 'mongoose';

const AlunoScheme = new Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Aluno', AlunoScheme);