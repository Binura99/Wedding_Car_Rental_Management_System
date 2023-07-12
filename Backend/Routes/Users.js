// const express = require("express");
// const router = express.Router();
// const {Users} = require("../models");
// const bcrypt = require("bcrypt");

// router.post("/", async (req, res) => {
//     const { email, password } = req.body;
//     bcrypt.hash(password, 10).then((hash) => {
//         Users.create({
//             email: email,
//             password: hash,
//         });
//         res.json("SUCCESS");
//     });
// });

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const usera = await Users.findOne({ where: {email: email } });

//     if (!usera) res.json({ error: "User Doesn't Exist"});

//     bcrypt.compare(password, usera.password).then((match) => {
//         if (!match) res.json({ error: "Wrong Email Password Combination"});

//         res.json("You Logged In!!!");
//     });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      email: email,
      password: hash,
    }).then(() => {
      res.json("SUCCESS");
    });
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const usera = await Users.findOne({ where: { email: email } });

  if (!usera) {
    res.json({ error: "User Doesn't Exist" });
    return; // Add return statement here
  }

  bcrypt.compare(password, usera.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Email Password Combination" });
      return; // Add return statement here
    }

    res.json("You Logged In!!!");
  });
});

module.exports = router;