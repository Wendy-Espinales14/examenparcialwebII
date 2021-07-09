const express = require('express');
const {obtenercalif, insertarcalif} = require('../controllers/examen.controller');

const router = express.Router();

router.get('/', obtenercalif);

router.post('/', insertarcalif);

module.exports = router;
