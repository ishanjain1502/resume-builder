const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    address: { type: String },
    dob: { type: Date },
    summary: { type: String },
    mob: { type: String },
    image: { type: String },
    edu1: { type: String },
    edu1Details: { type: String },
    edu2: { type: String },
    edu2Details: { type: String },
    skills: { type: String },
    project1: { type: String },
    project1Desc: { type: String },
    project2: { type: String },
    project2Desc: { type: String },
});

module.exports = mongoose.model('Form', FormSchema);