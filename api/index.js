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
const { Temperament } = require('./src/db.js')

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    // Popular el modelo de temperamentos desde aca?
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then((response) => {
        let unfilteredTemps = response.data.map(breed => {
          if (breed.temperament !== undefined) {
            return breed.temperament.split(',')
          }
        })
        let unfilteredFlattenTemps = unfilteredTemps.flat()
        const filteredTemps = new Set();
        for (const temp in unfilteredFlattenTemps) {
          if (unfilteredFlattenTemps[temp] !== undefined) {
            filteredTemps.add(unfilteredFlattenTemps[temp])
          }
        }
        // console.log(typeof filteredTemps)
       
        // for (let j = 0; j < filteredTemps.length; j++) {
        //   // const temper = Temperament.create({ name: 'filteredTemps[j]' });
        //   console.log("wep")
        // }
        // for (const temp in filteredTemps) {
        //   // let temper = Temperament.create({ name: temp });
        //   console.log("wep")
        // }
        // async (e) => {
        //   await Temperament.findOrCreate({
        //     where: { name: e }
        //   })
        // }
        
        // const temper = Temperament.create({ name: filteredTemps[0] });
        const jane = Temperament.create({ name: "Jane" });
      })
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  
});

