const express = require('express');
const {
    registerUserController,
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
    loginController,
} = require('./users.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

// Public registration and login routes
router.post('/register', registerUserController);
router.post('/login', loginController);

// Protected CRUD routes
router.post('/', authenticate, checkAdmRole, createUserController);
router.get('/', authenticate, checkAdmRole, getAllUsersController);
router.get('/:id', authenticate, checkAdmRole, getUserByIdController);
router.put('/:id', authenticate, checkAdmRole, updateUserController);
router.delete('/:id', authenticate, checkAdmRole, deleteUserController);

module.exports = router;
