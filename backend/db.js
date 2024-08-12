const mongoose = require('mongoose');
const { Schema } = mongoose;

const database = mongoose.connect('mongodb+srv://karthikgoje2003:Knock!!!knock1233@cluster0.ywnaizx.mongodb.net/todoapp');
const todoschema = new Schema({
  title: String,
  description: String,
  status : Boolean
});

const todoitems = mongoose.model('todoitems' , todoschema)

module.exports = {todoitems}