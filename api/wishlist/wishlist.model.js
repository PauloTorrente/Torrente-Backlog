const express = require('express');
const {
    createWishlistController,
    getAllWishlistController,
    getWishlistByIdController,
    updateWishlistController,
    deleteWishlistController,
    updateBacklogStateController, 
    moveToBacklogController, 
    moveToAcquiredController  
} = require('./wishlist.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();
router.post('/', authenticate, checkAdmRole, createWishlistController);
router.get('/', authenticate, checkAdmRole, getAllWishlistController);
router.get('/:id', authenticate, checkAdmRole, getWishlistByIdController);
router.put('/:id', authenticate, checkAdmRole, updateWishlistController);
router.delete('/:id', authenticate, checkAdmRole, deleteWishlistController);

// Move to Backlog or Acquired
router.post('/:id/move-to-backlog', authenticate, checkAdmRole, moveToBacklogController);
router.post('/:id/move-to-acquired', authenticate, checkAdmRole, moveToAcquiredController);
router.put('/:id/state', authenticate, checkAdmRole, updateBacklogStateController); 

module.exports = router;
