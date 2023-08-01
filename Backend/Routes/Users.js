const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
// const { validateToken } = require("../middlewares/AuthMiddleware");
const {sign} = require('jsonwebtoken');
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { name, email, password, role, number } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      email: email,
      role: role,
      password: hash,
      number: number,
    }).then(() => {
      res.json("Successfully Registered");
    });
  });
});

router.post("/login", async (req, res) => {
  const { email, password, role, number } = req.body;

  const userA = await Users.findOne({ where: { email: email} });

  if (!userA) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }

  bcrypt.compare(password, userA.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Email Password Combination" });
      return;
    }

    const accessToken = sign(
      {email: userA.email, id: userA.id, name: userA.name, role: userA.role },
      "importantsecret"
      );
    res.json(accessToken);
  });
});

router.get("/auth2",validateToken,(req, res) => {
  res.json(req.userA)
})

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const name = await Users.findByPk(userId);
  res.json(name)
})

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await Users.destroy({ where: { id:userId } });
  res.json("Deleted User");
});

router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const data = req.body;
  await Users.update(data, { where: { id:userId } });
  res.json("Updated Account");
});

module.exports = router;