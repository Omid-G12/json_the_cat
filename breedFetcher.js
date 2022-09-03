const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    let desc = data[0];
    if (desc) {
      return callback(null, desc.description);
    } else {
      callback('Breed not found!');
    }
  });
};

module.exports = { fetchBreedDescription };
