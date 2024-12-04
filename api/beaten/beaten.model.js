const express = require('express');
const {
    createBeatenController,
    getAllBeatenController,
    getBeatenByIdController,
    updateBeatenController,
    deleteBeatenController,
    moveToBeatenController,
} = require('./beaten.controller');

const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

router.post('/:id/move-to-beaten', authenticate, checkAdmRole, moveToBeatenController);
router.get('/', authenticate, checkAdmRole, getAllBeatenController);
router.get('/:id', authenticate, checkAdmRole, getBeatenByIdController);
router.post('/', authenticate, checkAdmRole, createBeatenController);
router.put('/:id', authenticate, checkAdmRole, updateBeatenController);
router.delete('/:id', authenticate, checkAdmRole, deleteBeatenController);

module.exports = router;
