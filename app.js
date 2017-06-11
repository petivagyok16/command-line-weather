const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const yargs = require("./config/yargs");

geocode
  .getCoords(yargs.argv.address)
  .then(result => {
    console.log(JSON.stringify(result, undefined, 2));
    weather
      .getWeather(result.coords)
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });
