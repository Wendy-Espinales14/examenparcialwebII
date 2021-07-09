const Calificacion = require('../models/Calificacion');
require('../mongodb');

exports.obtenercalif = (req, res) => {

    Examen.find({}).then( califs =>{
        const error = calfs.filter( Examen => Examen.tipoerror )
        res.status(200).send(error);
    } )
    
}

exports.insertarcalif = (req, res) => {
    const { estudiante, teoria, practica, adicional, estado, final } = req.body;

    let tipoerror = '';

    
    if(final !== ((teoria*practica/2)+adicional))
    {
        tipoerror = 'Las calificaciones no concuerdan';
    }

    const new_calif = new Calificacion({
        estudiante, 
        teoria, 
        practica, 
        adicional, 
        estado, 
        final,
        tipoerror
    });

    new_calif.save().then( new_calif => res.status(201).send(new_calif));
    
}