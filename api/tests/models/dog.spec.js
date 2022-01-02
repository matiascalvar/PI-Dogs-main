const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('----Dog model----', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('Name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
    // 
     describe('Weight', () => {
      it('should throw an error if weight is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weight')))
          .catch(() => done());
      });
      it('should work when its a valid weight', () => {
        Dog.create({ weight: '10 - 15' });
      });
     });
    // 
     describe('Height', () => {
      it('should throw an error if height is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid height')))
          .catch(() => done());
      });
      it('should work when its a valid height', () => {
        Dog.create({ height: '30 - 50' });
      });
     });
    // 
    describe('Image', () => {
      it('should not throw an error if image is null', (done) => {
        Dog.create({name: 'doggy', weight: '10 - 15', height: '30 - 40'})
         .then(() => done());
      }); 
     }); 
  });
});
 