var express = require("express");
var app = express();

app.get("/", function(req, res)
{
	res.send("servidor funcionando");
})

app.get("/federer", function(req, res)
{
	res.sendFile( "D:/Documents/GitHub/nodeServerDigitalOcean/descarga.jpg" );
})

app.get("/:nombre", function(req, res)
{
	res.send("No hay una ruta para "+ req.params.nombre);
})

app.listen(80, function()
{
	console.log("Iniciado en el puerto 80");
})
