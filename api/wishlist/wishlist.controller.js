const { 
    createWishlistService, 
    getAllWishlistService, 
    getWishlistByIdService, 
    updateWishlistService, 
    deleteWishlistService,
    moveToBacklogService
} = require('./wishlist.service');

const createWishlistController = async (req, res) => {
    const { name,  generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const wishlistItem = await createWishlistService({
            name,  generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(201).json(wishlistItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllWishlistController = async (req, res) => {
    try {
        const wishlistItems = await getAllWishlistService();
        res.status(200).json(wishlistItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getWishlistByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const wishlistItem = await getWishlistByIdService(id);
        if (!wishlistItem) {
            return res.status(404).json({ error: 'Wishlist item not found' });
        }
        res.status(200).json(wishlistItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateWishlistController = async (req, res) => {
    const { id } = req.params;
    const { name,  generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = req.body;
    try {
        const wishlistItem = await updateWishlistService(id, {
            name,  generation, console, decade, director, composer, character_design, series, developer, distributor, image_url
        });
        res.status(200).json(wishlistItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteWishlistController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteWishlistService(id);
        res.status(200).json({ message: 'Wishlist item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// New controller method to move item to backlog
const moveToBacklogController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await moveToBacklogService(id); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createWishlistController,
    getAllWishlistController,
    getWishlistByIdController,
    updateWishlistController,
    deleteWishlistController,
    moveToBacklogController, 
};
