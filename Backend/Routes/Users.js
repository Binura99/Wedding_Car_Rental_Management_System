const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
// const { validateToken } = require("../middlewares/AuthMiddleware");
const {sign} = require('jsonwebtoken');

router.post("/", async (req, res) => {
  const { name,email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      email: email,
      password: hash,
    }).then(() => {
      res.json("Successfully Registered");
    });
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userA = await Users.findOne({ where: { email: email } });

  if (!userA) {
    res.json({ error: "User Doesn't Exist" });
    return; // Add return statement here
  }

  bcrypt.compare(password, userA.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Email Password Combination" });
      return; // Add return statement here
    }

    const accessToken = sign(
      {email: userA.email, id: userA.id },
      "importantsecret"
      );
    res.json(accessToken);
  });
});

module.exports = router;