const bcrypt = require('bcrypt')
const  { registerDB } = require('../domain/register.js')

const registerUser = async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;

    if (!password || !email) {
        return res.status(409).json({ error: "Please enter email or password" });
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
        res.status(201).json({ data: registeredUser });

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    registerUser
}
