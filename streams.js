const fs = require('fs');

const readStream = fs.createReadStream('./docs/1mb.txt', {encoding : 'utf8' });

readStream.on('data', (chunk) => {
 console.log('new chunk');
 console.log(chunk);
});