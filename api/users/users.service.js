const usersRepository = require('./users.repository');

const createUserService = async (user) => {
    return await usersRepository.createUser(user);
};

const getAllUsersService = async () => {
    return await usersRepository.getAllUsers();
};

const getUserByIdService = async (id) => {
    return await usersRepository.getUserById(id);
};

const updateUserService = async (id, user) => {
    return await usersRepository.updateUser(id, user);
};

const deleteUserService = async (id) => {
    return await usersRepository.deleteUser(id);
};

module.exports = {
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
};
