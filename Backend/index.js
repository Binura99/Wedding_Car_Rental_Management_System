const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const usersRouter = require("./Routes/Users")
app.use("/auth", usersRouter);

const vehicleRouter = require("./Routes/Vehicles")
app.use("/vehicles", vehicleRouter);

const reservationRouter = require("./Routes/Reservations")
app.use("/reservations", reservationRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running On Port 3001")
       });
});