const fs = require('fs');
const decompress = require('decompress');

const dest = `${__dirname}/static/admin/config.yml`;

if (!fs.existsSync(`${__dirname}/static/admin`)) {
  fs.mkdirSync(`${__dirname}/static/admin`);
}

const trainingToBuild = process.env.GATSBY_TRAINING || 'admin';

if (!fs.existsSync(`${__dirname}/src/img/${trainingToBuild}`)) {
  fs.mkdirSync(`${__dirname}/src/img/${trainingToBuild}`, { recursive: true });
}

const imagesDir1 = `${__dirname}/static/img/${trainingToBuild}`;
if (!fs.existsSync(imagesDir1)) {
  fs.mkdirSync(imagesDir1);
}

const imagesDir2 = `${__dirname}/src/img/${trainingToBuild}`;
if (!fs.existsSync(imagesDir2)) {
  fs.mkdirSync(imagesDir2);
}

if (trainingToBuild === 'admin') {
  const src = `${__dirname}/netlify_configs/admin_config.yml`;

  fs.copyFile(src, dest, (error) => {
    // incase of any error
    if (error) {
      console.error(error);
      return;
    }

    console.log('---- CHRISTOS MESSAGE: Config Copied Successfully!');
  });
} else {
  const src = `${__dirname}/netlify_configs/all_config.yml`;

  fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const newConfig = data.replace(/\$\{trainingToBuild\}/g, trainingToBuild);

    fs.writeFile(dest, newConfig, function (err) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('---- CHRISTOS MESSAGE: Config Copied Successfully!');
    });
  });
}

// ----- Sandboxes -------

const allSandboxesFolder = `${__dirname}/__sandboxes__`;

const unzipFiles = () => {
  fs.mkdirSync(allSandboxesFolder);

  const sourceFolderOfSandboxes = `${__dirname}/static/img/${trainingToBuild}`;

  fs.readdir(sourceFolderOfSandboxes, (error, fileNames) => {
    if (error) {
      throw error;
    }

    fileNames
      .filter((filename) => filename.endsWith('.zip'))
      .forEach((filename) => {
        decompress(`${sourceFolderOfSandboxes}/${filename}`, allSandboxesFolder)
          .then(() => {
            console.log('---- CHRISTOS MESSAGE: Sandboxes unzipped');
          })
          .catch((error) => {
            console.log(error);
          });
      });
  });
};

if (fs.existsSync(allSandboxesFolder)) {
  fs.rmdir(allSandboxesFolder, { recursive: true }, (err) => {
    if (err) {
      return console.log('---- CHRISTOS MESSAGE: error occurred in deleting directory', err);
    }

    console.log('---- CHRISTOS MESSAGE: Directory deleted successfully');
    unzipFiles();
  });
} else {
  unzipFiles();
}
