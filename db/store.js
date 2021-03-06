const util = require("util");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  // all functions in here
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
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

  addnote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Title and Text has to be filled in");
    }

    const newnote = {
      title,
      text,
      id: uuid(),
    };

    return this.getnotes()
      .then((notes) => [...notes, newnote])
      .then((updatednotes) => this.write(updatednotes))
      .then(() => newnote);
  }

  removenote(id) {
    return this.getnotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filterednotes) => this.write(filterednotes));
  }
}

module.exports = new Store();
