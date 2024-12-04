const express = require('express');
const {
    createDroppedController,
    getAllDroppedController,
    getDroppedByIdController,
    updateDroppedController,
    deleteDroppedController,
    moveToDroppedController,
} = require('./dropped.controller');

const { authenticate } = require('../../middlewares/auth.middleware');
const { checkAdmRole } = require('../../middlewares/role.middleware');

const router = express.Router();

router.post('/:id/move-to-dropped', authenticate, checkAdmRole, moveToDroppedController);
router.get('/', authenticate, checkAdmRole, getAllDroppedController);
router.get('/:id', authenticate, checkAdmRole, getDroppedByIdController);
router.post('/', authenticate, checkAdmRole, createDroppedController);
router.put('/:id', authenticate, checkAdmRole, updateDroppedController);
router.delete('/:id', authenticate, checkAdmRole, deleteDroppedController);

module.exports = router;
