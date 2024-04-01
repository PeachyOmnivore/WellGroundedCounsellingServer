require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = process.env.JWT_SECRET;
const { findUser, updateUserDB } = require("../domain/user.js");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(401)
            .json({ message: "Please enter both username and password" });
    }

    const foundUser = await findUser(email);

    if (!foundUser) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordsMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(email, secret);
    res.status(201).json({ token: token, message: "You are logged in!" });
};

const getUser = async (req, res) => {
    const { email } = req.user;
    const foundUser = await findUser(email);
    return res.status(200).json({ foundUser });
};

const updateUser = async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;
    const id = Number(req.params.id);
    console.log("user ID in params ===>", id)
    const updatedUser = await updateUserDB(firstName, lastName, phone, email, password, id);
    res.status(201).json({ updatedUser });
};

module.exports = {
    login,
    getUser,
    updateUser
};
