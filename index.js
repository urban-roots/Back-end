const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"] }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hola mundo");
});

const articulos = [
  {
    id: 1,
    titulo: "El Carnaval y sus raíces: entre el Rito, la transgresión y la memoria",
    autor: "Jairo Severo",
    cuerpo: `
    <p>Hablar del carnaval uruguayo implica salir de viaje hacia atrás en el tiempo, mucho más lejos que los tablados del Teatro de Verano o las llamadas en el barrio Sur. El carnaval no nació en Uruguay ni en ningún rincón específico de América. Llegó importado, con siglos de historia encima. Comprender su origen real, qué necesidad humana vino a satisfacer y por qué sobrevivió a tantos intentos de acabar con él es el primer paso para entender por qué hoy sigue siendo la mayor fiesta popular del país.</p>
      
    <h2> Un rito que viene de Roma</h2>
    <p>El inicio del carnaval no es cristiano, aunque la Iglesia haya sido clave para darle su forma y su lugar en el calendario. El carnaval viene de la "festa calendarum", una celebración romana con raíces en las bacanales griegas: una fiesta marcada por el exceso, el disfraz y la vuelta de cabeza de las jerarquías sociales. Milita Alfaro señala que la Navidad corrió gradualmente a las fiestas de las calendas, pero que eso fue solo un cambio de fecha, no de fondo. La fiesta se trasladó a los tres días previos al Miércoles de Ceniza, tomó el nombre de carnelevare ("adiós a la carne") y siguió adelante sin excepciones.</p>

    <p>El carnaval no nació como una fiesta de alegría simple ni de entretenimiento inocente. Nació como un rito de inversión: un tiempo acotado en el que el mundo se ponía al revés. Los poderosos eran ridiculizados, los que no tenían voz recuperaban un lugar que la vida cotidiana les negaba, y las diferencias de clase, género y raza se borraban por un momento bajo la máscara. No es casualidad que el dios del carnaval sea Momo, figura mitológica griega del sarcasmo y la burla, representado con una máscara y un muñeco de cabeza grotesca. <strong>Era el único momento del año en que el pueblo podía decir la verdad sin que nadie tuviera derecho de quejarse.</strong></p>
    <p>El carnaval llegó a Montevideo en tiempos de la Colonia, traído por España. Los primeros pobladores imitaban costumbres del carnaval medieval europeo, como tirarse con huevos vaciados y rellenos de agua. El Montevideo de principios del siglo XIX vivió lo que Alfaro llama el "carnaval heroico" o "bárbaro": una fiesta poco organizada, masiva y espontánea, marcada por la violencia del juego y por una mezcla de clases y razas que no se veía el resto del año.</p>

    <h2>Las raíces africanas y el candombe</h2>

    <p>Una de las raíces más importantes del carnaval montevideano es la de la población africana esclavizada. En la Colonia, los negros esclavos montevideanos se cubrían con túnicas de vivos colores y salían a la calle para ir hasta las murallas, donde se les permitía entonar sus cánticos y realizar sus bailes: uno de los pocos espacios que el régimen colonial dejaba para la expresión de su propia cultura.</p>

    <p>El candombe tiene un carácter religioso y ceremonial que va más allá del entretenimiento: sus tambores cumplen una función dentro de un lenguaje rítmico de raíz africana, y sus personajes (el Gramillero, la Mamá Vieja, el Escobero) remiten a los ancestros africanos y a sus roles dentro de la comunidad. <strong>Las primeras comparsas de negros aparecen en 1832; la primera formalmente reconocida fue "Raza Africana", en 1865, veinte años antes de la abolición.</strong> Sus integrantes ya usaban el carnaval para hablar de la discriminación que seguía pesando sobre ellos, con letras que soñaban con un mundo al revés.</p>

    <h2>La murga: de Cádiz a los tablados</h2>

    <p>Si el carnaval tiene raíces romanas y africanas, la murga, hoy el género más popular del carnaval uruguayo, tiene su origen más directo en España. La expresión murguera tuvo su cuna en España, inspirándose en las chirigotas del Carnaval de Cádiz. <strong>La primera murga en Uruguay fue La Gaditana que se va, en 1908.</strong> Su nombre era un guiño a su origen: venía de Cádiz y se iba, pero dejaba algo. El éxito fue inmediato: en 1910 ya había siete murgas anotadas para participar en el concurso.</p>

    <p>Pero la murga uruguaya no es una copia de las chirigotas gaditanas: tomó de ellas la estructura básica (el coro, las letras críticas y picarescas, el maquillaje), pero fue sumando cosas propias. En la "marcha camión" se identifican ritmos del candombe de origen africano. La murga uruguaya es, en ese sentido, una mezcla: española en su estructura, africana en su ritmo, y profundamente rioplatense en su contenido.</p>

    <figure>
      <img src="img/carnaval-1.webp" alt="La murga Doña Bastarda en un tablado de Montevideo" />
      <figcaption>
        La murga Doña Bastarda en un tablado de Montevideo.
        <cite>Foto: Ignacio Sánchez</cite>
      </figcaption>
    </figure>

    <p>A lo largo de toda esta historia hay algo que se mantiene igual: el carnaval siempre fue un espacio de crítica y resistencia, desde los romanos que se burlaban de los senadores hasta las murgas de hoy que cada año desarman la actualidad política con cuplés afilados. Las élites de todos los períodos intentaron controlarlo sin nunca poder eliminarlo del todo. A fines del siglo XIX ese proceso terminó en la transformación del "carnaval bárbaro" en el "carnaval civilizado" de desfiles ordenados y tablados barriales: lo que se ganó en organización y espectáculo, se perdió en participación directa.</p>

    <p>El carnaval de hoy conserva la forma del rito que lo vio nacer, pero la sociedad que lo sostiene ya no es la misma: más fragmentada, más atenta a de qué lado canta cada murga que al simple hecho de que cante. <strong>El carnaval sigue siendo, en el fondo, la forma en que una sociedad se mira a sí misma con el disfraz puesto y se permite decir lo que piensa.</strong></p>

    <figure>
      <img src="img/carnaval-2.webp" alt="Murga Cayo la Cabra en el desfile inaugural de Carnaval 2018" />
      <figcaption>
        Murga Cayo la Cabra en el desfile inaugural de Carnaval 2018 por Av. 18 de Julio en Montevideo.
        <cite>Foto: Marcelo Bonjour</cite>
      </figcaption>
    </figure>

    <p><strong>Fuentes:</strong></p>
    <p>Alfaro, M. (1991). "Carnaval. Una historia social de Montevideo desde la perspectiva de la fiesta". Ediciones Trilce</p>
    <p>Cruz, A. L. (2020). "Carnaval de todos los tiempos". Plataforma Ceibal</p>
    <p>DAECPU. "Historia del Carnaval Uruguayo". daecpu.org.uy</p>
    <p>Escuela 11 Melo. "El Carnaval del Uruguay". UNAM</p>
    <p>Intendencia de Montevideo. (2015). "Historia del Carnaval". montevideo.gub.uy</p>`,
    sobreElAutor: "Jairo es un estudiante de Ánima. Creció entre pantallas y parlantes, y encontró en la música urbana uruguaya el mismo espíritu que lo lleva a construir cosas desde cero: tomar algo de afuera y hacerlo propio.",
  },
  {
    id: 2,
    titulo: "Historia del Rock Uruguayo: orígenes, identidad y consolidación",
    autor: "Gonzalo Gomez",
    cuerpo: "",
    sobreElAutor: "Soy Gonzalo, un estudiante de Ánima. Me gustan los proyectos y disfruto cada desafío que se presenta, porque nunca es tarde para seguir aprendiendo.",
  },
  {
    id: 3,
    titulo: "Los primeros versos: el nacimiento del Rap en nuestro país",
    autor: "Federico Gutierrez",
    cuerpo: "",
    sobreElAutor: "Soy Federico Gutiérrez, me gusta el arte, todo tipo de arte. Estoy estudiando desarrollo web y actualmente trabajo para Urban Roots",
  },
  {
    id: 4,
    titulo: "El latido emigrante: cómo la plena echó raíces en el alma Uruguaya",
    autor: "Nicole Silva",
    cuerpo: `
      <p><strong>Este texto explora el viaje cultural y emocional de la plena,</strong> un ritmo nacido en el Caribe portorriqueño que, desafiando distancias geográficas, se transformó en uno de los pilares de la identidad popular de Uruguay. A través de un recorrido histórico y social, se analiza cómo los sectores obreros rioplatenses adoptaron y moldearon esta música, convirtiéndola en una herramienta de expresión comunitaria viva y en un reflejo de que el arte es, en última instancia, el canal sensorial por el cual los pueblos comunican aquello que las palabras no alcanzan a contener.</p>

      <h2>Del Caribe al Río de la Plata</h2>

      <p>A primera vista, la distancia geográfica y climática entre los cálidos callejones de Ponce, en Puerto Rico, y las frías avenidas invernales de Montevideo, sugeriría un abismo insalvable para cualquier expresión folclórica. Sin embargo, la música posee rutas invisibles que las fronteras no pueden contener. <strong>La plena, nacida a principios del siglo XX como el "periódico cantado" de las clases obreras boricuas, encontró una segunda patria en Uruguay décadas más tarde.</strong> Este fenómeno no fue una mera importación estética o un capricho comercial de las radioemisoras, sino un proceso de asimilación profunda arraigado en las necesidades afectivas de un pueblo que descubrió, en esos compases ajenos, una forma idónea de narrar su propia cotidianidad.</p>

      <p>Para comprender cómo este ritmo extranjero se insertó en el tejido oriental, es imprescindible remontarse a las décadas de 1950 y 1960. El arribo de orquestas centroamericanas y la posterior migración de músicos caribeños encendieron una chispa en los salones de baile locales. No obstante, el verdadero milagro social ocurrió cuando la periferia montevideana tomó esos instrumentos y fundó los cimientos de un movimiento propio.</p>

      <figure>
        <img src="img/instrumentos.jpg" alt="Tres panderos y un güicharo" />
        <figcaption>
          Tres panderos y un güicharo. Reescalado con Inteligencia Artificial.
          <cite>Fuente: herencialatina.com</cite>
        </figcaption>
      </figure>

      <h2>Las orquestas pioneras y la plena uruguaya</h2>

      <p>Fue en este escenario donde nacieron las orquestas pioneras, verdaderas arquitectas de la identidad tropical uruguaya. <strong>El 28 de febrero de 1964 quedó marcado a fuego con la fundación de la Sonora Borinquen, creada por el maestro Carlos Goberna,</strong> quien no solo trajo el rigor de la orquesta típica, sino que con temas icónicos como Elena, Elena o Cometa blanca, convirtió a "la Borinquen" en la agrupación más longeva y respetada, demostrando que la plena era un sentimiento que cruzaba generaciones. Junto a ellos, la irrupción del Conjunto Casino de Ernesto Negrín y la potencia del Combo Camagüey terminaron de consolidar una era dorada.</p>

      <p>Estas bandas supieron interpretar que la cadencia de la plena dialogaba de igual a igual con las tensiones, alegrías y vicisitudes del trabajador uruguayo. <strong>Al sustituir gradualmente algunos elementos de la percusión original por un sutil patrón del timbal y charleston, e incorporar vientos con un fraseo más melancólico y cercano al tango o al candombe, nació la "plena uruguaya":</strong> una variante única, más pausada, pero cargada de una vibrante energía comunitaria. Los bailes de club de barrio y las fonoplateas se convirtieron en laboratorios sociales. La plena dejó de ser un sonido importado para transformarse en el paisaje sonoro de las barriadas.</p>

      <h2>La música como lenguaje de los pueblos</h2>

      <p><strong>Esta adopción cultural nos invita a reflexionar sobre la naturaleza misma de las manifestaciones humanas.</strong> A menudo se intenta registrar la historia a través de textos académicos, fechas rígidas y crónicas oficiales; sin embargo, existen rincones de la experiencia colectiva que escapan a la rigidez tipográfica. Es allí donde el arte emerge como el verdadero diario del alma. Lo que muchas veces no se puede expresar a través de los libros o con la formalidad de las palabras, encuentra su cauce natural en la música, la cual se manifiesta como un lenguaje superior que llega y conecta con los individuos de forma sensorial. Un acorde de plena en un club de barrio comunica el cansancio y la esperanza de una semana de trabajo de un modo que ningún tratado sociológico podría jamás replicar.</p>

      <p>Al observar a una multitud moverse al unísono bajo el influjo de los vientos y las congas en un festival tropical montevideano, se vuelve evidente que la conexión humana trasciende el intelecto. Hay una narrativa visual en las manos que repican, en los cuerpos que se encuentran y en las miradas que celebran la resistencia diaria. La música se siente en el pecho antes de ser procesada por la razón; es un puente transatlántico que transformó la nostalgia del Caribe en la banda sonora de la resiliencia uruguaya.</p>

      <p>En conclusión, el arraigo de la plena en el Uruguay contemporáneo es el testimonio vivo de una identidad que no es estática, sino un río en constante movimiento que se nutre de múltiples vertientes. Hoy en día, este ritmo no solo inunda los ómnibus, las radios y las fiestas familiares, sino que ha ganado un lugar de respeto en el Carnaval y en las salas de concierto más prestigiosas del país, dialogando de igual a igual con el candombe y el rock nacional. Aquella música que llegó como extranjera se ha despojado de su pasaporte para nacionalizarse uruguaya por derecho propio.</p>

      <p><strong>Fuentes:</strong></p>
      <p><a href="https://www.elobservador.com.uy/nota/la-plena-da-sus-primeros-pasos-oficiales-201763500" target="_blank">https://www.elobservador.com.uy/nota/la-plena-da-sus-primeros-pasos-oficiales-201763500</a></p>

      <p><a href="https://www.historiadelamusicapopularuruguaya.com/" target="_blank">https://www.historiadelamusicapopularuruguaya.com/</a></p>

      <p>Aharonián, Coriún (2007). Músicas populares del Uruguay. Universidad de la República, Escuela Universitaria de Música, Montevideo.</p>

      <p>Forrisi, Carlos (2014). "La ruta de la plena: del Caribe al Río de la Plata". Artículo publicado en el portal cultural Brecha Digital.</p>

      <p>Archivo General de la Nación (Uruguay). Registros de prensa y crónicas sobre los bailes populares en los clubes deportivos de Montevideo (Décadas 1960-1980).</p>

      <p>Ministerio de Educación y Cultura de Uruguay (MEC). Reseñas históricas sobre el desarrollo de la música tropical uruguaya y su impacto en las industrias culturales locales</p>
    `,
    sobreElAutor: "Soy Nicole Silva, estudiante de Ánima y amante de la música. Disfruto descubrir nuevos ritmos y conocer las historias que hay detrás de cada expresión artística, ya que la música me permite conectar con mis emociones. Al realizar este artículo sobre la plena, pude profundizar en un género que me llena de energía, me hace bailar y me permitió comprender cómo una manifestación cultural puede transformarse y formar parte de la identidad de un país.",
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
