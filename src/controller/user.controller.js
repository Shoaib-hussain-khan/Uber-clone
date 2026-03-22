const { validationResult } = require('express-validator');
const { createUser } = require('../services/user.service.js');
const User = require('../model/user.model.js');
module.exports = {
    registerUser: async (req, res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
    const { fullname, email, password } = req.body;
    const hashedPassword = await User.hashPassword(password);
   console.log(req.body);
        const user = await createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password: hashedPassword,
        });
        const token = user.generateAuthToken();
        res.status(201).json({ token, message: "User registered successfully", user });
  

    }
}


