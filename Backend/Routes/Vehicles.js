const express = require("express");
const router = express.Router();
const { Vehicles } = require("../models");

router.get("/", async (req, res) => {
    const listOfVehicles = await Vehicles.findAll();
    res.json(listOfVehicles);
});

router.post("/", async (req, res) => {
    const vehicle = req.body;
    await Vehicles.create(vehicle);
    res.json("Added Vehicle");
});

module.exports = router;