const request = require("request");

function getCoords(address) {
  const encodedAddress = encodeURIComponent(address);

  return new Promise((resolve, reject) => {
    request(
      {
        uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          // console.log(`error: `, error);
          reject("Unable to connect to Google servers");
        } else if (body.status === "ZERO_RESULTS") {
          reject(`Unable to find that address`);
        } else if (body.status === "OK") {
          const result = {
            address: body.results[0].formatted_address,
            coords: {
              longitude: body.results[0].geometry.location.lng,
              latitude: body.results[0].geometry.location.lat
            }
          };
          resolve(result);
        }
      }
    );
  });
}

module.exports.getCoords = getCoords;
