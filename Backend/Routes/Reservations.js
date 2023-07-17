const express = require("express");
const router = express.Router();
const { Reservations } = require("../models");

router.get("/", async (req, res) => {
    const listOfReservations = await Reservations.findAll();
    res.json(listOfReservations);
});

router.post("/", async (req, res) => {
    const reservation = req.body;
    await Reservations.create(reservation);
    res.json("Recorded Reservation");
});

module.exports = router;