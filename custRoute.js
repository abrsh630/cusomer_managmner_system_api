const express = require('express');
const router = express.Router();

const controller = require('./custController');

router.get('/',controller.getCustomers);

router.get('/:id',controller.getCustomer);

router.post('/',controller.createCustomer);

router.delete('/:id',controller.deleteCust);

module.exports = router;