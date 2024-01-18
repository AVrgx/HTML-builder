const fs = require('fs');
const { stdout, stdin } = process;

const filePath = 'text-file.txt';
const writeableStream = fs.createWriteStream(filePath);

stdout.write("Введите текст\n");
stdin.on('data', (chunk) => {
   if(chunk.toString().includes('exit')) {
      stdout.write("Bye!\n")
      process.exit()
      
   }
   writeableStream.write(chunk)
})

