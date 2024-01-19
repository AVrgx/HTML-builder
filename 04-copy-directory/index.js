const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

async function copyDir(srcDir, dstDir) {
  fsPromises
    .mkdir(dstDir)
    .then(function () {
      console.log('Directory created successfully');
    })
    .catch(function () {
      console.log('failed to create directory');
    });
  try {
    const files = await fsPromises.readdir(srcDir);
    files.forEach((file)=>{
      const sourcePath = path.join(srcDir, file);
      const targetPath = path.join(dstDir, file);
      try {
         fsPromises.copyFile(sourcePath, targetPath)
      }catch{
         console.error('The file could not be copied')
      }

   })
  } catch (err) {
    console.log(err);
  }
}

const sourceDir = path.join(__dirname, '/files/');
const destinationDir = path.join(__dirname, '/copyfiles/');
copyDir(sourceDir, destinationDir);
console.log(sourceDir, destinationDir);
