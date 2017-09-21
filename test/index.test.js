import 'babel-polyfill';
import app from '../src/main';
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('test routes/index.js', async () => {
  it('should return HELLO WORLD when success', (done) => {
    request.get('/')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.msg).to.equal('HELLO WORLD');
      done();
    });
  });

  it('should return all verses of surah 1, which must have array length equals to 7', (done) => {
    request.get('/find/1/')
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).to.be.an('array').that.have.length(7);
      done();
    });
  });

  it('should return verse with translation equals to "ALL PRAISE BE to Allah, Lord of all the worlds,"', (done) => {
    request.get('/find/1/2')
    .end((err, res) => {
      if (err) return done(err);
      const verse = res.body;
      expect(verse).to.be.an('object');
      expect(verse.translation).to.equal("ALL PRAISE BE to Allah, Lord of all the worlds,");
      done();
    });
  });

  it('should return verse with translation equals to "This is The Book" term', (done) => {
    request.get('/search/en/This%20is%20The%20Book')
    .end((err, res) => {
      if (err) return done(err);
      const verses = res.body;
      expect(verses).to.be.an('array').that.have.length(1);
      expect(verses[0].translation).to.equal("This is The Book free of doubt and involution, a guidance for those who preserve themselves from evil and follow the straight path,");
      done();
    });
  });

  it('should return verses length equals to 15 ', (done) => {
    request.get('/search/en/(O%20Prophet)')
    .end((err, res) => {
      if (err) return done(err);
      const verses = res.body;
      expect(verses).to.be.an('array').that.have.length(15);
      done();
    });
  });

  it('should return random verse', (done) => {
    request.get('/random/')
    .end((err, res) => {
      if (err) return done(err);
      const verses = res.body;
      expect(verses).to.be.an('object');
      done();
    });
  });
});