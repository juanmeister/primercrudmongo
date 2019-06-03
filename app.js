
const path= require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose= require('mongoose');

//conexion a mongodb
mongoose.connect('mongodb://localhost/primercrud')
.then(db=> console.log('db conectada'))
.catch(err => console.log(err));
// importacion de las rutas
const indexRoutes = require('./routes/index');

//configuraciones

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'view'));
app.set('view engine', 'ejs');
//middlewares de express
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//rutas
app.use('/', indexRoutes); 
//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log(`Serbidor incioado en el puerto ${app.get('port')}`);
});