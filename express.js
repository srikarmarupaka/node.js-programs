var express= require('express');

var app= express(); //express module is a function so that is stored in app.
app.get('/', function(req,res) {
    res.send('this is the homepage');
})
app.listen(3000);

//HTTP methods
// GET, POST, DELETE, PUT

//POST : app.post('route',fn)
//GET : app.get('route',fn)
//DELETE : app.delete('route',fn)
