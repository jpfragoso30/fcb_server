const Area = require("./models/AreaModel");
const ParkingLot = require("./models/ParkingLotModel");
const Layer = require("./models/LayerModel");
const Box = require("./models/BoxModel");
const Flow = require("./models/FlowModel");

const fetchParkingLots = async (req, res) => {
    try {
        const lots = (await ParkingLot.find({})) ?? [];

        return res.status(200).json({ success: true, data: lots });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const fetchAreasByLot = async (req, res) => {
    const { lotId } = req.body;

    try {
        const areas = (await Area.find({ lotId })) ?? [];

        return res.status(200).json({ success: true, data: areas });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const fetchLayersByArea = async (req, res) => {
    const { areaId } = req.body;

    try {
        const layers = (await Layer.find({ areaId })) ?? [];

        return res.status(200).json({ success: true, data: layers });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const fetchBoxesByLayer = async (req, res) => {
    const { layerId } = req.body;

    try {
        const boxes = (await Box.find({ layerId })) ?? [];

        return res.status(200).json({ success: true, data: boxes });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
    }
};

const updateBox = async (req, res) => {
    const { layerId, boxId } = req.body;

    if (!boxId) {
        return res.status(400).json({
            success: false,
            error: "Missing data for update.",
        });
    }

    const flowEntry = await Flow.findOne({ boxId });
    let hours = 0;

    if (flowEntry) {
        let totalSeconds = Math.floor(
            (new Date() - flowEntry.entryDate) / 1000
        );

        hours = totalSeconds / (60 * 60);

        await Flow.deleteOne({ boxId: flowEntry.boxId });
    }

    try {
        await Box.updateOne(
            {
                _id: boxId,
            },
            {
                $set: {
                    available: !!flowEntry,
                },
                $inc: {
                    totalHours: hours,
                },
            }
        );

        await Layer.updateOne(
            {
                _id: layerId,
            },
            {
                $inc: {
                    totalHours: hours,
                },
            }
        );

        if (!flowEntry) {
            await Flow.create({
                boxId,
                entryDate: new Date(),
            });
        }

        return res
            .status(200)
            .json({ success: true, message: "Box status modified." });
    } catch (err) {
        console.log(err);

        return res.status(400).json({ success: false, error: err });
    }
};

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

const createArea = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide an area.",
        });
    }

    const area = new Area(body);

    if (!area) {
        return res.status(400).json({ success: false, error: err });
    }

    area.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "Area created!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Area couldnt be created!",
            });
        });
};

const createLayer = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a layer.",
        });
    }

    const layer = new Layer(body);

    if (!layer) {
        return res.status(400).json({ success: false, error: err });
    }

    layer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "Layer created!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Layer couldnt be created!",
            });
        });
};

const createBox = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a box.",
        });
    }

    const box = new Box(body);

    if (!box) {
        return res.status(400).json({ success: false, error: err });
    }

    box.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "Box created!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Box couldnt be created!",
            });
        });
};

module.exports = {
    updateBox,
    fetchParkingLots,
    fetchAreasByLot,
    fetchLayersByArea,
    fetchBoxesByLayer,
    createParkingLot,
    createArea,
    createLayer,
    createBox,
};
