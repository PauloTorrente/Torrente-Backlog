const express = require('express');
const {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
} = require('./users.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const userRouter = require('./users/users.router');
const backlogRouter = require('./backlog/backlog.router');

const router = express.Router();

// User routes
router.post('/users', authenticate, checkAdmRole, createUserController);
router.get('/users', authenticate, checkAdmRole, getAllUsersController);
router.get('/users/:id', authenticate, checkAdmRole, getUserByIdController);
router.put('/users/:id', authenticate, checkAdmRole, updateUserController);
router.delete('/users/:id', authenticate, checkAdmRole, deleteUserController);

// Backlog routes (newly added)
router.use('/backlog', authenticate, checkAdmRole, backlogRouter);

module.exports = router;