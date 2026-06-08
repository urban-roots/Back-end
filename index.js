const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hola mundo");
})

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

const articulos = [
    {id:1,
    titulo:"",
    autor:"",
    cuerpo:"",
    sobreElAutor:""
    }
    {id:2,
    titulo:"",
    autor:"",
    cuerpo:"",
    sobreElAutor:""
    }
    {id:3,
    titulo:"",
    autor:"",
    cuerpo:"",
    sobreElAutor:""
    }
    {id:4,
    titulo:"HISTORIA DEL ROCK URUGUAYO",
    autor:"https://culturarock.video.blog/2024/05/04/historia-del-rock-uruguayo/",
    cuerpo:"El desarrollo del rock uruguayo fue lento e inconstante, llegando a su consolidación definitiva a comienzos de los 2000, de la mano de bandas como La Vela Puerca y No Te Va Gustar",
    sobreElAutor:""    
    }
]