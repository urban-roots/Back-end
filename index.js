const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hola mundo");
})

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

const articulos = [
    {
        id: 1,
        titulo: "Origen del Carnaval",
        autor: "Jairo Severo",
        cuerpo: "Qué sé yo, por algún lugar habrá surgido, pa mí se le ocurrió a Sendic.",
        sobreElAutor: "Un goloso"
    },
    {
        id: 2,
        titulo: "Origen del Rap",
        autor: "Federico Gutierrez",
        cuerpo: "Yeah, perdonen, kame hame ha. Después del tema del tetris viene el Dragon Ball Rap.",
        sobreElAutor: "Fulvo"
    },
    {
        id: 3,
        titulo: "Origen de la cumbia y la plena",
        autor: "Nicole Silva",
        cuerpo: "Cómo quieres tú que te quiera cariñito, si de tu amor no me das ni un poquito.",
        sobreElAutor: "La única mujer del grupo"
    },
    {
        id: 4,
        titulo: "Historia del Rock Uruguayo",
        autor: "Gonzalo Gomez",
        cuerpo: "El desarrollo del rock uruguayo fue lento e inconstante, llegando a su consolidación definitiva a comienzos de los 2000, de la mano de bandas como La Vela Puerca y No Te Va Gustar",
        sobreElAutor: "Un veterano medio gagá"
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
})