var express = require("express");
var app = express();

app.get("/", function(req, res)
{
	res.sendFile(__dirname + "/inicioServer.html");
})

app.get("/federer", function(req, res)
{
	res.sendFile(__dirname +  "/descarga.jpg" );
})

app.get("/index.html", function(req, res)
{
	res.sendFile(__dirname +  "/index.html" );
})

app.get("/:nombre", function(req, res)
{
	res.send("No hay una ruta para "+ req.params.nombre);
})

app.listen(80, function()
{
	console.log("Iniciado en el puerto 80");
})
