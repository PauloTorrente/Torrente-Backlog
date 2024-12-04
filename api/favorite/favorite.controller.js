const {
    addToFavoriteService,
    getAllFavoritesService,
    getFavoriteByIdService,
    deleteFavoriteService,
} = require('./favorite.service');

const addToFavoriteController = async (req, res) => {
    const { gameId } = req.params;
    try {
        // Get the beaten game first
        const beatenGame = await getBeatenByIdService(gameId);
        if (!beatenGame) {
            return res.status(404).json({ error: 'Beaten game not found' });
        }

        // Copy the beaten game to the favorite status (without removing from beaten)
        const favorite = await addToFavoriteService(beatenGame);
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
    getAllFavoritesController,
    getFavoriteByIdController,
    deleteFavoriteController,
};
