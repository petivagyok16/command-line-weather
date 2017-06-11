#! /usr/bin/env node
const shell = require("shelljs");
const command = process.argv.slice(2).join(" ").trim();

if (command === "-h" || command === "--help") {
  shell.exec(`node ../app.js -h`);
} else if (command.includes("-a")) {
  shell.exec(`node ../app.js '${command}'`);
} else {
  shell.exec(`node ../app.js -a '${command}'`);
}
