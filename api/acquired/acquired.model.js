const express = require('express');
const {
    createAcquiredController,
    getAllAcquiredController,
    getAcquiredByIdController,
    updateAcquiredController,
    deleteAcquiredController,
    moveToBacklogController,
    moveToWishlistController
} = require('./acquired.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

// Protected routes (require authentication and admin role)
router.post('/', authenticate, checkAdmRole, createAcquiredController);
router.get('/', authenticate, checkAdmRole, getAllAcquiredController);
router.get('/:id', authenticate, checkAdmRole, getAcquiredByIdController);
router.put('/:id', authenticate, checkAdmRole, updateAcquiredController);
router.delete('/:id', authenticate, checkAdmRole, deleteAcquiredController);
router.post('/:id/move-to-backlog', authenticate, checkAdmRole, moveToBacklogController);
router.post('/:id/move-to-wishlist', authenticate, checkAdmRole, moveToWishlistController);

module.exports = router;
