const packages = require('../model/package')

exports.getAll = async (req, res) => {
    try {
        const user = req.headers.authorization;
        if (user) {
            const package = await packages.findALL({})
            res.status(200).json({
                success: true,
                message: 'Plans successfully loaded!',
                data: package
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}