const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getnotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  store
    .addnotes(req.body)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  removenotes(req.params.id)
    .then(() => {
      return res.json({ ok: true });
    })
    .catch((err) => res.status(500).json(err));
});

module.export = router;
