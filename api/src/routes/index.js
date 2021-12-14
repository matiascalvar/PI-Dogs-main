const { Router } = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db.js')
const {Sequelize} = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.route('/dogs').get()... 
// Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. Use router.route() to avoid duplicate route naming and thus typing errors.
router.get('/dogs', function (req, res) {
// Obtener un listado de las razas de perro
    // llamar a la API externa y a la db local
    axios.get('https://api.thedogapi.com/v1/breeds')
        .then( async function (response) {
            // console.log("respuesta de la api", response.data)
            var breeds = response.data.map(breed => breed.name) 
            
            // console.log(breeds)
            // ANTES DE RESPONDER HAY QUE LLAMAR A LA DB Y CONJUGAR LAS RAZAS
            // Debo traer Imagen Nombre Temperamento Peso
            const breedsFromDb = (await Dog.findAll()).map(breed => breed.name)
            console.log(breedsFromDb)
            var allBreeds = breeds.concat(breedsFromDb)
            res.json(breeds)
        })
    // res.json(breeds)
    // res.send("working from /dogs")
})

module.exports = router;
