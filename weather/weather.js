const request = require("request");
const apikey = "8496da6d689f3d7a78517b7cca5f7460";

function getWeather(coords, callback) {
  request(
    {
      uri: `https://api.darksky.net/forecast/${apikey}/${coords.latitude},${coords.longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(null, body.currently);
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
}

module.exports.getWeather = getWeather;
