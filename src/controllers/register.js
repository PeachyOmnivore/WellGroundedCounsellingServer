require('dotenv').config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.JWT_SECRET;
const { registerDB } = require('../domain/register.js');
const { findUser } = require('../domain/user.js');

const registerUser = async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;

    if (!password || !email) {
        return res.status(409).json({ message: "Please enter email or password" });
    }

    const existingUser = await findUser(email) || ""

    if (existingUser) {
        return res.status(403).json({ message: "Email already in use" })
    }

    try {
        const hash = await bcrypt.hash(password, 12);

        const registeredUser = await registerDB(
            firstName,
            lastName,
            phone,
            email,
            hash
        );

        const token = jwt.sign(email, secret)
        return res.status(201).json({ user: registeredUser, token: token });

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    registerUser
}
