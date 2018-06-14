var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var TaskSchema =  new mongoose.Schema({
    title: { type: String },
    description: { type: String , default : "" },
    completed: { type: Boolean, default: false }
}, {timestamps: true}) 
let Task = mongoose.model("Task",TaskSchema)
module.exports = Task