//La api la he subido a herok, el cron job decidí realizarlo en local

const cheerio = require('cheerio');
const cron = require('node-cron');
const axios = require('axios').default;


cron.schedule('5 * * * * *', async () => {
    const html = await axios.get('https://salty-spire-81639.herokuapp.com/');

    const $ = cheerio.load(html.data);

    const filas = $('tbody.table-body tr');

    filas.each( async (index, el) => {

        const estudiante = $(el).children().eq(0).text().toString();

        const teoria = $(el).children().eq(1).text().toString();

        const practica = $(el).children().eq(2).text().toString();

        const adicional = parseInt($(el).children().eq(3).text().toString(),10);

        const estado = parseInt($(el).children().eq(4).text().toString(),10);

        const final = $(el).children().eq(5).text().toString();

        const error = $(el).children().eq(5).text().toString();

        const examen = {estudiante, teoria, practica, adicional, estado, final, error};
        
        axios.post('https://salty-spire-81639.herokuapp.com/api/calificaciones', Calificacion)
        .then( response => console.log(response.data));

    } );

    console.log('Hecho');
});
