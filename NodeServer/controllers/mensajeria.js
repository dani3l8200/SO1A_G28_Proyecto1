const controller_mensajeria= {};
const  mensajeSchema = require('../models/mensaje');

controller_mensajeria.saveMsg = async (req,res)=>{
    const nuevo = new mensajeSchema(req.body);
    console.log(nuevo)
    try {
        await nuevo.save();
         res.status(200).json({text: 'mensaje almacenado'});// aca seria de hacer el filtrado
     } catch (error) {
         res.status(500).json({Error: error});
     }
}

controller_mensajeria.test = async(req,res)=>{
    console.log(req.body);
    res.status(200).json({text: 'mensaje almacenado'});
}

module.exports = controller_mensajeria;