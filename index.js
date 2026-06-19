const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: ["http://localhost:5500", "http://localhost:5501"] }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Hola mundo");
})

const articulos = [
    {
        id: 1,
        titulo: "Origen del Carnaval",
        autor: "Jairo Severo",
        cuerpo: "",
        sobreElAutor: "Jairo es un ..."
    },
    {
        id: 2,
        titulo: "Origen del Rock Uruguayo",
        autor: "Federico Gutierrez",
        cuerpo: "",
        sobreElAutor: "Federico es un ..."
    },
    {
        id: 3,
        titulo: "Historia del Rock Uruguayo",
        autor: "Gonzalo Gomez",
        cuerpo: "",
        sobreElAutor: "Gonzalo es un ..."
    },
    {
        id: 4,
        titulo: "Origen de la cumbia y la plena",
        autor: "Nicole Silva",
        cuerpo: "",
        sobreElAutor: "Nicole es una ..."
    }
];

app.get('/articulos', (req, res) => {
    res.send(articulos);
});

app.get('/articulos/:id', (req, res) => {
    const id = Number(req.params.id) ?? null;

    const idIndex = articulos.findIndex(a => a.id === id);

    if (idIndex === -1) {
        console.log(idIndex);
        return res.status(404).send("Artículo no encontrado");
    }

    res.send(articulos[idIndex]);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});