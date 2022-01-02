/* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let chai = require('chai');
chai.use(chaiHttp);
const url = 'http://localhost:3001';

const agent = session(app);
const dog = {
  name: 'Pug',
  height: '20 - 30',
  weight: '1 - 3'
};

describe('----Dogs routes----', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs/1').expect(200)
    );
  });
  // 
  describe('GET /dogs/:idRaza', () => {
    it('should get 200 with a valid id', () =>
      agent.get('/dogs/1').expect(200)
    );
    it('should get 404 with an invalid id', () =>
      agent.get('/dogs/999').expect(404)
    );
  }); 
  describe('GET /temperament', () => {
    it('should get 200', () =>
      agent.get('/temperament').expect(200)
    );
  });

describe('POST /dog ',()=>{
  it('should add a new breed to database', (done) => {
    chai.request(url)
    .post('/dog')
    .send({
      name: "india",
      height: "15 -30",
      weight: "25 - 45",
      lifeSpan: "12 - 15",
      temps: ["Friendly", "Guardian", "Charming"],
      image: "https://i.postimg.cc/PxPV9krK/IMG-20160308-175510.jpg"
    })
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
 });
 });

  it('should get an error if required params are missing', (done) => {
    chai.request(url)
    .post('/dog')
    .send({
      // name: "india",
      // height: "15 -30",
      weight: "25 - 45",
      lifeSpan: "12 - 15",
      temps: ["Friendly", "Guardian", "Charming"],
      image: "https://i.postimg.cc/PxPV9krK/IMG-20160308-175510.jpg"
    })
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(404);
    done();
  });
 });
});
  
});