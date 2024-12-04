const backlogRepository = require('../backlog/backlog.repository');
const droppedRepository = require('./dropped.repository');

const createDroppedService = async (dropped) => {
    return await droppedRepository.createDropped(dropped);
};

const getAllDroppedService = async () => {
    return await droppedRepository.getAllDropped();
};

const getDroppedByIdService = async (id) => {
    return await droppedRepository.getDroppedById(id);
};

const updateDroppedService = async (id, dropped) => {
    return await droppedRepository.updateDropped(id, dropped);
};

const deleteDroppedService = async (id) => {
    return await droppedRepository.deleteDropped(id);
};

const moveToDroppedService = async (id) => {
    const game = await backlogRepository.getBacklogById(id);

    if (!game) {
        throw new Error('Game not found in the backlog');
    }

    const droppedGame = await droppedRepository.createDropped(game);
    await backlogRepository.deleteBacklog(id);

    return droppedGame;
};

module.exports = {
    createDroppedService,
    getAllDroppedService,
    getDroppedByIdService,
    updateDroppedService,
    deleteDroppedService,
    moveToDroppedService
};
