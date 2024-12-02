const { 
    createBacklogService, 
    getAllBacklogsService, 
    getBacklogByIdService, 
    updateBacklogService, 
    deleteBacklogService 
} = require('./backlog.service');

const createBacklogController = async (req, res) => {
    const { name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const backlog = await createBacklogService({
            name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(201).json(backlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllBacklogsController = async (req, res) => {
    try {
        const backlogs = await getAllBacklogsService();
        res.status(200).json(backlogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBacklogByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const backlog = await getBacklogByIdService(id);
        if (!backlog) {
            return res.status(404).json({ error: 'Backlog item not found' });
        }
        res.status(200).json(backlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBacklogController = async (req, res) => {
    const { id } = req.params;
    const { name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const backlog = await updateBacklogService(id, {
            name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(200).json(backlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBacklogController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteBacklogService(id);
        res.status(200).json({ message: 'Backlog item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBacklogController,
    getAllBacklogsController,
    getBacklogByIdController,
    updateBacklogController,
    deleteBacklogController,
};
