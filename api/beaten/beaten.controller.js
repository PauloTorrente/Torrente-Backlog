const {
    createBeatenService, 
    getAllBeatenService, 
    getBeatenByIdService, 
    updateBeatenService, 
    deleteBeatenService, 
    moveToBeatenService,
} = require('./beaten.service');

const createBeatenController = async (req, res) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const beaten = await createBeatenService({
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(201).json(beaten);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllBeatenController = async (req, res) => {
    try {
        const beaten = await getAllBeatenService();
        res.status(200).json(beaten);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBeatenByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const beaten = await getBeatenByIdService(id);
        if (!beaten) {
            return res.status(404).json({ error: 'Beaten game not found' });
        }
        res.status(200).json(beaten);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBeatenController = async (req, res) => {
    const { id } = req.params;
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const beaten = await updateBeatenService(id, {
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(200).json(beaten);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBeatenController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteBeatenService(id);
        res.status(200).json({ message: 'Beaten game deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// New controller to move a game from "backlog" to "beaten"
const moveToBeatenController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await moveToBeatenService(id); 
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBeatenController,
    getAllBeatenController,
    getBeatenByIdController,
    updateBeatenController,
    deleteBeatenController,
    moveToBeatenController,
};
