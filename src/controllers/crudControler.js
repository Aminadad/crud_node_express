let Task = require('../models/crudModel');


const create = (req,res)=>{
    
    let parametros = req.body;
    console.log(parametros);
    //crearel objeto que guadara los datos
    let task = new Task(parametros);
    let save = task.save()
    .then((data)=>{
        console.log("Se guardaron: "+data);
         res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    })

}
const read = (req,res)=>{
    let task = Task.find()
    .then(data=>{
        res.render('index',{
            tareas: data
        })
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })


}
const readOne = (req,res)=>{
    let id = req.params.id;
    let task = Task.findOne({_id:id})
    .then(data=>{
        res.render('update',{
           data
        })
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })


}
const update = (req,res)=>{
    
    let id = req.params.id;
    Task.findOneAndUpdate({_id:id},req.body)
    .then(data=>{
       console.log("datos actualizados",data);
       res.redirect('/');
        
    })
    .catch(err=>{
        console.log(err);
    })

}
const deletes = (req,res)=>{
    let id = req.params.id;
    let delet = Task.findOneAndDelete({_id:id})
    .then(data => {
        console.log(`datos ${data} borrados`);
        res.redirect('/');
    })
    .catch(err => {console.log('no se pudo borrar'+err)})

}

module.exports = {
    create,
    read,
    readOne,
    update,
    deletes 
}