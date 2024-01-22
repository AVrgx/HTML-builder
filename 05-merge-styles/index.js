const fs = require('fs');
const path = require('path');

const srcFolderPath = path.join(__dirname, 'styles');
const distFolderPath = path.join(__dirname, 'project-dist');

fs.readdir(srcFolderPath, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const validFiles = files.filter((file) => /.css$/.test(file));

  const stylesPromises = validFiles.map((file) => {
    const filePath = path.join(srcFolderPath, file);
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  });

  Promise.all(stylesPromises)
    .then((styles) => {
      const bundlePath = path.join(distFolderPath, 'bundle.css');
      return new Promise((resolve, reject) => {
        fs.writeFile(bundlePath, styles.join('\n'), (err) => {
          err ? reject(err) : resolve();
        });
      });
    })
    .then(() => {
      console.log('bundle.css file created successfully!');
    })
    .catch((err) => {
      console.error('Error:', err);
    });
});