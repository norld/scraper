import axios from 'axios';
const fs = require('fs');

(async () => {
  const apiUrl = 'https://api.m.hostelworld.com/2.2/cities';
  for (let index = 1; index < 20000; index++) {
    const fileName = `./output/${index}.json`;
    if (!fs.existsSync(fileName)) {
      try {
        console.log(index);
        const data = await axios.get(`${apiUrl}/${index}/properties/`);
        if (data) {
          var jsonData = JSON.stringify(data.data);
          fs.writeFileSync(fileName, jsonData);
        }
      } catch (error) {
        console.log(error);
        fs.writeFileSync(fileName, '');
      }
    }
  }
})();
