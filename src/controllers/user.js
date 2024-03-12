require('dotenv').config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.JWT_SECRET;
const { findUser } = require('../domain/user.js')

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(401)
            .json({ message: "Please enter both username and password" });
    }

    const foundUser = await findUser(email)

    if (!foundUser) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordsMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(email, secret)
    res.status(201).json({ token: token, message: "You are logged in!" });
};

module.exports = {
    login
}