const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: false,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

module.exports.argv = argv;
