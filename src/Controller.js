const Area = require("./AreaModel");
const ParkingLot = require("./ParkingLotModel");

const getParkingLots = async (req, res) => {
    try {
        const lots = (await ParkingLot.find({})) ?? [];

        return res.status(200).json({ success: true, data: lots });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const getAreasByLot = async (req, res) => {
    const { lotId } = req.body;

    try {
        const areas = (await Area.find({ lotId })) ?? [];

        return res.status(200).json({ success: true, data: areas });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const updateBox = async (req, res) => {
    const { areaId, layer, boxId, newStatus = 0 } = req.body;

    /*need to get dates to calculate
        - hourCount
        - hourOccupied [
            0
            1
            2
            ...
            12
            13
            14
            ...
        ]
    */

    try {
        await Area.updateOne(
            { _id: areaId },
            {
                $set: {
                    "boxLayout.$[bL].boxMap.$[bM].available": newStatus,
                },
            },
            { arrayFilters: [{ "bL.layer": layer }, { "bM._id": boxId }] }
        );

        return res
            .status(200)
            .json({ success: true, message: "Box status modified." });
    } catch (err) {
        console.log(err);

        return res.status(400).json({ success: false, error: err });
    }
};

//create parking lot
const createParkingLot = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a parking lot.",
        });
    }

    const lot = new ParkingLot(body);

    if (!lot) {
        return res.status(400).json({ success: false, error: err });
    }

    lot.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "Parking Lot created!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Parking lot couldnt be created!",
            });
        });
};

//create area
//create layer
//create box

module.exports = {
    updateBox,
    getParkingLots,
    getAreasByLot,
    createParkingLot,
};
