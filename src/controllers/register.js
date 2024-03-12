require('dotenv').config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.JWT_SECRET;
const  { registerDB } = require('../domain/register.js')

const registerUser = async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;

    if (!password || !email) {
        return res.status(409).json({ message: "Please enter email or password" });
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
        res.status(201).json({ user: registeredUser, token: token });

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    registerUser
}
