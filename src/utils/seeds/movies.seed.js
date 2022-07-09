const mongoose = require('mongoose');
const Movies = require('../../api/movies/movies.model');
const dotenv = require('dotenv');

dotenv.config();

const db_url = process.env.DB_URL;


const premiere = [
{
    name: 'Todo a la vez en todas partes',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/Todo%20a%20la%20vez%20en%20todas%20partes%2003%20junio.jpg',
    synopsis: 'Una inmigrante china, en medio de una investigación de Hacienda, se ve envuelta en una aventura salvaje en la que solo ella puede salvar el mundo explorando otros universos. Desafortunadamente, esto la lleva a una aventura aún mayor cuando se encuentra perdida en los mundos infinitos del multiverso.',
    rated: 'PG-13',
    duration: 140,
    genre: 'Comedia, Acción',
    director: "Dan Kwan, Daniel Scheinert ('Daniels')",
    actors: 'Michelle Yeoh, Jamie Lee Curtis, Jonathan Ke Quan',
    iniDate: 2022-07-03,
    finDate: 2022-07-15,
    isActive: true
},
{
    name: 'Thor: Love and Thunder',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/PosterThor1onesheet.jpg',
    synopsis: `El Dios del Trueno (Chris Hemsworth) emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: 
            una búsqueda de la paz interior.
            Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses (Christian Bale), 
            que busca la extinción de los dioses. Para hacer frente a la amenaza, Thor solicita la ayuda del Rey Valkiria (Tessa Thompson), 
            de Korg (Taika Waititi) y de su ex novia Jane Foster (Natalie Portman) que, para sorpresa de Thor, empuña inexplicablemente su martillo 
            mágico, Mjolnir, como la Poderosa Thor.
            Juntos, se embarcan en una aventura cósmica en la que tendrán que descubrir el misterio de la venganza del Carnicero de Dioses y 
            detenerlo antes de que sea demasiado tarde.`,
    rated: 'PG-12',
    duration: 118,
    genre: 'Fantástico, Acción',
    director: "Taika Waititi",
    actors: 'Chris Hemsworth, Natalie Portman, Christian Bale, Tessa Thompson',
    iniDate: 2022-07-08,
    finDate: 2022-07-22,
    isActive: true
},
{
    name: 'Minions: El origen de Gru',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/Poster1Minionsonesheet.jpg',
    synopsis: `Son los años 70 y Gru crece en un barrio residencial, en pleno boom de los peinados cardados y los pantalones 
                de campana. Como fan incondicional de un famoso supergrupo de villanos, 'Los salvajes seis', Gru idea un plan para 
                demostrarles que es lo suficientemente malvado como para trabajar con ellos. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos. Juntos, Kevin, Stuart, Bob, y Otto -un nuevo Minion con aparato en los dientes y desesperado por sentirse aceptado- desplegarán su potencial para construir junto a Gru su primera guarida, experimentar con sus primeras armas y llevar a cabo sus primeras misiones.`,
    rated: 'PG-7',
    duration: 87,
    genre: 'Animación, Comedia',
    director: "Kyle Balda, Brad Ableson",
    actors: 'Animación',
    iniDate: 2022-07-08,
    finDate: 2022-07-22,
    isActive: true
},
{
    name: 'Lightyear',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/FSAEE4zVcAAZaL2.jpgg',
    synopsis: `Son los años 70 y Gru crece en un barrio residencial, en pleno boom de los peinados cardados y los pantalones 
                de campana. Como fan incondicional de un famoso supergrupo de villanos, 'Los salvajes seis', Gru idea un plan para 
                demostrarles que es lo suficientemente malvado como para trabajar con ellos. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos. Juntos, Kevin, Stuart, Bob, y Otto -un nuevo Minion con aparato en los dientes y desesperado por sentirse aceptado- desplegarán su potencial para construir junto a Gru su primera guarida, experimentar con sus primeras armas y llevar a cabo sus primeras misiones.`,
    rated: 'Para todos los publicos',
    duration: 105,
    genre: 'Animación, Comedia, Fantástico',
    director: "Angus MacLane",
    actors: 'Chris Evans, Uzo Aduba, Peter Sohn',
    iniDate: 2022-07-08,
    finDate: 2022-07-22,
    isActive: true
},
{
    name: 'Jujutsu Kaisen 0',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/JJK%200%20vertical.png',
    synopsis: `Yuta Okkotsu es un chico de instituto bastante nervioso con un grave problema: Su amigo Rika se ha convertido en un "Curse" y no le deja a solas. Ya que Rika no es un Curse ordinario, capta la atención de Satoru Gojo, un profesor del Instituto "Jujutsu", donde los exorcistas aprenden a combatir a los Curse. Gojo convence a Yuta para enrolarse en al academia... ¿Podrá aprender Yuta a controlar al Curse que le atormenta?. Precuela de la serie anime "Jujutsu Kaisen".`,
    duration: 105,
    rated: 'PG-13',
    genre: 'Anime, Fantástico',
    director: "Sunghoo Park",
    actors: 'Megumi Ogata, Kana Hanazawa, Mikako Komatsu',
    iniDate: 2022-06-24,
    finDate: 2022-07-15,
    isActive: true
},
{
    name: 'Llenos de gracia',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/Llenos_de_gracia-921162938-large.jpg',
    synopsis: `Marina, una monja muy atípica, llega en el verano de 1994 a El Parral, un colegio amenazado de cierre.
                A pesar de que los internos, chicos sin familia, la reciben con mil trastadas, Marina tiene una idea que cambiará todo: 
                formar un equipo de fútbol. Con la ayuda de dos monjas: Angelines, inocente y frágil, y Tatiana, bruta y bondadosa, creará 
                algo parecido a una familia de verdad.`,
    duration: 109,
    rated: 'PG-7',
    genre: 'Comedia, Drama',
    director: "Roberto Bueso",
    actors: 'Carmen Machi, Paula Usero, Pablo Chiapella',
    iniDate: 2022-07-08,
    finDate: 2022-07-22,
    isActive: true
},
{
    name: 'Mamá no enredes',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/Mam_no_enRedes-938478586-large.jpg',
    synopsis: `Malena Alterio interpreta a Clara, madre de dos jóvenes adolescentes, una mujer abierta a nuevas experiencias que decide 
                crear un perfil en TILINK, la app de citas de moda. En los malabarismos de Clara y sus hombres vemos a una nueva mujer que se 
                permite cuestionar el amor romántico y sus mitos. Pero… ¿Qué pasa por la mente de un veinteañero cuando encuentra el perfil de 
                su propia madre en una aplicación de citas? Sí, su madre aún es joven. Sí, está divorciada de su padre y tiene derecho a rehacer 
                su vida, pero allí sólo hay hombres que la van a utilizar para luego dejarla tirada. Dani y su hermana Milena se embarcarán 
                entonces en la delirante aventura de boicotear los ligues de su madre, e irán a por todas cuando la mujer inicie una relación 
                más seria con un yogurín argentino, convencidos de que sólo la va a hacer sufrir. Sin embargo, las estrategias de los hermanos 
                tendrán el efecto opuesto al deseado y nada saldrá como esperan.`,
    duration: 97,
    rated: 'PG-16',
    genre: 'Comedia',
    director: "Daniela Fejerman",
    actors: 'Malena Alterio, Eva Ugarte, Antonio Pagudo',
    iniDate: 2022-07-08,
    finDate: 2022-07-22,
    isActive: true
},
{
    name: 'Promesas en París',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/3522.jpg',
    synopsis: `Tras toda una trayectoria como alcaldesa de una ciudad cerca de París, Clémence (Isabelle Huppert) afronta su 
    mayor reto hasta el momento: presentarse como Ministra. Valiente y decidida, siempre se ha volcado con los más desfavorecidos 
    para salvar a la ciudad de la pobreza y el desempleo junto con la ayuda de su fiel mano derecha Yazid (Reda Kateb), pero ahora, 
    este nuevo cargo despertará en ella una ambición desconocida. ¿Será capaz de mantener su compromiso con los ciudadanos y su integridad 
    política o acabará sucumbiendo al poder?`,
    duration: 99,
    rated: 'PG-17',
    genre: 'Drama',
    director: "Thomas Kruithof",
    actors: 'Isabelle Huppert, Reda Kateb, Naidra Ayadi',
    iniDate: 2022-06-24,
    finDate: 2022-07-15,
    isActive: true
},
{
    name: 'Sonic 2',
    poster: 'https://www.cinespalafox.com/sites/default/files/imagecache/cartelDetalle/fl0u5uixwaazev7_cphe.jpg',
    synopsis: `Después de establecerse en Green Hills, Sonic está listo para tener más libertad, y Tom y Maddie acuerdan 
    dejarlo en casa mientras se van de vacaciones. Pero, apenas se van, el Dr. Robotnik regresa, esta vez con un nuevo 
    compañero: Knuckles, que busca una esmeralda que tenga el poder de construir y destruir civilizaciones. Sonic se une 
    a su propio compañero, Tails, y juntos se embarcan en un viaje para encontrar la esmeralda antes de que caiga en las manos equivocadas.`,
    duration: 122,
    rated: 'PG-7',
    genre: 'Acción',
    director: "Jeff Fowler",
    actors: 'James Marsden, Jim Carrey, Tika Sumpter, Idris Elba',
    iniDate: 2022-06-01,
    finDate: 2022-07-07,
    isActive: false
},
];

mongoose.connect(db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    await Movies.insertMany(premiere)
    console.log('Peliculas añadidas con éxito');
  })
.catch(error => console.log('Error al insertar las peliculas', error))
.finally(() => mongoose.disconnect());