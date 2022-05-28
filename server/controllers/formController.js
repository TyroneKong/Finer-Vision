let Form = require("../models/form.model");

//get all form data
exports.getFormData = (req, res) => {
  Form.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//post form data
exports.addFormData = (req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const dob = req.body.dob;
  const gender = req.body.gender;
  const comment = req.body.comment;

  const newFormData = new Form({
    firstname,
    surname,
    email,
    telephone,
    dob,
    gender,
    comment,
  });

  newFormData
    .save()
    .then(() => res.json("successfully added to the form db"))
    .catch((err) => {
      res.status(400).json(err);
    });
};
