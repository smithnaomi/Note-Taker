const util = require("util");
const fs = require("fs");
const uuid = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  // all functions in here
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }
}
