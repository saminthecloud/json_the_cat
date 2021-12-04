const request = require('request');

let breed = process.argv[2];
let apiName = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(apiName,(error, response, body) => {

  if (!error) {
    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found");
      } else {
        console.log(data[0].description);
      }
    } else console.log("Did not fetch. Response code:", response.statusCode);
  } else console.log("Error in response. Error details:", error);
    
});