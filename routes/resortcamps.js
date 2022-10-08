const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all resort camps'});
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show resort camp ${req.params.id}` });
});

router.post('/', (req, res) => {
    res
    .status(200)
    .json({ success: true, msg: 'Update resort camps'});
});

router.put('/:id', (req, res) => {
    res
    .status(200)
    .json({ success: true, msg: 'Update resort camps'});
});

router.delete('/:id', (req, res) => {
    res
    .status(200)
    .json({ success: true, msg: 'Delete resort camps'});
});

module.exports = router;