const express = require("express");
const Controller = require("./Controller");

const router = express.Router();

router.post("/updateBox", Controller.updateBox);

router.get("/fetchParkingLots", Controller.fetchParkingLots);
router.get("/fetchAreasByLot/:lotId", Controller.fetchAreasByLot);
router.get("/fetchBoxesByArea/:areaId", Controller.fetchBoxesByArea);

/** hidden, only for data population process **/
// router.put("/createParkingLot", Controller.createParkingLot);
// router.put("/createArea", Controller.createArea);
// router.put("/createBox", Controller.createBox);
/** hidden, only for data population process **/

module.exports = router;
