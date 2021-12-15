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

conn.sync({force : true}).then(() => {
  server.listen(3001, () => {
    
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then((response) => {
        let unfilteredTemps = response.data.map(breed => {
          if (breed.temperament !== undefined) { // Probar con !== " "
            return breed.temperament.split(',') [[" "],["cariñoso, amable"]]
          }
        })
        let unfilteredFlattenTemps = unfilteredTemps.flat()
        var filteredTemps = new Set();
        for (const temp in unfilteredFlattenTemps) {
          if (unfilteredFlattenTemps[temp] !== undefined) {
            filteredTemps.add(unfilteredFlattenTemps[temp])
          }
        }
        filteredTemps = Array.from(filteredTemps)
        // console.log((filteredTemps))
       
        const tempsFinal = filteredTemps.map(temp => Temperament.create({name: temp.trim()}))
 
        const callejero2 = Dog.create({
          name: "pulgoso",
          weight: '12',
          height: '22'
        });
        // console.log(callejero2.toJSON())
        // let dogTempered = callejero2.addTemperaments('MORDEDOR')
      })
    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  
});

