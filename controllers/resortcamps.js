//@description   Get all resortcamps
//@route         Get/api/v1/bootcamps
//@access        Public
exports.getResortcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all resort camps'});
}


//@description   Get single resortcamp
//@route         Get/api/v1/bootcamps/:id
//@access        Public
exports.getResortcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show resort camp ${req.params.id}` });
}

//@description   Create a resortcamp
//@route         POST/api/v1/bootcamps/
//@access        Private
exports.createResortcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Create a new resort camp'});
}


//@description   Update a resortcamp
//@route         PUT/api/v1/bootcamps/:id
//@access        Private
exports.updateResortcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Update resort camps'});
}

//@description   Delete a resortcamp
//@route         DELETE/api/v1/bootcamps/:id
//@access        Private
exports.deleteResortcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Delete a resort camp'});
}
