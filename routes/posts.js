const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", (req, res) => {
  Post.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// Submits a post
router.post("/", (req, res) => {
  new Post({
    title: req.body.title,
    description: req.body.description,
  })
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//Specific post submission
router.get("/:postId", (req, res) => {
  Post.findById(req.params.postId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// Delete post
router.delete("/:postId", (req, res) => {
  Post.deleteOne({
    _id: req.params.postId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// Update a post

router.patch("/:postId", (req, res) => {
  Post.updateOne(
    {
      _id: req.params.postId,
    },
    {
      $set: { title: req.body.title },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
