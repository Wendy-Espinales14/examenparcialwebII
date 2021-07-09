const { model, Schema } = require('mongoose');

const calificacion = new Schema({
  estudiante: String,
  teoria: Number,
  practica: Number,
  adicional: Number,
  estado: String,
  final: Number,
});
  
const Calificacion = model('Calificacion', calificacion);

module.exports = Calificacion;
