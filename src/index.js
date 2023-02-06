const express = require ('express');
const app = express ();
const path= require('path');

app.use(express.urlencoded({extended: false}));
//añado la siguiente configuracion para que tambien pueda leer formaulrios de angular , json..
app.use(express.json());  //asi mi servidor entendera datos en formato json

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname,'public')));
app.listen(3000,()=>{
    console.log('server on port 3000');
})