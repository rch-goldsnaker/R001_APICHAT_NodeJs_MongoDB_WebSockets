const express = require('express');

var app = express();

app.use('/', function (req,res){
    res.send('Hola Mundooo');
});

app.listen(3000);
console.log('la aplicacione esta escuchando en http://localhost:3000')