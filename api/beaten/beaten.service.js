const backlogRepository = require('../backlog/backlog.repository');
const beatenRepository = require('./beaten.repository');

const createBeatenService = async (beaten) => {
    return await beatenRepository.createBeatenGame(beaten);
};

const getAllBeatenService = async () => {
    return await beatenRepository.getAllBeatenGames();
};

const getBeatenByIdService = async (id) => {
    return await beatenRepository.getBeatenById(id);
};

const updateBeatenService = async (id, beaten) => {
    return await beatenRepository.updateBeatenGame(id, beaten);
};

const deleteBeatenService = async (id) => {
    return await beatenRepository.deleteBeatenGame(id);
};

const moveToBeatenService = async (id) => {

    const game = await backlogRepository.getBacklogById(id);

    if (!game) {
        throw new Error('Game not found in the backlog');
    }


    const beatenGame = await beatenRepository.createBeatenGame(game);

    await backlogRepository.deleteBacklog(id);

    return beatenGame;
};

module.exports = {
    createBeatenService,
    getAllBeatenService,
    getBeatenByIdService,
    updateBeatenService,
    deleteBeatenService,
    moveToBeatenService
};
