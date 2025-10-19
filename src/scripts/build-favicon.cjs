const fs = require('fs');
const pngToIco = require('png-to-ico');

pngToIco('public/assets/tech-info-logo.png')
  .then(buf => fs.writeFileSync('public/favicon.ico', buf))
  .then(() => console.log('public/favicon.ico created'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });