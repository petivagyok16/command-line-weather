const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

// console.log(argv);
geocode.getCoords(argv.address, (error, result) => {
  if (error) {
    console.log(error);
  } else if (result) {
    // console.log(JSON.stringify(result, undefined, 2));
    weather.getWeather(result.coords, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  }
});
