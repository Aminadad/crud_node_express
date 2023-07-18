const express = require('express');
const morgan  = require('morgan');
const con = require('./libs/db-connetion');
const path = require('path');
const app = express();
const rutas  = require('./routes/routes');
const bodyParser = require('body-parser');
let port = process.env.PORT || 8000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
//usar middleware de morgan para ver las peticiones un mi consola
app.use(morgan('dev'));
app.use('/',rutas); 

//Lanzar el servidor 
app.listen(port, function(){
    console.log(`listening on http://localhost:${port}`);
});
