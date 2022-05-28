const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstname: {
    type: String,
    unique: false,
    required: true,
  },
  surname: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  telephone: {
    type: Number,
    unique: true,
    required: true,
  },
  dob: {
    type: String,
    unique: false,
    required: true,
  },
  gender: {
    type: String,
    unique: false,
  },
  comment: {
    type: String,
    unique: false,
    required: false,
  },
});

const form = mongoose.model("Form", formSchema);

module.exports = form;
