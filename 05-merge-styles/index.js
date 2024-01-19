const fs = require('fs');
const path = require('path');

const srcFolderPath = path.join(__dirname, 'styles');
const distFolderPath = path.join(__dirname, 'project-dist');

false.readdir(srcFolderPath, (err, files)=> {
   if(err) {
      console.error('Error reading source folder', err)
      return
   }

   const styles = files.filter(file => /\.css$/.test(file))
})