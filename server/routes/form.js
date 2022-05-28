const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

//routes

router.get("/formdata", formController.getFormData);
router.post("/formdata", formController.addFormData);

module.exports = router;
