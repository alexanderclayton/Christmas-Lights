const router = require('express').Router();
const { House } = require('../models');

router.get('/', async (req, res) => {
    try {
    //   const dbHouseData = await House.findAll({

    //   });
      
    //   const houses = dbHouseData.map((house) => house.get({ plain: true }));
      
      res.render('homepage');
      
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/house/:id', async (req, res) => {
    try {
        const dbHouseData = await House.findByPk(req.params.id, {

        });

        const house = dbHouseData.get({ plain: true });

        res.render('house', {
            ...house,
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;