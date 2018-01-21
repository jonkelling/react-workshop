import csvhelper from './csvhelper';
import path from 'path';
import cacher from './cacher';

const filename = path.join(__dirname, '..', 'data', 'museums.csv');

export default cacher(() => csvhelper(filename));