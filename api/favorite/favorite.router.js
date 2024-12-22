const express = require('express');
const {
    addToFavoriteController,
    copyFromBeatenController,
    getAllFavoritesController,
    getFavoriteByIdController,
    deleteFavoriteController,
} = require('./favorite.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

router.post('/', authenticate, addToFavoriteController);

router.post('/:id/copy-from-beaten', authenticate, checkAdmRole, copyFromBeatenController);

router.get('/', authenticate, getAllFavoritesController);

router.get('/:id', authenticate, getFavoriteByIdController);

router.delete('/:id', authenticate, deleteFavoriteController);

module.exports = router;
