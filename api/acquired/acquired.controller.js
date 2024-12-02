const {
    createAcquiredService,
    getAllAcquiredService,
    getAcquiredByIdService,
    updateAcquiredService,
    deleteAcquiredService,
    moveToBacklogService,
    moveToWishlistService
} = require('./acquired.service');

const createAcquiredController = async (req, res) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const acquired = await createAcquiredService({
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(201).json(acquired);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllAcquiredController = async (req, res) => {
    try {
        const acquired = await getAllAcquiredService();
        res.status(200).json(acquired);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAcquiredByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const acquired = await getAcquiredByIdService(id);
        if (!acquired) {
            return res.status(404).json({ error: 'Acquired item not found' });
        }
        res.status(200).json(acquired);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAcquiredController = async (req, res) => {
    const { id } = req.params;
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const acquired = await updateAcquiredService(id, {
            name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(200).json(acquired);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteAcquiredController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteAcquiredService(id);
        res.status(200).json({ message: 'Acquired item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const moveToBacklogController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await moveToBacklogService(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const moveToWishlistController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await moveToWishlistService(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createAcquiredController,
    getAllAcquiredController,
    getAcquiredByIdController,
    updateAcquiredController,
    deleteAcquiredController,
    moveToBacklogController,
    moveToWishlistController,
};
