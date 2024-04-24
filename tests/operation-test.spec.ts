import 'mocha';
import { expect } from 'chai';
import request, { get } from 'request';


describe('Operations tests', () => {
  it('Should delete an element from a collection', (done) => {
    const url = "http://localhost:3000/cards/1";
    request({url: url, json: true, method: "DELETE"}, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Should not delete a non element from a collection', (done) => {
    const url = "http://localhost:3000/cards/60";
    request({url: url, json: true, method: "DELETE"}, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Should get all elements from a collection', (done) => {
    const url = "http://localhost:3000/cards";
    request({url: url, json: true, method: "GET"}, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Should add an element to a collection', (done) => {
    const url = "http://localhost:3000/cards";
    request({url: url, json: true, method: "POST", body: JSON.parse(`{
      "id": 1,
      "name": "cosota",
      "mana": 20,
      "color": "white",
      "typeLine": "ground",
      "oddity": "common",
      "rules": "estoylootro",
      "marketValue": 10
    }`)
    }, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(201);
      done();
    });
  });

  it('Should get an element from a collection', (done) => {
    const url = "http://localhost:3000/cards/1";
    request({url: url, json: true, method: "GET"}, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Should not get an element from a collection if not existing', (done) => {
    const url = "http://localhost:3000/cards/60";
    request({url: url, json: true, method: "GET"}, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Should not add an element to a collection if reppited', (done) => {
    const url = "http://localhost:3000/cards";
    request({url: url, json: true, method: "POST", body: JSON.parse(`{
      "id": 1,
      "name": "cosota",
      "mana": 20,
      "color": "white",
      "typeLine": "ground",
      "oddity": "common",
      "rules": "estoylootro",
      "marketValue": 10
    }`)
    }, (error: Error, response) => {
      expect(response.statusCode).to.be.equal(400);
      done();
    });
  });

  // it('Should get all elements from a collection', (done) => {
    // const url = "http://localhost:3000/cards";
    // request({url: url, json: true}, (error: Error, response) => {
      // expect(response.statusCode).to.be.equal(200);
      // done();
    // });
  // });
  // it('Should get all elements from a collection', (done) => {
  //   const url = "http://localhost:3000/cards";
  //   request({url: url, json: true}, (error: Error, response) => {
  //     expect(response.statusCode).to.be.equal(200);
  //     done();
  //   });
  // });
  // it('Should get all elements from a collection', (done) => {
  //   const url = "http://localhost:3000/cards";
  //   request({url: url, json: true}, (error: Error, response) => {
  //     expect(response.statusCode).to.be.equal(200);
  //     done();
  //   });
  // });
  // it('Should get all elements from a collection', (done) => {
  //   const url = "http://localhost:3000/cards";
  //   request({url: url, json: true}, (error: Error, response) => {
  //     expect(response.statusCode).to.be.equal(200);
  //     done();
  //   });
  // });
});

