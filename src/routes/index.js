import express from 'express';
import verse from './verse';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

router.use('/', verse);

router.use(function(req, res, next) {
  var err = new Error('Not Found, Bad Request');
  err.status = 404;
  next(err);
});

export default router;
