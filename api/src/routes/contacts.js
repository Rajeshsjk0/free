const router = require("express").Router();
const Contacts = require("../models/Contact");

router.post("/", async (req, res) => {
  const newPost = new Contacts(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contacts = await Contacts.findById(req.params.id);
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
