const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes')


//modular html routes
//HTML endpoint is meant to present the web pages (VIEWS)
//http://localhost:3001/
router.use('/', homeRoutes);

router.use('/profile', profileRoutes);

//API endpoint is meant to do CRUD (MODEL and Controller)
//http://localhost:3001/api
router.use('/api', apiRoutes);

module.exports = router;
