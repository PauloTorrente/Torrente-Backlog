const acquiredRepository = require('./acquired.repository');

const createAcquiredService = async (acquired) => {
    return await acquiredRepository.createAcquired(acquired);
};

const getAllAcquiredService = async () => {
    return await acquiredRepository.getAllAcquired();
};

const getAcquiredByIdService = async (id) => {
    return await acquiredRepository.getAcquiredById(id);
};

const updateAcquiredService = async (id, acquired) => {
    return await acquiredRepository.updateAcquired(id, acquired);
};

const deleteAcquiredService = async (id) => {
    return await acquiredRepository.deleteAcquired(id);
};

const moveToBacklogService = async (id) => {
    return await acquiredRepository.moveToBacklog(id);
};

const moveToWishlistService = async (id) => {
    return await acquiredRepository.moveToWishlist(id);
};

module.exports = {
    createAcquiredService,
    getAllAcquiredService,
    getAcquiredByIdService,
    updateAcquiredService,
    deleteAcquiredService,
    moveToBacklogService,
    moveToWishlistService,
};
