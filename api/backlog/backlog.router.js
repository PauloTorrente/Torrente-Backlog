const express = require('express');
const {
    createBacklogController,
    getAllBacklogsController,
    getBacklogByIdController,
    updateBacklogController,
    deleteBacklogController,
    moveToWishlistController,
} = require('./backlog.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

router.post('/', authenticate, checkAdmRole, createBacklogController);
router.get('/', authenticate, checkAdmRole, getAllBacklogsController);
router.get('/:id', authenticate, checkAdmRole, getBacklogByIdController);
router.put('/:id', authenticate, checkAdmRole, updateBacklogController);
router.delete('/:id', authenticate, checkAdmRole, deleteBacklogController);

// Move a game to wishlist
router.post('/:id/move-to-wishlist', authenticate, checkAdmRole, moveToWishlistController);

module.exports = router;
