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

function getBreeds() {
    let breedsAPI = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then( async function (response) {
            var breeds = response.data.map(breed => (
                {   
                    id: breed.id,
                    name: breed.name,
                    weight: `${breed.weight.metric}Kg`,
                    image: breed.image.url,
                    temperament : breed.temperament
                }))
            const breedsFromDb = (await Dog.findAll({ includes: Temperament })).map(breed => (
                {
                    id: breed.id,
                    name: breed.name,
                    weight: `${breed.weight}Kg`,
                    temperament : breed.temperament
                }))
            return allBreeds = breeds.concat(breedsFromDb)
    })
    return breedsAPI
}

router.get('/dogs', function (req, res) {

    getBreeds()
    .then(() =>
    {
        if (req.query.hasOwnProperty('name')) {
            let { name } = req.query
            // Pongo en mayus la 1º letra del nombre que me llegue, bc asi esta en la api
            // Ojo que puede contener dos palabras ambas capitalizadas RESOLVER
            name = name.charAt(0).toUpperCase() + name.slice(1)
            let found = false
            let breedsWithName= []
            for (let i = 0; i < allBreeds.length; i++) {
                if (allBreeds[i].name.includes(name)) {
                    breedsWithName.push(allBreeds[i])
                    found = true
                }
            }
            if (found) {
                res.status(200).send(breedsWithName)
                
            }
            else {
                res.status(404).send("ERROR: dog not found.")
            }
        }
        else {
            res.json(allBreeds)
        }
    })
    .catch((e) => {
        console.log(e)
    })
})

router.get('/dogs/:idRaza', function (req, res) {
    let { idRaza } = req.params
    let found = false
    let breedFound = []
    getBreeds()
        .then(() => {
        for (let j = 0; j < allBreeds.length; j++) {
            if (allBreeds[j].id == idRaza) {
                breedFound = allBreeds[j]
                found = true
                }
            }
            if (found) {
                res.json(breedFound)
            } else {
                res.status(404).send("ERROR: Dog not found")
            } 
        })
    
})







module.exports = router;
