const consulta = {};
const mensajeSchema = require('../models/mensaje');
/*

aca va toda la logica que solicitara el front , para poder realizar los reportes solicitados

*/


/*
Tabla de datos recopilados (ordenados con el último primero) con la capacidad de filtrarse por la ruta
de ingreso (Todas, NATS, gRPC, RabbitMQ o Google PubSub).
 Región más infectada; una región es una agrupación de departamentos, se tomarán en cuenta los
 definidos en esta página:
 Top 5 departamentos infectados. (Gráfica de Funnel)
 Gráfico circular del porcentaje de casos infectados por state.
 Gráfico circular del porcentaje de casos infectados por infectedType.
 Tabla con los últimos 5 casos registrados.
 Gráfico de barras del rango de edad de infectados (rangos de 10 años, por ejemplo 0..9, 10..19, etc).

*/
consulta.get_All_msg = async(req,res) => {// sin filtro alguno
    try {
        const mensajes = await mensajeSchema.find().sort({fecha:-1}); // LOS DEVUELVE DESCENDENTE
        res.send(mensajes);// devuelve todos los mensajes
    } catch (error) {
        console.log(error);
    }
}

consulta.get_for_channel = async(req,res) => {
    try {
        const mensajesFiltrados = await mensajeSchema.find({canal: req.params.canal}).sort({fecha:-1}); // LOS DEVUELVE DESCENDENTE
        res.send(mensajesFiltrados);
    } catch (error) {
        console.log(error);
    }
}

module.exports =  consulta;
