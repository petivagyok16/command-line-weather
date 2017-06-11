const request = require("request");

function getCoords(address, callback) {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        // console.log(`error: `, error);
        callback("Unable to connect to Google servers", null);
      } else if (body.status === "ZERO_RESULTS") {
        callback(`Unable to find that address`);
      } else if (body.status === "OK") {
        const result = {
          address: body.results[0].formatted_address,
          coords: {
            longitude: body.results[0].geometry.location.lng,
            latitude: body.results[0].geometry.location.lat
          }
        };
        callback(null, result);
      }
    }
  );
}

module.exports.getCoords = getCoords;
