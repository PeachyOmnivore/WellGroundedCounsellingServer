const login = (req, res) => {
    const {email, password} = req.body
    return console.log(email, password)
}

module.exports = {
    login
}