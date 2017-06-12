const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const yargs = require("./config/yargs");

const getWeather = () => {
  geocode
    .getCoords(yargs.argv.address)
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
      weather
        .fetchWeather(result.coords)
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
};

module.exports = getWeather;
