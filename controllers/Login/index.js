const User = require("../../models/User")

const LoginController = {
    async createSession(req, res) {
        const { username } = req.body

        try {
            const user = await User.findOne({ username })
            return res.status(200).json(user)
        } catch (err) {
            res.status(400).jsom(err)
        }
    }
}


module.exports = LoginController