const { Router } = require('express'); 
const router = Router(); 
const {saveMsg , test} = require('../controllers/mensajeria');
const {get_All_msg , get_for_channel} = require('../controllers/consultas');

// r es un bojeto Router
router.route('/mensajeria/').post(saveMsg);
router.route('/test/').post(test);
router.route('/consulta/getAllMsg').get(get_All_msg);
router.route('/consulta/getAllMsg/:canal').get(get_for_channel);

module.exports = {
    router,
};