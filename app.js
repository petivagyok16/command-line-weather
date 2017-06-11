const request = require("request");
const yargs = require("yargs");

const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true
  }
});

request(
  {
    uri: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20street%20philadelphia",
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log(`error: `, error);
    }

    console.log(JSON.stringify(body, undefined, 2));
  }
);
