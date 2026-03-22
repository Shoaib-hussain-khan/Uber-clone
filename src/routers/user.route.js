const { Router } = require('express');
const { body } = require('express-validator');
const { registerUser } = require('../controller/user.controller.js');
const { model } = require('mongoose');
const userController = require('../controller/user.controller.js');




const router = Router();
router.post("/register",[
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        body("fullname.firstname").notEmpty().withMessage("First name is required"),
        body("fullname.lastname").notEmpty().withMessage("Last name is required"),
]
,userController.registerUser);



module.exports = router;
