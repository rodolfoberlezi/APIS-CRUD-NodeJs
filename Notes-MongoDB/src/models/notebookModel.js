import mongoose, { Schema } from 'mongoose';

const NoteScheme = new Schema({
    title: {
        type: String,
        required: "What is the note's title?"
    },
    text: {
        type: String,
        required: "What is the note about?"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Note', NoteScheme);