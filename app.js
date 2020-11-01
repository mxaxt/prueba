const express = require ("express");
const app = express();
const fs = require ("fs");

let elTexto = fs.readFileSync ("./heroes.json", "utf8")
elTexto = JSON.parse (elTexto)

app.get("/" ,function(req, res){
    res.send("ni superman ni iron man");
})

app.get("/heroes", function(req, res){
    res.send(elTexto)
})

app.listen(3000, function(){
    console.log("El servidor corre en el puerto 3000");
})