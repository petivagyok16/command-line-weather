const request = require("request");
const apikey = "8496da6d689f3d7a78517b7cca5f7460";

function fetchWeather(coords) {
  return new Promise((resolve, reject) => {
    request(
      {
        uri: `https://api.darksky.net/forecast/${apikey}/${coords.latitude},${coords.longitude}`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body.currently);
        } else {
          reject("Unable to fetch weather");
        }
      }
    );
  });
}

module.exports.fetchWeather = fetchWeather;
