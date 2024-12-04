const express = require('express');
const {
    addToFavoriteController,
    getAllFavoritesController,
    getFavoriteByIdController,
    deleteFavoriteController,
} = require('./favorite.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

// Protected routes (require authentication and admin role)
router.post('/:id/copy-from-beaten', authenticate, checkAdmRole, addToFavoriteController); 
router.get('/', authenticate, getAllFavoritesController); 
router.get('/:id', authenticate, getFavoriteByIdController); 
router.delete('/:id', authenticate, deleteFavoriteController); 

module.exports = router;
