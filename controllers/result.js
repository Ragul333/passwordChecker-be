const createdResult = require("../models/createResult");

const createResult = async (req, res) => {
    const { password } = req.body;

    try {
        const result = await createdResult.create({ password });
        res.status(200).json({ message: 'Password saved' })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }

}

module.exports = createResult;