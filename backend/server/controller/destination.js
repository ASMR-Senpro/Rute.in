const destination = require('../model/destination')
const cloudinary = require('../database/cloudinary')

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Data cannot be empty"
        })
    }

    try {
        const { name, coordinat, location, description, imageURL, price, rating } = req.body

        const imgURL = []
        for (let index = 0; index < imageURL.length; index++) {
            const resImage = await cloudinary.uploader.upload(imageURL[index], {
                folder: 'MappingDIY',
                width: 720,
                crop: "scale"
            })
            imgURL[index] = resImage.secure_url
        }
        await destination.create({
            name: name,
            coordinat: coordinat,
            location: location,
            description: description,
            imageURL: imgURL,
            price: price,
            rating: rating
        })
        res.status(200).json({
            success: true,
            message: 'New destination added!',
            data: req.body
        })
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const destinations = await destiantion.findAll({})
        res.status(200).json({
            success: true,
            message: 'Destination loaded',
            data: destinations
        })
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.getByID = async (req, res) => {
    const desID = req.params.desID;

    try {
        const destinations = await destination.findAll({
            where: { desID: desID }
        })
        res.status(200).json({
            success: true,
            message: 'Your destination loaded',
            data: destinations
        })
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.edit = async (req, res) => {
    const desID = req.params.desID;

    if(!req.body){
        res.status(404).json({
            message:'Data cannot be empty'
        })
    }
    const {name, coordinat, location, description, imageURL, price, rating} = req.body

    try {

    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.delete = async (req, res) => {
    const desID = req.params.desID;
}