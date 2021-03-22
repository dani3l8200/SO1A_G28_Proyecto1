const {Schema , model } = require('mongoose');


const mensajeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        age: {
            type: Number
        },      
        infectedtype: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        canal: {
            type: String,
            required: true,
        },
    }
);
/*
Name string 
Location string 
Age  int
Infectedtype string
State string
*/ 
module.exports =  model('Mensaje', mensajeSchema)
