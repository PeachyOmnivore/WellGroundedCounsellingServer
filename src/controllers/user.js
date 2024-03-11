

const login = (req, res) => {
    const {username, password} = req.body
    return console.log(username, password)
}

const registerUser = (req, res) => {
    const {username, password} = req.body
    return console.log(username, password)
}

module.exports = {
    login,
    registerUser
}