const request = require("request");
const apikey = "8496da6d689f3d7a78517b7cca5f7460";

function getWeather(coords, callback) {
  request(
    {
      uri: `https://api.darksky.net/forecast/${apikey}/${coords.latitude},${coords.longitude}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        console.log(`error: `, error);
        callback("Unable to connect to forecast servers", null);
      } else if (body.code === 400) {
        callback(body.error);
      } else if (body) {
        const result = body.currently;
        callback(null, result);
      }
    }
  );
}

module.exports.getWeather = getWeather;
