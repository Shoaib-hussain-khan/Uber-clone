const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const createUser =async({
    firstname,
    lastname,
    email,
    password,
})=>{
    if(!firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const user = usermodel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });
    return user;
}




















//     const existingUser = await User.findOne({ email });
//     if(existingUser){
//         throw new Error("User already exists");
//     }
//     const hashedPassword = await User.hashPassword(password);
//     const user = new User({
//         fullname: {
//             firstname,
//             lastname,
//         },
//         email,
//         password: hashedPassword,
//         socketid: "rider",
//     });
//     await user.save();
//     return user;
// }