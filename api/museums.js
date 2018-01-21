import csvhelper from './csvhelper';
import path from 'path';
import cacher from './cacher';
import withIds from './withIds';

const filename = path.join(__dirname, '..', 'data', 'museums.csv');

export default cacher(withIds(async () => await csvhelper(filename)));