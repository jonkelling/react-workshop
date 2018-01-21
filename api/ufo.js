import csvhelper from './csvhelper';
import path from 'path';
import cacher from './cacher';

const filename = path.join(__dirname, '..', 'data', 'ufo.csv');

const value = cacher(async () => {return await csvhelper(filename)});

export default value;