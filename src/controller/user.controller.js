const { validationResult } = require('express-validator');
const createUser = require('../services/user.service.js');

module.exports = {
    registerUser: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname: { firstname, lastname }, email, password } = req.body;
        const user = await createUser({
            firstname,
            lastname,
            email,
            password
        });
        const token = user.generateAuthToken();
        res.status(201).json({ token, message: "User registered successfully", user });
    }
};


