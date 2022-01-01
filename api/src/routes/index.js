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
var tempss
function getBreeds() {
    let breedsAPI = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then( async function (response) {
        var breeds = response.data.map(breed => (
            {   
                id: breed.id,
                name: breed.name.toLowerCase(), // pasar todo a minuscula
                weight: breed.weight.metric.replace('NaN - ','').replace('NaN','26'),
                height: breed.height.metric,
                life_span: breed.life_span,
                image: breed.image.url,
                temperament: breed.temperament,
                origin: "api"
            }))
        const breedsFromDb = (await Dog.findAll({ include: "temperaments" })).map(breed => (
            {
                id: breed.id,
                name: breed.name,
                weight: breed.weight,
                height: breed.height,
                life_span: breed.life_span,
                image: breed.image,
                temperament: breed.temperaments ?
                    (([tempss] = breed.temperaments).map(e => e.name)).join(', ')  
                    : "",
                origin: breed.origin
            }))
        return allBreeds = breeds.concat(breedsFromDb).sort((a, b) => a.name.localeCompare(b.name))
    })
    return breedsAPI
}

router.get('/dogs', function (req, res) {

    getBreeds()
    .then(() =>
    {
        if (req.query.hasOwnProperty('name')) {
            let { name } = req.query
        
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
                res.status(404).send('<h1>ERROR: breed not found. Try again!</h1>')
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
                res.status(404).send('<h1>ERROR: breed not found. Try again!</h1>')
            } 
        })
    
})

router.get('/temperament', async function (req, res) {
    let temps = await Temperament.findAll()

    if (temps.length > 0) {
      res.json(temps)  
    } else {
        res.status(404).send("Error getting temperaments")
    }
    
})

router.post('/dog', async function (req, res) {
    let { name, height, weight, lifeSpan, temps, image } = req.body
    var arrTemps = []

    for (let i = 0; i < temps.length; i++) {
        let tempSearched = await Temperament.findOne({ where: { name: temps[i] } });
        if (tempSearched !== null) {
            arrTemps.push (tempSearched.dataValues.id)
        }        
    }

    const dog = await Dog.create({
        name,
        weight,
        height,
        life_span: `${lifeSpan} years`,
        image,
        origin: "db"
    });
    arrTemps.forEach(async (temp) => (await dog.addTemperaments(temp)))
 
    res.json(dog)
})
 
module.exports = router;
