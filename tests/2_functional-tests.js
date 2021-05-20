const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Translation with text and locale fields: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        text: 'Like a high tech Rube Goldberg machine.',
        locale: 'american-to-british',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text', 'response should have text property');
        assert.property(res.body, 'translation', 'response should have translation property');
        assert.equal(res.body.text, 'Like a high tech Rube Goldberg machine.');
        assert.equal(res.body.translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        done();
      });
  });

  test('Translation with text and locale fields: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        text: 'I spent the bank holiday at the funfair.',
        locale: 'british-to-american',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text', 'response should have text property');
        assert.property(res.body, 'translation', 'response should have translation property');
        assert.equal(res.body.text, 'I spent the bank holiday at the funfair.');
        assert.equal(
          res.body.translation,
          'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
        );
        done();
      });
  });

  test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        text: 'I spent the bank holiday at the funfair.',
        locale: 'french-to-american',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error', 'response should have error property');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  test('Translation with missing text field: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        locale: 'british-to-american',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error', 'response should have error property');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with missing locale field: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        text: 'I spent the bank holiday at the funfair.',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'error', 'response should have error property');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with empty text: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        locale: 'american-to-british',
        text: 'I spent the bank holiday at the funfair.',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text', 'response should have text property');
        assert.property(res.body, 'translation', 'response should have translation property');
        assert.equal(res.body.text, 'I spent the bank holiday at the funfair.');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });

  test('Translation with empty text: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        locale: 'british-to-american',
        text: 'I spent the public holiday at the carnival.',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.property(res.body, 'text', 'response should have text property');
        assert.property(res.body, 'translation', 'response should have translation property');
        assert.equal(res.body.text, 'I spent the public holiday at the carnival.');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});

/*
*Translation with text and locale fields: POST request to /api/translate
*Translation with text and invalid locale field: POST request to /api/translate
*Translation with missing text field: POST request to /api/translate
*Translation with missing locale field: POST request to /api/translate
*Translation with empty text: POST request to /api/translate
*Translation with text that needs no translation: POST request to /api/translate

*/
