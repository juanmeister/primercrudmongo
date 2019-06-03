const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    titulo: String,
    descripcion: String,
    estado: {
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('tareas', TaskSchema);
