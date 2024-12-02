const wishlistRepository = require('./wishlist.repository');
const backlogRepository = require('../backlog/backlog.repository'); 

const createWishlistService = async (wishlist) => {
    return await wishlistRepository.createWishlist(wishlist);
};

const getAllWishlistService = async () => {
    return await wishlistRepository.getAllWishlist();
};

const getWishlistByIdService = async (id) => {
    return await wishlistRepository.getWishlistById(id);
};

const updateWishlistService = async (id, wishlist) => {
    return await wishlistRepository.updateWishlist(id, wishlist);
};

const deleteWishlistService = async (id) => {
    return await wishlistRepository.deleteWishlist(id);
};


const moveToBacklogService = async (id) => {

    const wishlistItem = await wishlistRepository.getWishlistById(id);
    if (!wishlistItem) {
        throw new Error('Wishlist item not found');
    }

    const backlogItem = await backlogRepository.createBacklog(wishlistItem);


    await wishlistRepository.deleteWishlist(id);

    return { message: 'Item moved to backlog', item: backlogItem };
};

module.exports = {
    createWishlistService,
    getAllWishlistService,
    getWishlistByIdService,
    updateWishlistService,
    deleteWishlistService,
    moveToBacklogService,  
};
