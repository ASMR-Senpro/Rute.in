const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv');

exports.signUp = async (req, res) => {
    if (!req.body) {
        res.status(404).json({ message: 'Data cannot be empty' })
    }
    const { username, password } = req.body

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await user.create({
            name: username,
            password: hashPassword
        });
        res.status(200).json({ message: 'New user added' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

exports.signIn = async (req, res) => {
    if (!req.body) {
        res.status(404).json({ message: 'Data cannot be empty' })
    }
    try {
        const userAuth = await user.findAll({
            where: {
                usernamename: req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (match) {
            const id = userAuth[0].id
            const username = userAuth[0].name
            console.log(process.env.ACCESS_TOKEN_SECRET)
            const token = jwt.sign({ id, username }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '20s'
            })
            const refreshToken = jwt.sign({ id, username }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '1d'
            })
            await user.update({ refresh_token: refreshToken }, {
                where: {
                    id: id
                }
            })
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
            res.status(200).json({
                success: true,
                statusCode: res.statusCode,
                message: "Login succesfully",
                data: {
                    username,
                    token,
                    id
                }
            })
        }
        else if (!match) res.status(400).json({ message: "Password tidak sesuai" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.signOut = async (req, res) => {

}