const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream('text.txt')

readStream.on('data', function(chunk){
   process.stdout.write(chunk)
})