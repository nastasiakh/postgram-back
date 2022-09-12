const express = require('express')
const router = express.Router()

const signIn = (req, res) => {
    res.send('Hello from signin route')
}
const signUp = (req, res) => {
    res.send('Hello from signup route')
}
const signOut = (req, res) => {
    res.send('Bye from signout route')
}

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.post('/signOut', signOut)

module.exports = router
