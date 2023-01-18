const router = require('express').Router();
// const houseRoutes = require('./houseRoutes');
const addHouseRoutes = require('./addHouseRoutes');

// router.use('/house', houseRoutes);
router.use('/addHouse', addHouseRoutes);

module.exports = router;