const {
    addToFavoriteService,
    getAllFavoritesService,
    getFavoriteByIdService,
    deleteFavoriteService,
    copyFromBeatenService,
} = require('./favorite.service');

const addToFavoriteController = async (req, res) => {
    try {
        const favoriteData = req.body;
        const favorite = await addToFavoriteService(favoriteData);
        res.status(200).json(favorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const copyFromBeatenController = async (req, res) => {
    const { id: gameId } = req.params;
    try {
        const favorite = await copyFromBeatenService(gameId);
        res.status(200).json(favorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllFavoritesController = async (req, res) => {
    try {
        const favorites = await getAllFavoritesService();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFavoriteByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const favorite = await getFavoriteByIdService(id);
        if (!favorite) {
            return res.status(404).json({ error: 'Favorite item not found' });
        }
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteFavoriteController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteFavoriteService(id);
        res.status(200).json({ message: 'Favorite item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addToFavoriteController,
    copyFromBeatenController,
    getAllFavoritesController,
    getFavoriteByIdController,
    deleteFavoriteController,
};
