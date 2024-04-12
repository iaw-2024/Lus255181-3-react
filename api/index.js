const express = require("express");
const app = express();
var cors = require('cors');
const fs = require('fs');

app.use(cors({
    origin: '*',
    credentials: true,
}));

app.get("/datos", (req, res) => 
    fs.readFile('public/Datos.json','utf8', function(err,data){
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }
        const jsonData = JSON.parse(data);
        res.send(jsonData);
    })
);
app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;