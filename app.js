const request = require("request");

request(
  "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20street%20philadelphia",
  {
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log(`error: `, error);
    }

    console.log(JSON.stringify(body, undefined, 2));
  }
);
