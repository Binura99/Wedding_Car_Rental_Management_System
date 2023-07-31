const express = require("express");
const router = express.Router();
const { Vehicles } = require("../models");

router.get("/", async (req, res) => {
    const listOfVehicles = await Vehicles.findAll();
    res.json(listOfVehicles);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const vehicle = await Vehicles.findByPk(id);
    res.json(vehicle);
});

router.post("/", async (req, res) => {
    const vehicle = req.body;
    await Vehicles.create(vehicle);
    res.json("Added Vehicle");
});
//new one
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await Vehicles.update(data, { where: { id } });
    res.json("Updated Vehicle");
  });
  
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Vehicles.destroy({ where: { id } });
    res.json("Deleted Vehicle");
  });

module.exports = router;