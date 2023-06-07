const package = require('../model/package')

exports.getAll = async (req, res) => {
    try {
        const packages = await package.findAll({})
        res.status(200).json({
            success: true,
            message: 'Plans successfully loaded!',
            data: packages
        })

    }
    catch (error) {
        res.status(400).json({
            message: error
        })
        console.log(error)
    }
}