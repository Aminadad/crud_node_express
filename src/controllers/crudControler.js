let Task = require('../models/crudModel');


const create = (req,res)=>{
    
    let parametros = req.body;
    let task = new Task(parametros);
    let save = task.save()
    .then((data)=>{
        console.log(data);
    })
    .cath(err=>{
        console.log(err);
    })

}
const read = (req,res)=>{

}
const update = (req,res)=>{

}
const deletes = (req,res)=>{

}

module.exports = {
    create,
    read,
    update,
    deletes 
}