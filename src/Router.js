const express = require("express");
const Controller = require("./Controller");

const router = express.Router();

router.post("/updateBox", Controller.updateBox);
router.get("/getParkingLots", Controller.getParkingLots);
router.get("/getAreasByLot", Controller.getAreasByLot);
router.put("/createParkingLot", Controller.createParkingLot);

module.exports = router;
