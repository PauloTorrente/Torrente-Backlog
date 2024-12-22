const favoriteRepository = require('./favorite.repository'); 

// Service to create a new favorite game
const createFavoriteService = async (favorite) => {
    return await favoriteRepository.createFavorite(favorite);
};

// Service to get all favorite games
const getAllFavoriteService = async () => {
    return await favoriteRepository.getAllFavorites();
};

// Service to get a specific favorite game by ID
const getFavoriteByIdService = async (id) => {
    return await favoriteRepository.getFavoriteById(id);
};

// Service to update a favorite game
const updateFavoriteService = async (id, favorite) => {
    return await favoriteRepository.updateFavorite(id, favorite);
};

// Service to delete a favorite game
const deleteFavoriteService = async (id) => {
    return await favoriteRepository.deleteFavorite(id);
};

// Service to copy a game from beaten list to favorite list
const copyFromBeatenService = async (id) => {
    return await favoriteRepository.copyFromBeaten(id);
};

// Service to add a new game directly to favorites (new functionality)
const addToFavoriteService = async (favoriteData) => {
    return await favoriteRepository.createFavorite(favoriteData);
};

const getAllFavoritesService = async () => {
    try {
        // Lógica para pegar todos os favoritos no banco de dados
        return await FavoriteModel.find({});
    } catch (error) {
        throw new Error('Erro ao buscar favoritos');
    }
};

module.exports = {
    createFavoriteService,
    getAllFavoriteService,
    getFavoriteByIdService,
    updateFavoriteService,
    deleteFavoriteService,
    copyFromBeatenService,
    addToFavoriteService,  
};
