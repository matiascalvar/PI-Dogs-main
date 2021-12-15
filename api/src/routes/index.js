const { Router } = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db.js')
const { Sequelize } = require('sequelize');
const {API_KEY} = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.route('/dogs').get()... 
// Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. Use router.route() to avoid duplicate route naming and thus typing errors.

router.get('/dogs', function (req, res) {
// Obtener un listado de las razas de perro
    // llamar a la API externa y a la db local
    // Traerme todos los perros, y luego ver si se quiere la lista completa o solo uno
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then( async function (response) {
            // console.log("respuesta de la api", response.data)
            var breeds = response.data.map(breed => (
                {
                    name: breed.name,
                    weight: `${breed.weight.metric}Kg`,
                    image: breed.image.url,
                    temperament : breed.temperament
                }))
            
            // console.log(breeds)
            // ANTES DE RESPONDER HAY QUE LLAMAR A LA DB Y CONJUGAR LAS RAZAS
            // Debo traer Imagen Nombre Temperamento Peso
            const breedsFromDb = (await Dog.findAll({ includes: Temperament })).map(breed => (
                {
                    name: breed.name,
                    weight: `${breed.weight}Kg`,
                    temperament : breed.temperament
                }))
            // console.log("breeds from db: ",breedsFromDb)
            allBreeds = breeds.concat(breedsFromDb)
            // res.json(allBreeds)
        })
    
    if (req.query.hasOwnProperty('name')) {
        let { name } = req.query
        // Aca deberia leer allBreeds con el name y devolver ese objeto
        res.send(`NAME: ${name}`)
    } 
    else {
        res.json(allBreeds)
    }
})









module.exports = router;
