import express from 'express';
import verse from './verse';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

router.use('/', verse);

export default router;
