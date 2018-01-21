import csvhelper from './csvhelper';
import path from 'path';
import cacher from './cacher';

const basePath = path.join(__dirname, '..', 'data', 'ted-talks');

export default cacher(() => {
    const tedmain = csvhelper(path.join(basePath, 'ted_main.csv'));
    const transcripts = csvhelper(path.join(basePath, 'transcripts.csv'));
    return {
        ted: tedmain,
        transcripts
    };
});