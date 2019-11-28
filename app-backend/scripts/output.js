const handler = (data, serverless, options) => {
  const fs = require('fs');
  console.log('Received Stack Output', data);

  const file = fs.createWriteStream('.env');

  for (let [key, value] of Object.entries(data)) {
    file.write(`REACT_APP_${key}=${value}\n`);
  }

  file.end();
};

module.exports = { handler };
