const registerUser = async (req, res) => {
    const {firstName, lastName, phone, email, password} = req.body
    
    const registeredUser = await registerDB(firstName, lastName, phone, email, password)
    return res.status(201).json({registeredUser})
}

module.exports = {
    registerUser
}