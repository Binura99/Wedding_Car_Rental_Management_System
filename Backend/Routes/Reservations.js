const express = require("express");
const router = express.Router();
const { Reservations } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { compare } = require("bcrypt");

router.get("/", async (req, res) => {
    const listOfReservations = await Reservations.findAll();
    res.json(listOfReservations);
});

router.get("/:id", async (req, res) => {
    // const userId = req.params.userId
    const rId = req.params.id
    const listOfReservations = await Reservations.findAll( {where:{ id: rId}});
    res.json(listOfReservations);
});

router.get("/byUserId/:userId", async (req, res) => {
    const userId = req.params.userId
    const listOfReservations = await Reservations.findAll( {where:{ userId: userId}});
    res.json(listOfReservations);
});

router.put("/:id", async (req, res) => {
    const rId = req.params.id
    const data = req.body;
    await Reservations.update(data, { where: { id: rId } });
    res.json("Updated Reservation");
});

router.post("/", validateToken, async (req, res) => {
    
    const { rVehicle, pDate } = req.body;

    try {
        const existingReservation = await Reservations.findOne({ where: { rVehicle: rVehicle, pDate: pDate } });
        if (existingReservation) {
            res.json({ error: "Vehicle Can't Be Booked. This Car Is Already Booked on the Same Date." });
            return;
        }

        const reservation = req.body;
        await Reservations.create(reservation);

        res.json({ success: true, message: "Vehicle Booked Successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});


router.delete("/:id", async (req, res) => {
    const rId = req.params.id;
    await Reservations.destroy({ where: { id: rId } });
    res.json("Deleted Vehicle");
  });

module.exports = router;