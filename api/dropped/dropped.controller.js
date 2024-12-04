const {
    createDroppedService, 
    getAllDroppedService, 
    getDroppedByIdService, 
    updateDroppedService, 
    deleteDroppedService, 
    moveToDroppedService,
} = require('./dropped.service');

const createDroppedController = async (req, res) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const dropped = await createDroppedService({
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(201).json(dropped);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllDroppedController = async (req, res) => {
    try {
        const dropped = await getAllDroppedService();
        res.status(200).json(dropped);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDroppedByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const dropped = await getDroppedByIdService(id);
        if (!dropped) {
            return res.status(404).json({ error: 'Dropped game not found' });
        }
        res.status(200).json(dropped);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDroppedController = async (req, res) => {
    const { id } = req.params;
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const dropped = await updateDroppedService(id, {
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(200).json(dropped);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteDroppedController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteDroppedService(id);
        res.status(200).json({ message: 'Dropped game deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// New controller to move a game from "backlog" to "dropped"
const moveToDroppedController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await moveToDroppedService(id); 
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createDroppedController,
    getAllDroppedController,
    getDroppedByIdController,
    updateDroppedController,
    deleteDroppedController,
    moveToDroppedController,
};
