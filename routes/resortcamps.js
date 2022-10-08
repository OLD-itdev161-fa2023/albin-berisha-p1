const express = require('express');

const { 
    getResortcamps, 
    getResortcamp, 
    createResortcamp, 
    updateResortcamp, 
    deleteResortcamp
} = require('../controllers/resortcamps');

const router = express.Router();

router
.route('/')
.get(getResortcamps)
.post(createResortcamp);

router
.route('/:id')
.get(getResortcamp)
.put(updateResortcamp)
.delete(deleteResortcamp);

module.exports = router;