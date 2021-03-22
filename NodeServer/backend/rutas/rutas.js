const { Router } = require('express'); 
const router = Router(); 
const {saveMsg , test} = require('../controllers/mensajeria');
const {get_All_msg , get_for_channel , getTop5DerpartamentosInfectados,regionMasInfectada,getForState ,getForInfectedType,ultimos5casos} = require('../controllers/consultas');

// r es un bojeto Router
router.route('/mensajeria/').post(saveMsg);
router.route('/test/').post(test);
router.route('/consulta/getAllMsg').get(get_All_msg);
router.route('/consulta/getAllMsg/:canal').get(get_for_channel);
router.route('/consulta/ultimos5casos').get(ultimos5casos);
router.route('/consulta/getTop5DerpartamentosInfectados').get(getTop5DerpartamentosInfectados);
router.route('/consulta/regionMasInfectada').get(regionMasInfectada);
router.route('/consulta/getForState').get(getForState);
router.route('/consulta/getForInfectedType').get(getForInfectedType);

module.exports = {
    router,
};