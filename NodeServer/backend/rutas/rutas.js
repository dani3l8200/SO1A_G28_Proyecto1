const { Router } = require('express'); 
const router = Router(); 
const {saveMsg , test} = require('../controllers/mensajeria');

// r es un bojeto Router
router.route('/mensajeria/').post(saveMsg)
router.route('/test/').post(test)


module.exports = {
    router,
};