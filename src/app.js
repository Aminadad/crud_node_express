const express = require('express');
const morgan  = require('morgan');
const app = express();

let port = process.env.PORT || 9090
//usar middleware de morgan para ver las peticiones un mi consola
app.use(morgan('dev'));

app.get("/",(req, res)=>{
    res.send("Welcome");
})
app.get("/",(req, res)=>{
    res.status(200).send("Welcome");
})

app.listen(port, function(){
    console.log(`listening on http://127.0.0.1:${port}`);
});
