
const User = require('../model/user.model.js');

module.exports = createUser = async ({
    firstname,
    lastname,
    email,
    password,
}) => {
    if (!firstname || !lastname || !email || !password) {
        throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await User.hashPassword(password);
    const user = new User({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: hashedPassword,
        socketid: "rider",
    });
    await user.save();
    return user;
};




















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