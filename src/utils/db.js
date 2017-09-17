import mongoose from 'mongoose';
import log from 'log';
import config from '../config';
import { populateQuran } from './helper';

const collectionName = "verses";

const { host, database, user, password } = config.mongodb;
let status = 'DISCONNETED';

const init = () => {
  if (status === 'DISCONNETED') {
    var mongoUrl = `mongodb://${host}/${database}`;
    if (user && password) {
      mongoUrl = `mongodb://${user}:${password}@${host}:37054/${database}`;
    }
    mongoose.connect(mongoUrl);
    status = 'CONNECTING';
    const db = mongoose.connection;
    return new Promise((resolve, reject) => {
      db.on('error', err => {
        status = 'DISCONNETED';
        log.error(err);
        reject(err);
      });
      db.once('open', (err) => {
        status = 'CONNECTED';
        if(!err) {
          console.log("Connected to database");
          mongoose.connection.db.collection(collectionName, {strict:true}, function(err, collection) {
            if (err) {
              console.log("The 'quran' collection doesn't exist. Creating now...");
              populateQuran();
            }
            resolve();
          });
        } else {
          log.info('Database connected');
          resolve();
        }
      });
    });
  }
};

export default { init };
