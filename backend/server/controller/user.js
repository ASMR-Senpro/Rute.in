const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv');

exports.signUp = async (req, res) => {
    if (!req.body) {
        res.status(404).json({ message: 'Data cannot be empty' })
    }
    const { email, name, username, password, province, city, birth } = req.body

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await user.create({
            email: email,
            name: name,
            username: username,
            password: hashPassword,
            province: province,
            city: city,
            birth: birth,
            role: "CLIENT"
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
        console.log(req.body)
        const userAuth = await user.findAll({
            where: {
                username: req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, userAuth[0].password)
        if (match) {
            const email = userAuth[0].email
            const id = userAuth[0].id
            const name =  userAuth[0].name
            const username =  userAuth[0].username
            const province = JSON.parse(userAuth[0].province)
            const city = JSON.parse(userAuth[0].city)
            const birth = userAuth[0].birth
            const role =  userAuth[0].role
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
                    email,
                    name,
                    username,
                    province,
                    city,
                    birth,
                    role,
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

exports.getByID = async (req, res) => {
    const userID = req.params.uid
}

exports.edit = async (req, res) => {
    if(!req.body){
        res.status(404).json({message:'Data cannot be empty'})
    }
}