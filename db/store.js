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

  write() {
    return writeFileAsync("db/db.json", "utf-8");
  }

  getnotes() {
    return this.read().then((notes) => {
      let thesenotes;
      try {
        thesenotes = [].concat(JSON.parse(notes));
      } catch (error) {
        thesenotes = [];
      }
      return thesenotes;
    });
  }
}
