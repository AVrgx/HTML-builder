const fs = require("fs");
const path = require('path');

const folderPath = "./secret-folder";
 
fs.readdir(folderPath, (error, files) => {  
        if (error) return console.log(error);
        files.forEach((file) => {
         const filePath = path.join(folderPath, file);
         const stats = fs.statSync(filePath);
         if (stats.isFile()){
            const fileName = file.split('.')
            const fileSizeKB = Math.round(stats.size / 1024)
            const fileExtension = path.extname(file).replace(".", "");
            console.log(`${fileName[0]}-${fileExtension}-${fileSizeKB}kb`);
         }
        });
});