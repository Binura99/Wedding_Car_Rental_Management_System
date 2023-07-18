const express = require("express");
const router = express.Router();
const { Reservations } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfReservations = await Reservations.findAll();
    res.json(listOfReservations);
});

router.post("/", validateToken, async (req, res) => {
    const reservation = req.body;
    await Reservations.create(reservation);
    res.json("Recorded Reservation");
});

module.exports = router;