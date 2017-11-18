var express = require("express");
var app = express();

app.get("/", function(req, res)
{
	res.send("servidor funcionando")
})

app.get("/:nombre", function(req, res)
{
	res.send("No hay ninguna ruta con este nombre " + req.params.nombre);
})

app.listen(80, function()
{
	console.log("Iniciado en el puerto 80");
})
