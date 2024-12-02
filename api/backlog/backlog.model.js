const express = require('express');
const {
    createBacklogController,
    getAllBacklogsController,
    getBacklogByIdController,
    updateBacklogController,
    deleteBacklogController,
} = require('./backlog.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

// Protected routes (require authentication and admin role)
router.post('/', authenticate, checkAdmRole, createBacklogController);
router.get('/', authenticate, checkAdmRole, getAllBacklogsController);
router.get('/:id', authenticate, checkAdmRole, getBacklogByIdController);
router.put('/:id', authenticate, checkAdmRole, updateBacklogController);
router.delete('/:id', authenticate, checkAdmRole, deleteBacklogController);

module.exports = router;
