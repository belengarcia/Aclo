const mongoose = require('mongoose');
const Destiny = require ('../models/destiny.model')
require('../configs/db.config');

let places = [{
image: 'https://i.pinimg.com/originals/e8/e1/e6/e8e1e65b9b6d5f32a739e76ea058c062.jpg',
name: 'Tatoonie',
distance: 'Borde exterior de la galaxia. Lo que quiere decir lejísimos',
journey: 'Plataforma interestelar, y luego viaje a la velocidad de la luz hasta lo territorios del Borde Exterior'
}, {
    image: 'https://vignette.wikia.nocookie.net/shadow-of-mordor/images/5/50/Yre1o.jpg/revision/latest?cb=20141222202027&path-prefix=es',
    name: 'Mordor',
    distance: 'al otro lado de la Tierra Media',
    journey: 'Saliendo desde Hobbiton, más de un mes de camino a pie. El viaje se puede complicar si por el camino te encuentras con orcos, magos oscuros, jinetes negros u otros siervos del Enemigo'
}, {
    image: 'https://statics.viralizalo.com/virs/2016/01/VIR_46144_4345_las_cronicas_de_narnia_el_leon_la_bruja_y_el_armario.jpg?cb=44959',
    name: 'Narnia',
    distance: 'Vuelo a la campiña inglesa, una vez allí solo hay que entrar en el armario del profesor Kirke'
}, {
    image: 'https://i.ytimg.com/vi/OYrV4I1b6xQ/maxresdefault.jpg',
    name: 'Neo-Tokyo',
    distance: '10.755 km (desde Madrid)',
    Journey: 'Viaja al futuro, tras la tercera guerra mundial. Después coje cualquier vuelo que llegue a Tokio'
} ];

Destiny.create(places)
    .then(
        console.log('Created places')
    )
    .catch(error => next(error))

