const express = require('express');
const productRouter = express.Router();

const productCtr = require('../controllers/productsCtr');


productRouter.get('/:id', productCtr.get);

module.exports = productRouter;