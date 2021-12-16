//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { API_KEY } = process.env;
const { Dog, Temperament } = require('./src/db.js')


// Syncing all the models at once.
// {force : true}
conn.sync({force : true}).then(() => {
  server.listen(3001, () => {
    // Carga de temperaments desde API externa
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then(async (response) => {
        let unfilteredTemps = response.data.map(breed => {
          if (breed.temperament !== undefined) { // Probar con !== " "
            return breed.temperament.split(',')
          }
        })
        let unfilteredFlattenTemps = unfilteredTemps.flat()
        var filteredTemps = new Set();
        for (const temp in unfilteredFlattenTemps) {
          if (unfilteredFlattenTemps[temp] !== undefined) {
            filteredTemps.add(unfilteredFlattenTemps[temp].trim())
          }
        }
        filteredTemps = Array.from(filteredTemps)
       
        const tempsFinal = await filteredTemps.map(temp => Temperament.create({name: temp.trim()}))

      })
      // CARGA DE PERRO DE PRUEBA. BORRAR LUEGO
      .then(async () => {
      let callejero2 = await Dog.create({
        name: "Pulgoso Dog",
        weight: '122',
        height: '22',
        temperaments: [{name: "Curious"}, {name: "Friendly"}]
      }, { include: "temperaments" });
        
        let addingTemp = await callejero2.addTemperaments("3")
        // console.log(Dog.prototype)
    })
    .catch((e) => {
        console.log(e)
    })
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  
});

