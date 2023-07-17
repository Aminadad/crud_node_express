const {Schema,model} = require('mongoose');

let TaskSchema = Schema({
    titulo:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = model("Task",TaskSchema,"tasks");//(Elnombre que tendra el modelo, el Schema, la tabla o colletion) 