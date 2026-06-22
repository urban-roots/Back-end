const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: ["http://localhost:5500", "http://127.0.0.1:5501"] }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hola mundo");
});

const articulos = [
  {
    id: 1,
    titulo: "Origen del Carnaval",
    autor: "Jairo Severo",
    cuerpo: "",
    sobreElAutor: "Jairo es un ...",
  },
  {
    id: 2,
    titulo: "Origen del Rock Uruguayo",
    autor: "Federico Gutierrez",
    cuerpo: "",
    sobreElAutor:
      "Soy Federico Gutiérrez, me gusta el arte, todo tipo de arte. Estoy estudiando desarrollo web y actualmente trabajo para Urban Roots",
  },
  {
    id: 3,
    titulo: "Historia del Rock Uruguayo",
    autor: "Gonzalo Gomez",
    cuerpo: "",
    sobreElAutor: "Gonzalo es un ...",
  },
  {
    id: 4,
    titulo:
      "El latido Emigrante: Cómo la Plena Echó Raíces en el alma Uruguaya",
    autor: "Nicole Silva",
    cuerpo: `                              

Este texto explora el viaje cultural y emocional de la plena, un ritmo nacido en el Caribe portorriqueño que, desafiando distancias geográficas, se transformó en uno de los pilares de la identidad popular de Uruguay. A través de un recorrido histórico y social, se analiza cómo los sectores obreros rioplatenses adoptaron y moldearon esta música, convirtiéndola en una herramienta de expresión comunitaria viva y en un reflejo de que el arte es, en última instancia, el canal sensorial por el cual los pueblos comunican aquello que las palabras no alcanzan a contener.
A primera vista, la distancia geográfica y climática entre los cálidos callejones de Ponce, en Puerto Rico, y las frías avenidas invernales de Montevideo, sugeriría un abismo insalvable para cualquier expresión folclórica. Sin embargo, la música posee rutas invisibles que las fronteras no pueden contener. La plena, nacida a principios del siglo XX como el "periódico cantado" de las clases obreras boricuas, encontró una segunda patria en Uruguay décadas más tarde. Este fenómeno no fue una mera importación estética o un capricho comercial de las radioemisoras, sino un proceso de asimilación profunda arraigado en las necesidades afectivas de un pueblo que descubrió, en esos compases ajenos, una forma idónea de narrar su propia cotidianidad.
Para comprender cómo este ritmo extranjero se insertó en el tejido oriental, es imprescindible remontarse a las décadas de 1950 y 1960. El arribo de orquestas centroamericanas y la posterior migración de músicos caribeños encendieron una chispa en los salones de baile locales. No obstante, el verdadero milagro social ocurrió cuando la periferia montevideana tomó esos instrumentos y fundó los cimientos de un movimiento propio.
Fue en este escenario donde nacieron las orquestas pioneras, verdaderas arquitectas de la identidad tropical uruguaya. El 28 de febrero de 1964 quedó marcado a fuego con la fundación de la Sonora Borinquen, creada por el maestro Carlos Goberna quien no solo trajo el rigor de la orquesta típica, sino que con temas icónicos como Elena, Elena o Cometa blanca, convirtió a "la Borinquen" en la agrupación más longeva y respetada, demostrando que la plena era un sentimiento que cruzaba generaciones. Junto a ellos, la irrupción del Conjunto Casino de Ernesto Negrín y la potencia del Combo Camagüey terminaron de consolidar una era dorada. Estas bandas supieron interpretar que la cadencia de la plena dialogaba de igual a igual con las tensiones, alegrías y vicisitudes del trabajador uruguayo. Al sustituir gradualmente algunos elementos de la percusión original por un sutil patrón del timbal y charleston (dando vida a la popular "plena danza"), e incorporar vientos con un fraseo más melancólico y cercano al tango o al candombe, nació la "plena uruguaya": una variante única, más pausada, pero cargada de una vibrante energía comunitaria.
Conectando este desarrollo histórico con su consolidación urbana, los bailes de club de barrio y las fonoplateas se convirtieron en laboratorios sociales. La plena dejó de ser un sonido importado para transformarse en el paisaje sonoro de las barriadas. Los panderos puertorriqueños se fundieron con la sensibilidad charrúa, demostrando que cuando un ritmo es adoptado con tal honestidad, las etiquetas de origen pierden relevancia ante la autenticidad del sentimiento compartido.
Esta adopción cultural nos invita a reflexionar sobre la naturaleza misma de las manifestaciones humanas. A menudo se intenta registrar la historia a través de textos académicos, fechas rígidas y crónicas oficiales; sin embargo, existen rincones de la experiencia colectiva que escapan a la rigidez tipográfica. Es allí donde el arte emerge como el verdadero diario del alma, rescatando las vivencias puras de una sociedad. Lo que muchas veces no se puede expresar a través de los libros o con la formalidad de las palabras, encuentra su cauce natural en la música, la cual se manifiesta como un lenguaje superior que llega y conecta con los individuos de forma sensorial y visual. Un acorde de plena en un club de barrio comunica el cansancio y la esperanza de una semana de trabajo de un modo que ningún tratado sociológico podría jamás replicar.
Al observar a una multitud moverse al unísono bajo el influjo de los vientos y las congas en un festival tropical montevideano, se vuelve evidente que la conexión humana trasciende el intelecto. Hay una narrativa visual en las manos que repican, en los cuerpos que se encuentran y en las miradas que celebran la resistencia diaria. La música se siente en el pecho antes de ser procesada por la razón; es un puente transatlántico que transformó la nostalgia del Caribe en la banda sonora de la resiliencia uruguaya.
En conclusión, el arraigo de la plena en el Uruguay contemporáneo es el testimonio vivo de una identidad que no es estática, sino un río en constante movimiento que se nutre de múltiples vertientes. Hoy en día, este ritmo no solo inunda los ómnibus, las radios y las fiestas familiares, sino que ha ganado un lugar de respeto en el Carnaval y en las salas de concierto más prestigiosas del país, dialogando de igual a igual con el candombe y el rock nacional. Aquella música que llegó como extranjera se ha despojado de su pasaporte para nacionalizarse uruguaya por derecho propio. Nos queda la certeza de que los pueblos no adoptan ritmos por mero azar, sino porque encuentran en ellos el espejo exacto donde mirarse, recordándonos que mientras haya una historia que no se pueda contar con palabras, siempre habrá un tambor dispuesto a latir por nosotros.

https://www.elobservador.com.uy/nota/la-plena-da-sus-primeros-pasos-oficiales-201763500

https://www.historiadelamusicapopularuruguaya.com/


Aharonián, Coriún (2007). Músicas populares del Uruguay. Universidad de la República, Escuela Universitaria de Música, Montevideo.

Forrisi, Carlos (2014). "La ruta de la plena: del Caribe al Río de la Plata". Artículo publicado en el portal cultural Brecha Digital.

Archivo General de la Nación (Uruguay). Registros de prensa y crónicas sobre los bailes populares en los clubes deportivos de Montevideo (Décadas 1960-1980).

Ministerio de Educación y Cultura de Uruguay (MEC). Reseñas históricas sobre el desarrollo de la música tropical uruguaya y su impacto en las industrias culturales locales
`,
    sobreElAutor:
      "Soy Nicole Silva, estudiante de ANIMA y amante de la música. Disfruto descubrir nuevos ritmos y conocer las historias que hay detrás de cada expresión artística, ya que la música me permite conectar con mis emociones. Al realizar este artículo sobre la plena, pude profundizar en un género que me llena de energía, me hace bailar y me permitió comprender cómo una manifestación cultural puede transformarse y formar parte de la identidad de un país.",
  },
];

app.get("/articulos", (req, res) => {
  res.send(articulos);
});

app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id) ?? null;

  const idIndex = articulos.findIndex((a) => a.id === id);

  if (idIndex === -1) {
    console.log(idIndex);
    return res.status(404).send("Artículo no encontrado");
  }

  res.send(articulos[idIndex]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
