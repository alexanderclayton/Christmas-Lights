const router = require('express').Router();
const { House } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newHouse = await House.create({
            ...req.body,
        });

        res.status(200).json(newHouse);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;