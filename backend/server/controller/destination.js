const destination = require('../model/destination')
const cloudinary = require('../database/cloudinary')

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: 'Data cannot be empty'
        })
    }

    try {
        const { Place_Name, Description, Category, City, Coordinate, ImageURL } = req.body

        const resImage = await cloudinary.uploader.upload(ImageURL[index], {
            folder: 'MappingDIY',
            width: 960,
            crop: "scale"
        })
        
        await destination.create({
            Place_Name: Place_Name,
            Description: Description,
            Category: Category,
            City: City,
            Coordinate: Coordinate,
            ImageURL: resImage.secure_url
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
        const destinations = await destination.findAll({})
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
        const newDest = await destination.update({
            
        },{where:{
            id: desID
        }})
        res.status(200).json({
            success: true,
            message: 'Destination has been updated!',
            data: newDest
        })
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.delete = async (req, res) => {
    const desID = req.params.desID;

    try{

    }
    catch(error){
        res.status(400).json({
            message: error
        })
    }
}