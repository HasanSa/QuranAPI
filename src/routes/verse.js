import express from 'express';
import { Verse } from 'models';

const router = new express.Router();

const maxVerses = 6236;

router.get('/all/',async (req, res) => {
  const verses = await Verse.find();
  return res.send(verses);
});

router.get('/index/:id', async (req, res) => {
  const _index =  parseInt(req.params.id);
  console.log(_index);
  const verses = await Verse.find({index: _index}).sort({surah: 1});
  return res.send(verses);
});

router.get('/find/:surah', async (req, res) => {
  const _surah = parseInt(req.params.surah);
  const verses = await Verse.find({surah: _surah}).sort({verse: 1});
  return res.send(verses);
});

router.get('/find/:surah/:verse', async (req, res) => {
  const _surah = parseInt(req.params.surah);
  const _verse = parseInt(req.params.verse);
  const verses = await Verse.find({surah: _surah, verse: _verse});
  return res.send(verses);
});

router.get('/range/:from/:to', async (req, res) => {
  var _indexFrom =  parseInt(req.params.from);
  var _indexTo = parseInt(req.params.to);
  const verses = await Verse.find({index: {$gte: _indexFrom, $lte: _indexTo}});
  return res.send(verses);
});

router.get('/search/:language?/:term', async (req, res) => {
  var _text = req.params.term;
  var _language = req.params.language;
  console.log(_text);
  if (_language === 'en') {
    return res.send(await Verse.find({translation : {$regex : ".*" + _text+ ".*", $options: "i"}}).sort({surah: 1}));
  } else {
    return res.send(await Verse.find({text : {$regex : ".*" + _text+ ".*", $options: "i"}}).sort({surah: 1}));
  }  
});

router.get('/random/:language?', async (req, res) => {
  var _index =  Math.floor((Math.random() * maxVerses));
  console.log("index calculated was"+_index);
  const verses = await Verse.find({index: _index}).sort({surah: 1});;
  return res.send(verses);
});

export default router;
