const plan = require('../model/plan')

exports.createPlan = async (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: 'Data cannot be empty!'
        })
    }
    const { userID, title, destinationID } = req.body

    try {
        const user = req.headers.authorization;
        if (user) {
            await plan.create({
                userID: userID,
                title: title,
                destinationID: destinationID
            });
            res.status(200).json({
                success: true,
                message: 'New successfully plan added!',
                data: req.body
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const user = req.headers.authorization;
        if (user) {
            const plans = await plan.findALL({})
            res.status(200).json({
                success: true,
                message: 'Plans successfully loaded!',
                data: plans
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.getByUserID = async (req, res) => {
    const userID = req.params.uid

    try {
        const user = req.headers.authorization;
        if (user) {
            const plans = await plan.findAll({
                where: { userID: userID }
            })
            res.status(200).json({
                success: true,
                message: 'Your plans successfully loaded!',
                data: plans
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.edit = async (req, res) => {
    const userID = req.params.uid

    if (!req.body) {
        res.status(404).json({
            message: 'Data cannot be empty'
        })
    }

    try {
        const { title, destinationID } = req.body
        const user = req.headers.authorization;
        if (user) {
            const newPlan = await plan.update({
                title: title,
                destinationID: destinationID
            }, {
                where: {
                    userID: userID
                }
            })
            res.status(200).json({
                success: true,
                message: 'Your plan updated!',
                data: newPlan
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: error
        })
    }
}