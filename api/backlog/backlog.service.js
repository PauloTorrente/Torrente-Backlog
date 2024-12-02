const backlogRepository = require('./backlog.repository');

const createBacklogService = async (backlog) => {
    return await backlogRepository.createBacklog(backlog);
};

const getAllBacklogsService = async () => {
    return await backlogRepository.getAllBacklogs();
};

const getBacklogByIdService = async (id) => {
    return await backlogRepository.getBacklogById(id);
};

const updateBacklogService = async (id, backlog) => {
    return await backlogRepository.updateBacklog(id, backlog);
};

const deleteBacklogService = async (id) => {
    return await backlogRepository.deleteBacklog(id);
};

module.exports = {
    createBacklogService,
    getAllBacklogsService,
    getBacklogByIdService,
    updateBacklogService,
    deleteBacklogService,
};
