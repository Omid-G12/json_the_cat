const request = require('request');
const input = process.argv.slice(2);
//console.log(input);
const breed = input[0];
//console.log(breed)
let id = "";

request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
  const data = JSON.parse(body);
  //console.log(data);
  for (let br of data) {
    //console.log(br)
    if (br.name === breed) {
      id = br.id;
    }
  }
  //console.log("breed id: " + id);

  request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {
  //console.log(typeof body);
  const data = JSON.parse(body);
  //console.log(typeof data);
  //console.log(data);
  console.log(data[0].description)
});
})

