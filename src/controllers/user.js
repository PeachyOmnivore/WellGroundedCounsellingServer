const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await findUser(email)

    if (!foundUser) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordsMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(email, jwtSecret)
    res.status(201).json({ token: token, message:"User logged in" });
};

module.exports = {
    login
}