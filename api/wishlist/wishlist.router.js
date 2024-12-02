const express = require('express');
const { 
    createWishlistController, 
    getAllWishlistController, 
    getWishlistByIdController, 
    updateWishlistController, 
    deleteWishlistController,
    moveToBacklogController,
    moveToAcquiredController 
} = require('./wishlist.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

// Protected routes (require authentication and admin role)
router.post('/', authenticate, checkAdmRole, createWishlistController);
router.get('/', authenticate, checkAdmRole, getAllWishlistController);
router.get('/:id', authenticate, checkAdmRole, getWishlistByIdController);
router.put('/:id', authenticate, checkAdmRole, updateWishlistController);
router.delete('/:id', authenticate, checkAdmRole, deleteWishlistController);
router.put('/:id/move-to-backlog', authenticate, checkAdmRole, moveToBacklogController);
router.put('/:id/move-to-acquired', authenticate, checkAdmRole, moveToAcquiredController);

module.exports = router;
